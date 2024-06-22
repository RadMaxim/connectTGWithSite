import PDFDocument from 'pdfkit'
import fs from 'fs'
import path from 'path'

let json= fs.readFileSync(path.join("clients","clients.json"),{encoding:"utf-8"})
// Пример JSON данных


// Функция для создания PDF из JSON
function createPDF(data, outputPath) {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(outputPath));
    let arr = JSON.parse(data)
console.log(arr)
// data = Array.from(data)
    // Добавление заголовка
    // doc.fontSize(20).text(data, { align: 'center' });
    // doc.fontSize(14).text(`Author: ${data.author}`, { align: 'center' });
    // doc.moveDown();

    // Добавление контента
    arr.forEach(item => {
        doc.fontSize(16).text(item.name);
        doc.fontSize(12).text(item.email);
        doc.moveDown();
    });

    doc.end();
}

// Создание PDF файла
const outputPath = 'output.pdf';
createPDF(json, outputPath);

console.log(`PDF создан и сохранен в ${outputPath}`);
