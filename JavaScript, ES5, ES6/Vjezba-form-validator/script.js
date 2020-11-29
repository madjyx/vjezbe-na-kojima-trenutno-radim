const form = document.getElementById('form'); // <form id="form" class="form"> 
const username = document.getElementById('username'); //<input type="text" id="username" placeholder="Enter username" />
const email = document.getElementById('email'); //<input type="text" id="email" placeholder="Enter email" />
const password = document.getElementById('password'); //<input type="password" id="password" placeholder="Enter password" />
const password2 = document.getElementById('password2'); //<input type="password" id="password2" placeholder="Enter password again"/>


// Show input error message
function showError(input, message) {
  //pokupimo roditeljski element input elementa sto je <div class="form-control">
  const formControl = input.parentElement;
  //dodamo zeljenu klasu koja ce signalizirati korisniku gresku
  formControl.className = 'form-control error';
  //pokupimo small tag kako bi smo mogli manipulisti tekstom
  const small = formControl.querySelector('small');
  //dodajmo zeljeni tekst greske koji smo proslijedili u funkciju
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLocaleLowerCase());
}

// Even listener
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  //check if username is empty
  if(username.value === ''){
    showError(username, 'Username is required')
  }else{
    showSuccess(username);
  }

  if(email.value === ''){
    showError(email, 'Email is required')
  }else if(!isValidEmail(email.value)){
    showError(email, 'Email is not valid')
  }else{
    showSuccess(email);
  }

  if(password.value === ''){
    showError(password, 'Password is required')
  }else{
    showSuccess(password);
  }

  if(password2.value === ''){
    showError(password2, 'Password 2 is required')
  }else{
    showSuccess(password2);
  }
});