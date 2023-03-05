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



const footerFirstName = document.querySelector('#contact-first')
const footerLastName = document.querySelector('#contact-last')
const footerPhoneNumber = document.querySelector('#contact-phone')
const footerPersonal = document.querySelector('#personal')
const footerCompany = document.querySelector('#company')
const footerButton = document.querySelector('#send')


footerButton.addEventListener('click', () => { 

if(footerFirstName.value && footerLastName.value && footerPhoneNumber.value && (footerPersonal.checked || footerCompany.checked)){
    confirm("We will contact you soon")
    footerFirstName.value = ""
    footerLastName.value = ""
    footerPhoneNumber.value = ""
}else{ 
    alert("Enter all inputs")
}
    

})