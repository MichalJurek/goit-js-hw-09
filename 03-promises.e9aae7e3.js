document.querySelector(".form").addEventListener("submit",function(e){e.preventDefault();let t=+this.elements.delay.value,o=+this.elements.step.value,l=+this.elements.amount.value,n=t;for(let e=1;e<=l;e++)(function(e,t){return new Promise((o,l)=>{let n=Math.random()>.3,i=setTimeout(()=>{clearTimeout(i),n?o({position:e,delay:t}):l({position:e,delay:t})},t)})})(e,n).then(({position:e,delay:t})=>{console.log(`Fulfilled promise ${e} in ${t}ms`)}).catch(({position:e,delay:t})=>{console.log(`Rejected promise ${e} in ${t}ms`)}),n+=o});
//# sourceMappingURL=03-promises.e9aae7e3.js.map