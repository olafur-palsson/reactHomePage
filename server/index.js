const Express = require("express")
const serveStatic = require("serve-static")

$e = Express()

$e.set("port", process.env.PORT || 8080)

$e.get("/", (req, res) => res.sendFile("./index.html"))
$e.use(serveStatic('./..', {'index': ['index.html']}))
console.log($e.get("port"))
$e.listen($e.get("port"))
