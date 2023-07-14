// const  submitBtn = document.getElementById ('btn');

function newPerson ( event)
{
    event.preventDefault();

    const fname = document.getElementById("fname").value;
    let fnameTrim = fname.trim();
    const emailAddress = document.getElementById ("email").value;
    let trimEmail = emailAddress.trim();
    const pword = document.getElementById ("pword").value;
    let pwordTrim = pword.trim();
    const errorMessage = document.getElementById("errorMessage");

    const fnameCheck = /^[^\d\s]+\s+[^\d\s]+$/;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pwordcheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,}$/;

    errorMessage.textContent = '';
    let errorMgs = '';

if (fnameTrim === ''){
    errorMgs = 'Name field can not be empty';
}else if(!fnameCheck.test(fnameTrim)) {
    errorMgs = 'Name selection error. Please re-enter your name ensuring there are two name without digits. Text field must contain two names without numbers!';
}else if (trimEmail === ''){
    errorMgs = 'Email field can not be empty';
}else if (!validEmail.test(trimEmail)){
    errorMgs = 'Invalid Email Address';

}else if(!pwordcheck.test(pwordTrim)){
    errorMgs = 'Please choose a strong passowrd';
}

if (errorMgs !== ''){
    errorMessage.textContent = `Error Message: ${errorMgs}`;
    return;
}
else{
    alert ("Registration Successful");
}

}