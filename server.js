const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 10000;

// раздаём сайт
app.use(express.static(__dirname));

// главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Flick запущен на порту ${PORT}`);
});