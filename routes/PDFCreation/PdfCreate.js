const fs = require("fs");
const path = require("path");
const puppeteer = require('puppeteer');
const handlebars = require("handlebars");


async function createPDF(data) {
    var templateHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    var template = handlebars.compile(templateHtml);
    var html = template(data);

    var milis = new Date();
    milis = milis.getTime();

    var pdfPath = path.join(__dirname, `../../pdf/${data.KW}-${data.Vorname}-${data.Nachname}.pdf`);

    var options = {
        format: 'A4',
        printBackground: true,
        path: pdfPath,

        landscape: true

    }

    const browser = await puppeteer.launch({
        args: ['--no-sandbox'],
        headless: true
    });

    var page = await browser.newPage();
    await page.emulateMediaType('screen');
    await page.goto(`data:text/html;charset=UTF-8,${html}`, {
        waitUntil: 'networkidle0'
    });

    await page.pdf(options);
    await browser.close();
}

module.exports.creadePDF = createPDF;