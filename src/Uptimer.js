/**
 * @param {import("./UpWebClient")} UpWebClient 
 */
module.exports = async (UpWebClient) => {
    setInterval(() => {
        UpWebClient.WebsiteData.array().forEach(async x => {
            let Res = ''
            try {
                await require("axios").default.get(x)
                Res = "Success"
            } catch(Err) {
                Res = "Error"
            } finally {
                console.log(`[Uptime Log] ${x} -> ${Res} (${require("moment")(Date.now()).format("hh:mm:ss DD-MM-YYYY")})`)
            }
        })
    }, 60000)
}