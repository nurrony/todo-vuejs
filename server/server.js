import express from 'express'
import path from 'path';

const app = express()

app.get('/*',function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(3000, function () {
  console.log('server is listening port http://localhost:3000')
})
