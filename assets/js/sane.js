import flamethrower from "https://cdn.jsdelivr.net/npm/flamethrower-router@0.0.0-meme.12/dist/main.min.js"
const router = flamethrower({ prefetch: 'visible', log: true, pageTransitions: false });

[...document.querySelectorAll(".close")].forEach(el=>{
    el.onclick=()=>{
        router.back()
    }
});

[...document.querySelectorAll(".workAround")].forEach(el=>{
    console.log({el});
    setTimeout(() => {
        el.style.opacity=1
    }, 100);
});