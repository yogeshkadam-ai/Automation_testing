rm -rf allure-results
rm -rf allure-report


npx wdio run wdio.android.conf.js --spec test/specs/createNotes
allure generate allure-results --clean

node sendReport.js


rm -rf allure-results
rm -rf allure-report

npx wdio run wdio.android.conf.js --suite notesList

allure generate allure-results --clean

node sendReport.js
