const express = require('express');
const cc = require('./controllers/cake_controller');

const app = express()

app.use(express.json())


const cakeBaseUrl = "/api/cakes"
app.get(cakeBaseUrl, cc.read)
app.post(cakeBaseUrl, cc.create)
app.put(`${cakeBaseUrl}`, cc.update)
app.delete(`${cakeBaseUrl}`, cc.delete)





const port = 3001
app.listen(port, () => console.log(`Hi, I'm your server! I'm currently running on port ${port}, isn't that exciting!!!`))