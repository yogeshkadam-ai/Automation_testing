const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Email Configuration
const EMAIL_USER = 'admin@farmerp.com';
const EMAIL_PASSWORD = 'yxsktqlngvlfbrcj';

// Comma separated emails
const RECIPIENTS =
  'yogesh.kadam@shivrai.co.in,bharat.kardile@shivrai.co.in,pranay.khirid@shivrai.co.in';
  // ,sachin.divekar@shivrai.co.in,vishal.atole@shivrai.co.in';

async function sendReport() {
  try {

    const SUMMARY_PATH = './allure-report/widgets/summary.json';
    const SUITES_PATH = './allure-report/widgets/suites.json';

    if (!fs.existsSync(SUMMARY_PATH)) {
      throw new Error(`Summary file not found: ${SUMMARY_PATH}`);
    }

    if (!fs.existsSync(SUITES_PATH)) {
      throw new Error(`Suites file not found: ${SUITES_PATH}`);
    }

    const summary = JSON.parse(
      fs.readFileSync(SUMMARY_PATH, 'utf8')
    );

    const suites = JSON.parse(
      fs.readFileSync(SUITES_PATH, 'utf8')
    );

    const stats = summary.statistic;

    const total = stats.total || 0;
    const passed = stats.passed || 0;
    const failed = stats.failed || 0;
    const broken = stats.broken || 0;
    const skipped = stats.skipped || 0;

    const passPercentage =
      total > 0
        ? ((passed / total) * 100).toFixed(2)
        : '0.00';

    const durationMs =
      summary.time?.duration || 0;

    const minutes =
      Math.floor(durationMs / 60000);

    const seconds =
      Math.floor((durationMs % 60000) / 1000);

    const executionDuration =
      `${minutes}m ${seconds}s`;

    const failedTests = [];
    const brokenTests = [];

    (suites.items || []).forEach(item => {

      if ((item.statistic?.failed || 0) > 0) {
        failedTests.push(item.name);
      }

      if ((item.statistic?.broken || 0) > 0) {
        brokenTests.push(item.name);
      }

    });

    const status =
      failed > 0 || broken > 0
        ? 'FAILED ❌'
        : 'PASSED ✅';

    const statusColor =
      failed > 0 || broken > 0
        ? '#dc3545'
        : '#28a745';

    const recommendation =
      failed > 0 || broken > 0
        ? '❌ Deployment Not Recommended'
        : '✅ Deployment Ready';

    const failedHtml =
      failedTests.length > 0
        ? failedTests.map(test => `
            <tr>
              <td style="padding:10px;border-bottom:1px solid #eee;">
                ${test}
              </td>
            </tr>
          `).join('')
        : `
          <tr>
            <td style="padding:10px;color:#28a745;">
              No Failed Scenarios
            </td>
          </tr>
        `;

    const brokenHtml =
      brokenTests.length > 0
        ? brokenTests.map(test => `
            <tr>
              <td style="padding:10px;border-bottom:1px solid #eee;">
                ${test}
              </td>
            </tr>
          `).join('')
        : `
          <tr>
            <td style="padding:10px;color:#28a745;">
              No Broken Scenarios
            </td>
          </tr>
        `;

    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD
      }
    });

    const html = `
    <!DOCTYPE html>
    <html>

    <body style="
      margin:0;
      padding:20px;
      background:#f4f6f9;
      font-family:Arial,sans-serif;
    ">

    <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
    <td align="center">

    <table width="900" cellpadding="0" cellspacing="0"
      style="
      background:white;
      border-radius:12px;
      overflow:hidden;
      box-shadow:0 3px 15px rgba(0,0,0,0.1);
      ">

      <tr>
        <td style="
          background:${statusColor};
          color:white;
          text-align:center;
          padding:25px;
        ">
          <h1 style="margin:0;">
            Automation Execution Report
          </h1>

          <div style="
            font-size:22px;
            margin-top:10px;
            font-weight:bold;
          ">
            ${status}
          </div>
        </td>
      </tr>

      <tr>
        <td style="padding:25px;">

          <h2 style="margin-top:0;">
            Executive Summary
          </h2>

          <table width="100%">
            <tr>
              <td><b>Application</b></td>
              <td>FarmERP Mobile</td>

              <td><b>Environment</b></td>
              <td>UAT</td>
            </tr>

            <tr>
              <td><b>Platform</b></td>
              <td>Android</td>

              <td><b>Execution Time</b></td>
              <td>${new Date().toLocaleString()}</td>
            </tr>

            <tr>
              <td><b>Duration</b></td>
              <td>${executionDuration}</td>

              <td><b>Pass Rate</b></td>
              <td>${passPercentage}%</td>
            </tr>
          </table>

        </td>
      </tr>

      <tr>
      <td style="padding:0 25px 25px 25px;">

      <table width="100%">
      <tr>

      <td align="center">
        <div style="
          background:#eef2ff;
          padding:20px;
          border-radius:10px;
        ">
          <div style="font-size:28px;font-weight:bold;">
            ${total}
          </div>
          <div>Total</div>
        </div>
      </td>

      <td align="center">
        <div style="
          background:#ecfdf5;
          padding:20px;
          border-radius:10px;
        ">
          <div style="
            font-size:28px;
            font-weight:bold;
            color:#10b981;
          ">
            ${passed}
          </div>
          <div>Passed</div>
        </div>
      </td>

      <td align="center">
        <div style="
          background:#fef2f2;
          padding:20px;
          border-radius:10px;
        ">
          <div style="
            font-size:28px;
            font-weight:bold;
            color:#ef4444;
          ">
            ${failed}
          </div>
          <div>Failed</div>
        </div>
      </td>

      <td align="center">
        <div style="
          background:#fff7ed;
          padding:20px;
          border-radius:10px;
        ">
          <div style="
            font-size:28px;
            font-weight:bold;
            color:#f97316;
          ">
            ${broken}
          </div>
          <div>Broken</div>
        </div>
      </td>

      <td align="center">
        <div style="
          background:#f8fafc;
          padding:20px;
          border-radius:10px;
        ">
          <div style="
            font-size:28px;
            font-weight:bold;
          ">
            ${skipped}
          </div>
          <div>Skipped</div>
        </div>
      </td>

      </tr>
      </table>

      </td>
      </tr>

      <tr>
        <td style="padding:0 25px 25px 25px;">

          <div style="
            padding:20px;
            border-left:6px solid ${statusColor};
            background:#fafafa;
          ">
            <h3 style="margin-top:0;">
              Deployment Recommendation
            </h3>

            <div style="
              font-size:18px;
              font-weight:bold;
            ">
              ${recommendation}
            </div>
          </div>

        </td>
      </tr>

      <tr>
        <td style="padding:0 25px 25px 25px;">

          <h3 style="color:#dc3545;">
            Failed Scenarios (${failedTests.length})
          </h3>

          <table width="100%">
            ${failedHtml}
          </table>

        </td>
      </tr>

      <tr>
        <td style="padding:0 25px 25px 25px;">

          <h3 style="color:#f97316;">
            Broken Scenarios (${brokenTests.length})
          </h3>

          <table width="100%">
            ${brokenHtml}
          </table>

        </td>
      </tr>

      <tr>
        <td style="
          background:#f8fafc;
          text-align:center;
          padding:20px;
          color:#64748b;
          font-size:12px;
        ">
          This report was automatically generated by the FarmERP Mobile App.
        </td>
      </tr>

    </table>

    </td>
    </tr>
    </table>

    </body>
    </html>
    `;

    await transporter.sendMail({
      from: EMAIL_USER,
      to: RECIPIENTS,
      subject:
        `[${failed > 0 || broken > 0 ? 'FAILED' : 'PASSED'}] ` +
        `Automation Report | Total:${total} Passed:${passed} Failed:${failed} Broken:${broken}`,
      html
    });

    console.log('================================');
    console.log('Email Sent Successfully');
    console.log('================================');

  } catch (error) {

    console.error('Failed to send report');
    console.error(error);
    process.exit(1);

  }
}

sendReport();