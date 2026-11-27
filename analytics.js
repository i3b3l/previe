(()=>{'use strict';
const key='previe.analytics.preference.v1',panel=document.getElementById('privacyPanel'),state=document.getElementById('privacyState'),yes=document.getElementById('analyticsYes'),no=document.getElementById('analyticsNo'),open=document.getElementById('privacyOpen');
const production=location.protocol==='https:'&&location.hostname==='useprevie.vercel.app';
const privacySignal=()=>navigator.globalPrivacyControl===true||navigator.doNotTrack==='1'||window.doNotTrack==='1';
let choice=null,loaded=false;
try{const saved=localStorage.getItem(key);if(saved==='yes'||saved==='no')choice=saved}catch{}
function allowed(){return production&&choice==='yes'&&!privacySignal()}
function start(){if(!allowed()||loaded)return;loaded=true;window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)};
window.va('beforeSend',event=>{if(!allowed()||event.type!=='pageview')return null;try{const url=new URL(event.url,location.origin);url.search='';url.hash='';return {...event,url:url.toString()}}catch{return null}});
const script=document.createElement('script');script.src='/_vercel/insights/script.js';script.defer=true;script.id='previeAnalytics';script.onerror=()=>{loaded=false;script.remove()};document.head.append(script)}
function show(){state.textContent=privacySignal()?'Sua preferência de privacidade do navegador desativa as estatísticas.':!production?'Estatísticas desativadas neste ambiente.':choice==='yes'?'Estatísticas permitidas.':choice==='no'?'Estatísticas desativadas.':'';yes.disabled=!production||privacySignal();if(!panel.open){if(typeof panel.show==='function')panel.show();else panel.setAttribute('open','')}}
function choose(value){choice=value;try{localStorage.setItem(key,value)}catch{}if(panel.open){if(typeof panel.close==='function')panel.close();else panel.removeAttribute('open')}if(value==='yes')start()}
open.addEventListener('click',show);yes.addEventListener('click',()=>choose('yes'));no.addEventListener('click',()=>choose('no'));panel.addEventListener('cancel',()=>choose('no'));
window.addEventListener('storage',event=>{if(event.key===key||event.key===null){choice=event.key===key&&event.newValue==='yes'?'yes':'no';start()}});
if(production&&!privacySignal()&&choice===null)show();start();
})();
