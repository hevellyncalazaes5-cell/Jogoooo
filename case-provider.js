/* On-demand case loading supports individual authoring files and distribution batches. */
window.tribunalCreateProvider=function(index,base='cases/'){
 const pending=new Map(),batches=new Map();
 async function batch(name){if(batches.has(name))return batches.get(name);const task=(async()=>{const r=await fetch(base+name);if(!r.ok)throw Error('Lote de casos indisponível: '+name);const rows=await r.json();if(!Array.isArray(rows))throw Error('Lote de casos inválido: '+name);return new Map(rows.map(c=>[c.id,c]));})();batches.set(name,task);try{return await task}catch(e){batches.delete(name);throw e}}
 async function load(id){const c=index.find(x=>x.id===id);if(!c)throw Error('Caso inexistente: '+id);if(c._loaded)return c;if(pending.has(id))return pending.get(id);const task=(async()=>{let full;if(c.bundle9){const rows=await batch(c.bundle9);full=rows.get(id)}else{const r=await fetch(base+id+'.json');if(!r.ok)throw Error('Dossiê indisponível: '+id);full=await r.json()}if(!full||full.id!==id)throw Error('Caso não encontrado no arquivo: '+id);Object.assign(c,full,{_loaded:true});if(window.tribunalHydrate)window.tribunalHydrate(c);return c})();pending.set(id,task);try{return await task}finally{pending.delete(id)}}
 return {load,modular:true};
};
