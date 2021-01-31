// import nextConnect from "next-connect"
// import middleware from "../../middleware/database"

// const handler = nextConnect()
// handler.use(middleware)

// handler.post(async (req, res) => {
//   let data = req.body;
//   data = JSON.parse(data)
//   await req.db.collection("nodes").insertOne(data)
//   console.log('inserted node data')
//   res.json({
//     message: "success"
//   })
// })
