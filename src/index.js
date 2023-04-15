const express = require('express')
const port = process.env.PORT || 3000
const routeUsers = require('./routes/users')
const middlewarereq = require('./middleware/log')
const upload = require('./middleware/uploadFile')

const app = express()

app.use(middlewarereq)
app.use(express.json())
app.use(express.static('public'))

app.use('/users', routeUsers)

app.post('/upload', upload.single('photo'),(req, res) => {
   res.json({
    message : "Upload success"
   })
})


// app.get("/",(req,res) => {
//     res.json(
//         {
//             nama : "aji",
//             umur : "12"
//         }
//     )
// })

// app.post('/', (req, res) => {
//     res.send('post')
// })


app.listen(port, () => console.log(`this site now listening at ${port}`))