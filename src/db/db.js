const {Pool}=require("pg")

const pool=new Pool({
    user: 'postgres',
    password: 'your-password-here',
    host: 'localhost',
    database: 'chess_app',
    port: 5432,
})

module.exports=pool;