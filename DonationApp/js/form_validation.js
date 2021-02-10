
var email =  document.querySelector('#email');
var donateBtn = document.querySelector('#donateBtn');
var emailVal  = $('#email').val();

email.addEventListener('keypress',ValidateEmail);
email.addEventListener('blur',ValidateEmail);
console.log(emailVal);

function ValidateEmail()
{
    console.log('clicked');
    
    if(email.value != ""){

        var mailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.value.match(mailformat))
        {
            email.setAttribute('style','background:#7bf098;');
            
        }
        else{
            // alert('You have entered an invalid email address!!');
    
            email.setAttribute('style','background:#e6775b;');
            
        }

    }
    else
    {
        email.setAttribute('style','background:#fff;');

    }   
}

// var letters = /^[A-Za-z]+$/;
var ename = document.querySelector('#name');
ename.addEventListener('keypress',allLetter);
ename.addEventListener('blur',allLetter);

function allLetter()
{
    
    console.log(' name clicked');
    
    if(ename.value != ""){

        var letters = /^[A-Za-z]+$/;
        if(ename.value.match(letters))
        {
            ename.setAttribute('style','background:#7bf098;');
            
        }
        else{
            // alert('You have entered an invalid email address!!');
    
            ename.setAttribute('style','background:#e6775b;');
            
        }

    }
    else
    {
        ename.setAttribute('style','background:#fff;');

    }
}