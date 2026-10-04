const express = require('express');
const app = express();
const cors=require("cors")
const pool=require("./src/db/db")
app.use(cors());

app.get('/test-db',async (req,res)=>{
  try{
    const result=await pool.query('SELECT * FROM users');
    res.json(result.rows)
  }catch(err){
    console.log(err)
    res.status(500).json({message:'Database error'})
  }
})


app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});