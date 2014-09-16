 // this is used to check the phone field 
 
 function checkPhone ( str ) {
      var myreg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;  
      return myreg.test(str);
}
  
 // this is used to check the email field 
function checkEmail ( str ) {
      var myreg2 = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
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
		 console.log("please enter your Full name");
    }
    else
    {
       if ( noSpaceAlphaValidate( fullname.value ) === true ) {
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
       if ( checkEmail( email.value ) === true) {
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
	

	//this is saving to local storage		
var name = document.getElementById('fullname').value;
var email = document.getElementById('email').value;
var phone = document.getElementById('phone').value;
var description = document.getElementById('description').value;

var data = [];
             
                         
data.push({ 
 "fullname": [name]
});
 data.push({ 
 "Email": [email]  
});
 data.push({ 
 "Phone": [phone]  
});
data.push({ 
"description": [description]   
});
localStorage.setItem('data', JSON.stringify(data) );
            
            var savedData = localStorage.getItem('data');
            
            console.log(savedData);
			
			
		
			
			
			
			/////
			//document.getElementById("tableData").innerHTML = localStorage.inputs[0].value;
			//document.getElementById("tableData").innerHTML = localStorage.email;
			//var inputs = document.getElementsByClassName("CSSTableGenerator"); 
           // Name = inputs[0].value; 
           // E-mail = inputs[1].value; 
           // Phone = inputs[2].value; 
           // Description = inputs[3].value; 

		   
		   
		   
		   


 
 }  
   //Event listener that will activate the save data button once it is clicked 
submitBtn.addEventListener('click', submitForm);

	
	//this makes the Clear all data button clear all data on local storage
var clearBtn = document.getElementById('clearData');
 
 
 function clear () {
 localStorage.clear();
 }
clearBtn.addEventListener('click', clear);