let sign = document.getElementsByClassName("login")[0];
let right = document.getElementsByClassName("right")[0];
let container = document.getElementsByClassName("container")[0];
let left = document.getElementsByClassName("left")[0];
let full = document.getElementsByClassName("full")[0];

function loadSignupForm(){
    right.innerHTML = '<div class="container"><img class="logo" src="./images/website_logo.png" alt="logo" height="50px" width="50px"><h1>Healthy Bowl.com</h1><h2>Create an Account!</h2><!-- <button class="google-button">Sign up with Google</button> --><a class="google-btn" href="https://accounts.google.com/gsi/select?client_id=92879692782-7nd751eusg5fep81a1vhm0r6hf0pdn54.apps.googleusercontent.com&ux_mode=redirect&login_uri=https%3A%2F%2Fwww.codewithharry.com%2Fapi%2Fauth%2Fgooglelogin&ui_mode=card&as=bARcEli5JMufV%2FNTO56LRg&g_csrf_token=be230c1717b6ea4b&origin=https%3A%2F%2Fwww.codewithharry.com"><button class="google-btn"><img src="./images/google btn.png" alt="Google Logo" height="40px" width="200px"></button></a><fieldset><legend>OR SIGN UP WITH EMAIL</legend></fieldset><form action="#" method="post" enctype="multipart/form-data"> <label for="email" class="label">Email Address</label><input type="email" class="email"><br><label for="password" class="label">Password</label><br><input type="password" class="password"><br><div class="captcha"><input type="checkbox" id="captcha-check"><label for="captcha-check" class="captcha-label">I am not a robot</label><img src="./images/recaptcha.png" alt="reCAPTCHA logo" class="captcha-logo"></div><button class="create-button">Create an account</button></form><fieldset><legend><a href="#" class="login">OR LOGIN</a></legend></fieldset></div>';
    left.innerHTML = '<img src="./images/login image.webp" alt="image" width="130%" height = "576px">';
    
    right.style.marginTop = '20px';
    right.style.marginLeft = '0px';
    full.style.marginTop = '0px';
    
    let login = document.getElementsByClassName("login")[0];
    login.addEventListener("click", loadLoginForm);
}

function loadLoginForm(){
    right.innerHTML = '<img src="./images/login image.webp" alt="image" width="130%" height = "576px">';
    left.innerHTML = '<div class="container"><img class="logo" src="./images/website_logo.png" alt="logo" height="50px" width="50px"><h1>Healthy Bowl.com</h1><h2>Create an Account!</h2><!-- <button class="google-button">Sign up with Google</button> --><a class="google-btn" href="https://accounts.google.com/gsi/select?client_id=92879692782-7nd751eusg5fep81a1vhm0r6hf0pdn54.apps.googleusercontent.com&ux_mode=redirect&login_uri=https%3A%2F%2Fwww.codewithharry.com%2Fapi%2Fauth%2Fgooglelogin&ui_mode=card&as=bARcEli5JMufV%2FNTO56LRg&g_csrf_token=be230c1717b6ea4b&origin=https%3A%2F%2Fwww.codewithharry.com"><button class="google-btn"><img src="./images/google btn.png" alt="Google Logo" height="40px" width="200px"></button></a><fieldset><legend>OR LOG IN WITH EMAIL</legend></fieldset><form action="#" method="post" enctype="multipart/form-data"> <label for="email" class="label">Email Address</label><input type="email" class="email"><br><label for="password" class="label">Password</label><br><input type="password" class="password"><br><div class="captcha"><input type="checkbox" id="captcha-check"><label for="captcha-check" class="captcha-label">I am not a robot</label><img src="./images/recaptcha.png" alt="reCAPTCHA logo" class="captcha-logo"></div><button class="create-button">Create an account</button></form><fieldset><legend><a href="#" class="signup">OR SIGNUP</a></legend></fieldset></div>'
    
    right.style.marginLeft = '40px';
    right.style.marginTop = '-20px';
    full.style.marginTop = '40px';
     
    let signup = document.getElementsByClassName("signup")[0];
    signup.addEventListener("click", loadSignupForm);
}

loadSignupForm();

//////////////////////////////////////////////////////////////////////////////////////////////

const switchThemeButton = document.getElementById('switch-theme');
const stylesheet = document.getElementById('theme-stylesheet');

let isLightMode = false;

switchThemeButton.addEventListener('click', function() {
    if (isLightMode) {
        // Switch to dark mode
        stylesheet.setAttribute('href', './login.css');
        switchThemeButton.setAttribute('class', 'fa-solid fa-moon');
        switchThemeButton.setAttribute('title', 'Switch to light mode');
    } else {
        // Switch to light mode
        stylesheet.setAttribute('href', './loginLight.css');
        switchThemeButton.setAttribute('class', 'fa-regular fa-moon');
        switchThemeButton.setAttribute('title', 'Switch to dark mode');
    }

    isLightMode = !isLightMode;
});
