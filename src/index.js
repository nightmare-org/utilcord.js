const { chunk, ms, StringToMs, shuffleArray, formatDate, calculateDateDifference, parseDate, calculate, generateRandomNumber, roundNumber, convertNumberFormat, encryptMessage, decryptMessage, hashPassword, isEmailValid, isDomainValid } = require('./features/utils');

module.exports = {

    checkUpdate: async () => {
        const packageData = await require('node-fetch')(`https://registry.npmjs.com/utilcord.js`).then(text => text.json())
        if (require('../package.json').version !== packageData['dist-tags'].latest) {
            console.log('\n\n')
            console.log('\x1b[32m' + '---------------------------------------------------')
            console.log('\x1b[32m' + '| @ utilcord                               - [] X |')
            console.log('\x1b[32m' + '---------------------------------------------------')
            console.log('\x1b[33m' + `|            The module is\x1b[31m out of date !\x1b[33m          |`)
            console.log('\x1b[35m' + '|             New version is available!           |')
            console.log('\x1b[34m' + `|                   ${require('../package.json').version} --> ${packageData['dist-tags'].latest}              |`)
            console.log('\x1b[36m' + '|             Run "npm i utilcord.js@latest"         |')
            console.log('\x1b[36m' + '|                    to update!                   |')
            console.log('\x1b[32m' + '---------------------------------------------------\x1b[37m')
            console.log('\n\n')
        }
    },

    Paginate: require('./features/paginate.js'),
    Markdown: require('./features/markdown.js'),
    Captcha: require('./features/captcha.js'),
    AntiCrash: require('./features/anti-crash),
    DiscordTogether: require('./features/discordtogether.js'),
    chunk,
    ms,
    StringToMs,
    shuffleArray,
    formatDate,
    calculate,
    generateRandomNumber,
    roundNumber,
    convertNumberFormat,
    encryptMessage,
    decryptMessage,
    hashPassword,
    calculateDateDifference,
    parseDate,
    isEmailValid,
    isDomainValid
}
