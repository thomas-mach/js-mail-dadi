
const submitElement = document.getElementById('submit')
const emailElement =  document.getElementById('email')
const emails = ['m4chtomasz@gmail.com', 'nobody@gmail.com', 'superman@gmail.com']
const formElemnt = document.getElementById('form')

submitElement.addEventListener('click', function(){
    let isUserMailInArray = false
        
    for (let i = 0; i < emails.length; i++){
        
        if (emails[i] === emailElement.value){
          isUserMailInArray = true 
      }
    }

    if (isUserMailInArray === true){
        formElemnt.append('You are LOGIN')
    } else {
        formElemnt.append('SING IN')
    }
})
  
        
