let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0882-9405-2009]
│ •  [0838-1939-2007]
│ •  [0881-1369-340]
│ •  [0882-2092-4312]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
