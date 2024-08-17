let signIn = document.getElementsByTagName('a')[0];
let signUp = document.getElementsByTagName('a')[1];
let container = document.getElementsByClassName('container')[0];

console.log(container);
console.log(signIn);
console.log(signUp);

signUp.addEventListener('click',()=>{
    container.innerHTML = '<div class="refrence"> <a href="#">Sign in</a><a href="#">Sign up</a> </div><div class="input"> <input type="text" placeholder="Name"><br><input type="email" placeholder="Email"><br><input type="number" placeholder="Phone number"><br><input type="password" placeholder="Password"></div>'
});

signIn.addEventListener('click',()=>{
    container.innerHTML = '<div class="refrence"><a href="#">Sign in</a><a href="#">Sign up</a></div> <div class="input"><input type="text" placeholder="Username"><br><input type="password" placeholder="Password"></div><div class="check-box"> <input type="checkbox" id="remember"><label for="remember">Remember me</label><a href="#">Forgot password?</a> </div>'
});
