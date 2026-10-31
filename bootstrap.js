(async()=>{
'use strict';
try{
 const response=await fetch('cases/index.json');if(!response.ok)throw new Error('Não foi possível carregar o catálogo.');
 const index=await response.json();let saved={};try{saved=JSON.parse(localStorage.getItem('tribunal_100casos_v2')||'{}')}catch{};for(const c of saved.v9?.customCases||[])if(c&&c.id&&!index.some(x=>x.id===c.id))index.push(c);await script('app/case-provider.js');const provider=window.tribunalCreateProvider(index);const load=provider.load;
 window.__caseIndex=index;window.__CASE_PROVIDER__=provider;
 await Promise.all(Object.keys(saved.cases||{}).filter(id=>index.some(c=>c.id===id)).map(load));
 function script(src){return new Promise((resolve,reject)=>{const el=document.createElement('script');el.src=src;el.onload=resolve;el.onerror=()=>reject(Error('Falha ao abrir '+src));document.body.append(el);});}
 await script('app/runtime.js');for(const c of index)if(c._loaded)tribunalHydrate(c);else c.cover=tribunalPortrait(c.id+'-T1');
 const data=document.createElement('script');data.textContent='const CASES=window.__caseIndex;';document.body.append(data);
 for(const src of ['app/core.js','app/archive-v4.js','app/dialogue-v5.js','app/game-v5.js','app/mesa-v6.js','app/contracts-v7.js','app/progression-v9.js'])await script(src);
}catch(error){document.getElementById('root').innerHTML='<div class="boot"><span class="brand-glyph">§</span><h1>Arquivo indisponível</h1><p>Abra o projeto por uma hospedagem ou servidor HTTP. Para jogar sem servidor, use o HTML offline.</p><button onclick="location.reload()">Tentar novamente</button></div>';console.error(error);}
})();
