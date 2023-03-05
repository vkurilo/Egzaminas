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


//Tabs


const register = document.querySelector('#register')
const apply = document.querySelector('#apply')
const receive = document.querySelector('#receive')
let h2 = document.querySelector('#h2')
let p= document.querySelector('#p')
let pOne= document.querySelector('#p-1')

apply.addEventListener('click', () => { 

    if(apply){
      h2.innerText = 'The standard Lorem Ipsum passage, used since the 1500s'
       p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
       pOne.innerText = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
})

register.addEventListener('click', () => {
    if(register){
      
        h2.innerText = 'Tabs with soft transitioning effect. Explained propriety of out perpetual his you.'
        p.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
        sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
        et magnis dis parturient montes`
        pOne.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.`
    }

})


receive.addEventListener('click', () => { 
    if(receive){
        h2.innerText =`1914 translation by H. Rackham`
        p.innerText =`On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. `
        pOne.innerText = `These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.`
    }
})