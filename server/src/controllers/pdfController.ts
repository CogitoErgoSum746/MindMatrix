import { Request, Response } from 'express';
import User from '../models/users'; // Assuming you have a User model
import { UpdateWriteOpResult } from 'mongoose';
import { Chart, registerables } from 'chart.js';
import { createCanvas } from 'canvas';
import { PDFDocument, PDFImage, rgb, StandardFonts } from 'pdf-lib';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { getCarreerSug, getFeedback, getPersonalityType } from '../utils/feedbackFunction';
import puppeteer from 'puppeteer';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import OrganizationModel from '../models/organizations';

async function customFolderName(req: Request, res: Response): Promise<string> {
    const username = req.user.username
    const email = req.user.email

    // Extract the first 5 letters from 'username' and 'email'
    const usernameFirst5 = username.slice(0, 5);
    const emailFirst5 = email.slice(0, 5);

    // Combine the first 5 letters of 'username' and 'email' to create a custom folder name
    const customFolderName = `${usernameFirst5}${emailFirst5}`;
    const filePath = `src/runningPdfs/${customFolderName}/feedback.pdf`;

    return filePath;
}

export async function makeBarChartPdf(req: Request, res: Response, testType: string, pageNumber: number): Promise<void> {

    const filePath: string = await customFolderName(req, res);
    const pdfBuffer = await fs.promises.readFile(filePath);
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    // Get a specific page (e.g., page 1)
    const page = pdfDoc.getPages()[pageNumber - 1]; // Page numbering is 0-based

    const user = await User.findOne({
        username: req.user.username,
        email: req.user.email
    }).select('testResults');

    let userTestResults = user?.testResults;

    const Test = userTestResults?.find(result => result.testType === testType);
    const testSubcategories = Test?.subcategories;

    const names = testSubcategories?.map(result => result.name);

    const scores = testSubcategories?.map(result => result.score);

    Chart.register(...registerables);
    Chart.register(ChartDataLabels);

    const canvas = createCanvas(380, 340);
    const ctx = canvas.getContext('2d', { alpha: false });

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Your chart data and configuration
    const data = {
        labels: names, //names?.map((label) => label?.replace(/\s+/g, '\n'))
        datasets: [
            {
                label: testType,
                data: scores,
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background color
                borderColor: 'rgb(75, 192, 192)', // Border color
                borderWidth: 1, // Border wid
            },
        ],
    };

    const barChart = new Chart(ctx as any, {
        type: 'bar', // Make sure the type is 'bar' for a bar chart
        data: data,
        options: {
            scales: {
                x: {
                    display: true,
                    // ticks: {
                    //     font: {
                    //         size: 14, // Set the font size for x-axis labels
                    //         family: 'Verdana', // Set the font family for x-axis labels
                    //     },
                    //     autoSkip: false, // Disable automatic skipping of labels
                    //     maxRotation: 0, // Prevent label rotation
                    //     padding: 10, // Add padding between labels and chart
                    // },
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: (value) => value, // Add '%' to the tick labels
                    },
                },
            },
            // plugins: {
            //     tooltip: {
            //         callbacks: {
            //             label: (context) => {
            //                 let label = context.dataset.label || '';
            //                 if (context.parsed.y !== null) {
            //                     label += `\nValue: ${context.parsed.y}`;
            //                 }
            //                 return label;
            //             },
            //         },
            //     },
            // datalabels: {
            //     anchor: 'end',
            //     align: 'end',
            //     formatter: function (value) {
            //         // Customize label formatting here
            //         const label = value.toString();
            //         if (label.includes(' ')) {
            //             // If the label contains a space, split it into lines
            //             const lines = label.split(' ');
            //             if (lines.length > 1) {
            //                 // If there are more than one word, join all but the last word with line breaks
            //                 const firstPart = lines.slice(0, -1).join('\n');
            //                 const lastWord = lines[lines.length - 1];
            //                 return `${firstPart}\n${lastWord}`;
            //             }
            //         }
            //         // If no space or only one word, return the label as is
            //         return label;
            //     },
            //     font: {
            //         family: 'Arial',
            //         size: 12, // Adjust the font size as needed
            //     },
            //     color: 'black', // Label color
            // },
            // }
        },
    });

    const chartImageBase64 = barChart.toBase64Image();
    if (!chartImageBase64.startsWith('data:image/png;base64,')) {
        console.log('Image data is not in PNG format.');
        return;
        // Proceed with embedding the image into the PDF
    }
    const base64WithoutMimeType = chartImageBase64.split(',')[1];
    const pdfImage = await pdfDoc.embedPng(Buffer.from(base64WithoutMimeType, 'base64'));

    page.drawImage(pdfImage, {
        x: 50,
        y: 120,
        width: 440,
        height: 313,
    });

    // // Save the modified PDF to a new file
    const modifiedPdfBytes = await pdfDoc.save();
    await fs.promises.writeFile(filePath, modifiedPdfBytes);
}

export async function userInfoPdf1(req: Request, res: Response, pageNumber: number, Fontsize: number, Xd: number, Yd: number): Promise<void> {
    //get score from user
    const user = await User.findOne({
        username: req.user.username,
        email: req.user.email
    }).select('-_id -password');

    let linesInfo = [];
    const name = user?.username;

    const filePath: string = await customFolderName(req, res);
    const pdfBuffer = await fs.promises.readFile(filePath);
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    // Get a specific page (e.g., page 1)
    const page = pdfDoc.getPages()[pageNumber - 1]; // Page numbering is 0-based

    // Set the fonts and drawing the text to page
    const fontSize = Fontsize;
    const TimesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    // Set the font, font size, and color for the TextDraw object
    page.setFontSize(fontSize);
    page.setFont(TimesRomanFont);
    page.setFontColor(rgb(0, 0, 0));

    let xd = Xd;
    let yd = Yd;

    page.drawText(name as string,
        {
            x: xd,
            y: yd,
        },)

    // Save to yay.pdf again
    const modifiedPdfBytes = await pdfDoc.save();
    await fs.promises.writeFile(filePath, modifiedPdfBytes);
}

export async function userInfoPdf2(req: Request, res: Response, pageNumber: number, Fontsize: number, Xd: number, Yd: number): Promise<void> {
    //get score from user
    const user = await User.findOne({
        username: req.user.username,
        email: req.user.email
    }).select('-_id -password');

    let linesInfo = [];
    const email = user?.email;

    const filePath: string = await customFolderName(req, res);
    const pdfBuffer = await fs.promises.readFile(filePath);
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    // Get a specific page (e.g., page 1)
    const page = pdfDoc.getPages()[pageNumber - 1]; // Page numbering is 0-based

    // Set the fonts and drawing the text to page
    const fontSize = Fontsize;
    const TimesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    // Set the font, font size, and color for the TextDraw object
    page.setFontSize(fontSize);
    page.setFont(TimesRomanFont);
    page.setFontColor(rgb(0, 0, 0));

    let xd = Xd;
    let yd = Yd;

    page.drawText(email as string,
        {
            x: xd,
            y: yd,
        },)

    // Save to yay.pdf again
    const modifiedPdfBytes = await pdfDoc.save();
    await fs.promises.writeFile(filePath, modifiedPdfBytes);
}

export async function userInfoPdf3(req: Request, res: Response, pageNumber: number, Fontsize: number, Xd: number, Yd: number): Promise<void> {
    //get score from user
    const user = await User.findOne({
        username: req.user.username,
        email: req.user.email
    }).select('-_id -password');

    let linesInfo = [];
    const age = user?.age.toString();

    const filePath: string = await customFolderName(req, res);
    const pdfBuffer = await fs.promises.readFile(filePath);
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    // Get a specific page (e.g., page 1)
    const page = pdfDoc.getPages()[pageNumber - 1]; // Page numbering is 0-based

    // Set the fonts and drawing the text to page
    const fontSize = Fontsize;
    const TimesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    // Set the font, font size, and color for the TextDraw object
    page.setFontSize(fontSize);
    page.setFont(TimesRomanFont);
    page.setFontColor(rgb(0, 0, 0));

    let xd = Xd;
    let yd = Yd;

    page.drawText(age as string,
        {
            x: xd,
            y: yd,
        },)

    // Save to yay.pdf again
    const modifiedPdfBytes = await pdfDoc.save();
    await fs.promises.writeFile(filePath, modifiedPdfBytes);
}

export async function userInfoPdf4(req: Request, res: Response, pageNumber: number, Fontsize: number, Xd: number, Yd: number): Promise<void> {

    const org = await OrganizationModel.findOne({
        org_code: req.user.org_code
    })

    const org_name = org?.org_name;

    const filePath: string = await customFolderName(req, res);
    const pdfBuffer = await fs.promises.readFile(filePath);
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    // Get a specific page (e.g., page 1)
    const page = pdfDoc.getPages()[pageNumber - 1]; // Page numbering is 0-based

    // Set the fonts and drawing the text to page
    const fontSize = Fontsize;
    const TimesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    // Set the font, font size, and color for the TextDraw object
    page.setFontSize(fontSize);
    page.setFont(TimesRomanFont);
    page.setFontColor(rgb(0, 0, 0));

    let xd = Xd;
    let yd = Yd;

    page.drawText(org_name as string,
        {
            x: xd,
            y: yd,
        },)

    // Save to yay.pdf again
    const modifiedPdfBytes = await pdfDoc.save();
    await fs.promises.writeFile(filePath, modifiedPdfBytes);
}

export async function makeFeedbackPdf(req: Request, res: Response, testType: string, subCategory: string, pageNumber: number, Fontsize: number, maxWords: number, Xd: number, Yd: number): Promise<void> {
    //get score from user
    const user = await User.findOne({
        username: req.user.username,
        email: req.user.email
    }).select('testResults');

    let userTestResults = user?.testResults;

    const testResult = userTestResults?.find(result => result.testType === testType);
    const subCategori = testResult?.subcategories.find(sub => sub.name === subCategory);
    const score = subCategori?.score;


    const filePath: string = await customFolderName(req, res);
    const pdfBuffer = await fs.promises.readFile(filePath);
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    // Get a specific page (e.g., page 1)
    const page = pdfDoc.getPages()[pageNumber - 1]; // Page numbering is 0-based

    // Getting feedback from function and converting into a list of lines
    const { feedback, percentage } = getFeedback(testType, subCategory, score as number);

    const words = feedback?.split(' ');
    let lines = [];

    if (words) {
        const maxLineWidth = maxWords;

        let currentLine = words[0]; // Start with the first word
        let currentCharCount = words[0].length;

        for (let i = 1; i < words.length; i++) {
            const testLine = currentLine + ' ' + words[i]; // Test adding the next word
            currentCharCount += words[i].length + 1;

            // Check if the text width exceeds the maximum line width
            if (currentCharCount <= maxLineWidth) {
                // The line fits within the width, add the next word
                currentLine = testLine;
            } else {
                // The line width exceeds the maximum, start a new line
                lines.push(currentLine);
                currentLine = words[i]; // Start a new line with the next word
                currentCharCount = words[i].length;
            }
        }

        // Add the remaining line
        lines.push(currentLine);
    } else {
        console.log('No feedback');
    }

    // Set the fonts and drawing the text to page
    const fontSize = Fontsize;
    const TimesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    // Set the font, font size, and color for the TextDraw object
    page.setFontSize(fontSize);
    page.setFont(TimesRomanFont);
    page.setFontColor(rgb(0, 0, 0));

    let xd = Xd;
    let yd = Yd;

    for (const line of lines) {
        page.drawText(line,
            {
                x: xd,
                y: yd,
            },)

        // Move to the next line (1.2 times the font size)
        yd -= fontSize * 1.2;
    }

    // Save to yay.pdf again
    const modifiedPdfBytes = await pdfDoc.save();
    await fs.promises.writeFile(filePath, modifiedPdfBytes);
}

export async function personalityTypePdf(req: Request, res: Response, testType: string, subCategory: string, pageNumber: number, Fontsize: number, Xd: number, Yd: number): Promise<void> {
    //get score from user
    const user = await User.findOne({
        username: req.user.username,
        email: req.user.email
    }).select('testResults');

    let userTestResults = user?.testResults;

    const testResult = userTestResults?.find(result => result.testType === testType);
    const subCategori = testResult?.subcategories.find(sub => sub.name === subCategory);
    const score = subCategori?.score;

    const filePath: string = await customFolderName(req, res);
    const pdfBuffer = await fs.promises.readFile(filePath);
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    // Get a specific page (e.g., page 1)
    const page = pdfDoc.getPages()[pageNumber - 1]; // Page numbering is 0-based

    // Getting feedback from function and converting into a list of lines
    const { pers } = getPersonalityType(testType, subCategory, score as number);

    // Set the fonts and drawing the text to page
    const fontSize = Fontsize;
    const TimesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    // Set the font, font size, and color for the TextDraw object
    page.setFontSize(fontSize);
    page.setFont(TimesRomanFont);
    page.setFontColor(rgb(0, 0, 0));

    let xd = Xd;
    let yd = Yd;

    page.drawText(pers as string,
        {
            x: xd,
            y: yd,
        },)

    // Save to yay.pdf again
    const modifiedPdfBytes = await pdfDoc.save();
    await fs.promises.writeFile(filePath, modifiedPdfBytes);
}

export async function makeScorePercentPdf(req: Request, res: Response, testType: string, subCategory: string, pageNumber: number, Fontsize: number, Xd: number, Yd: number): Promise<void> {
    //get score from user
    const user = await User.findOne({
        username: req.user.username,
        email: req.user.email
    }).select('testResults');

    let userTestResults = user?.testResults;

    const testResult = userTestResults?.find(result => result.testType === testType);
    const subCategori = testResult?.subcategories.find(sub => sub.name === subCategory);
    const score = subCategori?.score;

    const filePath: string = await customFolderName(req, res);
    const pdfBuffer = await fs.promises.readFile(filePath);
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    // Get a specific page (e.g., page 1)
    const page = pdfDoc.getPages()[pageNumber - 1]; // Page numbering is 0-based

    let feedback: string = '';
    let percentage: string = '';
    let tact: { feedback: string | null, percentage: string | null } = { feedback, percentage };

    // Getting feedback from function and converting into a list of lines
    if (testType === 'Left-Right Brain Dominance') {
        tact = getFeedback(subCategory, subCategory, score as number);
    } else {
        tact = getFeedback(testType, subCategory, score as number);
    }5
    // Set the fonts and drawing the text to page
    const fontSize = Fontsize;
    const TimesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    // Set the font, font size, and color for the TextDraw object
    page.setFontSize(fontSize);
    page.setFont(TimesRomanFont);
    page.setFontColor(rgb(0, 0, 0));

    if (testType === 'Students Wheel of Life') {
        let line = score + '/10 ( ' + tact.percentage + ' )';

        let xd = Xd;
        let yd = Yd;

        page.drawText(line,
            {
                x: xd,
                y: yd,
            },)
    } else {
        let line = score + ' ( Category: ' + tact.percentage + ' )';

        let xd = Xd;
        let yd = Yd;

        page.drawText(line,
            {
                x: xd,
                y: yd,
            },)
    }

    // Save to yay.pdf again
    const modifiedPdfBytes = await pdfDoc.save();
    await fs.promises.writeFile(filePath, modifiedPdfBytes);
}

// interface subs {
//     name: string | undefined;
//     score: number | undefined;
// }

// export async function wheelScorePercentPdf(req: Request, res: Response, testType: string, pageNumber: number, Fontsize: number, Xd: number, Yd: number): Promise<void> {
//     //get score from user
//     const user = await User.findOne({
//         username: req.user.username,
//         email: req.user.email
//     }).select('testResults');

//     let userTestResults = user?.testResults;

//     const testResult = userTestResults?.find(result => result.testType === testType);
//     // const subCategori = testResult?.subcategories.find(sub => sub.name === subCategory);
//     const subs: subs[]| undefined = testResult?.subcategories;
//     // const score = subCategori?.score;

//     const arrayLength = subs?.length;

//     let totalMarks = 0;

//     for (let i = 0; i < arrayLength; i++) {
//         totalMarks+= testResult?.subcategories[i].score
//     }

//     // Load the existing PDF
//     const pdfBuffer = await fs.promises.readFile('src/yay.pdf');
//     const pdfDoc = await PDFDocument.load(pdfBuffer);

//     // Get a specific page (e.g., page 1)
//     const page = pdfDoc.getPages()[pageNumber - 1]; // Page numbering is 0-based

//     // Getting feedback from function and converting into a list of lines
//     const { feedback, percentage } = getFeedback(testType, subCategory, score as number);

//     // Set the fonts and drawing the text to page
//     const fontSize = Fontsize;
//     const TimesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

//     // Set the font, font size, and color for the TextDraw object
//     page.setFontSize(fontSize);
//     page.setFont(TimesRomanFont);
//     page.setFontColor(rgb(0, 0, 0));

//     let line = score + '(' + percentage + '%)';

//     let xd = Xd;
//     let yd = Yd;

//     page.drawText(line,
//         {
//             x: xd,
//             y: yd,
//         },)

//     // Save to yay.pdf again
//     const modifiedPdfBytes = await pdfDoc.save();
//     await fs.promises.writeFile('src/yay.pdf', modifiedPdfBytes);
// }

export async function BrainFeedback(req: Request, res: Response, testType: string, subCategory: string, subCategory2: string, pageNumber: number, Fontsize: number, maxWords: number, Xd: number, Yd: number): Promise<void> {
    //get score from user
    const user = await User.findOne({
        username: req.user.username,
        email: req.user.email
    }).select('testResults');

    let userTestResults = user?.testResults;

    const testResult = userTestResults?.find(result => result.testType === testType);
    const subCategori = testResult?.subcategories.find(sub => sub.name === subCategory);
    const score = subCategori?.score;

    const filePath: string = await customFolderName(req, res);
    const pdfBuffer = await fs.promises.readFile(filePath);
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    // Get a specific page (e.g., page 1)
    const page = pdfDoc.getPages()[pageNumber - 1]; // Page numbering is 0-based

    // Getting feedback from function and converting into a list of lines
    const { feedback, percentage } = getFeedback(subCategory, subCategory2, score as number);

    const words = feedback?.split(' ');
    let lines = [];

    // if (words) {
    //     for (let i = 0; i < words.length; i += 13) {
    //         const line = words.slice(i, i + 13).join(' ');
    //         lines.push(line);
    //     }
    // } else {
    //     console.log('No feedback');
    // }

    if (words) {
        const maxLineWidth = maxWords;

        let currentLine = words[0]; // Start with the first word
        let currentCharCount = words[0].length;

        for (let i = 1; i < words.length; i++) {
            const testLine = currentLine + ' ' + words[i]; // Test adding the next word
            currentCharCount += words[i].length + 1;

            // Check if the text width exceeds the maximum line width
            if (currentCharCount <= maxLineWidth) {
                // The line fits within the width, add the next word
                currentLine = testLine;
            } else {
                // The line width exceeds the maximum, start a new line
                lines.push(currentLine);
                currentLine = words[i]; // Start a new line with the next word
                currentCharCount = words[i].length;
            }
        }

        // Add the remaining line
        lines.push(currentLine);
    } else {
        console.log('No feedback');
    }

    // Set the fonts and drawing the text to page
    const fontSize = Fontsize;
    const TimesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    // Set the font, font size, and color for the TextDraw object
    page.setFontSize(fontSize);
    page.setFont(TimesRomanFont);
    page.setFontColor(rgb(0, 0, 0));

    let xd = Xd;
    let yd = Yd;

    for (const line of lines) {
        page.drawText(line,
            {
                x: xd,
                y: yd,
            },)

        // Move to the next line (1.2 times the font size)
        yd -= fontSize * 1.2;
    }

    // Save to yay.pdf again
    const modifiedPdfBytes = await pdfDoc.save();
    await fs.promises.writeFile(filePath, modifiedPdfBytes);
}

export async function carreerOptionsPdf(req: Request, res: Response, pageNumber: number, Fontsize: number, Xd: number, Yd: number): Promise<void> {

    const filter = {
        username: req.user.username,
        email: req.user.email,
    };

    // Check if a document with the same testType exists
    const existingUser = await User.findOne(filter);

    const carreerOptions = existingUser?.carreerOptions;

    // const customSort = (arr: any) => {
    //     return arr.reduce((sorted: any, item: any) => {
    //         const index = sorted.findIndex((el: any) => item.priority > el.priority);
    //         if (index === -1) {
    //             sorted.push(item);
    //         } else {
    //             sorted.splice(index, 0, item);
    //         }
    //         return sorted;
    //     }, []);
    // };

    // const sortedcarOpts = customSort(carreerOptions);
    // const sortedNames = sortedcarOpts.map((carreer: any) => carreer.name);

    const filePath: string = await customFolderName(req, res);
    const pdfBuffer = await fs.promises.readFile(filePath);
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    // Get a specific page (e.g., page 1)
    const page = pdfDoc.getPages()[pageNumber - 1]; // Page numbering is 0-based

    // Set the fonts and drawing the text to page
    const fontSize = Fontsize;
    const TimesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    // Set the font, font size, and color for the TextDraw object
    page.setFontSize(fontSize);
    page.setFont(TimesRomanFont);
    page.setFontColor(rgb(0, 0, 0));

    let xd = Xd;
    let yd = Yd;

    for (const line of carreerOptions as Array<string>) {
        page.drawText(line, {
            x: xd,
            y: yd,
        });

        // Move to the next line (2 times the font size)
        yd -= fontSize * 2;
    }

    // Save to yay.pdf again
    const modifiedPdfBytes = await pdfDoc.save();
    await fs.promises.writeFile(filePath, modifiedPdfBytes);
}

export async function carreerSugPdf(req: Request, res: Response, testType: string, subCategory: string, pageNumber: number, Fontsize: number, maxWords: number, Xd: number, Yd: number): Promise<void> {
    //get score from user
    const user = await User.findOne({
        username: req.user.username,
        email: req.user.email
    }).select('testResults');

    let userTestResults = user?.testResults;

    const testResult = userTestResults?.find(result => result.testType === testType);
    const subCategori = testResult?.subcategories.find(sub => sub.name === subCategory);
    const score = subCategori?.score;

    const filePath: string = await customFolderName(req, res);
    const pdfBuffer = await fs.promises.readFile(filePath);
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    // Get a specific page (e.g., page 1)
    const page = pdfDoc.getPages()[pageNumber - 1]; // Page numbering is 0-based

    // Getting feedback from function and converting into a list of lines
    const { cars } = getCarreerSug(testType, subCategory, score as number);

    const words = cars?.split(' ');
    let lines = [];

    if (words) {
        const maxLineWidth = maxWords;

        let currentLine = words[0]; // Start with the first word
        let currentCharCount = words[0].length;

        for (let i = 1; i < words.length; i++) {
            // Check for newline character
            if (words[i] === "\n") {
                // Start a new line
                lines.push(currentLine);
                currentLine = ""; // Reset the current line
                currentCharCount = 0;
                lines.push(currentLine);
            } else {
                const testLine = currentLine + ' ' + words[i]; // Test adding the next word
                currentCharCount += words[i].length + 1;

                // Check if the text width exceeds the maximum line width
                if (currentCharCount <= maxLineWidth) {
                    // The line fits within the width, add the next word
                    currentLine = testLine;
                } else {
                    // The line width exceeds the maximum, start a new line
                    lines.push(currentLine);
                    currentLine = words[i]; // Start a new line with the next word
                    currentCharCount = words[i].length;
                }
            }
        }

        // Add the remaining line
        lines.push(currentLine);
    } else {
        console.log('No Sugs');
    }

    // Set the fonts and drawing the text to page
    const fontSize = Fontsize;
    const TimesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    // Set the font, font size, and color for the TextDraw object
    page.setFontSize(fontSize);
    page.setFont(TimesRomanFont);
    page.setFontColor(rgb(0, 0, 0));

    let xd = Xd;
    let yd = Yd;

    for (const line of lines) {
        page.drawText(line,
            {
                x: xd,
                y: yd,
            },)

        // Move to the next line (1.2 times the font size)
        yd -= fontSize * 1.2;
    }

    // Save to yay.pdf again
    const modifiedPdfBytes = await pdfDoc.save();
    await fs.promises.writeFile(filePath, modifiedPdfBytes);
}

async function puppetChart(pageNumber: number, Xd: number, Yd: number): Promise<void> {
    const browser = await puppeteer.launch({
        headless: 'new',
    });
    const page = await browser.newPage();

    // Create a new JSDOM instance
    const dom = new JSDOM();
    const window = dom.window;
    const document = window.document;

    const chartContainer = document.createElement('div');
    document.body.appendChild(chartContainer);

    console.log('hmmm');
    // const d3 = await import('d3');
    const d3 = require('d3');
    console.log('hmmm');
    const svg = d3.select(chartContainer) // Use d3.default
        .append('svg')
        .attr('width', 400)
        .attr('height', 300);

    // Add your D3.js chart logic here (replace with your chart code)
    // Example: Create a simple rectangle
    svg.append('rect')
        .attr('x', 10)
        .attr('y', 10)
        .attr('width', 100)
        .attr('height', 50)
        .style('fill', 'blue');

    const chartImage = await page.screenshot();

    //   const pdfTemplate = 'template.pdf';
    await page.goto(`file:///home/gracious746/MindMatrix/server/src/tp/blank.pdf`);

    const pageDimensions = await page.evaluate(() => {
        const pageRect = document.querySelector('body')?.getBoundingClientRect();
        return {
            width: pageRect?.width,
            height: pageRect?.height,
        };
    });

    await page.setContent(`
    <html>
      <body>
        <img src="data:image/png;base64,${chartImage.toString('base64')}" style="position: absolute; left: ${Xd}px; top: ${Yd}px;">
      </body>
    </html>
  `);

    const pdfPath = `src/output_page_${pageNumber}.pdf`;

    const pages = await page.$$('body > *');
    if (pages.length > pageNumber) {
        // Extract the content of the specified page and create a PDF with it
        const pageContent = pages[pageNumber];
        await page.evaluateHandle((content) => {
            content.remove();
        }, pageContent);

        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
        });

        console.log(`PDF page ${pageNumber} created at ${pdfPath}`);
    } else {
        console.error(`Page ${pageNumber} does not exist in the PDF.`);
    }

    await browser.close();
}

// async function googleChart(pageNumber: number, Xd: number, Yd: number): Promise<void> {
//     const chart = new GoogleChartsNode(600, 400);

//     const data = [['Category', 'Value'], ['Category 1', 10], ['Category 2', 20], ['Category 3', 30]];
//     const options = { title: 'Bar Chart Example' };

//     chart.draw('BarChart', data, options);
//     const imageBuffer = await chart.getImageBuffer('image/png');

//     const pdfBuffer = await fs.promises.readFile(`src/tp/blank.pdf`);
//     const pdfDoc = await PDFDocument.load(pdfBuffer);

//     // Get a specific page (e.g., page 1)
//     const page = pdfDoc.getPages()[pageNumber - 1]; // Page numbering is 0-based

//     // Load the chart image into the PDF
//     const image = await pdfDoc.embedPng(imageBuffer);

//     const { width, height } = image.scale(1);
//     page.drawImage(image, {
//         x: Xd, // X-coordinate
//         y: Yd, // Y-coordinate
//         width: width,
//         height: height,
//     });

//     const pdfBytes = await pdfDoc.save();

//     await fs.promises.writeFile('chartssss.pdf', pdfBytes);
// }

export async function makeRadarChartPdf(req: Request, res: Response, testType: string, pageNumber: number): Promise<void> {

    const filePath: string = await customFolderName(req, res);
    const pdfBuffer = await fs.promises.readFile(filePath);
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    // Get a specific page (e.g., page 1)
    const page = pdfDoc.getPages()[pageNumber - 1]; // Page numbering is 0-based

    const user = await User.findOne({
        username: req.user.username,
        email: req.user.email
    }).select('testResults');

    let userTestResults = user?.testResults;

    const Test = userTestResults?.find(result => result.testType === testType);
    const testSubcategories = Test?.subcategories;

    const names = testSubcategories?.map(result => result.name);

    const scores = testSubcategories?.map(result => result.score);

    Chart.register(...registerables);
    Chart.register(ChartDataLabels);

    const canvas = createCanvas(380, 340);
    const ctx = canvas.getContext('2d', { alpha: false });

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Your chart data and configuration
    const data = {
        labels: names, //names?.map((label) => label?.replace(/\s+/g, '\n'))
        datasets: [
            {
                label: testType,
                data: scores,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)',
                borderWidth: 1, // Border wid
            },
        ],
    };

    const radarChart = new Chart(ctx as any, {
        type: "radar",
        data: data,
        options: {
            // elements: {
            //     line: {
            //         borderWidth: 3
            //     }
            // },
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            }
        },
    });

    const chartImageBase64 = radarChart.toBase64Image();
    if (!chartImageBase64.startsWith('data:image/png;base64,')) {
        console.log('Image data is not in PNG format.');
        return;
        // Proceed with embedding the image into the PDF
    }
    const base64WithoutMimeType = chartImageBase64.split(',')[1];
    const pdfImage = await pdfDoc.embedPng(Buffer.from(base64WithoutMimeType, 'base64'));

    page.drawImage(pdfImage, {
        x: 50,
        y: 120,
        width: 440,
        height: 313,
    });

    // Save the modified PDF to a new file
    const modifiedPdfBytes = await pdfDoc.save();
    await fs.promises.writeFile(filePath, modifiedPdfBytes);

    // fs.writeFileSync('chart.png', base64WithoutMimeType, 'base64');
}

//output
export async function sendFeedback(req: Request, res: Response): Promise<void> {
    try {
        // Aptitude-Feedback
        await makeFeedbackPdf(req, res, "Aptitude", "Linguistic", 7, 13, 80, 50, 610);
        await makeFeedbackPdf(req, res, "Aptitude", "Numerical", 7, 13, 80, 50, 280);
        await makeFeedbackPdf(req, res, "Aptitude", "Mechanical", 8, 13, 80, 50, 635);
        await makeFeedbackPdf(req, res, "Aptitude", "Abstract", 8, 13, 80, 50, 280);
        await makeFeedbackPdf(req, res, "Aptitude", "Spatial", 9, 13, 80, 50, 610);
        await makeFeedbackPdf(req, res, "Aptitude", "Logical", 9, 13, 80, 50, 270);

        //Aptitude-carreer suggestions
        await carreerSugPdf(req, res, "Aptitude", "Linguistic", 7, 13, 80, 50, 480);
        await carreerSugPdf(req, res, "Aptitude", "Numerical", 7, 13, 80, 50, 150);
        await carreerSugPdf(req, res, "Aptitude", "Mechanical", 8, 13, 80, 50, 495);
        await carreerSugPdf(req, res, "Aptitude", "Abstract", 8, 13, 80, 50, 150);
        await carreerSugPdf(req, res, "Aptitude", "Spatial", 9, 13, 80, 50, 455);
        await carreerSugPdf(req, res, "Aptitude", "Logical", 9, 13, 80, 50, 135);

        // Multiple Intelligence-feedback
        await makeFeedbackPdf(req, res, "Multiple Intelligence", "Linguistic", 11, 13, 80, 50, 590);
        await makeFeedbackPdf(req, res, "Multiple Intelligence", "Logical", 12, 13, 80, 50, 580);
        await makeFeedbackPdf(req, res, "Multiple Intelligence", "Spatial", 13, 13, 80, 50, 595);
        await makeFeedbackPdf(req, res, "Multiple Intelligence", "Interpersonal", 14, 13, 80, 50, 590);
        await makeFeedbackPdf(req, res, "Multiple Intelligence", "Musical", 15, 13, 80, 50, 595);
        await makeFeedbackPdf(req, res, "Multiple Intelligence", "Naturalistic", 16, 13, 80, 50, 605);
        await makeFeedbackPdf(req, res, "Multiple Intelligence", "Kinesthetic", 17, 13, 80, 50, 595);
        await makeFeedbackPdf(req, res, "Multiple Intelligence", "Intrapersonal", 18, 13, 80, 50, 595);

        // Multiple Intelligence-carreer suggestions
        await carreerSugPdf(req, res, "Multiple Intelligence", "Linguistic", 11, 13, 80, 50, 380);
        await carreerSugPdf(req, res, "Multiple Intelligence", "Logical", 12, 13, 80, 50, 370);
        await carreerSugPdf(req, res, "Multiple Intelligence", "Spatial", 13, 13, 80, 50, 385);
        await carreerSugPdf(req, res, "Multiple Intelligence", "Interpersonal", 14, 13, 80, 50, 380);
        await carreerSugPdf(req, res, "Multiple Intelligence", "Musical", 15, 13, 80, 50, 385);
        await carreerSugPdf(req, res, "Multiple Intelligence", "Naturalistic", 16, 13, 80, 50, 385);
        await carreerSugPdf(req, res, "Multiple Intelligence", "Kinesthetic", 17, 13, 80, 50, 380);
        await carreerSugPdf(req, res, "Multiple Intelligence", "Intrapersonal", 18, 13, 80, 50, 380);

        //Study Skills Profile Assessment
        await makeFeedbackPdf(req, res, "Study Skills Profile Assessment", "Time Management and Procrastination", 21, 13, 80, 50, 610);
        await makeFeedbackPdf(req, res, "Study Skills Profile Assessment", "Concentration and Memory", 21, 13, 80, 50, 390);
        await makeFeedbackPdf(req, res, "Study Skills Profile Assessment", "Study Aids and Note-Taking", 21, 13, 80, 50, 150);
        await makeFeedbackPdf(req, res, "Study Skills Profile Assessment", "Test Strategies and Test Anxiety", 22, 13, 80, 50, 610);
        await makeFeedbackPdf(req, res, "Study Skills Profile Assessment", "Organizing and Processing Information", 22, 13, 80, 50, 390);
        await makeFeedbackPdf(req, res, "Study Skills Profile Assessment", "Motivation and Attitude", 22, 13, 80, 50, 150);
        await makeFeedbackPdf(req, res, "Study Skills Profile Assessment", "Reading and Selecting the Main Idea", 23, 13, 80, 40, 605);
        await makeFeedbackPdf(req, res, "Study Skills Profile Assessment", "Writing", 23, 13, 80, 40, 290);

        //Emotional Intelligence
        await makeFeedbackPdf(req, res, "Emotional Intelligence", "Self-Awareness", 33, 13, 80, 40, 620);
        await makeFeedbackPdf(req, res, "Emotional Intelligence", "Managing Emotions", 33, 13, 80, 40, 390);
        await makeFeedbackPdf(req, res, "Emotional Intelligence", "Motivating Oneself", 33, 13, 80, 40, 150);
        await makeFeedbackPdf(req, res, "Emotional Intelligence", "Empathy", 34, 13, 80, 40, 620);
        await makeFeedbackPdf(req, res, "Emotional Intelligence", "Social Skill", 34, 13, 80, 40, 350);

        //Personality-Feedback
        await makeFeedbackPdf(req, res, "Personality", "Extroversion", 29, 13, 80, 40, 600);
        await makeFeedbackPdf(req, res, "Personality", "Agreeableness", 29, 13, 80, 40, 320);
        await makeFeedbackPdf(req, res, "Personality", "Conscientiousness", 30, 13, 80, 40, 600);
        await makeFeedbackPdf(req, res, "Personality", "Neuroticism", 30, 13, 80, 40, 285);
        await makeFeedbackPdf(req, res, "Personality", "Openness", 31, 13, 80, 40, 580);

        //Personality-possible personality type
        await personalityTypePdf(req, res, "Personality", "Extroversion", 29, 13, 160, 533);
        await personalityTypePdf(req, res, "Personality", "Agreeableness", 29, 13, 160, 228);
        await personalityTypePdf(req, res, "Personality", "Conscientiousness", 30, 13, 160, 520);
        await personalityTypePdf(req, res, "Personality", "Neuroticism", 30, 13, 160, 210);
        await personalityTypePdf(req, res, "Personality", "Openness", 31, 13, 160, 470);


        //Personality-carreer suggestions
        await carreerSugPdf(req, res, "Personality", "Extroversion", 29, 13, 80, 40, 490);
        await carreerSugPdf(req, res, "Personality", "Agreeableness", 29, 13, 80, 40, 180);
        await carreerSugPdf(req, res, "Personality", "Conscientiousness", 30, 13, 80, 40, 475);
        await carreerSugPdf(req, res, "Personality", "Neuroticism", 30, 13, 80, 40, 170);
        await carreerSugPdf(req, res, "Personality", "Openness", 31, 13, 80, 40, 395);

        //Learning Style
        await makeFeedbackPdf(req, res, "Learning Style", "Visual", 36, 13, 80, 40, 620);
        await makeFeedbackPdf(req, res, "Learning Style", "Auditory", 36, 13, 84, 40, 455);
        await makeFeedbackPdf(req, res, "Learning Style", "Kinesthetic", 36, 13, 80, 40, 230);

        //Leadership Style
        await makeFeedbackPdf(req, res, "Leadership Style", "Authoritative", 39, 13, 80, 40, 600);
        await makeFeedbackPdf(req, res, "Leadership Style", "Democratic", 39, 13, 80, 40, 270);
        await makeFeedbackPdf(req, res, "Leadership Style", "Facilitative", 40, 13, 80, 35, 580);
        await makeFeedbackPdf(req, res, "Leadership Style", "Situational", 40, 13, 80, 35, 280);

        //Competitive State Anxiety Inventory
        await makeFeedbackPdf(req, res, "Competitive State Anxiety Inventory", "Cognitive Anxiety", 43, 13, 80, 35, 620);
        await makeFeedbackPdf(req, res, "Competitive State Anxiety Inventory", "Somatic Anxiety", 43, 13, 80, 35, 415);
        await makeFeedbackPdf(req, res, "Competitive State Anxiety Inventory", "Self-Confidence", 43, 13, 80, 35, 190);

        //Students wheel of life
        await makeFeedbackPdf(req, res, "Students Wheel of Life", "Academic Competency", 25, 13, 80, 20, 580);
        await makeFeedbackPdf(req, res, "Students Wheel of Life", "Health & Fitness", 25, 13, 80, 20, 540);
        await makeFeedbackPdf(req, res, "Students Wheel of Life", "Social Friends", 25, 13, 80, 20, 500);
        await makeFeedbackPdf(req, res, "Students Wheel of Life", "Discipline", 25, 13, 80, 20, 460);
        await makeFeedbackPdf(req, res, "Students Wheel of Life", "Good Manners", 25, 13, 80, 20, 420);
        await makeFeedbackPdf(req, res, "Students Wheel of Life", "Spirituality", 25, 13, 80, 20, 380);
        await makeFeedbackPdf(req, res, "Students Wheel of Life", "Goal Orientation", 25, 13, 80, 20, 340);
        await makeFeedbackPdf(req, res, "Students Wheel of Life", "Confidence", 25, 13, 80, 20, 300);
        await makeFeedbackPdf(req, res, "Students Wheel of Life", "Responsible", 25, 13, 80, 20, 260);
        await makeFeedbackPdf(req, res, "Students Wheel of Life", "Hobbies & Extracurriculars", 25, 13, 80, 20, 220);

        //Leadership skills
        await makeFeedbackPdf(req, res, "Leadership skills", "Leadership", 37, 13, 80, 45, 335);

        //carreerOptions
        await carreerOptionsPdf(req, res, 19, 13, 125, 375);

        //Cyber dependency
        await makeFeedbackPdf(req, res, "Cyber Dependency", "Cyber Dependency", 41, 13, 80, 50, 320);

        //Left-Brain Dominance
        await BrainFeedback(req, res, "Left-Right Brain Dominance", "Left Brain", "Analytical Thinking", 27, 13, 80, 43, 610);
        await BrainFeedback(req, res, "Left-Right Brain Dominance", "Left Brain", "Language Skills", 27, 13, 80, 43, 580);
        await BrainFeedback(req, res, "Left-Right Brain Dominance", "Left Brain", "Math and Logic", 27, 13, 80, 43, 550);
        await BrainFeedback(req, res, "Left-Right Brain Dominance", "Left Brain", "Structured Planning", 27, 13, 80, 43, 520);
        await BrainFeedback(req, res, "Left-Right Brain Dominance", "Left Brain", "Sequential Processing", 27, 13, 80, 43, 490);

        //Right Brain Dominance
        await BrainFeedback(req, res, "Left-Right Brain Dominance", "Right Brain", "Creativity", 27, 13, 80, 43, 310);
        await BrainFeedback(req, res, "Left-Right Brain Dominance", "Right Brain", "Visual Perception", 27, 13, 80, 43, 280);
        await BrainFeedback(req, res, "Left-Right Brain Dominance", "Right Brain", "Intuition", 27, 13, 80, 43, 250);
        await BrainFeedback(req, res, "Left-Right Brain Dominance", "Right Brain", "Holistic Thinking", 27, 13, 80, 43, 220);
        await BrainFeedback(req, res, "Left-Right Brain Dominance", "Right Brain", "Artistic Abilities", 27, 13, 80, 43, 190);

    } catch (error) {
        console.log(error);
        res.status(500);
    }

}

export async function sendUserInfo(req: Request, res: Response): Promise<void> {
    try {
        //user info
        await userInfoPdf1(req, res, 2, 18, 225, 600);
        await userInfoPdf3(req, res, 2, 18, 225, 545);
        await userInfoPdf2(req, res, 2, 18, 225, 340);
        await userInfoPdf4(req, res, 2, 18, 225, 290);

    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

export async function sendCharts(req: Request, res: Response): Promise<void> {
    try {
        //Charts
        await makeBarChartPdf(req, res, "Study Skills Profile Assessment", 20);
        await makeBarChartPdf(req, res, "Aptitude", 6);
        await makeBarChartPdf(req, res, "Multiple Intelligence", 10);
        await makeBarChartPdf(req, res, "Emotional Intelligence", 32);
        await makeBarChartPdf(req, res, "Personality", 28);
        await makeBarChartPdf(req, res, "Learning Style", 35);
        await makeBarChartPdf(req, res, "Leadership Style", 38);
        await makeBarChartPdf(req, res, "Competitive State Anxiety Inventory", 42);
        await makeBarChartPdf(req, res, "Left-Right Brain Dominance", 26);
        await makeRadarChartPdf(req, res, "Students Wheel of Life", 24);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

export async function sendScores(req: Request, res: Response): Promise<void> {
    try {
        //Scores

        //Aptitude
        await makeScorePercentPdf(req, res, "Aptitude", "Linguistic", 7, 13, 70, 660);
        await makeScorePercentPdf(req, res, "Aptitude", "Numerical", 7, 13, 70, 330);
        await makeScorePercentPdf(req, res, "Aptitude", "Mechanical", 8, 13, 70, 678);
        await makeScorePercentPdf(req, res, "Aptitude", "Abstract", 8, 13, 70, 330);
        await makeScorePercentPdf(req, res, "Aptitude", "Spatial", 9, 13, 75, 660);
        await makeScorePercentPdf(req, res, "Aptitude", "Logical", 9, 13, 75, 310);

        //Multilple Intelligence
        await makeScorePercentPdf(req, res, "Multiple Intelligence", "Linguistic", 11, 13, 80, 632);
        await makeScorePercentPdf(req, res, "Multiple Intelligence", "Logical", 12, 13, 80, 625);
        await makeScorePercentPdf(req, res, "Multiple Intelligence", "Spatial", 13, 13, 100, 640);
        await makeScorePercentPdf(req, res, "Multiple Intelligence", "Interpersonal", 14, 13, 100, 635);
        await makeScorePercentPdf(req, res, "Multiple Intelligence", "Musical", 15, 13, 100, 640);
        await makeScorePercentPdf(req, res, "Multiple Intelligence", "Naturalistic", 16, 13, 100, 650);
        await makeScorePercentPdf(req, res, "Multiple Intelligence", "Kinesthetic", 17, 13, 100, 640);
        await makeScorePercentPdf(req, res, "Multiple Intelligence", "Intrapersonal", 18, 13, 100, 640);

        //Study skill profile
        await makeScorePercentPdf(req, res, "Study Skills Profile Assessment", "Time Management and Procrastination", 21, 13, 75, 660);
        await makeScorePercentPdf(req, res, "Study Skills Profile Assessment", "Concentration and Memory", 21, 13, 70, 438);
        await makeScorePercentPdf(req, res, "Study Skills Profile Assessment", "Study Aids and Note-Taking", 21, 13, 70, 200);
        await makeScorePercentPdf(req, res, "Study Skills Profile Assessment", "Test Strategies and Test Anxiety", 22, 13, 75, 660);
        await makeScorePercentPdf(req, res, "Study Skills Profile Assessment", "Organizing and Processing Information", 22, 13, 70, 440);
        await makeScorePercentPdf(req, res, "Study Skills Profile Assessment", "Motivation and Attitude", 22, 13, 70, 200);
        await makeScorePercentPdf(req, res, "Study Skills Profile Assessment", "Reading and Selecting the Main Idea", 23, 13, 75, 655);
        await makeScorePercentPdf(req, res, "Study Skills Profile Assessment", "Writing", 23, 13, 70, 350);

        //students wheel of life
        await makeScorePercentPdf(req, res, "Students Wheel of Life", "Academic Competency", 25, 13, 385, 580);
        await makeScorePercentPdf(req, res, "Students Wheel of Life", "Health & Fitness", 25, 13, 385, 540);
        await makeScorePercentPdf(req, res, "Students Wheel of Life", "Social Friends", 25, 13, 385, 500);
        await makeScorePercentPdf(req, res, "Students Wheel of Life", "Discipline", 25, 13, 385, 460);
        await makeScorePercentPdf(req, res, "Students Wheel of Life", "Good Manners", 25, 13, 385, 420);
        await makeScorePercentPdf(req, res, "Students Wheel of Life", "Spirituality", 25, 13, 385, 380);
        await makeScorePercentPdf(req, res, "Students Wheel of Life", "Goal Orientation", 25, 13, 385, 340);
        await makeScorePercentPdf(req, res, "Students Wheel of Life", "Confidence", 25, 13, 385, 300);
        await makeScorePercentPdf(req, res, "Students Wheel of Life", "Responsible", 25, 13, 385, 260);
        await makeScorePercentPdf(req, res, "Students Wheel of Life", "Hobbies & Extracurriculars", 25, 13, 385, 220);

        //left-right brain
        await makeScorePercentPdf(req, res, "Left-Right Brain Dominance", "Left Brain", 27, 13, 80, 655);
        await makeScorePercentPdf(req, res, "Left-Right Brain Dominance", "Right Brain", 27, 13, 80, 362);

        //Personality
        await makeScorePercentPdf(req, res, "Personality", "Extroversion", 29, 13, 70, 664);
        await makeScorePercentPdf(req, res, "Personality", "Agreeableness", 29, 13, 70, 367);
        await makeScorePercentPdf(req, res, "Personality", "Conscientiousness", 30, 13, 70, 662);
        await makeScorePercentPdf(req, res, "Personality", "Neuroticism", 30, 13, 70, 350);
        await makeScorePercentPdf(req, res, "Personality", "Openness", 31, 13, 70, 634);

        //emotional intelligence
        await makeScorePercentPdf(req, res, "Emotional Intelligence", "Self-Awareness", 33, 13, 70, 663);
        await makeScorePercentPdf(req, res, "Emotional Intelligence", "Managing Emotions", 33, 13, 70, 437);
        await makeScorePercentPdf(req, res, "Emotional Intelligence", "Motivating Oneself", 33, 13, 70, 218);
        await makeScorePercentPdf(req, res, "Emotional Intelligence", "Empathy", 34, 13, 70, 663);
        await makeScorePercentPdf(req, res, "Emotional Intelligence", "Social Skill", 34, 13, 70, 402);

        //Learning Style
        await makeScorePercentPdf(req, res, "Learning Style", "Visual", 36, 13, 70, 663);
        await makeScorePercentPdf(req, res, "Learning Style", "Auditory", 36, 13, 70, 498);
        await makeScorePercentPdf(req, res, "Learning Style", "Kinesthetic", 36, 13, 70, 283);

        //Leadership Skills
        await makeScorePercentPdf(req, res, "Leadership skills", "Leadership", 37, 13, 80, 387);

        //Leadership Style
        await makeScorePercentPdf(req, res, "Leadership Style", "Authoritative", 39, 13, 100, 662);
        await makeScorePercentPdf(req, res, "Leadership Style", "Democratic", 39, 13, 80, 310);
        await makeScorePercentPdf(req, res, "Leadership Style", "Facilitative", 40, 13, 70, 632);
        await makeScorePercentPdf(req, res, "Leadership Style", "Situational", 40, 13, 70, 322);

        //cyber dependency
        await makeScorePercentPdf(req, res, "Cyber Dependency", "Cyber Dependency", 41, 13, 85, 375);

        //competitive state anxiety inventory
        await makeScorePercentPdf(req, res, "Competitive State Anxiety Inventory", "Cognitive Anxiety", 43, 13, 70, 662);
        await makeScorePercentPdf(req, res, "Competitive State Anxiety Inventory", "Somatic Anxiety", 43, 13, 70, 467);
        await makeScorePercentPdf(req, res, "Competitive State Anxiety Inventory", "Self-Confidence", 43, 13, 70, 235);

    } catch (error) {
        console.log(error);
        res.status(500);
    }
}