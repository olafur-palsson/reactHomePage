const Express = require("express")
const serveStatic = require("serve-static")

$e = Express()

$e.set("port", process.env.PORT || 8080)

$e.use(serveStatic(__dirname))
console.log($e.get("port"))
$e.listen($e.get("port"))
