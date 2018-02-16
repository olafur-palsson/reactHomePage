const Express = require("express")
const serveStatic = require("serve-static")

$e = Express()

$e.get("/", (req, res) => res.send("Hello World!"))
$e.use(serveStatic('public/ftp', {'index': ['index.html']}))

$e.listen(3000, () => console.log("shiiiimang"))
