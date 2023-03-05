const headerName = document.querySelector("#first-name");
const headerLast = document.querySelector("#last-name");
const headerPhone = document.querySelector("#phone-number");
const headerButton = document.querySelector('#get-started')
const monthly = document.querySelector('#monthly')
const yearly = document.querySelector('#yearly')



headerButton.addEventListener('click', () => { 
    if(headerName.value && headerLast.value && headerPhone.value && (monthly.checked || yearly.checked ) ){
        confirm("Your trial started")
        headerName.value = ""
        headerLast.value = ""
        headerPhone.value = ""
    }else{
        alert("Enter all inputs")
    }

   
})