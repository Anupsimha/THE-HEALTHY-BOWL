let sign = document.getElementsByClassName("login")[0];
let right = document.getElementsByClassName("right")[0];
let container = document.getElementsByClassName("container")[0];
let left = document.getElementsByClassName("left")[0];
let full = document.getElementsByClassName("full")[0];
// sign.addEventListener("click", ()=> {
//    right.innerHTML = '<div class="container"><img class="logo" src="./images/website_logo.png" alt="logo" height="50px" width="50px"><h1>Healthy Bowl.com</h1><h2>Create an Account!</h2><!-- <button class="google-button">Sign up with Google</button> --> <a class="google-btn" href="https://accounts.google.com/gsi/select?client_id=92879692782-7nd751eusg5fep81a1vhm0r6hf0pdn54.apps.googleusercontent.com&ux_mode=redirect&login_uri=https%3A%2F%2Fwww.codewithharry.com%2Fapi%2Fauth%2Fgooglelogin&ui_mode=card&as=bARcEli5JMufV%2FNTO56LRg&g_csrf_token=be230c1717b6ea4b&origin=https%3A%2F%2Fwww.codewithharry.com"><button class="google-btn"><img src="./images/google btn.png" alt="Google Logo" height="40px" width="200px"></button></a>        <fieldset><legend>OR SIGN UP WITH EMAIL</legend></fieldset><div class="input"> <label for="email">Email Address</label><input type="email" class="email"><label for="email">Password</label><input type="password" class="email"></div><div class="captcha-box"> <input type="checkbox" id="captcha-check"><label for="captcha-check">I am not a robot</label> <img src="./images/recaptcha.png" alt="reCAPTCHA logo" class="captcha-logo"> </div> <button class="create-button">Create an account</button> <fieldset><legend><a href="#" class="signup">OR SIGNUP</a></legend></fieldset> </div>'
//    let container = document.getElementsByClassName("container")[0];
//    container.style.height = '610px';
//    let image = document.getElementsByTagName("img")[0];
//    console.log(image);
//    image.style.height = '620px';
// });

function loadSignupForm(){
    right.innerHTML = ' <div class="container"> <img class="logo" src="./images/website_logo.png" alt="logo" height="50px" width="50px"><h1>Healthy Bowl.com</h1><h2>Create an Account!</h2> <!-- <button class="google-button">Sign up with Google</button> --><a class="google-btn" href="https://accounts.google.com/gsi/select?client_id=92879692782-7nd751eusg5fep81a1vhm0r6hf0pdn54.apps.googleusercontent.com&ux_mode=redirect&login_uri=https%3A%2F%2Fwww.codewithharry.com%2Fapi%2Fauth%2Fgooglelogin&ui_mode=card&as=bARcEli5JMufV%2FNTO56LRg&g_csrf_token=be230c1717b6ea4b&origin=https%3A%2F%2Fwww.codewithharry.com"><button class="google-btn"><img src="./images/google btn.png" alt="Google Logo" height="40px" width="200px"></button></a>        <fieldset><legend>OR SIGN UP WITH EMAIL</legend></fieldset> <div class="input"> <label for="email">Email Address</label> <input type="email" class="email"></div>  <div class="captcha-box"> <input type="checkbox" id="captcha-check"> <label for="captcha-check">I am not a robot</label> <img src="./images/recaptcha.png" alt="reCAPTCHA logo" class="captcha-logo"></div><button class="create-button">Create an account</button><fieldset><legend><a href="#" class="login">OR LOGIN</a></legend></fieldset> </div>';
    left.innerHTML = '<img src="./images/login image.webp" alt="image" width="130%">';
    container.style.height = '530px';
    let image = left.firstElementChild;
    image.style.height = '535px';
    left.style.marginTop = '0px';
    full.style.gap = '63.5px'

    let login = document.getElementsByClassName("login")[0];
    login.addEventListener("click", loadLoginForm);
}

function loadLoginForm(){
    right.innerHTML = '<div class="container"><img class="logo" src="./images/website_logo.png" alt="logo" height="50px" width="50px"><h1>Healthy Bowl.com</h1><h2>Create an Account!</h2><!-- <button class="google-button">Sign up with Google</button> --> <a class="google-btn" href="https://accounts.google.com/gsi/select?client_id=92879692782-7nd751eusg5fep81a1vhm0r6hf0pdn54.apps.googleusercontent.com&ux_mode=redirect&login_uri=https%3A%2F%2Fwww.codewithharry.com%2Fapi%2Fauth%2Fgooglelogin&ui_mode=card&as=bARcEli5JMufV%2FNTO56LRg&g_csrf_token=be230c1717b6ea4b&origin=https%3A%2F%2Fwww.codewithharry.com"><button class="google-btn"><img src="./images/google btn.png" alt="Google Logo" height="40px" width="200px"></button></a>        <fieldset><legend>OR SIGN UP WITH EMAIL</legend></fieldset><div class="input"> <label for="email">Email Address</label><input type="email" class="email"><label for="email">Password</label><input type="password" class="email"></div><div class="captcha-box"> <input type="checkbox" id="captcha-check"><label for="captcha-check">I am not a robot</label> <img src="./images/recaptcha.png" alt="reCAPTCHA logo" class="captcha-logo"> </div> <button class="create-button">Create an account</button> <fieldset><legend><a href="#" class="signup">OR SIGNUP</a></legend></fieldset> </div>';
    left.innerHTML = '<img src="./images/login image.webp" alt="image" width="130%">';
    container.style.height = '610px';
    full.style.marginTop = '50px'
    let image = left.firstElementChild;
    image.style.height = '619px';
    image.style.width = '369px'
    left.style.marginTop = '0px';
    full.style.gap = '82px';
     
    let signup = document.getElementsByClassName("signup")[0];
    signup.addEventListener("click", loadSignupForm);
}

loadSignupForm();


