const fs = require("fs");
const mkdirp = require("mkdirp");

class Reporter {
  static createDirectory(dirName) {
    //Check if the directory exist
    if (!fs.existsSync(dirName)) {
      mkdirp.sync(dirName);
    }
  }

  static createAllureXML() {
    const allureReporter = require("cucumberjs-allure-reporter");
    const xmlReports = process.cwd() + "/reports/xml";
    Reporter.createDirectory(xmlReports);
    allureReporter.config({
      targetDir: xmlReports
    })
  }
}

module.exports = Reporter;
