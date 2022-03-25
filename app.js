const dotenv = require('dotenv').config()
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db')

connectDB()

// ejsの使用
app.set('view engine', 'ejs');

// クライアントに配信されるサーバ情報を削除
app.disable('x-powered-by');

// 静的ページ設定
app.use( express.static(__dirname + "/public") );

// jsonおよびPOSTされたformデータを受け取る
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// ルーティング
app.use('/', require('./routes/index'));

// 起動
app.listen(PORT, () => console.log(`Server started. http://localhost:${PORT}`));