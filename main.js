// console.log( "it works")
$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault()
        console.log('Clicked button')

        var fullname = $('.fullname').val()
        var email = $('.email').val()
        var mobile = $('.mobile').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()
       
        if(email.length > 5 && email.includes && email.includes('.')) {
            statusElm.append( '<div> Email is valid </div>')
        }else{
            event.preventDefault()
            statusElm.append(' <div> Email is invalid </div>')  
        }
        if(subject.length > 2) {
            statusElm.append( '<div> Subject is valid </div>')
        }else{
            event.preventDefault()
            statusElm.append(' <div> Subject is invalid </div>')  
        }
        if(message.length > 20) {
            
            statusElm.append( '<div> Message is valid </div>')
        }else{
            event.preventDefault()
            statusElm.append(' <div> Message is invalid </div>')  
        }
        if(message.length > 5) {
            statusElm.append( '<div> Full Name is valid </div>')
        }else{
            event.preventDefault()
            statusElm.append(' <div> Full Name is invalid </div>')  
        }
    })
})