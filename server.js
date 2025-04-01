const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// CORSを許可（クライアント側からアクセス可能にする）
app.use(cors());

// ログイン時のアクセス情報を取得
app.get("/track", (req, res) => {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const userAgent = req.headers["user-agent"];
    console.log(`🔍 ログインが検出されました: IP=${ip}, ブラウザ=${userAgent}`);

    res.json({ message: "アクセスログを記録しました" });
});

// サーバー起動
app.listen(PORT, () => {
    console.log(`🚀 サーバーが http://localhost:${PORT} で動作中`);
});
