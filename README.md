# 依存

```
$ node -v
v10.16.0
```

# 手順

## インストール

```
$ yarn
```

## コンフィグファイルをコピーして適宜設定

```
$ cp config/config.json.sample config/config.json
$ vi config/config.json
```

## テーブルをつくる

例えば、usersという名前のテーブルをDBにつくる

```
$ yarn sequelize-cli migration:generate --name users
```

すると、`migrations/*-users.js` というファイルができる

## スキーマを作る

```
$ vi migrations/*-users.js
```

スキーマの作り方はリポジトリにあるサンプルコード`migrations/20200320063514-users.js` を参考にしてください。

## マイグレーション実行

（、、の前に、手動で任意のデータベースをcreateしてください）

```
$ yarn sequelize-cli db:migrate
```

## シードデータを追加する

```
$ yarn sequelize-cli seed:generate --name test-users
```

すると、`seeders/*-test-users.js` というファイルができるのでここに任意のデータを入れる

下記のコマンドでデータをinsertする

```
$ yarn sequelize-cli db:seed:all
```







