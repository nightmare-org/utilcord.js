const { EventEmitter } = require('events');
const colors = require("colors");

class AntiCrash extends EventEmitter {
    constructor(client, options) {
        super();
        this.client = client
        this.options = options

        client.on(`ready`, async () => {
            console.log(`> [utilcord-anticrash] loaded`.green)
            if (!client) {
            throw new ReferenceError(`> [utilcord-anticrash]: discord.client is invalid!`.red)
            } else if (!options.enableAntiCrash) {
                throw new TypeError(`> [utilcord-anticrash]: Option antiCrash is blank / has no value!`.red)
            } else if (options.enableAntiCrash == "false") {
                console.log(`> [utilcord-anticrash]: Option enableAntiCrash is disabled, and won't be preventing bot termination`.red)
            } else if (options.enableAntiCrash == "true") {
                catching()
            } else {
                throw new SyntaxError(`> [utilcord-anticrash]: is not valid!`)
            }
        })

        async function catching() {
            console.log(`> [utilcord-anticrash]: is now preventing bot termination`.blue);
            process.on("unhandledRejection", (reason, p) => {
                console.log(`> [utilcord-anticrash]: Unhadled Rejection/Catch`.red);
                console.log(reason, p);
            });
            process.on("uncaughtException", (err, origin) => { 
                console.log(`> [utilcord-anticrash]: Uncaught Exception/Catch (Monitor)`.red);
                console.log(err, origin);
            });
            process.on("uncaughtExceptionMonitor", (err, origin) => {
                console.log(`> [utilcord-anticrash]: Uncaught Exception/Catch (Monitor)`.red);
                console.log(err, origin);
            })
        }

    }
}

module.exports = AntiCrash;
