const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  const outputDir = '/Users/mohammedabulhasan/Projects/Next JS Projects/resume-app';
  const outputPath = path.join(outputDir, 'Mohammed Abulhasan - Software Engineer.pdf');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    
    await page.setViewport({
      width: 1200,
      height: 1600,
      deviceScaleFactor: 2,
    });

    const resumeUrl = 'http://localhost:3000/resumes/software-engineer';
    
    console.log(`Navigating to ${resumeUrl}...`);
    await page.goto(resumeUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    await page.waitForSelector('main', { timeout: 5000 });
    
    await page.addStyleTag({
      content: `
        @page {
          size: A4;
          margin: 0;
        }
        body {
          margin: 0;
          padding: 0;
        }
        .max-w-\[8\.5in\] {
          max-width: 100% !important;
          padding: 0 !important;
        }
      `,
    });

    const pdfBuffer = await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in',
      },
      preferCSSPageSize: true,
    });

    console.log(`PDF generated successfully at: ${outputPath}`);
    console.log(`File size: ${(pdfBuffer.length / 1024).toFixed(2)} KB`);
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

generatePDF();