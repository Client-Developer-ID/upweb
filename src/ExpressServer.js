/**
 * 
 * @param {import("./UpWebClient")} UpWebClient 
 * @param {any} ExpressApp 
 */
module.exports = async (UpWebClient, ExpressApp) => {
    ExpressApp.set("view engine", "ejs");

    ExpressApp.set("views", "./src/views/");

    ExpressApp.get("/", (Req, Res) => {
        return Res.render("index", {
            UpWebClient
        })
    })

    ExpressApp.get("/submit", async (Req, Res) => {
        try {
            await require("axios").default.get(Req.query.url)
        } catch (Err) {
            return Res.render("error", {
                UpWebClient
            })
        }

        UpWebClient.WebsiteData.set(UpWebClient.WebsiteData.size > 0 ? `${UpWebClient.WebsiteData.size + 1}` : `${UpWebClient.WebsiteData.size}`, Req.query.url)
        return Res.render("success", {
            UpWebClient
        })
    })

    ExpressApp.listen(3000, () => {
        console.log("Uptime Web is Ready!")
    })
}