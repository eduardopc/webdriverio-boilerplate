const { join } = require('path');

const { config } = require('./wdio.conf');

config.cucumberOpts.require = ['./e2e/tests/steps/**/*.steps.js'];

config.capabilities = [
  {
    platformName: 'Android',
    maxInstances: 1,
    'appium:deviceName': 'emulator-5554',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'UiAutomator2',
    'appium:app': join(process.cwd(), './e2e/apps/webdriverio.apk'),
    excludeDriverLogs: ['*'],
    'appium:noReset': false,
    'appium:fullReset': true,
    'appium:dontStopAppOnReset': true,
    'appium:autoGrantPermissions': true,
    'appium:newCommandTimeout': 60,
  },
];

exports.config = config;