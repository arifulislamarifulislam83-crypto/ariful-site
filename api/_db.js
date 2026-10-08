const U=process.env.KV_REST_API_URL||process.env.UPSTASH_REDIS_REST_URL,K=process.env.KV_REST_API_TOKEN||process.env.UPSTASH_REDIS_REST_TOKEN;
async function cmd(a){if(!U||!K)throw new Error('Database env vars missing');const r=await fetch(U,{method:'POST',headers:{Authorization:'Bearer '+K},body:JSON.stringify(a)});if(!r.ok)throw new Error('DB '+r.status);return (await r.json()).result}
module.exports={get:()=>cmd(['GET','site']),set:v=>cmd(['SET','site',v])};
