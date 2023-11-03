import { config } from 'dotenv';
config();
import fs from 'fs';
import { carreerSuggestions, feedbackData, personalityType } from './feedback';

export function getFeedback(testType: string, subCategory: string, score: number): { feedback: string | null; percentage: string | null } {

    let scoreRange = '';
    let percentage = '';

    if (testType === "Multiple Intelligence" || testType === "Leadership Style") {
        if (score >= 0 && score <= 10) {
            scoreRange = '1-10';
            percentage = 'Basic Proficiency';
        } else if (score >= 11 && score <= 20) {
            scoreRange = '11-20';
            percentage = 'Developing Skills';
        } else if (score >= 21 && score <= 30) {
            scoreRange = '21-30';
            percentage = 'Strong Proficiency';
        } else if (score >= 31 && score <= 40) {
            scoreRange = '31-40';
            percentage = 'Exceptional Mastery';
        } else {
            console.log('Invalid score');
        }
    }

    if (testType === "Study Skills Profile Assessment") {
        if (score >= 0 && score <= 8) {
            scoreRange = '1-8';
            percentage = 'Basic Proficiency';
        } else if (score >= 9 && score <= 16) {
            scoreRange = '9-16';
            percentage = 'Developing Skills';
        } else if (score >= 17 && score <= 24) {
            scoreRange = '17-24';
            percentage = 'Strong Proficiency';
        } else if (score >= 25 && score <= 32) {
            scoreRange = '25-32';
            percentage = 'Exceptional Mastery';
        } else {
            console.log('Invalid score');
        }
    }

    if (testType === "Aptitude") {
        if (score >= 0 && score <= 4) {
            scoreRange = '1-4';
            percentage = 'Developing';
        } else if (score >= 5 && score <= 8) {
            scoreRange = '5-8';
            percentage = 'Progressing';
        } else if (score >= 9 && score <= 12) {
            scoreRange = '9-12';
            percentage = 'Competing';
        } else if (score >= 13 && score <= 16) {
            scoreRange = '13-16';
            percentage = 'Excelling';
        } else if (score >= 17 && score <= 20) {
            scoreRange = '17-20';
            percentage = 'Outstanding';
        } else {
            console.log('Invalid score');
        }
    }

    if (testType === "Emotional Intelligence") {
        if (score >= 0 && score <= 19) {
            scoreRange = '0-19';
            percentage = 'Developing';
        } else if (score >= 20 && score <= 29) {
            scoreRange = '20-29';
            percentage = 'Progressing';
        } else if (score >= 30 && score <= 39) {
            scoreRange = '30-39';
            percentage = 'Competing';
        } else if (score >= 40 && score <= 44) {
            scoreRange = '40-44';
            percentage = 'Excelling';
        } else if (score >= 45 && score <= 50) {
            scoreRange = '45-50';
            percentage = 'Outstanding';
        } else {
            console.log('Invalid score');
        }
    }

    if (testType === "Personality") {
        if (score >= 0 && score <= 10) {
            scoreRange = '1-10';
            percentage = 'Developing';
        } else if (score >= 11 && score <= 20) {
            scoreRange = '11-20';
            percentage = 'Progressing';
        } else if (score >= 21 && score <= 30) {
            scoreRange = '21-30';
            percentage = 'Competing';
        } else if (score >= 31 && score <= 40) {
            scoreRange = '31-40';
            percentage = 'Excelling';
        } else if (score >= 41 && score <= 50) {
            scoreRange = '41-50';
            percentage = 'Outstanding';
        } else {
            console.log('Invalid score');
        }
    }

    if (testType === "Learning Style") {
        if (score >= 0 && score <= 7) {
            scoreRange = '1-7';
            percentage = 'Low';
        } else if (score >= 8 && score <= 15) {
            scoreRange = '8-15';
            percentage = 'Mild';
        } else if (score >= 16 && score <= 23) {
            scoreRange = '16-23';
            percentage = 'Moderate';
        } else if (score >= 24 && score <= 30) {
            scoreRange = '24-30';
            percentage = 'High';
        } else {
            console.log('Invalid score');
        }
    }

    if (testType === "Competitive State Anxiety Inventory") {
        if (score >= 0 && score <= 9) {
            scoreRange = '0-9';
            percentage = 'Low';
        } else if (score >= 10 && score <= 18) {
            scoreRange = '10-18';
            percentage = 'Mild';
        } else if (score >= 19 && score <= 27) {
            scoreRange = '19-27';
            percentage = 'Moderate';
        } else if (score >= 28 && score <= 36) {
            scoreRange = '28-36';
            percentage = 'High';
        } else {
            console.log('Invalid score');
        }
    }

    if (testType === "Students Wheel of Life") {
        if (score >= 1 && score <= 3) {
            scoreRange = '1-3';
            percentage = 'Basic Proficiency';
        } else if (score >= 4 && score <= 6) {
            scoreRange = '4-6';
            percentage = 'Developing Skills';
        } else if (score >= 7 && score <= 8) {
            scoreRange = '7-8';
            percentage = 'Strong Proficiency';
        } else if (score >= 9 && score <= 10) {
            scoreRange = '9-10';
            percentage = 'Exceptional Mastery';
        } else {
            console.log('Invalid score');
        }
    }

    if (testType === "Left Brain" || testType === "Right Brain") {
        if (score >= 0 && score <= 3) {
            scoreRange = '1-3';
            percentage = 'Limited Dominance';
        } else if (score >= 4 && score <= 6) {
            scoreRange = '4-6';
            percentage = 'Developing Dominance';
        } else if (score >= 7 && score <= 8) {
            scoreRange = '7-8';
            percentage = 'Balanced Dominance';
        } else if (score >= 9 && score <= 10) {
            scoreRange = '9-10';
            percentage = 'Strong Dominance';
        } else {
            console.log('Invalid score');
        }
    }

    if (testType === "Leadership skills") {
        if (score >= 0 && score <= 29) {
            scoreRange = '0-29';
            percentage = 'Developing';
        } else if (score >= 30 && score <= 49) {
            scoreRange = '30-49';
            percentage = 'Progressing';
        } else if (score >= 50 && score <= 69) {
            scoreRange = '50-69';
            percentage = 'Competing';
        } else if (score >= 70 && score <= 84) {
            scoreRange = '70-84';
            percentage = 'Excelling';
        } else if (score >= 85 && score <= 100) {
            scoreRange = '85-100';
            percentage = 'Outstanding';
        } else {
            console.log('Invalid score');
        }
    }

    if (testType === "Cyber Dependency") {
        if (score >= 0 && score <= 20) {
            scoreRange = '0-20';
            percentage = 'Low Dependency';
        } else if (score >= 21 && score <= 40) {
            scoreRange = '21-40';
            percentage = 'Moderate-Low Dependency ';
        } else if (score >= 41 && score <= 60) {
            scoreRange = '41-60';
            percentage = 'Moderate Dependency';
        } else if (score >= 61 && score <= 80) {
            scoreRange = '61-80';
            percentage = 'Moderate-High Dependency';
        } else if (score >= 81 && score <= 100) {
            scoreRange = '81-100';
            percentage = 'High Dependency ';
        } else {
            console.log('Invalid score');
        }
    }

    const feedback = feedbackData[testType]?.[subCategory]?.[scoreRange] ?? 'Feedback not found';

    return { feedback, percentage };
}

export function getPersonalityType(testType: string, subCategory: string, score: number): { pers: string | null; } {

    let scoreRange = '';

    if (testType === "Personality") {   
        if (score >= 0 && score <= 10) {
            scoreRange = '1-10';
        } else if (score >= 11 && score <= 20) {
            scoreRange = '11-20';
        } else if (score >= 21 && score <= 30) {
            scoreRange = '21-30';
        } else if (score >= 31 && score <= 40) {
            scoreRange = '31-40';
        } else if (score >= 41 && score <= 50) {
            scoreRange = '41-50';
        } else {
            console.error('Invalid score');
        }
    }

    const pers = personalityType[testType]?.[subCategory]?.[scoreRange] ?? 'not found';

    return { pers };
}


export function getCarreerSug(testType: string, subCategory: string, score: number): { cars: string | null; } {

    let scoreRange = '';

    if (testType === "Aptitude") {
        if (score >= 0 && score <= 4) {
            scoreRange = '1-4';
        } else if (score >= 5 && score <= 8) {
            scoreRange = '5-8';
        } else if (score >= 9 && score <= 12) {
            scoreRange = '9-12';
        } else if (score >= 13 && score <= 16) {
            scoreRange = '13-16';
        } else if (score >= 17 && score <= 20) {
            scoreRange = '17-20';
        } else {
            console.log('Invalid score');
        }
    }

    if (testType === "Personality") {
        if (score >= 0 && score <= 10) {
            scoreRange = '1-10';
        } else if (score >= 11 && score <= 20) {
            scoreRange = '11-20';
        } else if (score >= 21 && score <= 30) {
            scoreRange = '21-30';
        } else if (score >= 31 && score <= 40) {
            scoreRange = '31-40';
        } else if (score >= 41 && score <= 50) {
            scoreRange = '41-50';
        } else {
            console.log('Invalid score');
        }
    }

    if (testType === "Multiple Intelligence") {
        if (score >= 0 && score <= 10) {
            scoreRange = '1-10';
        } else if (score >= 11 && score <= 20) {
            scoreRange = '11-20';
        } else if (score >= 21 && score <= 30) {
            scoreRange = '21-30';
        } else if (score >= 31 && score <= 40) {
            scoreRange = '31-40';
        } else {
            console.log('Invalid score');
        }
    }

    const cars = carreerSuggestions[testType]?.[subCategory]?.[scoreRange] ?? 'not found';

    return { cars };
}