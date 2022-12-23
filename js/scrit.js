let fNames = document.querySelector('#fName');
let fNameErrs = document.querySelector('#fNameErr');
let buttons =document.querySelector('#buttton');

buttons.onclick = function (e){
    e.preventDefault();
    if(fNames.value == ''){
        fNameErrs.innerHTML = 'tor name dibe ke';
        
    }
}








 



















