import{a as p,S as f,i as a}from"./assets/vendor-5YrzWRhu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="51769269-403519ddb75627d5d460176b7",g="https://pixabay.com/api/";async function y(n){return(await p.get(g,{params:{key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function b(){l.innerHTML=""}function L(){document.getElementById("loader").classList.remove("hidden")}function w(){document.getElementById("loader").classList.add("hidden")}function v(n){const r=n.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:i,comments:d,downloads:u})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${o}" alt="${e}" loading="lazy"/>
        </a>
        <div class="info">
           <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${i}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${u}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r)}const c=document.querySelector(".form"),P=c.elements["search-text"];c.addEventListener("submit",n=>{n.preventDefault();const r=P.value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}b(),L(),y(r).then(o=>{if(o.hits.length===0){a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}v(o.hits),h.refresh()}).catch(o=>{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",color:"red"})}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
