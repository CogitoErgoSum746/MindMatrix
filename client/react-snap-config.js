// react-snap-config.js
module.exports = {
    staticRoutes: [
        '/',
        '/training',
        '/training/corporateleadership',
        '/training/businesscoaching',
        '/training/students',
        '/training/teachers',
        '/training/parents',
        '/mindwellness',
        '/facilitative',
        '/termsandconditions',
        '/certificate',
        '/certificate/:id',
        '/about',
        '/ContactUs',
        '/psychometrictest',
    ],
    excludeFiles: [
        'Test.js',
        'TestPage.js',
        'AdminPanel.js',
        'Careeropt.js',
        'Getusers.js',
        '**/test/**',
        '**/testpattern/**',
    ],
    // Additional configuration options if needed
    // (See: https://github.com/stereobooster/react-snap#options)
    // For example:
    puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
    puppeteerConcurrency: 10,
};
