const express = require("express")
const app = express()
const cors = require("cors")
const User = require("./db/userList")
require("./db/config")

app.use(express.json())
app.use(cors())

app.post("/", async (req, resp) => {
	const user = await User(req.body)
	const data = await user.save()
	resp.send(data)
	console.log(data)
})

app.get("/", async (req, resp) => {
	const user = await User.find()
	console.log(user)
	if (user.length > 0) {
		resp.send(user)
	} else {
		resp.send({ resut: "No Booking......" })
	}
})

app.delete("/:id", async (req, resp) => {
	const user = await User.DeleteOne({ _id: req.params.id })
	resp.send(user)
})

app.listen(5000, () => {
	console.log("server connected 5000")
})
