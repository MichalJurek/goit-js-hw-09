const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let a=null;e.addEventListener("click",()=>{a=setInterval(()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`},1e3),e.disabled=!0}),t.addEventListener("click",()=>{clearInterval(a),e.disabled=!1});
//# sourceMappingURL=01-color-switcher.2b2303d7.js.map
