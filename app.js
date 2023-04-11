const express = require("express")
const app = express()
const port = 3000

// Register public folder and send it to the client
app.use(express.static(__dirname + "/public"))

// Create routes

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/home.html")
})

app.get("/about", (req, res) => {
	res.sendFile(__dirname + "/views/about.html")
})

// Challenge: Create a cat page
// The cat page shows the cat image
app.get("/works", (req, res) => {
	res.sendFile(__dirname + "/views/works.html")
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})