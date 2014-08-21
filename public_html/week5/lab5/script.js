/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// this is used to check the email field
function checkEmail ( str ) {
      var myreg = /(^[a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{3}$)/;
      return myreg.test(str);
}


function noSpaceAlphaValidate( str ) {
        var alphaRegex = /(^[a-zA-Z]+$)/;
        return alphaRegex.test(str);			
}


function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}


function submitForm() {

// this are my new variables using get element by id

        var fname = document.getElementById('fname');
        var lname = document.getElementById('lname');
        var email = document.getElementById('email');
        var comments = document.getElementById('comments');

//checking for first name
    
    if(fname.value === "")
    {
        var msg="please enter first name";
        document.getElementById("err_fname").innerHTML=msg; 
    }
    else
    {
       if ( noSpaceAlphaValidate( fname.value ) === true ) {
                console.log("First name is good");
        } else {
                console.log("First name only alpha characters");
        }
         document.getElementById("err_fname").innerHTML=""; 
    }
   
   //Checking if last name 
    
    if(lname.value === "")
    {
        var msg="please enter Last name";
        document.getElementById("err_lname").innerHTML=msg; 
    }
    else
    {
        if (noSpaceAlphaValidate( fname.value )=== false) {
            console.log("Last name needs Alpha chars");
        } else {
            console.log("Last name is good");
        }
        
    document.getElementById("err_lname").innerHTML=""; 
    }
    
    
    
    //Checking email 
    
    
    if(email.value === "")
    {
        var msg="please enter email";
        document.getElementById("err_email").innerHTML=msg; 
        console.log("Email is not valid");
    }
    else if (checkEmail(email.value) === false) 
    {
        var msg="please enter valid email";
        document.getElementById("err_email").innerHTML=msg; 
    }
    
         
    else
    {
        document.getElementById("err_email").innerHTML="";   
    
    }
    
    // remove the HTML elements
    
    comments.value = strip_HTML(comments.value);
    
    if (comments.value === "" || comments.value.length > 150)
    {
        var msg="please enter valid comments";
        document.getElementById("err_comments").innerHTML=msg;
    }
    
    else 
    {
 
 // error message if comments are valid
 
        document.getElementById("err_comments").innerHTML="";
        
    }
    
    
      

}


 //Event listener that will activate the Submit button once it is clicked 
 
document.getElementById('submitbtn').addEventListener('click',submitForm);