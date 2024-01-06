const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req)
    if (req.url === '/'){
        res.end('Welcome to home page!')
    }
    else if (req.url === '/about'){
        res.end('Welcome to the about page!!')
    }
    else {
        res.end(`<h1>Oops! <a href="/">Home Page</a></h1>`)
    }

})

server.listen(8000)