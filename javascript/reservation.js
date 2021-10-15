const form = document.getElementById('form');
const username = document.getElementById('username');
const phonenumber = document.getElementById('phonenumber');
const numberofperson = document.getElementById('numberofperson');
const dateandtime = document.getElementById('dateandtime');
const couponcode = document.getElementById('couponcode');


form.addEventListener('submit', e =>{
    e.preventDefault();

    checkInput();
});

function checkInput(){
    const nameValue = username.value.trim();
    const phonenumberValue =  phonenumber.value.trim();
    const numberofpersonValue = numberofperson.value.trim();
    const dateandtimeValue = dateandtime.value.trim();
    const couponcodeValue = couponcode.value.trim();

    if(nameValue === ''){
        ErrorFor(username, 'Name cannot be blank')
    }else{
        SuccessFor(username);
    }
    //Phone Number
    if(phonenumberValue === ''){
        ErrorFor(phonenumber, 'PhoneNumber cannot be blank')
    }else{
        SuccessFor(phonenumber);
    }
    //phone number must be more than 10 digits
    if(phonenumberValue.length < 10){
        ErrorFor(phonenumber,'Insert valid phone number')
    }
    //Number of Person
    if(numberofpersonValue === ''){
        ErrorFor(numberofperson, 'Number of person cannot be blank')
    }else{
        SuccessFor(numberofperson);
    }
    if(numberofpersonValue < 1){
        ErrorFor(numberofperson,'Min Number of Person is 1')
    } else{
        SuccessFor(numberofperson);
    }
    //Date and Time
    if(dateandtimeValue === ''){
        ErrorFor(dateandtime, 'Date and Time cannot be blank')
    }else{
        SuccessFor(dateandtime);
    }

    //Coupon Code must contain '#'
    if(couponcodeValue === ''){
        SuccessFor(couponcode);
    }else{
        if(couponcodeValue.length !=6){
            ErrorFor(couponcode, 'Coupon code length should be 5')
        }else{
        for(let i=0;i<couponcodeValue.length;i++){
            if('#'.includes(couponcodeValue[i])){
                SuccessFor(couponcode);
                break;
            }else{
                ErrorFor(couponcode, 'Invalid Coupon Code')
            }
        }
    }
    }
    
}

function ErrorFor(input, message){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');

    small.innerText = message;

    formcontrol.className = 'form-control error';
}

function SuccessFor(input){
    const formcontrol = input.parentElement;
	formcontrol.className = 'form-control success';
}