// yarn add express
const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.end('hello word!')
})

app.get('/user', (req, res) => {
    res.end(JSON.stringify({name: 'Jack', age: 21}))
})

app.listen(8888, ()=> {
    console.log('Server running at http://127.0.0.1:8888/')
})