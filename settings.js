//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='{"noiseKey":{"private":{"type":"Buffer","data":"+AfZgiKx27xHSDOI7ieDcRInvEWtc3AfDj0yCGT/N2M="},"public":{"type":"Buffer","data":"tBB4UkCiquHq46cVAgy0x6MtWZRPNQgNxmkY11asJXI="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"iAkZz57Lo3CBO7JAZvHNGtrbSic0AuMWnoq6e8J1uVg="},"public":{"type":"Buffer","data":"3Nz2JKd72aHk5bMlq8TQkeBd4sKkrOZ5apIFgydPXmo="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"4OSTi3UPVuVgPGcIdQ5VM7H5Vfir+a1hfP59MFrb4Ek="},"public":{"type":"Buffer","data":"t/i96E4XXILwdK5ggN+CAMYme5SD0uIsNGXdk0YrsTM="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"qAbXQ6Z2JqF0mmNB3ZTzN991ALurd9GMVDT/0RHKHG0="},"public":{"type":"Buffer","data":"B9TgSgprOhw7404Im8DusObkmLRzQKxe00y0aE97Wig="}},"signature":{"type":"Buffer","data":"XxSbPAd1PYr+aehJWhwHHE3/BHlOBIBZxFEoZalH9oTzn266NegK1QLwkEjc6LKSSNMwgC8zb2zEbl0vOqLIAQ=="},"keyId":1},"registrationId":107,"advSecretKey":"g2lJKliCtDuMCx5vc9bL8RpwuawDwIc7PgLV4jdZBqw=","processedHistoryMessages":[{"key":{"remoteJid":"254115112551@s.whatsapp.net","fromMe":true,"id":"9283CE197517DF10D7A7F63A6C3706EF"},"messageTimestamp":1718655434},{"key":{"remoteJid":"254115112551@s.whatsapp.net","fromMe":true,"id":"B21837C7833D3BEBE453DED045E9012A"},"messageTimestamp":1718655435}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"lZV7VOsXSnm6kK7otNbIfw","phoneId":"ad701b49-fe63-43ec-bf98-2dc4efb75672","identityId":{"type":"Buffer","data":"Ezk0yLk7oXBT+xeY7V/8HmpDiSg="},"registered":true,"backupToken":{"type":"Buffer","data":"S9a5FuAj5GsanlIPqeY3bdgYtu4="},"registration":{},"pairingCode":"WAL7TPF9","me":{"id":"254115112551:20@s.whatsapp.net","lid":"80479566974995:20@lid","name":"."},"account":{"details":"CMamlpIFEMGzwrMGGAMgACgA","accountSignatureKey":"QIk8ssT8NclapGyzgjIU47LvyUe450pBAXIdPGJ3dG0=","accountSignature":"mEYp7/eBsdPweG3thWbK48EinKhgJ4EkXVCfa7dMzIaP0qWtuqAU4EY6PUdmiKpmMeAojcpvWceb+jAU9il7Dw==","deviceSignature":"96GonLSIbsW1+YQtsG0PkQi6ze2Gk5kCVupWt3DX2DcFzjlfL8LBRfjXlfNef0LCLANKHzu0jHtWOQCPvEpxCg=="},"signalIdentities":[{"identifier":{"name":"254115112551:20@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUCJPLLE/DXJWqRss4IyFOOy78lHuOdKQQFyHTxid3Rt"}}],"platform":"android","lastAccountSyncTimestamp":1718655428,"myAppStateKeyId":"AAAAAJyl"}'

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'morgan rein' //ur bot name
global.ownernumber = '254115112551' //ur owner number
global.ownername = 'mk💀' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "Sticker By mk thee demigod"
global.author = "🦄드림 가이 Xeon\n\n+254115112551"
global.creator = "254115112551@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["254115112551"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v5' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
