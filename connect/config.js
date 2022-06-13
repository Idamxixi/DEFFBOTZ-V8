
const fs = require("fs")
const chalk = require("chalk")
/*Ubah Nama & Dll Cukup Dari sini(Udah Di set biar smua nama & wm Bisa diubah dari sini) 
Biar Newbie Gapusing ubah nama² 
Other*/
global.thum = fs.readFileSync("./worker/media/image/thumb.jpg")
global.log0 = fs.readFileSync("./worker/media/image/thumb.jpg")
global.err4r = fs.readFileSync("./worker/media/image/thumb.jpg")
global.owner = ['6285691890852','6285691890852','6285691890852']
global.footer = "𝚞𝚕𝚝𝚛𝚊𝚖𝚊𝚗𝚋𝚘𝚝𝚣 ~ ｉｄａｍｘｉｘｉツ"
global.fake = "𝚞𝚕𝚝𝚛𝚊𝚖𝚊𝚗𝚋𝚘𝚝𝚣 ~ ｉｄａｍｘｉｘｉツ"
global.namebot = "𝚞𝚕𝚝𝚛𝚊𝚖𝚊𝚗𝚋𝚘𝚝𝚣 - ｉｄａｍｘｉｘｉツ"
global.packname = "Buatan Siapa? Buatan ｉｄａｍｘｉｘｉツ\nMau nomor nya? 085691890852\nOrangnya ganteng dan baik\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
global.packname2 = "BY ｉｄａｍｘｉｘｉツ ~ 𝚞𝚕𝚝𝚛𝚊𝚖𝚊𝚗𝚋𝚘𝚝𝚣"
global.author = "ｉｄａｍｘｉｘｉツ"
global.email = "idamxixi@gmail.com"
global.game = "𝚞𝚕𝚝𝚛𝚊𝚖𝚊𝚗𝚋𝚘𝚝𝚣 Game"
global.nameown = "©ｉｄａｍｘｉｘｉツ"
global.resultwibu = "Nih kak Resultnya, Dasar Wibu"
global.nameyt = "ｉｄａｍｂｏｔｚ"
global.instagram = "https://instagram.com/idam_unyi10"
global.sessionName = "session"
global.github = "https://github.com/Idamxixi"
global.done = "Done :)"
global.linkgrupss = "https://chat.whatsapp.com/EHByam2PJGiKrSclraOftK"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    linkm: 'Linknya Mana Kak?',
    ban: 'Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner'
}
global.BerryAwal = 5000
global.limitAwal= 20
global.gamewaktu = 50
global.waktu = 60000

//-[❌Jangan Ubah bagian ini❌]
global.tebakgambar = []
global.rkyt = []
global.hit = []
global.banUser = ['6285691890852@s.whatsapp.net']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.wlcm = ['120363043965529911@g.us','120363023112413670@g.us','19054091487-1424650263@g.us','120363022988111568@g.us']
global.gcrevoke = ['19054091487-1424650263@g.us'] 
global.ntidel = ['120363043965529911@g.us']
multipref = true;
oneprefix = false;
preff = "!"
//-[❌❌❌❌❌❌❌❌❌❌]
// REGEXX //
global.YtIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:|watch\?.*(?:|\&)v=|embed\/|v\/|shorts\/)|youtu\.be\/)([-_0-9A-Za-z]{11}|[-_0-9A-Za-z]{10})/
global.IgIdRegex = /((?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel)\/([^/?#&]+))/
global.FbIdRegex = /(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]*)/
global.TwitIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|mobile\.|))(?:twitter\.com)\/([a-zA-Z0-9-_\.]{3,20})\/(?:status)\/([?=0-9a-z]{15,25})([a-zA-Z=0-9]{3,6})/
global.TtIdRegex = /(?:http(?:s|):\/\/|)(?:www\.|)(?:tiktok.com)\/@([-_0-9A-Za-z\.]{3,20})\/video\/([0-9]{19,25})?.(?:sender_device=pc&sender_web_id=[0-9]{19,25})&.(?:s_from_webapp=v1&is_copy_url=[0-9]{1})|(?:http(?:s|)):\/\/(?:(?:vt.|vm.)tiktok.com)\/(?:[a-z0-9A-Z]{9,15}\/)|(?:http(?:s|)):\/\/(?:t.tiktok.com)\/(?:i18n\/share\/video)\/([&\?\/a-zA-Z0-9=_-]{333,400})/

//𝘿𝙖𝙩𝙖𝙗𝙖𝙨𝙚
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})