const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {

    fs.readFile("minor_project.html", (err, data) => {
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write("NOTE : MONGODB with NODE.JS minor project")
        res.write(data)
        return res.end()
    })

}).listen(3000, () => console.log("Server accessed the content"));
