const { argv } = require('yargs');

const timeout = argv.timeout || 90 * 1000;
const selectedSpecs = [];

selectedSpecs.push(
    `./e2e/tests/features/**/*.feature`
);
  
exports.config = {
    runner: 'local',
    framework: 'cucumber',
    sync: true,
    logLevel: 'error',
    deprecationWarnings: true,
    outputDir: './e2e/test-report/output',
    bail: 0,
    coloredLogs: true,
    waitforTimeout: timeout,
    connectionRetryTimeout: timeout,
    specs: selectedSpecs,
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: true,
            },
        ],
    ],
    cucumberOpts: {
        backtrace: false,
        compiler: [],
        dryRun: false,
        failAmbiguousDefinitions: true,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: true,
        tagExpression: 'not @skip',
        tagsInTitle: false,
        tags: [],
        timeout,
        ignoreUndefinedDefinitions: true,
    },

    services: ['appium'],
    appium: {
        log: false,
        args: {},
        command: 'appium',
    },

    port: 4723,
};