const Express = require("express")

$e = Express()

$e.get("/", (req, res) => res.send("Hello World!"))
$e.use("./..", express.static("public"))

$e.listen(3000, () => console.log("shiiiimang"))