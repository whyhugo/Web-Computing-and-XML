let generatedXML = '';

// 處理文件上傳
document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (!file) {
        alert('請選擇一個 TXT 檔案！');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const content = e.target.result;
        document.getElementById('inputText').value = content.trim();
    };
    reader.onerror = function () {
        alert('讀取檔案時發生錯誤，請再試一次。');
    };
    reader.readAsText(file, 'UTF-8');
});

// 生成 XML 文件
function generateXML() {
    const inputText = document.getElementById('inputText').value.trim();
    const outputXML = document.getElementById('outputXML');

    if (!inputText) {
        outputXML.textContent = '請提供有效的輸入資料。';
        return;
    }

    const lines = inputText.split('\n');
    let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n<players>\n';

    for (const line of lines) {
        const [number, name, atBats, hits, avg] = line.split(',').map(item => item.trim());
        if (!number || !name || !atBats || !hits || !avg) {
            outputXML.textContent = '輸入格式錯誤，請檢查每行的內容。';
            return;
        }
        xmlContent += `  <player>\n`;
        xmlContent += `    <number>${number}</number>\n`;
        xmlContent += `    <name>${name}</name>\n`;
        xmlContent += `    <atBats>${atBats}</atBats>\n`;
        xmlContent += `    <hits>${hits}</hits>\n`;
        xmlContent += `    <average>${avg}</average>\n`;
        xmlContent += `  </player>\n`;
    }

    xmlContent += '</players>';
    generatedXML = xmlContent; // 儲存生成的 XML 內容
    outputXML.textContent = xmlContent;

    // 顯示下載按鈕
    document.getElementById('downloadBtn').style.display = 'block';
}

// 下載 XML 文件
function downloadXML() {
    if (!generatedXML) {
        alert('請先生成 XML 文件！');
        return;
    }

    const blob = new Blob([generatedXML], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'players.xml'; // 預設文件名
    link.click();
    URL.revokeObjectURL(url); // 釋放 URL 資源
}