const UpWebClient = new (require("./UpWebClient"))({
    WebsiteData: "WebsiteData"
})

const ExpressApp = require("express")()

require("./ExpressServer")(UpWebClient, ExpressApp)
require("./Uptimer")(UpWebClient)