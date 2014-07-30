/*
 * Make sure to validate that an email is 
 * entered into the input(just that it has a length.
 * 
 * Validate the comments field to make sure that is has
 * a length greater than 0 and less than 150.
 */
    
  function submitForm() {
    
    var fullname = document.getElementById("name");
    var fullnameErr = document.getElementById("err_name");
    
    var hasErrors = false;
    
    if ( fullname.value.length ) {
        fullname.classList.remove('bad');
        fullname.classList.add('good');        
        fullnameErr.innerHTML = '';
        
    } else {
        hasErrors = true;
        fullname.classList.remove('good');
        fullname.classList.add('bad');       
        fullnameErr.innerHTML = "<p>Full Name is not valid.</p>";       
    }
   var email = document.getElementById('email');
    var err_email = document.getElementById('err_email');
    
        
        if ( !email.value.length ) {
           hasErrors = true;
           err_email.innerHTML = '<p>Email is not valid.</p>';
           email.classList.add('bad');
           email.classList.remove('good');
            
        } else {
            err_email.innerHTML = '';
            email.classList.add('good');
            email.classList.remove('bad');
        }
        
        
    }
    
   
    function testing( str ){
        console.log(str);
    
    
    
    
}