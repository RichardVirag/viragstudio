var textArray = [];
    textPosition = 0,
    arrayPosition = 0;

const speedType = 40,
    speedArrayPosition = 700;

function typing() {
    textArray[arrayPosition].element.innerHTML =
        textArray[arrayPosition].text[0]
        .substring(0, textPosition) + '<span> |</span>';

    if (textPosition++ != textArray[arrayPosition].text[0].length) {
        setTimeout(() => {
            typing();
        }, speedType);
    } else {
        if (arrayPosition + 1 < textArray.length) {
            setTimeout(() => {
                textArray[arrayPosition].element.innerHTML =
                textArray[arrayPosition].element.innerHTML
                    .replace('<span> |</span>','')
                arrayPosition++;
                textPosition = 0;
                typing();
            }, speedArrayPosition);
        }
    }
}

function typeWriter () {
    let elements = document.getElementsByClassName('typewrite');
    Array.from(elements).forEach(el => {
        textArray = [...textArray, {
            element: el,
            text: [el.innerHTML]
        }];
        el.innerHTML = '';
        el.style.display = 'block';
    });
    typing();

    /* document.querySelector('#type-writer').
        innerHTML = messageArray[0]
        .substring(0, textPosition) + '<span>|</span>';
    
    if (textPosition++ != messageArray[0].length) {
        setTimeout(typeWriter, speed);
    } */
}

window.addEventListener('load', typeWriter);