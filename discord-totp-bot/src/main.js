import { DiscordHono } from 'discord-hono';
import * as OTPAuth from 'otpauth';

const app = new DiscordHono()
  .command('authenticate', c => {
    let totp = new OTPAuth.TOTP({
      algorithm: "SHA1",
      digits: 6,
      period: 30,
      secret: c.env.TOTP_SECRET_KEY,
    });

    let token = totp.generate();
    const currentSeconds = Math.floor(Date.now() / 1000);
    const counter = 30 - (currentSeconds % 30);

    return c.res({
      embeds: [
        {
          title: "認証コードが発行されました",
          color: 0x57F287, 
          fields: [
            {
              name: "認証コード",
              value: `${token}`, 
              inline: false
            },
            {
              name: "残り有効時間",
              value: `${counter}秒`,
              inline: false
            }
          ]
        }
      ],
    });
  });

export default app;