/**
 * The Client used for handling enmap database
 * @class Uptime Web Client
 */
class UpWebClient {
    /**
     * @param {Object} Data 
     */
    constructor(Data = {}) {
        Object.keys(Data).forEach(x => this[x] = new (require("enmap"))({ name: Data[x] }))
    }
}

module.exports = UpWebClient