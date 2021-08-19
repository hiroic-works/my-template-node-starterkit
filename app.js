const express = require('express')
const app = express();
const router = require('./routes/index')
const PORT = process.env.PORT || 3000;

// ejsの使用
app.set('view engine', 'ejs');

// クライアントに配信されるサーバ情報を削除
app.disable('x-powered-by');

// 静的ページ設定
app.use( express.static(__dirname + "/public") );

// ルーティング
app.use('/', router);

// 起動
app.listen(PORT, () => console.log(`Server started. http://localhost:${PORT}`));