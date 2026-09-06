import{t as e}from"./Base.astro_astro_type_script_index_0_lang.7eQqgksP.js";var t=`vwz-start-here-accent-style`;function n(){if(document.getElementById(t))return;let e=document.createElement(`style`);e.id=t,e.textContent=`
    #start-here-root [data-sh-area="fn"],
    #start-here-root [data-area="fn"] {
      --sh-accent: var(--accent-fn);
    }

    #start-here-root [data-sh-area="fs"],
    #start-here-root [data-area="fs"] {
      --sh-accent: var(--accent-fs);
    }

    #start-here-root [data-sh-area="on"],
    #start-here-root [data-area="on"] {
      --sh-accent: var(--accent-on);
    }

    #start-here-root [data-sh-area="os"],
    #start-here-root [data-area="os"] {
      --sh-accent: var(--accent-os);
    }

    #start-here-root :is(.cur-card, .start-btn, .mood-recs a, [data-sh-selectable])[data-sh-area],
    #start-here-root :is(.cur-card, .start-btn, .mood-recs a, [data-sh-selectable])[data-area] {
      transition:
        border-color 0.18s ease,
        box-shadow 0.18s ease,
        color 0.18s ease;
    }

    #start-here-root :is(.cur-card, .start-btn, .mood-recs a, [data-sh-selectable])[data-sh-area]:is(:hover, :focus-visible),
    #start-here-root :is(.cur-card, .start-btn, .mood-recs a, [data-sh-selectable])[data-area]:is(:hover, :focus-visible) {
      border-color: var(--sh-accent);
      box-shadow: inset 0 0 0 1px var(--sh-accent);
    }

    #start-here-root .start-btn--cycle-story:is(:hover, :focus-visible) {
      animation: sh-start-story-border-cycle 5.5s ease-in-out infinite alternate both;
    }

    #start-here-root .start-btn--cycle-all:is(:hover, :focus-visible) {
      animation: sh-start-all-border-cycle 10s ease-in-out infinite both;
    }

    @keyframes sh-start-story-border-cycle {
      from {
        border-color: var(--accent-fs);
        box-shadow: inset 0 0 0 1px var(--accent-fs);
      }
      to {
        border-color: var(--accent-os);
        box-shadow: inset 0 0 0 1px var(--accent-os);
      }
    }

    @keyframes sh-start-all-border-cycle {
      0%, 100% {
        border-color: var(--accent-fn);
        box-shadow: inset 0 0 0 1px var(--accent-fn);
      }
      25% {
        border-color: var(--accent-on);
        box-shadow: inset 0 0 0 1px var(--accent-on);
      }
      50% {
        border-color: var(--accent-fs);
        box-shadow: inset 0 0 0 1px var(--accent-fs);
      }
      75% {
        border-color: var(--accent-os);
        box-shadow: inset 0 0 0 1px var(--accent-os);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #start-here-root .start-btn--cycle-story:is(:hover, :focus-visible),
      #start-here-root .start-btn--cycle-all:is(:hover, :focus-visible) {
        animation: none;
      }
    }
  `,document.head.appendChild(e)}function r(t=document.getElementById(`start-here-root`)){t&&t.querySelectorAll(`a[href], [data-href]`).forEach(t=>{let n=t instanceof HTMLAnchorElement?t.getAttribute(`href`)??``:t.dataset.href??``,{area:r,accentVar:i}=e(n);r&&i?(t.setAttribute(`data-sh-area`,r),t.style.setProperty(`--sh-accent`,`var(${i})`)):(t.removeAttribute(`data-sh-area`),t.style.removeProperty(`--sh-accent`))})}function i(){a=null,d=null}var a=null;function o(){if(!a)try{let e=document.getElementById(`vwz-start-here-data`);e&&(a=JSON.parse(e.textContent))}catch{}return a}function s(){return o()?.nlMonths??[]}function c(){return o()?.papers??[]}function l(){return o()?.stories??[]}function u(){return o()?.moods??{}}var d=null;function f(){return d||=[...s(),...c(),...l()],d}function p(){return!!document.getElementById(`start-here-root`)}function m(e){return e.length?e[Math.floor(Math.random()*e.length)]:null}function h(e){return m(e===`story`?l():e===`paper`?c():e===`month`?s():f())}var g=null,_=!1,v=[];function y(e){if(e.length<=3)return[...e];let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t.slice(0,3)}function b(e=!1){let t=document.getElementById(`moodChips`);if(!t)return;let n=Array.from(t.querySelectorAll(`.mood-chip`));if(!n.length)return;if(e||!v.length){let e=[...n];for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}v=e}let r=t.getBoundingClientRect().height;r>0&&(t.style.minHeight=r+`px`);let i=parseFloat(getComputedStyle(t).columnGap)||8,a=t.getBoundingClientRect().width,o=document.createElement(`div`);o.setAttribute(`aria-hidden`,`true`),o.style.cssText=`position:fixed;top:0;left:-9999px;visibility:hidden;pointer-events:none;display:flex;flex-wrap:nowrap;gap:`+i+`px;`,document.body.appendChild(o),v.forEach(e=>{let t=e.cloneNode(!0);t.style.display=``,o.appendChild(t)});let s=Array.from(o.children).map(e=>e.getBoundingClientRect().width);document.body.removeChild(o);let c=0,l=new Set;for(let e=0;e<v.length;e++){let t=e===0?s[e]:c+i+s[e];if(e>0&&t>a)break;c=t,l.add(v[e])}n.forEach(e=>{e.style.display=l.has(e)?``:`none`}),t.style.maxHeight=``,t.style.overflow=``,t.style.visibility=``,t.style.minHeight=``}function x(){let e=document.getElementById(`moodRecs`);if(!e)return;let t=Object.values(u()).flat().slice(0,3);if(!t.length)return;let n=e.innerHTML,r=e.getBoundingClientRect().height;e.innerHTML=t.map(e=>`<a class="mood-rec" href="${e.href}"><span class="mood-rec-label">${e.label}</span><span class="mood-rec-type"${e.area?` data-area="${e.area}"`:``}>${e.type}</span></a>`).join(``);let i=e.getBoundingClientRect().height;e.innerHTML=n,i>0&&e.style.setProperty(`--mood-recs-h`,Math.max(r,i)+`px`)}function S(e){if(g=null,!e)return;i(),n();let t=m(f()),a=document.getElementById(`curRandom`),o=document.getElementById(`curRandomTitle`);if(o&&t&&(o.textContent=t.label),a&&t&&(a.dataset.href=t.href),r(),x(),b(!0),!_){_=!0;let e=0;window.addEventListener(`resize`,()=>{p()&&(clearTimeout(e),e=window.setTimeout(()=>{if(x(),b(),g){let e=document.querySelector(`#moodChips .mood-chip[data-mood="${g}"]`);if(e&&e.style.display===`none`){g=null;let e=document.getElementById(`moodRecs`);e&&(e.innerHTML=`<div class="mood-empty">Select a mood above to see suggestions.</div>`)}}},120))})}}var C=()=>{};function w(e){C=e.gotoHref}document.addEventListener(`click`,e=>{let t=e.target?.closest(`#curRandom`);if(!t||!p())return;let n=t.dataset.href;n&&C(n,{focusAfterSwap:e.detail===0})}),document.addEventListener(`click`,e=>{let t=e.target?.closest(`#moodChips .mood-chip`);if(!t||!p())return;let n=t.dataset.mood,i=document.getElementById(`moodRecs`);if(!i||!n)return;if(g===n){g=null,t.classList.remove(`active`),i.innerHTML=`<div class="mood-empty">Select a mood above to see suggestions.</div>`,r();return}document.querySelectorAll(`#moodChips .mood-chip.active`).forEach(e=>e.classList.remove(`active`)),g=n,t.classList.add(`active`);let a=u()[n]||[];if(!a.length){i.innerHTML=`<div class="mood-empty">Nothing here yet.</div>`,r();return}i.innerHTML=y(a).map(e=>`<a class="mood-rec" href="${e.href}"><span class="mood-rec-label">${e.label}</span><span class="mood-rec-type"${e.area?` data-area="${e.area}"`:``}>${e.type}</span></a>`).join(``),r()}),document.addEventListener(`click`,e=>{let t=e.target?.closest(`#startGrid .start-btn`);if(!t||!p())return;let n=t.dataset.start;if(!n)return;let r=h(n);if(!r)return;let i=e.detail===0;t.classList.add(`pulsed`);let a=t.querySelector(`.start-dest`);a||(a=document.createElement(`span`),a.className=`start-dest`,t.appendChild(a)),a.textContent=`→ `+r.label,setTimeout(()=>C(r.href,{focusAfterSwap:i}),380)});export{w as initStartHere,S as syncStartHereChrome};