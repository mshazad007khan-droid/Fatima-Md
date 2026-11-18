// ============================================
// 🌸 HAREEM FATIMA MD BOT - TAP TO SELECT MENU
// 👑 Single Select + Image + Text
// 💖 Girl Power Mode: ON
// ============================================

const { mishu, commands } = require('../mishu');
const { sendInteractiveMessage } = require('gifted-btns');
const moment = require('moment-timezone');
const config = require('../config');
const axios = require('axios');
const { fakevCard } = require('../lib/fakevCard');
const { runtime } = require('../lib/functions');

// ============================================
// 📌 VIDEO & AUDIO URLS
// ============================================
const VIDEO_URLS = [
    'https://github.com/ArslanMDofficial/ARSLAN-MD-DATA/raw/main/data/menu-video.mp4',
    'https://github.com/ArslanMDofficial/ARSLAN-MD-DATA/raw/main/data/menu-video1.mp4',
    'https://github.com/ArslanMDofficial/ARSLAN-MD-DATA/raw/main/data/menu-video2.mp4',
    'https://github.com/ArslanMDofficial/ARSLAN-MD-DATA/raw/main/data/menu-video3.mp4',
    'https://github.com/ArslanMDofficial/ARSLAN-MD-DATA/raw/main/data/menu-video4.mp4',
    'https://github.com/ArslanMDofficial/ARSLAN-MD-DATA/raw/main/data/menu-video5.mp4',
    'https://github.com/ArslanMDofficial/ARSLAN-MD-DATA/raw/main/data/menu-video6.mp4',
    'https://github.com/ArslanMDofficial/ARSLAN-MD-DATA/raw/main/data/menu-video7.mp4',
    'https://github.com/ArslanMDofficial/ARSLAN-MD-DATA/raw/main/data/menu-video8.mp4',
    'https://github.com/ArslanMDofficial/ARSLAN-MD-DATA/raw/main/data/menu-video9.mp4',
    'https://github.com/ArslanMDofficial/ARSLAN-MD-DATA/raw/main/data/menu-video10.mp4',
    'https://github.com/ArslanMDofficial/ARSLAN-MD-DATA/raw/main/data/menu-video11.mp4',
    'https://github.com/ArslanMDofficial/ARSLAN-MD-DATA/raw/main/data/menu-video12.mp4',
    'https://github.com/ArslanMDofficial/ARSLAN-MD-DATA/raw/main/data/menu-video13.mp4',
    'https://github.com/ArslanMDofficial/ARSLAN-MD-DATA/raw/main/data/menu-video14.mp4'
];

const AUDIO_URLS = [
    'https://files.catbox.moe/p314az.mp3',
    'https://files.catbox.moe/mx2x8j.mp3',
    'https://files.catbox.moe/vu1pse.mp3',
    'https://files.catbox.moe/p316az.mp3',
    'https://files.catbox.moe/5v6e10.mp3'
];

// ============================================
// 📌 CATEGORY IMAGES
// ============================================
const CATEGORY_IMAGES = {
    menu_settings: require('path').join(__dirname, '..', 'assets', 'hareem.jpg'),
    menu_group: require('path').join(__dirname, '..', 'assets', 'hareem.jpg'),
    menu_islamic: require('path').join(__dirname, '..', 'assets', 'hareem.jpg'),
    menu_text: require('path').join(__dirname, '..', 'assets', 'hareem.jpg'),
    menu_download: require('path').join(__dirname, '..', 'assets', 'hareem.jpg'),
    menu_utility: require('path').join(__dirname, '..', 'assets', 'hareem.jpg'),
    menu_owner: require('path').join(__dirname, '..', 'assets', 'hareem.jpg'),
    menu_extra: require('path').join(__dirname, '..', 'assets', 'hareem.jpg'),
    menu_ai: require('path').join(__dirname, '..', 'assets', 'hareem.jpg'),
    menu_stalk: require('path').join(__dirname, '..', 'assets', 'hareem.jpg')
};

// ============================================
// 📌 HELPERS
// ============================================
function formatUptime(seconds) {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${d}d ${h}h ${m}m ${s}s`;
}

function getGreeting() {
    const time = moment().tz('Asia/Karachi').format('HH:mm:ss');
    if (time < '05:00:00') return 'ɢᴏᴏᴅ ɴɪɢʜᴛ 🌌';
    if (time < '12:00:00') return 'ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ 🌄';
    if (time < '15:00:00') return 'ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌅';
    if (time < '18:00:00') return 'ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌃';
    if (time < '20:00:00') return 'ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌃';
    return 'ɢᴏᴏᴅ ɴɪɢʜᴛ 🌌';
}

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// ============================================
// 🎬 MAIN MENU (Random Video + Audio)
// ============================================
mishu({
    pattern: "menu",
    alias: ["help", "cmds", "commands", "allmenu2"],
    desc: "🌸 Tap to select menu with random video + audio",
    category: "main",
    react: "🌸",
    filename: __filename
}, async (mishu, mek, m, { from, reply, pushname }) => {
    try {
        // ── Reactions ──────────────────────────────────────────
        const reactions = ['⏳', '🔄', '⚙️', '✅'];
        for (const emoji of reactions) {
            await mishu.sendMessage(from, { react: { text: emoji, key: mek.key } }).catch(() => {});
            await new Promise(resolve => setTimeout(resolve, 200));
        }

        // ── Stats ──────────────────────────────────────────────
        const totalCommands = commands.length;
        const uptime = runtime(process.uptime());
        const memory = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
        const botName = config.BOT_NAME || "💕⃝🕊️ 𝗛𝗮𝗿𝗲𝗲𝗺 𝗙𝗮𝘁𝗶𝗺𝗮 𝗠𝗗 𝗕𝗼𝘁 💕⃝🕊️";
        const ownerName = config.OWNER_NAME || "ᴹᴿAʀꜱʟᴀɴ-ᴍD ";
        const prefix = config.PREFIX || ".";
        const pushName = pushname || 'User';
        const pakTime = moment().tz('Asia/Karachi').format('hh:mm:ss A');
        const pakDate = moment().tz('Asia/Karachi').format('DD/MM/YYYY');
        const greeting = getGreeting();

        // ── Select Random Video & Audio ──────────────────────
        const randomVideo = getRandomItem(VIDEO_URLS);
        const randomAudio = getRandomItem(AUDIO_URLS);

        // ── Build Menu Text ────────────────────────────────────
        const headerText = `
╭───────────────────◇
│ 💕⃝🕊️ 𝗛𝗮𝗿𝗲𝗲𝗺 𝗙𝗮𝘁𝗶𝗺𝗮 𝗠𝗗 𝗕𝗼𝘁 💕⃝🕊️
│㋡━━━━━━━━━━━━━━━━㋡
││♡⪼ 👤 User: ${pushName}
││♡⪼ 👑 Owner: ${ownerName}
││♡⪼ ⏰ Time: ${pakTime}
││♡⪼ 📅 ${pakDate}
││♡⪼ ⏳ ${uptime}
││♡⪼ 📊 Commands: ${totalCommands}
││♡⪼ 💾 Memory: ${memory} MB
││♡⪼ 🔧 Prefix: ${prefix}
││♡⪼ 🌟 ${greeting}
╰───────────────────○
❦Ａｒｓｌａｎ－ＭＤ－Ｍｉｎｉ

💖 *ᴛᴀᴘ ᴛᴏ ᴏᴘᴇɴ ᴍᴇɴᴜ" ʙᴇʟᴏᴡ ᴛᴏ sᴇʟᴇᴄᴛ ᴀ ᴄᴀᴛᴇɢᴏʀʏ*
        `.trim();

        // ── Context Info ───────────────────────────────────────
        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363348739987203@newsletter',
                newsletterName: '🦋⃟ 𝙈𝙄𝙎𝙃𝙐 𝙌𝙐𝙀𝙀𝙉 𝙈𝙄𝙉𝙄 🦋⃟‌💙࿐',
                serverMessageId: 143
            }
        };

        // ── STEP 1: Send Random Video ─────────────────────────
        try {
            const headCheck = await axios.head(randomVideo).catch(() => null);
            if (headCheck && headCheck.status === 200) {
                await mishu.sendMessage(from, {
                    video: { url: randomVideo },
                    mimetype: 'video/mp4',
                    ptv: true,
                    caption: `🌸 *${botName}* 💖\n👑 Welcome ${pushName || 'Princess'}!`,
                    gifPlayback: false,
                    contextInfo: contextInfo
                }, { quoted: fakevCard });
            }
        } catch (videoError) {
            console.log('🌸 Video send skipped:', videoError.message);
        }

        // ── STEP 2: Send Image + Tap to Select ────────────────
        const imageUrl = config.MENU_IMAGE_URL || require('path').join(__dirname, '..', 'assets', 'hareem.jpg');

        // ── Categories ─────────────────────────────────────────
        const categories = [
            { id: 'menu_settings', title: '⚙️ ʙᴏᴛ sᴇᴛᴛɪɴɢs' },
            { id: 'menu_group', title: '🛡 ɢʀᴏᴜᴘ ᴛᴏᴏʟs' },
            { id: 'menu_islamic', title: '☪️ ɪsʟᴀᴍɪᴄ' },
            { id: 'menu_text', title: '🎨 ᴛᴇxᴛ ᴇғғᴇᴄᴛs' },
            { id: 'menu_download', title: '📥 ᴅᴏᴡɴʟᴏᴀᴅᴇʀ' },
            { id: 'menu_utility', title: '🛠 ᴜᴛɪʟɪᴛʏ' },
            { id: 'menu_owner', title: '👑 ᴏᴡɴᴇʀ' },
            { id: 'menu_extra', title: '📌 ᴇxᴛʀᴀ' },
            { id: 'menu_ai', title: '🤖 ᴀɪ' },
            { id: 'menu_stalk', title: '👀 sᴛᴀʟᴋ' }
        ];

        // ── Send Interactive Message ──────────────────────────
        await sendInteractiveMessage(mishu, from, {
            text: headerText,
            footer: `💖 ${botName} | ${uptime}`,
            interactiveButtons: [
                {
                    name: 'single_select',
                    buttonParamsJson: JSON.stringify({
                        title: '🔖 ᴛᴀᴘ ᴛᴏ ᴏᴘᴇɴ ᴍᴇɴᴜ 💻',
                        sections: [{
                            title: '📌 ᴄᴀᴛᴇɢᴏʀɪᴇs',
                            highlight_label: '🔍 sᴇʟᴇᴄᴛ',
                            rows: categories.map(cat => ({
                                title: cat.title,
                                description: `Tap to view ${cat.title} commands`,
                                id: cat.id
                            }))
                        }]
                    })
                },
                // ── URL Buttons ──────────────────────────
                {
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: '💖 🄶🅁🄾🅄🄿 ✌︎㋡',
                        url: config.GROUP_LINK || 'https://chat.whatsapp.com/IVh7TBHhueX64Gz4TAOdVM'
                    })
                },
                {
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: '🎀 🄲🄷🄰🄽🄽🄴🄻 ✌︎㋡',
                        url: config.CHANNEL_LINK || 'https://whatsapp.com/channel/0029VarfjW04tRrmwfb8x306'
                    })
                },
                {
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: '👑 🄾🅆🄽🄴🅁 ✌︎㋡',
                        url: config.OWNER_LINK || 'https://wa.me/923237045919'
                    })
                }
            ]
        });

        // ── STEP 3: Send Random Audio ─────────────────────────
        try {
            const audioCheck = await axios.head(randomAudio).catch(() => null);
            if (audioCheck && audioCheck.status === 200) {
                await mishu.sendMessage(from, {
                    audio: { url: randomAudio },
                    mimetype: 'audio/mpeg',
                    ptt: false,
                    contextInfo: contextInfo
                }, { quoted: fakevCard });
            }
        } catch (audioError) {
            console.log('🌸 Audio send skipped:', audioError.message);
        }

        // ── Reaction ───────────────────────────────────────────
        await mishu.sendMessage(from, { react: { text: '💖', key: mek.key } });

    } catch (error) {
        console.error('🌸 Menu Error:', error);
        
        // ── Fallback: Simple menu ──────────────────────────────
        try {
            const fallbackMenu = `
╭────────────────────◇
│ 💕⃝🕊️ 𝗛𝗮𝗿𝗲𝗲𝗺 𝗙𝗮𝘁𝗶𝗺𝗮 𝗠𝗗 𝗕𝗼𝘁 💕⃝🕊️
│  ✿━━━━━━━━━━━━━━━✿
│  ✿ 🤖 Bot: ${config.BOT_NAME || 'HAREEM FATIMA MD BOT'}
│  ✿ 👑 Owner: ${config.OWNER_NAME || 'HAREEM FATIMA MD BOT'}
│  ✿ 📊 Commands: ${commands.length}
│  ✿ ⏱️ Uptime: ${runtime(process.uptime())}
│  ✿ 📌 Prefix: ${config.PREFIX || '.'}
╰────────────────────○

> 🦋⃟ 𝙈𝙄𝙎𝙃𝙐 𝙌𝙐𝙀𝙀𝙉 𝙈𝙄𝙉𝙄 🦋⃟‌💙࿐`;
            await reply(fallbackMenu);
        } catch (fallbackError) {
            reply(`🌸 Error loading menu: ${error.message} 💕`);
        }
    }
});

// ============================================
// 📌 CATEGORY MENU COMMANDS (With Image)
// ============================================

// ── Settings Menu ────────────────────────────
mishu({
    pattern: "menu_settings",
    alias: ["settings"],
    desc: "🌸 Bot settings commands",
    category: "menu",
    react: "⚙️",
    filename: __filename
}, async (mishu, mek, m, { from, reply }) => {
    const text = `
╭────────────────────◇
│  ✿ ⚙️ ʙᴏᴛ sᴇᴛᴛɪɴɢs ✿
│  ✿━━━━━━━━━━━━━━━✿
│  ✿ .public / .private
│  ✿ .antidelete on/off
│  ✿ .status on/off
│  ✿ .anticall on/off
│  ✿ .autoreacts on/off
│  ✿ .welcome on/off
│  ✿ .alive
│  ✿ .ping
│  ✿ .setprefix [char]
│  ✿ .setmenupic [url/reply]
╰────────────────────○
> 🦋⃟ 𝙈𝙄𝙎𝙃𝙐 𝙌𝙐𝙀𝙀𝙉 𝙈𝙄𝙉𝙄 🦋⃟‌💙࿐
    `.trim();
    
    await mishu.sendMessage(from, {
        image: { url: CATEGORY_IMAGES.menu_settings },
        caption: text,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true
        }
    }, { quoted: mek });
});

// ── Group Menu ───────────────────────────────
mishu({
    pattern: "menu_group",
    alias: ["groupmenu"],
    desc: "🌸 Group tools commands",
    category: "menu",
    react: "🛡",
    filename: __filename
}, async (mishu, mek, m, { from, reply }) => {
    const text = `
╭────────────────────◇
│  ✿ 🛡 ɢʀᴏᴜᴘ ᴛᴏᴏʟs ✿
│  ✿━━━━━━━━━━━━━━━✿
│  ✿ .kick (reply to user)
│  ✿ .leave (bot leaves group)
│  ✿ .addmember [number]
│  ✿ .add [number]
│  ✿ .mute / .unmute
│  ✿ .promote / .demote
│  ✿ .tagall [note]
│  ✿ .admintag [note]
│  ✿ .tag [text] (or reply)
│  ✿ .hidetag [text]
│  ✿ .link
│  ✿ .revoke
│  ✿ .setgname [name]
│  ✿ .setgdesc [text]
│  ✿ .groupinfo
│  ✿ .antilink on/off
│  ✿ .antitag on/kick/off
╰────────────────────○
> 🦋⃟ 𝙈𝙄𝙎𝙃𝙐 𝙌𝙐𝙀𝙀𝙉 𝙈𝙄𝙉𝙄 🦋⃟‌💙࿐
    `.trim();
    
    await mishu.sendMessage(from, {
        image: { url: CATEGORY_IMAGES.menu_group },
        caption: text,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true
        }
    }, { quoted: mek });
});

// ── Islamic Menu ─────────────────────────────
mishu({
    pattern: "menu_islamic",
    alias: ["islamic"],
    desc: "🌸 Islamic commands",
    category: "menu",
    react: "☪️",
    filename: __filename
}, async (mishu, mek, m, { from, reply }) => {
    const text = `
╭────────────────────◇
│  ✿ ☪️ ɪsʟᴀᴍɪᴄ ✿
│  ✿━━━━━━━━━━━━━━━✿
│  ✿ .asmaulhusna [1-20]
╰────────────────────○
> 🦋⃟ 𝙈𝙄𝙎𝙃𝙐 𝙌𝙐𝙀𝙀𝙉 𝙈𝙄𝙉𝙄 🦋⃟‌💙࿐
    `.trim();
    
    await mishu.sendMessage(from, {
        image: { url: CATEGORY_IMAGES.menu_islamic },
        caption: text,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true
        }
    }, { quoted: mek });
});

// ── Text Effects Menu ────────────────────────
mishu({
    pattern: "menu_text",
    alias: ["texteffects"],
    desc: "🌸 Text effects commands",
    category: "menu",
    react: "🎨",
    filename: __filename
}, async (mishu, mek, m, { from, reply }) => {
    const text = `
╭────────────────────◇
│  ✿ 🎨 ᴛᴇxᴛ ᴇғғᴇᴄᴛs ✿
│  ✿━━━━━━━━━━━━━━━✿
│  ✿ .matrix [text]
│  ✿ .1917 [text]
│  ✿ .fancy [text]
╰────────────────────○
> 🦋⃟ 𝙈𝙄𝙎𝙃𝙐 𝙌𝙐𝙀𝙀𝙉 𝙈𝙄𝙉𝙄 🦋⃟‌💙࿐
    `.trim();
    
    await mishu.sendMessage(from, {
        image: { url: CATEGORY_IMAGES.menu_text },
        caption: text,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true
        }
    }, { quoted: mek });
});

// ── Download Menu ─────────────────────────────
mishu({
    pattern: "menu_download",
    alias: ["dlmenu", "download"],
    desc: "🌸 Download & media commands",
    category: "menu",
    react: "📥",
    filename: __filename
}, async (mishu, mek, m, { from, reply }) => {
    const text = `
╭────────────────────◇
│  ✿ 📥 ᴅᴏᴡɴʟᴏᴀᴅᴇʀ & ᴍᴇᴅɪᴀ ✿
│  ✿━━━━━━━━━━━━━━━✿
│  ✿ .song [name]
│  ✿ .play [name/url]
│  ✿ .ytdl [name/url]
│  ✿ .video [name/url]
│  ✿ .ytmp3 [url]
│  ✿ .ytmp4 [url]
│  ✿ .dp (get profile pic)
│  ✿ .getpp [number]
│  ✿ .vv (reply to once view)
│  ✿ .save (reply to media)
│  ✿ .facebook [url]
│  ✿ .fb [url]
│  ✿ .tiktok [url]
│  ✿ .mediafire [url]
│  ✿ .instagram [url]
│  ✿ .igdl [url]
│  ✿ .apk [app name]
│  ✿ .weather [city]
│  ✿ .sticker (reply to image)
╰────────────────────○
> 🦋⃟ 𝙈𝙄𝙎𝙃𝙐 𝙌𝙐𝙀𝙀𝙉 𝙈𝙄𝙉𝙄 🦋⃟‌💙࿐
    `.trim();
    
    await mishu.sendMessage(from, {
        image: { url: CATEGORY_IMAGES.menu_download },
        caption: text,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true
        }
    }, { quoted: mek });
});

// ── Utility Menu ─────────────────────────────
mishu({
    pattern: "menu_utility",
    alias: ["utility"],
    desc: "🌸 Utility commands",
    category: "menu",
    react: "🛠",
    filename: __filename
}, async (mishu, mek, m, { from, reply }) => {
    const text = `
╭────────────────────◇
│  ✿ 🛠 ᴜᴛɪʟɪᴛʏ ✿
│  ✿━━━━━━━━━━━━━━━✿
│  ✿ .simdata [number]
│  ✿ .time
│  ✿ .repo
│  ✿ .owner
│  ✿ .ping
│  ✿ .alive
│  ✿ .runtime
│  ✿ .calc [expression]
│  ✿ .enc [javascript code]
╰────────────────────○
> 🦋⃟ 𝙈𝙄𝙎𝙃𝙐 𝙌𝙐𝙀𝙀𝙉 𝙈𝙄𝙉𝙄 🦋⃟‌💙࿐
    `.trim();
    
    await mishu.sendMessage(from, {
        image: { url: CATEGORY_IMAGES.menu_utility },
        caption: text,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true
        }
    }, { quoted: mek });
});

// ── Owner Menu ───────────────────────────────
mishu({
    pattern: "menu_owner",
    alias: ["ownermenu"],
    desc: "🌸 Owner commands",
    category: "menu",
    react: "👑",
    filename: __filename
}, async (mishu, mek, m, { from, reply }) => {
    const text = `
╭────────────────────◇
│  ✿ 👑 ᴏᴡɴᴇʀ ✿
│  ✿━━━━━━━━━━━━━━━✿
│  ✿ .shutdown (restart)
│  ✿ .block / .unblock
│  ✿ .join / .leave
│  ✿ .forward <jid1,jid2,...> (reply)
│  ✿ .broadcast <message>
│  ✿ .setppbot (reply)
│  ✿ .anticall on/off
│  ✿ .autotyping on/off
│  ✿ .alwaysonline on/off
│  ✿ .autoread on/off
╰────────────────────○
> 🦋⃟ 𝙈𝙄𝙎𝙃𝙐 𝙌𝙐𝙀𝙀𝙉 𝙈𝙄𝙉𝙄 🦋⃟‌💙࿐
    `.trim();
    
    await mishu.sendMessage(from, {
        image: { url: CATEGORY_IMAGES.menu_owner },
        caption: text,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true
        }
    }, { quoted: mek });
});

// ── Extra Menu ───────────────────────────────
mishu({
    pattern: "menu_extra",
    alias: ["extra"],
    desc: "🌸 Extra commands",
    category: "menu",
    react: "📌",
    filename: __filename
}, async (mishu, mek, m, { from, reply }) => {
    const text = `
╭────────────────────◇
│  ✿ 📌 ᴇxᴛʀᴀ ✿
│  ✿━━━━━━━━━━━━━━━✿
│  ✿ .pair [number]
│  ✿ .botstatus
│  ✿ .menu
│  ✿ .left (leave group)
│  ✿ .alive2
╰────────────────────○
> 🦋⃟ 𝙈𝙄𝙎𝙃𝙐 𝙌𝙐𝙀𝙀𝙉 𝙈𝙄𝙉𝙄 🦋⃟‌💙࿐
    `.trim();
    
    await mishu.sendMessage(from, {
        image: { url: CATEGORY_IMAGES.menu_extra },
        caption: text,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true
        }
    }, { quoted: mek });
});

// ── AI Menu ──────────────────────────────────
mishu({
    pattern: "menu_ai",
    alias: ["aimenu"],
    desc: "🌸 AI commands",
    category: "menu",
    react: "🤖",
    filename: __filename
}, async (mishu, mek, m, { from, reply }) => {
    const text = `
╭────────────────────◇
│  ✿ 🤖 ᴀɪ ✿
│  ✿━━━━━━━━━━━━━━━✿
│  ✿ .ai [question]
│  ✿ .gpt [question]
│  ✿ .gemini [question]
│  ✿ .dalle [prompt]
│  ✿ .remini (reply to image)
│  ✿ .aiart [prompt]
│  ✿ .text2img [prompt]
╰────────────────────○
> 🦋⃟ 𝙈𝙄𝙎𝙃𝙐 𝙌𝙐𝙀𝙀𝙉 𝙈𝙄𝙉𝙄 🦋⃟‌💙࿐
    `.trim();
    
    await mishu.sendMessage(from, {
        image: { url: CATEGORY_IMAGES.menu_ai },
        caption: text,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true
        }
    }, { quoted: mek });
});

// ── Stalk Menu ───────────────────────────────
mishu({
    pattern: "menu_stalk",
    alias: ["stalk"],
    desc: "🌸 Stalk commands",
    category: "menu",
    react: "👀",
    filename: __filename
}, async (mishu, mek, m, { from, reply }) => {
    const text = `
╭────────────────────◇
│  ✿ 👀 sᴛᴀʟᴋ ✿
│  ✿━━━━━━━━━━━━━━━✿
│  ✿ .tiktokstalk [username]
│  ✿ .instastalk [username]
│  ✿ .githubstalk [username]
│  ✿ .nowa [number]
│  ✿ .truecaller [number]
╰────────────────────○
> 🦋⃟ 𝙈𝙄𝙎𝙃𝙐 𝙌𝙐𝙀𝙀𝙉 𝙈𝙄𝙉𝙄 🦋⃟‌💙࿐
    `.trim();
    
    await mishu.sendMessage(from, {
        image: { url: CATEGORY_IMAGES.menu_stalk },
        caption: text,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true
        }
    }, { quoted: mek });
});

console.log('🌸 HAREEM FATIMA MD BOT - Tap to Select Menu with Image + Text Loaded! 💖');
console.log('📌 Video URLs: ${VIDEO_URLS.length} | Audio URLs: ${AUDIO_URLS.length}');
console.log('📌 Category images: ${Object.keys(CATEGORY_IMAGES).length}');
