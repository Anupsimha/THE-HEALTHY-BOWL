//Grid Images changes Effect

const image1 = [
    "./images/homePage1.jpg",
    "./images/homePageSouth.jpg"
]
const image2 = [
    "./images/homePage2.jpg",
    "./images/homePageSouth2.jpg"
]
const image3 = [
    "./images/homePage3.jpg",
    "./images/homePageSouth3.jpg"
]
const image4 = [
    "./images/homePage4.jpg",
    "./images/homePageSouth4.jpg"
]
const image5 = [
    "./images/homePage5.jpg",
    "./images/homePageSouth5.jpg"
]
const image6 = [
    "./images/homePage6.jpg",
    "./images/homePageSouth6.jpg"
]
const image7 = [
    "./images/homePage7.jpg",
    "./images/homePageSouth7.jpg"
]

let currentIndex = 0;
const img1 = document.getElementById("img1")
function changeBackground1() {
    img1.src = image1[currentIndex];
    currentIndex = (currentIndex + 1) % image1.length;
}
setInterval(changeBackground1, 3000);
changeBackground1();
////////////////////////////////////////
let currentIndex2 = 0;
const img2 = document.getElementById("img2")
function changeBackground2() {
    img2.src = image2[currentIndex2];
    currentIndex2 = (currentIndex2 + 1) % image2.length;
}
setInterval(changeBackground2, 3500);
changeBackground2();
/////////////////////////////////////////
let currentIndex3 = 0;
const img3 = document.getElementById("img3")
function changeBackground3() {
    img3.src = image3[currentIndex];
    currentIndex3 = (currentIndex3 + 1) % image3.length;
}
setInterval(changeBackground3, 4000);
changeBackground3();
/////////////////////////////////////////
let currentIndex4 = 0;
const img4 = document.getElementById("img4")
function changeBackground4() {
    img4.src = image4[currentIndex];
    currentIndex4 = (currentIndex4 + 1) % image4.length;
}
setInterval(changeBackground4, 4500);
changeBackground4();
//////////////////////////////////////////
let currentIndex5 = 0;
const img5 = document.getElementById("img5")
function changeBackground5() {
    img5.src = image5[currentIndex5];
    currentIndex5 = (currentIndex5 + 1) % image5.length;
}
setInterval(changeBackground5, 5000);
changeBackground5();
///////////////////////////////////////////
let currentIndex6 = 0;
const img6 = document.getElementById("img6")
function changeBackground6() {
    img6.src = image6[currentIndex6];
    currentIndex6 = (currentIndex6 + 1) % image6.length;
}
setInterval(changeBackground6, 5500);
changeBackground6();
////////////////////////////////////////////
let currentIndex7 = 0;
const img7 = document.getElementById("img7")
function changeBackground7() {
    img7.src = image7[currentIndex7];
    currentIndex7 = (currentIndex7 + 1) % image7.length;
}
setInterval(changeBackground7, 6000);
changeBackground7();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const text = "Discover, Share, and Savor Deliciously Healthy, Quick, Nutritious Recipes";
const speed = 12; // Typing speed in milliseconds
const typedText = document.getElementById("captionid");

let index = 0;
let isBlinking = true;

function typeWriter() {
    if (index < text.length) {
        typedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    } else {
        const intervalid = setInterval(() => {
            if (isBlinking)  {
                typedText.style.visibility = typedText.style.visibility === 'hidden' ? 'visible' : 'hidden';
            } 
            else {
                typedText.style.visibility = 'visible';
            }
        }, 300);

        setTimeout(() => {
            clearInterval(intervalid);
            console.log("Interval stopped.");
        }, 1800);
    }
}

typeWriter();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let sections = document.getElementsByClassName('.mainpage');
let navlinks = document.querySelectorAll('.web_logo .nav_contents a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelectorAll('.nav_contents a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  