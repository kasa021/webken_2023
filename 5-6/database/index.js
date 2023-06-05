const sqlite3 = require("sqlite3").verbose();
const queries = require("./queries");
const { serve } = require("@hono/node-server");
const { Hono } = require("hono");

const db = new sqlite3.Database("database.db");

db.serialize(() => {
    db.run(queries.Tweets.createTable);
    db.run(queries.Users.createTable);

    db.run(queries.Users.create, 'りんご太郎', 'apple@example.com', '2022-08-15 00:00:00');
    db.run(queries.Users.create, 'みかん次郎', 'mikan@example.com', '2022-08-15 00:00:01');
    db.run(queries.Users.create, 'ぶどう三郎', 'budo@example.com', '2022-08-15 00:00:02');

    db.run(queries.Tweets.create, 'あけおめ！', 3, '2023-01-01 00:00:00');
    db.run(queries.Tweets.create, '今年もよろしくお願いします！', 2, '2023-01-01 00:00:01');
    db.run(queries.Tweets.create, '今年こそは痩せるぞ！', 1, '2023-01-01 00:00:02');
});

const HTML = (body) => `  
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>これはただの文字列です</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    ${body}
</body>
</html>
`;  // htmlを返す関数

const app = new Hono();  // インスタンス化

app.get("/", async (c) => {  // ルーティング
    const tweets = await new Promise((resolve) => {  // プロミスを返す
        db.all(queries.Tweets.findAll, (err, rows) => {  // データベースから全てのツイートを取得
            resolve(rows);
        });
    });

    const tweetList = tweets.map((tweet) => `<div class="tweet">${tweet.content}</div>`).join("\n");  // ツイートを一つずつ取り出して、HTMLに埋め込む

    // HTMLを返す
    const response = HTML(`
        <h1 class="title">ツイート一覧</h1>
        <div class="tweet-list">
            ${tweetList}
        </div>
    `);

    return c.html(response);  // レスポンスを返す
});

serve(app);

process.stdin.on("data", (data) => {  // 終了処理
    if (data.toString().trim() === "q") {
        db.close();
        process.exit();
    }
});
