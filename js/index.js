var mybtn=document.getElementById("#btntop")
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btntop.style.display = "block";
    } else {
        btntop.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
    
}
    