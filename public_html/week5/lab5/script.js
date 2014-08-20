/*
 * Make sure to validate that an email is 
 * entered into the input(just that it has a length.
 * 
 * Validate the comments field to make sure that is has
 * a length greater than 0 and less than 150.
 */
    
  function submitForm()
  {
    
    var fullname = document.getElementById("name");
    var fullnameErr = document.getElementById("err_name");
    
    var hasErrors = false;
    
    if ( fullname.value.length )
	{
		fullname.classList.remove('bad');
        fullname.classList.add('good');        
        fullnameErr.innerHTML = '';      
    }

	else 
	{
        hasErrors = true;
        fullname.classList.remove('good');
        fullname.classList.add('bad');       
        fullnameErr.innerHTML = "<p>Full Name is not valid.</p>";       
    }
    
    /*i used what we learn in lass to add error message to the email
     * created variable names email and err_email the equal the the name id use on my html form
     * used the ! to speciafy if the email is not valid to put out a message saing email not valid
     * used the classList to add bad or good from the style sheet
     */
   var email = document.getElementById('email');
    var err_email = document.getElementById('err_email');
    
        
        if ( !email.value.length ) 
		{
         hasErrors = true;
         err_email.innerHTML = '<p>Email is not valid.</p>';
         email.classList.add('bad');
         email.classList.remove('good');            
        } 
		
	else 
	{
         err_email.innerHTML = '';
         email.classList.add('good');
         email.classList.remove('bad');
        }
        
        
        /*here i created new variable for comments just like the email area
         * i used the if statement if < 1 character is inputed and the 
         * statement is true, put out please enter a comment
         * i useed the else if, if more then 150 characters were 
         * inputed and if the statement was true to put out comments has to be 
         * less then 150 characters
         * i used the else line right after if the statement came false meaning 
         * there was a comment inputed and less then 150 character not to give 
         * error message
         * 
         */
        var comments = document.getElementById('comments');
        var err_comments = document.getElementById('err_comments');
        var hasErrors = false;
		
		
  
        if (comments.value.length < 1) 
		{
         hasErrors = true;
           err_comments.innerHTML = "<p>Please input a comment</p>";
        }
		
	    else if (comments.value.length > 150)
		{
		 hasErrors = true ;
		 err_comments.innerHTML = "<p>Please input a comment not more then 150 characters.</p>"; 
			
		}
		
		else 
		{
		 hasErrors = false;           
         err_comments.innerHTML = '';	
       	}
		
		  
    }
    
    
    /*
 Let’s revisit form validation from week 2. 
  You will use your same form but create some new JavaScript. 
 
1. In your HTML make a fname and lname fields.
2. Using regular expression to validate your form.
    a. Full name must be a SpaceAlphaValidate, only characters and spaces allowed
    c. Email must start with characters, have a @ symbol, have another set 
       of characters have a period and end with 3 characters.
    d. Comments must not have any html.  Search for characters that have <> 
       wrapped around it.

3.  Once all the data is valid hide the form using [object].style.display='none'
    Display a div that will show the data entered.  You can add a div to the page
    and have it display:none to start.

 */






function SpaceAlphaValidate( str ) {
        var alphaRegex = /[a-zA-Z ]+/;
        return alphaRegex.test(str);	
        
        
}

function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}

function submitform() {
			
        var fname = document.getElementById('fname');

        if ( !fname.value.length ) {
                console.log("Fname needs a length");
        } else if ( SpaceAlphaValidate( fname.value ) === false ) {
                console.log("Fname needs Alpha chars");
        } else {
                console.log("Fname is good");
        }

}
