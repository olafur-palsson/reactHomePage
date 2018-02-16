const Express = require("express")
const serveStatic = require("serve-static")

$e = Express()

$e.set("port", process.env.PORT || 80)

$e.use(serveStatic(__dirname))
$e.listen($e.get("port"))
