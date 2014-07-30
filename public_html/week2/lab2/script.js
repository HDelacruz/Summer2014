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
    
  
    
   
      
   