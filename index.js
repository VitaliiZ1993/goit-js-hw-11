import{i as n,S as d}from"./assets/vendor-Cxnq77cn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",f="48226781-c314bf294542f2e13595e23de";function p(a){return fetch(`${u}?key=${f}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true&per_page=30`).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()})}function m(a){return a.map(({largeImageURL:t,webformatURL:s,tags:i,likes:e,views:r,comments:o,downloads:l})=>`<li class="gallery-item">
            <article class="card">
              <a class="card-link" href="${t}" target="_blank" rel="noopener noreferrer">
                <img class="card-image" src="${s}" alt="${i}" />
              </a>
              <div class="card-container">
                <div class="card-item">
                  <p class="card-title"><i class="fas fa-heart"></i> Likes</p>
                  <p class="card-count">${e}</p>
                </div>
                <div class="card-item">
                  <p class="card-title"><i class="fas fa-eye"></i> Views</p>
                  <p class="card-count">${r}</p>
                </div>
                <div class="card-item">
                  <p class="card-title"><i class="fas fa-comment"></i> Comments</p>
                  <p class="card-count">${o}</p>
                </div>
                <div class="card-item">
                  <p class="card-title"><i class="fas fa-download"></i> Downloads</p>
                  <p class="card-count">${l}</p>
                </div>
              </div>
            </article>
          </li>`).join("")}const c={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};c.form.addEventListener("submit",g);function g(a){a.preventDefault();const t=a.currentTarget.elements.state.value.trim();if(c.gallery.innerHTML="",!t){n.error({message:"Please enter your request",position:"topRight"});return}c.loader.classList.remove("is-hidden"),p(t).then(s=>{if(c.loader.classList.add("is-hidden"),s.hits.length===0){n.error({message:"Sorry, no images found. Please try again!",position:"topRight"});return}const i=m(s.hits);c.gallery.insertAdjacentHTML("beforeend",i),new d(".gallery a",{captionDelay:300,captionsData:"alt"}).refresh()}).catch(s=>{n.error({message:"Error fetching images. Please try again later.",position:"topRight"}),console.error(s)})}
//# sourceMappingURL=index.js.map
