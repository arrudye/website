/*прелоадер*/
window.addEventListener('load', function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  });

/*закрыть увед сверху*/
let buttonCross = document.getElementById('btn-cross');
let div = document.getElementById('advert');
buttonCross.onclick = function() {
    if (div.style.display !== "none")
        div.style.display = "none";
};

/*смена размера шрифта*/
let tagExclude = ['btnDecrease', 'btnIncrease','btnDefault','btnPictures'];
let btnIncrease = document.getElementById('btnIncrease');
btnIncrease.onclick = function increaseFontSize() {
    let allElems = document.getElementsByTagName("*");
    for (let i=0; i < allElems.length; i++) 
        if (!tagExclude.includes(allElems[i].id)){
            let fontSize = window.getComputedStyle(allElems[i], null).fontSize;
            allElems[i].style.fontSize = (parseInt(fontSize) + 1) + 'px';
            let lineHeight = window.getComputedStyle(allElems[i], null).lineHeight;
            allElems[i].style.lineHeight = (parseInt(lineHeight) + 1) + 'px';
        }   
}
let btnDecrease = document.getElementById('btnDecrease');
btnDecrease.onclick = function decreaseFontSize() {
    let allElems = document.getElementsByTagName("*");
    for (let i=0; i < allElems.length; i++) 
        if (!tagExclude.includes(allElems[i].id)){
            let fontSize = window.getComputedStyle(allElems[i], null).fontSize;
            allElems[i].style.fontSize = (parseInt(fontSize) - 1) + 'px';
            let lineHeight = window.getComputedStyle(allElems[i], null).lineHeight;
            allElems[i].style.lineHeight = (parseInt(lineHeight) - 1) + 'px';
        }   
}
const defaultSize =  parseInt(window.getComputedStyle(document.getElementById("maininfo"),null).fontSize);
let btnDefault = document.getElementById('btnDefault');
btnDefault.onclick = function defaultFontSize() {
    let difference = defaultSize - parseInt(window.getComputedStyle(document.getElementById("maininfo"),null).fontSize);
    let allElems = document.getElementsByTagName("*");
    for (let i=0; i < allElems.length; i++) 
        if (!tagExclude.includes(allElems[i].id)){
            let fontSize = window.getComputedStyle(allElems[i], null).fontSize;
            allElems[i].style.fontSize = (parseInt(fontSize) + difference) + 'px';
            let lineHeight = window.getComputedStyle(allElems[i], null).lineHeight;
            allElems[i].style.lineHeight = (parseInt(lineHeight) + difference) + 'px';
        }   
}

/*отключение картинок*/
let picFlag = true;
let images = document.getElementsByTagName("img");
let grids = document.getElementById("pics").getElementsByTagName('*');
let btnPictures = document.getElementById('btnPictures');
btnPictures.onclick = function togglePictures() {
    for (let i = 0; i < images.length; i++){
        if(!images[i].classList.contains("dontHide") && picFlag == true)
            images[i].style.display = "none";
        else if (!images[i].classList.contains("dontHide")) images[i].style.display = "block";
    }
    for(let i = 0; i < grids.length; i++){
        if(picFlag == true)
            grids[i].style.display = "none";
        else grids[i].style.display = "grid";
    }
    picFlag = !picFlag;
}


/*смена темы*/
const pics = document.getElementById('pics');
const classNames = ['baseBGColor','baseColor','whiteLine','grayBGColor','placeHolder','faq','lighterBGColor',
    'lightLine','lightSquare','lightestColor','graySquar','darkergrayColor','darkestColor','darkLine','placeHolder::placeholder',
    'lightBorder','paleBGColor','paleColor', 'paleBorder', 'palerBorder', 'bgline','paleTDColor','bluefield', 'yellowfield','makeBright','formBGColor'];
const btnTheme = document.getElementById('btnTheme');

let currentTheme = localStorage.getItem("theme"); 
if(currentTheme == 'dark') 
    darkThemeOn();

btnTheme.addEventListener("click", function () {
    currentTheme = localStorage.getItem("theme"); 
    if (currentTheme == 'dark'){
        lightThemeOn();
        localStorage.setItem("theme", 'light');
    }
    else{
        darkThemeOn();
        localStorage.setItem("theme", 'dark');
    }
})

function darkThemeOn(){
    for (let i = 0; i < classNames.length; i++)
        {
            let elements = document.getElementsByClassName(classNames[i]);
            while (elements.length) {
                elements[0].classList.add("dark_" + classNames[i]);
                elements[0].classList.remove(classNames[i]);
             }
        }
    pics.id = 'dark_pics';
    btnTheme.id = 'dark_btnTheme';
    btnTheme.value="☼";
}
function lightThemeOn(){
    for (let i = 0; i < classNames.length; i++)
        {
            let elements = document.getElementsByClassName("dark_" + classNames[i]);
            while (elements.length) {
                elements[0].classList.add(classNames[i]);
                elements[0].classList.remove("dark_" + classNames[i]);
             }
        }
    pics.id = 'pics';
    btnTheme.id = 'btnTheme';
    btnTheme.value="⋆⁺₊";
}

/*анимации при скролле*/
let windowHeight = window.innerHeight;
let elScroll = document.querySelectorAll(".scrollDown,.scrollLeft,.scrollRight,.clientsgrid");
function onScroll() {
    for (let i = 0; i < elScroll.length; i++) {
        let elementHeight = elScroll[i].getBoundingClientRect().top;
        if (elementHeight < windowHeight - 100) 
            elScroll[i].classList.add("active");
        else 
            elScroll[i].classList.remove("active");
    }
  }
window.addEventListener("scroll", onScroll);
