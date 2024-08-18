const express = require('express')
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json())

require('./config/mongoose').connect();

const user = require('./routes/routeFile')
app.use('/api/v1',user)

app.get('/', (req,res) => {
     res.send('Hello World');
})

app.listen(PORT,()=>{
     console.log(`Server running at port ${PORT}`)
});