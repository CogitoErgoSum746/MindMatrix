import { Request, Response } from 'express';
import User from '../../models/orgUsers';
import fs from 'fs';
import path from 'path';
import { errorLogger, appLogger } from '../../logger';

export async function getUser(req: Request, res: Response): Promise<void> {
    try {
        // Finding user to fetch
        const user = await User.findOne({
            username: req.user.username,
            email: req.user.email,
        }).select('-_id -password');

        if (!user) {
            res.status(400).json({ error: 'No user found with request object' });
            return;
        }

        // Response
        res.status(200).json({
            status: 'success',
            results: user ? 1 : 0,
            data: {
                user,
            },
        });
    } catch (error) {
        errorLogger.error(`Error getting user:`, error instanceof Error ? error.message : error);
        console.error(error);
        res.status(500).send('Internal server error');
    }
};

export const userDashboard = (req: Request, res: Response): void => {
    res.status(200).json('Chillaxxx');
};

export async function tektest(req: Request, res: Response): Promise<void> {
    try {
        // const keys = Object.keys(req.body);
        // console.log(keys);
        res.status(200).json('oki');
    } catch (error) {
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
}

export async function checkSubscores(req: Request, res: Response): Promise<void> {
    try {
        // Define the filter criteria
        const filter = {
            username: req.user.username,
            email: req.user.email,
        };

        const testType = req.body.testType;

        // Check if a document with the same testType exists
        const existingUser = await User.findOne(filter);

        if (existingUser) {
            // Find the test result with the matching testType
            const testResult = existingUser.testResults.find((result) => result.testType === testType);

            if (testResult) {
                // Find the subcategory with the matching name and get the score
                const subcategories = testResult.subcategories;

                if (subcategories) {
                    const general = 8;
                    const subcategoryCount = subcategories ? subcategories.length : 0;

                    let diffsubs = general - subcategoryCount;

                    if (diffsubs == 0) {
                        res.status(200).json({ status: true });
                        return;
                    } else {
                        res.status(200).json({ status: false });
                        return;
                    }
                } else {
                    res.status(404).json({ message: 'No subcategories found' });
                    return;
                }
            } else {
                res.status(404).json({ message: 'TestType not found' });
                return;
            }
        } else {
            res.status(404).json({ message: 'User not found' });
            return;
        }
    } catch (error) {
        console.error('Error updating document:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

export async function schoolTotalTests(req: Request, res: Response): Promise<void> {
    try {
        // Define the filter criteria
        const filter = {
            username: req.user.username,
            email: req.user.email,
        };

        // Check if a document with the same testType exists
        const existingUser = await User.findOne(filter);

        const testTypes = existingUser?.testResults.map(result => result.testType).filter(Boolean);

        const general: Record<string, number> = {
            "Multiple Intelligence": 8,
            "Study Skills Profile Assessment": 8,
            "Aptitude": 6,
            "Emotional Intelligence": 5,
            "Learning Style": 3,
            "Leadership Style": 4,
            "Competitive State Anxiety Inventory": 3,
            "Students Wheel of Life": 10,
            "Leadership skills": 1,
            "Cyber Dependency": 1,
            "Left-Right Brain Dominance": 2,
            "Personality": 5
        };

        let testTypeCount: Record<string, number> = {};
        let differenceList: Record<string, number> = {};

        if (existingUser?.testResults) {
            existingUser?.testResults.forEach(result => {
                const { testType, subcategories } = result;
                const subcategoryCount = subcategories ? subcategories.length : 0;

                if (testType) {
                    if (testTypeCount[testType]) {
                        testTypeCount[testType] += subcategoryCount;
                    } else {
                        testTypeCount[testType] = subcategoryCount;
                    }
                }
            });

            // Compare testTypeCount with the general list and calculate the difference
            for (const testType in general) {
                if (general.hasOwnProperty(testType)) {
                    const maxCount = general[testType];
                    const count = testTypeCount[testType] || 0;
                    const difference = maxCount - count;
                    differenceList[testType] = difference;
                }
            }

            res.status(200).json({ success: true, differenceList: differenceList });
        } else {
            res.status(404).json({ success: false, error: "Not Found" });
        }
    } catch (error) {
        console.error('Error updating document:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

export async function collegeTotalTests(req: Request, res: Response): Promise<void> {
    try {
        // Define the filter criteria
        const filter = {
            username: req.user.username,
            email: req.user.email,
        };

        // Check if a document with the same testType exists
        const existingUser = await User.findOne(filter);

        const testTypes = existingUser?.testResults.map(result => result.testType).filter(Boolean);

        const general: Record<string, number> = {
            "Multiple Intelligence": 8,
            "Study Skills Profile Assessment": 8,
            "Aptitude": 6,
            "Emotional Intelligence": 5,
            "Learning Style": 3,
            "Leadership Style": 4,
            "Competitive State Anxiety Inventory": 3,
            "Students Wheel of Life": 10,
            "Leadership skills": 1,
            "Cyber Dependency": 1,
            "Left-Right Brain Dominance": 2,
            "Personality": 5,
            "Professional Skills Set Assessment": 1
        };

        let testTypeCount: Record<string, number> = {};
        let differenceList: Record<string, number> = {};

        if (existingUser?.testResults) {
            existingUser?.testResults.forEach(result => {
                const { testType, subcategories } = result;
                const subcategoryCount = subcategories ? subcategories.length : 0;

                if (testType) {
                    if (testTypeCount[testType]) {
                        testTypeCount[testType] += subcategoryCount;
                    } else {
                        testTypeCount[testType] = subcategoryCount;
                    }
                }
            });

            // Compare testTypeCount with the general list and calculate the difference
            for (const testType in general) {
                if (general.hasOwnProperty(testType)) {
                    const maxCount = general[testType];
                    const count = testTypeCount[testType] || 0;
                    const difference = maxCount - count;
                    differenceList[testType] = difference;
                }
            }

            res.status(200).json({ success: true, differenceList: differenceList });
        } else {
            res.status(404).json({ success: false, error: "Not Found" });
        }
    } catch (error) {
        console.error('Error updating document:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

export async function professionalTotalTests(req: Request, res: Response): Promise<void> {
    try {
        // Define the filter criteria
        const filter = {
            username: req.user.username,
            email: req.user.email,
        };

        // Check if a document with the same testType exists
        const existingUser = await User.findOne(filter);

        const testTypes = existingUser?.testResults.map(result => result.testType).filter(Boolean);

        const general: Record<string, number> = {
            "Multiple Intelligence": 8,
            "Emotional Intelligence": 5,
            "Learning Style": 3,
            "Leadership Style": 4,
            "Competitive State Anxiety Inventory": 3,
            "Wheel of Life": 10,
            "Leadership skills": 1,
            "Cyber Dependency": 1,
            "Left-Right Brain Dominance": 2,
            "Personality": 5,
            "Professional Suitability Assessment": 5,
            "Integrity Assessment": 1,
            "Emotional Styles": 6,
            "Entrepreneurship Suitability Assessment": 5,
            "Work Life Balance": 5,
            "Parenting Style": 4,
        };

        let testTypeCount: Record<string, number> = {};
        let differenceList: Record<string, number> = {};

        if (existingUser?.testResults) {
            existingUser?.testResults.forEach(result => {
                const { testType, subcategories } = result;
                const subcategoryCount = subcategories ? subcategories.length : 0;

                if (testType) {
                    if (testTypeCount[testType]) {
                        testTypeCount[testType] += subcategoryCount;
                    } else {
                        testTypeCount[testType] = subcategoryCount;
                    }
                }
            });

            // Compare testTypeCount with the general list and calculate the difference
            for (const testType in general) {
                if (general.hasOwnProperty(testType)) {
                    const maxCount = general[testType];
                    const count = testTypeCount[testType] || 0;
                    const difference = maxCount - count;
                    differenceList[testType] = difference;
                }
            }

            res.status(200).json({ success: true, differenceList: differenceList });
        } else {
            res.status(404).json({ success: false, error: "Not Found" });
        }
    } catch (error) {
        console.error('Error updating document:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

export async function checkScore(req: Request, res: Response): Promise<void> {
    try {
        // Define the filter criteria
        const filter = {
            username: req.user.username,
            email: req.user.email,
        };

        const testType = req.body.testType;
        const subCategory = req.body.subCategory;

        // Check if a document with the same testType exists
        const existingUser = await User.findOne(filter);

        if (existingUser) {
            // Find the test result with the matching testType
            const testResult = existingUser.testResults.find((result) => result.testType === testType);

            if (testResult) {
                // Find the subcategory with the matching name and get the score
                const subcategory = testResult.subcategories.find((sub) => sub.name === subCategory);

                if (subcategory) {
                    const score = subcategory.score;
                    res.status(200).json({ score });
                    return;
                } else {
                    res.status(404).json({ message: 'Subcategory not found in database' });
                    return;
                }
            } else {
                res.status(404).json({ message: 'TestType not found in database' });
                return;
            }
        } else {
            res.status(404).json({ message: 'User not found' });
            return;
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

export async function doneCarreerList(req: Request, res: Response): Promise<void> {
    try {
        const filter = {
            username: req.user.username,
            email: req.user.email,
        };

        // Check if a document with the same testType exists
        const existingUser = await User.findOne(filter);

        const carreerOptions = existingUser?.carreerOptions;

        if (carreerOptions) {
            if (carreerOptions.length > 0) {
                res.status(200).json({ status: true });
                return;
            } else {
                res.status(200).json({ status: false });
                return;
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
}

export async function multipleIRank(req: Request, res: Response): Promise<void> {
    try {
        // Define the filter criteria
        const filter = {
            username: req.user.username,
            email: req.user.email,
        };

        const testType = "Multiple Intelligence";

        // Check if a document with the same testType exists
        const existingUser = await User.findOne(filter);

        if (existingUser) {
            // Find the test result with the matching testType
            const testResult = existingUser.testResults.find((result) => result.testType === testType);

            if (testResult) {
                // Find the subcategory with the matching name and get the score
                const subcategories = testResult.subcategories;

                if (subcategories) {
                    const customSort = (arr: any) => {
                        return arr.reduce((sorted: any, item: any) => {
                            const index = sorted.findIndex((el: any) => item.score > el.score);
                            if (index === -1) {
                                sorted.push(item);
                            } else {
                                sorted.splice(index, 0, item);
                            }
                            return sorted;
                        }, []);
                    };

                    const sortedSubcategories = customSort(subcategories);
                    const sortedNames = sortedSubcategories.map((subcategory: any) => subcategory.name);

                    res.status(200).json({ sortedNames });
                    return;
                } else {
                    res.status(404).json({ message: 'No subcategories found' });
                    return;
                }
            } else {
                res.status(404).json({ message: 'TestType not found' });
                return;
            }
        } else {
            res.status(404).json({ message: 'User not found' });
            return;
        }
    } catch (error) {
        console.error('Error updating document:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
}

export async function doneSubTests(req: Request, res: Response): Promise<void> {
    try {
        // Define the filter criteria
        const filter = {
            username: req.user.username,
            email: req.user.email,
        };

        // Check if a document with the same testType exists
        const existingUser = await User.findOne(filter);

        const bodyTestType = req.body.testType;

        const testTypes = existingUser?.testResults.map(result => result.testType).filter(Boolean);

        const general: Record<string, Array<string>> = {
            "Aptitude": ["Linguistic", "Numerical", "Mechanical", "Abstract", "Spatial", "Logical"],
            "Study Skills Profile Assessment": ["Time Management and Procrastination", "Concentration and Memory", "Study Aids and Note-Taking", "Test Strategies and Test Anxiety", "Organizing and Processing Information", "Motivation and Attitude", "Reading and Selecting the Main Idea", "Writing"],
            "Students Wheel of Life": ["Academic Competency", "Health & Fitness", "Social Friends", "Discipline", "Good Manners", "Spirituality", "Goal Orientation", "Confidence", "Responsible", "Hobbies & Extracurriculars"],
            "Left-Right Brain Dominance": ["Right Brain", "Left Brain"],
            "Personality": ["Openness", "Conscientiousness", "Extroversion", "Agreeableness", "Neuroticism"],
            "Multiple Intelligence": ["Linguistic", "Logical", "Spatial", "Interpersonal", "Musical", "Naturalistic", "Intrapersonal", "Kinesthetic"],
            "Emotional Intelligence": ["Self-Awareness", "Managing Emotions", "Motivating Oneself", "Empathy", "Social Skill"],
            "Learning Style": ["Visual", "Auditory", "Kinesthetic"],
            "Leadership skills": ["Leadership"],
            "Leadership Style": ["Authoritative", "Democratic", "Facilitative", "Situational"],
            "Cyber Dependency": ["Cyber Dependency"],
            "Competitive State Anxiety Inventory": ["Cognitive Anxiety", "Somatic Anxiety", "Self-Confidence"],
            "Professional Skills Set Assessment": ["Professional Skills Set Assessment"],
            "Parenting Style": ["Authoritarian", "Authoritative", "Permissive", "Uninvolved"],
            "Work Life Balance": ["Time Management", "Boundaries and Communication", "Well-being and Self-Care", "Flexibility and Adaptability", "Relationships and Fulfilment"],
            "Wheel of Life": ["Money & Wealth", "Career & Work", "Health & Fitness", "Fun & Recreation", "Contribution", "Community", "Family", "Social & Friends", "Love & Romance", "Growth & Learning"],
            "Integrity Assessment": ["Integrity Assessment"],
            "Emotional Styles": ["Resilience", "Outlook", "Social Intuition", "Self-Awareness", "Sensitivity to Context", "Attention"],
            "Entrepreneurship Suitability Assessment": ["Vision and Risk Assessment", "Passion and Commitment", "Decision-Making and Responsibility", "Innovation and Adaptability", "Market Awareness"],
            "Professional Suitability Assessment": ["Skills and Qualifications", "Passion and Interest", "Work-Life Balance and Demands", "Long-Term Goals", "Market Demand and Trends"]
        };

        const finalArray: number[] = [];

        if (existingUser) {
            // Find the test result with the matching testType
            const testResult = existingUser.testResults.find((result) => result.testType === bodyTestType);
            const theList = general[bodyTestType];

            if (testResult && theList) {
                theList.forEach(sub => {
                    const foundSubcategory = testResult.subcategories.find((subcategory) => subcategory.name === sub);

                    if (foundSubcategory) {
                        finalArray.push(1);
                    } else {
                        finalArray.push(0);
                    }
                });
                res.status(200).json({ success: true, finalArray: finalArray });
                return;
            } else if (theList) {
                theList.forEach(sub => {
                    finalArray.push(0);
                });
                res.status(200).json({ success: true, finalArray: finalArray });
                return;
            } else {
                res.status(404).json({ message: 'testType not found' });
                return;
            }
        } else {
            res.status(404).json({ message: 'User not found' });
            return;
        }
    } catch (error) {
        console.error('Error updating document:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};