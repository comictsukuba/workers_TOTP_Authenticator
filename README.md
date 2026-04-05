# Discord TOTP Authenticator

Cloudflare Workers上で動作し、DiscordのスラッシュコマンドからTOTP（Time-based One-Time Password）コードを生成・取得できるサーバーレスアプリケーションです。

## 特徴

* **サーバーレス駆動**: Cloudflare Workersと `discord-hono` フレームワークを利用し、高速かつインフラ管理不要で動作します。
* **残り時間の表示**: 現在のタイムステップに基づき、認証コードの残り有効秒数を計算して表示します。
* **自動デプロイ**: GitHub Actionsを利用し、mainブランチへのプッシュ時にCloudflareへ自動でデプロイされる環境を構築しています。

