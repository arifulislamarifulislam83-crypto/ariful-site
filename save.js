
const db=require('./_db');
module.exports=async(req,res)=>{
if(req.method!=='POST')return res.status(405).end();
const pw=process.env.ADMIN_PASSWORD;
if(!pw||req.headers['x-admin']!==pw)return res.status(401).json({error:'unauthorized'});
const b=req.body;
if(b&&b.check)return res.status(200).json({ok:1});
if(!b||!Array.isArray(b.sec)||!b.pr)return res.status(400).json({error:'bad data'});
try{await db.set(JSON.stringify(b));res.status(200).json({ok:1})}catch(e){res.status(500).json({error:String(e.message)})}};
