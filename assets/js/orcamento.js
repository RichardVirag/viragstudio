let textArray = [];
    textPosition = 0,
    arrayPosition = 0,
    currentStep = 1;
    formDataObj = {};

const speedType = 35,
    speedArrayPosition = 400;

function typing() {
    if (textArray[arrayPosition].element.tagName != 'P') {
        textArray[arrayPosition].element.style.display = 'block';
        arrayPosition++;
        return;
    }
    
    let currentText = textArray[arrayPosition].text[0].trim();

    textArray[arrayPosition].element.innerHTML =
        ( currentText.substring(currentText.length -1, currentText.length) == '*' ?
            '<i class="fa fa-chevron-right"></i>' : '' ) +
        currentText.substring(0, textPosition).trim() +
        '<span> |</span>';

    if (textPosition++ != currentText.length) {
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

function typeWriter() {
    let elements = document.getElementsByClassName('typewrite');
    Array.from(elements).forEach(el => {
        if (el.tagName != 'P') {
            textArray = [...textArray, { element: el }];
            return;
        }

        textArray = [...textArray, {
            element: el,
            text: [el.innerHTML]
        }];
        el.innerHTML = '';
        el.style.display = 'block';
    });
}

typeWriter();

$(document).keypress(function(e){
    if (e.which == 13){
        switch (currentStep) {
            case 1:
                goToStep2();
                break;
            case 2:
                goToStep3();
                break;
            case 3:
                goToStep4();
                break;
            case 4:
                if ( document.getElementById('btn-email').offsetParent !== null) {
                    finishEmail();
                }
                else {
                    goToStep5();
                } 
                break;
            default:
                break;
        }
    }
});

function goToStep2() {
    currentStep++;
    document.getElementById('step1').classList.add("hidden");
    document.getElementById('steps').classList.remove("hidden");
    setTimeout(() => {
        document.getElementById('progress').style.width = '5%';
    });

    typing();
}

function goToStep3() {
    currentStep++;
    document.getElementById('step2').classList.add("hidden");
    document.getElementById('step3').classList.remove("hidden");
    setTimeout(() => {
        document.getElementById('progress').style.width = '25%';
    });
    textArray[7].text[0] =
        textArray[7].text[0]
            .replace('_',  document.getElementById('name').value);

    typing();
}

function goToStep4() {
    currentStep++;
    document.getElementById('step3').classList.add("hidden");
    document.getElementById('step4').classList.remove("hidden");
    setTimeout(() => {
        document.getElementById('progress').style.width = '45%';
    });
    typing();
}

function finishEmail() {
    document.getElementById('btn-email').classList.add("hidden");
    document.getElementById('phone').classList.remove("hidden");
    setTimeout(() => {
        document.getElementById('progress').style.width = '55%';
    });
    typing();
}

function goToStep5() {
    currentStep++;
    document.getElementById('step4').classList.add("hidden");
    // document.getElementById('step4').classList.remove("hidden");
    setTimeout(() => {
        document.getElementById('progress').style.width = '65%';
    });
}

/* function inputEnter(el) {
    el.addEventListener('keyup', function(e) {
        if ((e.which || e.keyCode) == 13) {
            switch (el.id) {
                case 'name': {
                    formDataObj = {
                        ...formDataObj,
                        name: el.value
                    }
                    
                    textArray[6].text[0] =
                        textArray[6].text[0].replace('_', el.value);

                    nextInput();
                    break;
                }

                default:
                    break;
            }
        }
    });
}

function nextInput() {
    textPosition = 0;
    typing();
} */