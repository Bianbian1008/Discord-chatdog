import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();

const TOKEN = process.env.CHAT_DOG; // Discord bot token
const prefix = '-';         // 辨識指令的關鍵字

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,           //群組
        GatewayIntentBits.GuildMessages,    //群組訊息
        GatewayIntentBits.MessageContent    //訊息內容
    ]
});

// -- Client events --

client.on('ready', () => {
    console.log('Ready!');
});


client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;


    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift()?.toLowerCase();

    console.log('--', command);

    if (command === 'ping') {
        message.reply('pone');
    }
    if (command === 'time') {
        let objectDate = new Date();
        let year = objectDate.getFullYear();
        let month = objectDate.getMonth();
        let day = objectDate.getDate();
        let getDay = objectDate.getDay();
        let days = ['日', '一', '二', '三', '四', '五', '六'];
        message.reply(`今天是： ${year}年 ${month + 1}月 ${day}日 星期${days[getDay]}`);
    }

});

client.login(TOKEN);