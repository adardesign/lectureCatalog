const express = require('express')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const path = require("path");
const fs = require("fs");

const server = express();

//server.use(express.static('static'))
//server.use(express.static('dist'))
server.use('/dist', express.static(path.join(__dirname, 'dist')))


server.get('/', (req, res) => {
  var file = fs.readFileSync(path.resolve(__dirname,'./src/documents/index.html'), "utf8");
	return res.send(file);
})

server.get('/c/:id', (req, res) => {
	return app.render(req, res, '/CategoryPage', req.query)
})

server.get('/about', (req, res) => {
	return app.render(req, res, '/About', req.query)
})

// server.get('*', (req, res) => {
// 	return handle(req, res)
// })

server.listen(port, (err) => {
	if (err) throw err
	console.log(`> Ready on http://localhost:${port}`)
})