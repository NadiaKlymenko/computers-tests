const jsonReports = process.cwd() + "/reports/json";
const Reporter = require("./reporter");

exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  baseUrl: "http://computer-database.herokuapp.com/",
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: ["../src/features/*.feature"],
  onPrepare: function() {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    require('babel-register');
    Reporter.createDirectory(jsonReports);
  },
  cucumberOpts: {
    strict: false,
    format: 'json:./reports/json/cucumber_report.json',
    require: ["../src/step-definitions/*.js", "../src/utils/*.js"]
  },
  onComplete: function () {
    Reporter.createAllureXML();
  }
};
