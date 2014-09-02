/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 // this is used to check the email field 
 
 function checkPhone ( str ) {
      var myreg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;  
      return myreg.test(str);
}
 
function checkEmail ( str ) {
      var myreg = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
      return myreg.test(str);
}


function noSpaceAlphaValidate( str ) {
        var alphaRegex = /^[a-zA-Z ]$/;
        return alphaRegex.test(str);			
}


function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}



var submitBtn = document.getElementById('saveData');

function submitForm() {

// this are my new variables using get element by id
                   

        var fullname = document.getElementById('fullname');
		var email = document.getElementById('email');
        var phone = document.getElementById('phone');
        
        var description = document.getElementById('description');

//checking for first name
    
    if(fullname.value === "")
    {
        var msg="please enter Full name";
        document.getElementById("fullname_err").innerHTML=msg; 
		 console.log("please enter your Full name");
    }
    else
    {
       if ( noSpaceAlphaValidate( name.value ) === true ) {
                console.log("full name is good");
        } else {
                console.log("full name only alpha characters");
        }
         document.getElementById("fullname_err").innerHTML=""; 
		 
    }
	
	//Checking email 
    
    
   if(email.value === "")
    {
        var msg="please enter email";
        document.getElementById("email_err").innerHTML=msg; 
		 console.log("please enter email");
    }
    else
    {
       if ( checkEmail( email.value ) === false ) {
                console.log("Email not valid");
        } else {
                console.log("Email is good");
        }
         document.getElementById("email_err").innerHTML=""; 
		 
    }
	

	
	
   
   //Checking if phone is good 
    
    if(phone.value === "")
    {
        var msg="please enter Phone Number";
        document.getElementById("phone_err").innerHTML=msg; 
		 console.log("please enter your Phone");
    }
    else
    {
       if ( checkPhone( phone.value ) === true ) {
                console.log("Phone Number is good");
        } else {
                console.log("phone not good");
        }
         document.getElementById("phone_err").innerHTML=""; 
		 
    }
    
         
    
  //remove html elements
    
    description.value = strip_HTML(description.value);
    
    if (description.value === "" || description.value.length > 150)
    {
        var msg="please enter valid Description";
        document.getElementById("description_err").innerHTML=msg;
		console.log("Please Enter a Description");
    }
    
    else 
    {
	console.log("Description is good")
 
 // error message if comments are valid
 
        document.getElementById("description_err").innerHTML="";
        
    }
    
    
      

}


submitBtn.addEventListener('click', submitForm);

 //Event listener that will activate the Submit button once it is clicked 
 


