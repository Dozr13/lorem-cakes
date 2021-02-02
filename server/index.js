const express = require('express');
const cc = require('./controllers/cake_controller.js');

const app = express()

app.use(express.json())


const cakeBaseUrl = "/api/cakes"
app.get(cakeBaseUrl, cc.getCakes)
app.post(cakeBaseUrl, cc.addCake)
app.put(`${cakeBaseUrl}/:id/:quantity`, cc.updateCake)
app.delete(`${cakeBaseUrl}/:id`, cc.deleteCake)

app.post(`/api/addOrder`, cc.addOrder)





const port = 3001
app.listen(port, () => console.log(`Hi, I'm your server! I'm currently running on port ${port}, isn't that exciting!!!`))




