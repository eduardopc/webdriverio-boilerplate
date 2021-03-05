const { join } = require('path');

const { config } = require('./wdio.shared.conf');

config.cucumberOpts.require = ['./e2e/tests/steps/**/*.steps.js'];

config.capabilities = [
  {
    platformName: 'iOS',
    maxInstances: 1,
    'appium:deviceName': 'iPhone 8',
    'appium:platformVersion': '13.2',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'XCUITest',
    'appium:app': join(process.cwd(), './e2e/apps/webdriverio.ipa'),
    'appium:noReset': false,
    'appium:newCommandTimeout': 240,
    'appium:autoAcceptAlerts': true,
    'appium:fullReset': true,
    'appium:connectHardwareKeyboard': true,
  },
];

exports.config = config;