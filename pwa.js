(()=>{'use strict';
const button=document.getElementById('installApp'),panel=document.getElementById('installPanel'),instructions=document.getElementById('installInstructions');
let promptEvent=null;
const standalone=()=>window.matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
const ios=()=>/iPad|iPhone|iPod/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
function sync(){button.hidden=standalone()}
function close(){if(panel.open)panel.close()}
function help(){instructions.textContent=ios()?'Abra no Safari, toque em Compartilhar, escolha Adicionar à Tela de Início e confirme. Se aparecer Abrir como App, deixe ativado.':'Abra o menu do navegador e escolha Instalar aplicativo ou Adicionar à tela inicial. Se não aparecer, tente pelo Chrome ou Edge.';if(!panel.open)panel.showModal()}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();promptEvent=e;sync()});
window.addEventListener('appinstalled',()=>{promptEvent=null;button.hidden=true;close();window.previeTrack?.('app_installed')});
window.matchMedia('(display-mode: standalone)').addEventListener?.('change',sync);
button.addEventListener('click',async()=>{if(standalone())return;if(!promptEvent){help();return}const event=promptEvent;promptEvent=null;try{await event.prompt();const result=await event.userChoice;if(result?.outcome==='accepted')button.hidden=true;else sync()}catch{help()}});
document.getElementById('installClose').addEventListener('click',close);sync();
if('serviceWorker' in navigator&&(location.protocol==='https:'||location.hostname==='localhost')){window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}),{once:true})}
})();