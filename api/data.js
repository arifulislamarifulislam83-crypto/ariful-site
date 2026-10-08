const db=require('./_db');
module.exports=async(req,res)=>{res.setHeader('Cache-Control','no-store');try{const v=await db.get();res.status(200).json(v?JSON.parse(v):{})}catch(e){res.status(200).json({})}};
