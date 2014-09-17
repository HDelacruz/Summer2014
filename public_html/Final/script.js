 // this is used to check the phone field 
 
 function checkPhone ( str ) {
      var myreg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;  
      return myreg.test(str);
}
  
 // this is used to check the email field 
function checkEmail ( str ) {
      var myreg2 = /^[a-zA-Z]+[@]{1}[a-zA-Z]+[\.]{1}[a-zA-Z]{2,3}$/;
      return myreg2.test(str);
}

 
 // this is used to check the fullname field 
function noSpaceAlphaValidate( str ) {
        var alphaRegex = /[a-zA-Z ]/;
        return alphaRegex.test(str);			
}

 
 // this is used to check the description field 
function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}


//created a cvariable for my button save data
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
    }
    else if ( noSpaceAlphaValidate( fullname.value ) === false ) 
        {
            var msg="full name only alpha characters";
            document.getElementById("fullname_err").innerHTML=msg;
        } 
        else 
        {
           hasErrors = false;
           fullname.classList.remove('good');
        }
          
           //email.classList.add('bad');
          // email.classList.remove('good');
       
         
	
	//Checking email 
    
    
   if(email.value === "")
    {
        var msg="please enter email";
        document.getElementById("email_err").innerHTML=msg; 	 
    }
    else if ( checkEmail( email.value ) === false) 
        {
                var msg="Email follow this format Test@test.com";
        document.getElementById("email_err").innerHTML=msg; 
        } 
       	
        else 
        {
           hasErrors = false;
           email.classList.remove('good');
        }
   
   //Checking if phone is good 
    
    if(phone.value === "")
    {
        var msg="please enter Phone Number";
        document.getElementById("phone_err").innerHTML=msg; 
		 
    }
    else if ( checkPhone( phone.value ) === false ) 
        {
          var msg="please this is the format 000-000-0000";
          document.getElementById("phone_err").innerHTML=msg; 
        } 
       else 
        {
           hasErrors = false;
           phone.classList.remove('good');
        }
    
  //remove html elements
    
    
    if (description.value === "" || description.value.length > 150)
    {
        var msg="please enter a valid description less then 150 characters";
        document.getElementById("description_err").innerHTML=msg;	
    }
    
    else if (strip_HTML (description.value)=== false)
    {	
     var msg="Please no special characters";
     document.getElementById("description_err").innerHTML="";     
    }   	
	else 
        {
           hasErrors = false;
           description.classList.remove('good');
        }

        
        
	//this is saving to local storage		

if ( true   )
{ 
    saveData();
}
 
 
 
 
 
 }
   //Event listener that will activate the save data button once it is clicked 
submitBtn.addEventListener('click', submitForm);


var data = [];
             
    function saveData(){
        
        var currentData = {
              "FullName" : "",
              "Email" : "",
              "Phone" : "",
              "Description" : ""
            };
     
    
    currentData.FullName = fullname.value;
    currentData.Email = email.value;
    currentData.Phone = phone.value;
    currentData.Description = description.value;


data.push(currentData);

   
            
localStorage.setItem('data', JSON.stringify(data) );
            
            var savedData = localStorage.getItem('data');
            
            console.log(savedData);
            console.log(JSON.parse(savedData));
		
 } 

	
	//this makes the Clear all data button clear all data on local storage
//var clearBtn = document.getElementById('clearData');
 
 
 function clear () 
 {
 localStorage.clear();
 }
 var clearBtn = document.getElementById('clearData');
clearBtn.addEventListener('click', clear);
