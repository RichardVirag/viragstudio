const header = document.getElementById('header');
let lastScrollTop = 0;
let whiteHeader = false;

document.addEventListener("scroll", function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop || document.documentElement.scrollTop == 0){
        if (document.documentElement.scrollTop == 0) {
            header.classList.remove("scroll");
        }
        else {
            header.classList.add("scroll");
        }

        if (header.classList.contains("fixed")) {
            header.classList.remove("fixed");
        }
    } else {
        if (!header.classList.contains("fixed")) {
            header.classList.add("fixed");
            header.classList.remove("white-header");
        }
    }
    lastScrollTop = st <= 0 ? 0 : st;
 }, false);