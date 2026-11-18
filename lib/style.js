// ============================================
// 🌸 HAREEM FATIMA MD BOT - STYLE HELPER
// 👑 Developer: ʜᴀʀᴇᴇᴍ ꜰᴀᴛɪᴍᴀ
// 🔥 Consistent styling across all plugins
// ============================================

const config = require('../settings');

/**
 * 🎀 Girl Style Box
 * @param {string} title - Box title
 * @param {Array} rows - Array of [emoji, label, value]
 * @param {string} footer - Custom footer (optional)
 * @returns {string} Formatted message
 */
function girlBox(title, rows, footer = null) {
    const body = rows.map(([emoji, label, value]) => 
        `│  ✿ ${emoji} ${label}: ${value || ''}`
    ).join('\n');
    
    return `
╭────────────────────◇
│  ✿ ${title} ✿
│  ✌︎㋡━━━━━━━━━✌︎㋡
${body}
╰────────────────────○

> 🦋⃟ 𝙈𝙄𝙎𝙃𝙐 𝙌𝙐𝙀𝙀𝙉 𝙈𝙄𝙉𝙄 🦋⃟‌💙࿐
`.trim();
}

/**
 * 🎀 Girl Style Box - Alternative
 */
function girlBoxAlt(title, rows) {
    const body = rows.map(([emoji, label, value]) => 
        `│  ✿ ${emoji} ${label}: ${value || ''}`
    ).join('\n');
    
    return `
╭────────────────────◇
│ 💕⃝🕊️ ${title} 💕⃝🕊️
│  ✿━━━━━━━━━━━━━━━✿
${body}
╰────────────────────○

> 🦋⃟ 𝙈𝙄𝙎𝙃𝙐 𝙌𝙐𝙀𝙀𝙉 𝙈𝙄𝙉𝙄 🦋⃟‌💙࿐
`.trim();
}

/**
 * 🎀 Simple Message with Style
 */
function girlMessage(text, title = null) {
    const titleLine = title ? `│  ✿ ${title} ✿\n│  ✌︎㋡━━━━━━━━━✌︎㋡\n` : '';
    return `
╭────────────────────◇
${titleLine}${text.split('\n').map(line => `│  ✿ ${line}`).join('\n')}
╰────────────────────○

> 🦋⃟ 𝙈𝙄𝙎𝙃𝙐 𝙌𝙐𝙀𝙀𝙉 𝙈𝙄𝙉𝙄 🦋⃟‌💙
`.trim();
}

/**
 * 🎀 Success Message
 */
function girlSuccess(message) {
    return girlMessage(`✅ ${message}`, '✅ Sᴜᴄᴄᴇss');
}

/**
 * 🎀 Error Message
 */
function girlError(message) {
    return girlMessage(`❌ ${message}`, '❌ Eʀʀᴏʀ');
}

/**
 * 🎀 Warning Message
 */
function girlWarning(message) {
    return girlMessage(`⚠️ ${message}`, '⚠️ Wᴀʀɴɪɴɢ');
}

/**
 * 🎀 Info Message
 */
function girlInfo(message) {
    return girlMessage(`📌 ${message}`, '📌 Iɴғᴏ');
}

/**
 * 🎀 Help Message
 */
function girlHelp(title, rows) {
    const body = rows.map(([emoji, label, value]) => 
        `│  ✿ ${emoji} ${label}: ${value || ''}`
    ).join('\n');
    
    return `
╭────────────────────◇
│  ✿ ${title} ✿
│  ✌︎㋡━━━━━━━━━✌︎㋡
${body}
╰────────────────────○

> 🦋⃟ 𝙈𝙄𝙎𝙃𝙐 𝙌𝙐𝙀𝙀𝙉 𝙈𝙄𝙉𝙄 🦋⃟‌💙
`.trim();
}

module.exports = {
    girlBox,
    girlBoxAlt,
    girlMessage,
    girlSuccess,
    girlError,
    girlWarning,
    girlInfo,
    girlHelp
};
