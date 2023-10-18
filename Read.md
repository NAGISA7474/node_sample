## Node.jsの基本
1. プロジェクトフォルダ作成

例）
express_sample

2. プロジェクトフォルダを「VSCode」で開く

3. VSCodeのターミナルを開く

### 初期化
```shell
npm init -y
```

### パッケージインストール
```shell
npm i パッケージ名
```

#### 例
```shell
npm i express dotenv
```
### Node.jsサーバの作成と起動
1. サーバプログラム「server.js」

プログラムはGitHub参照

2. 

```shell
npm i パッケージ名
```

## npxコマンドでエラーになる場合
### エラー
```shell
npm ERR! code ENOENT
npm ERR! syscall lstat
npm ERR! path C:\Users\xxxx\AppData\Roaming\npm
npm ERR! errno -4058
npm ERR! enoent ENOENT: no such file or directory, lstat 'C:\Users\xxxx\AppData\Roaming\npm'  
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent
```

### 原因
Node.js v18.18.0（Windows版）のバグ

### 解決方法
ユーザホームの/AppData/Roaming/ に「npm」フォルダを作成