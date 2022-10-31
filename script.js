//Variables
const modal = document.querySelector (".modal"),
          btn =  document.querySelector(".btn"),
          close =  document.querySelector(".close");

const popup = document.querySelector(".popup"),
          bttn = document.querySelector(".bttn");
          closee = document.querySelector(".closee")

btn.addEventListener   ("click", openModal);       
close.addEventListener   ("click", closeModal);       
// modal.addEventListener   ("click", closeModal);       

bttn.addEventListener  ("click", openPopup);
closee.addEventListener ("click", closePopup);
// popup.addEventListener ("click", closePopup)


//OPEN MODAL
function openModal(e) {
   e.preventDefault( ); 
   modal.style.display = "block";
}

//OPEN POPUP
function openPopup(e) {
  e.preventDefault( );
  popup.style.display = "block";
}

//CLOSE MODAL
function closeModal() {
  modal.style.display = "none";
}
//CLOSE POPUP
function closePopup() {
  popup.style.display = "none";
}


function validateformm(){  
  var name=document.myformm.name.value;  
  var password=document.myformm.password.value;  
    
  if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;  
  }else if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    }  

    var x=document.myformm.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
}

  var num=document.myformm.num.value;  
if (isNaN(num)){  
  document.getElementById("numloc").innerHTML="Enter Numeric value only";  
  return false;  
}else{  
  return true;  
  }
  }  



function validateform(){  
  var name=document.myform.name.value;  
  var password=document.myform.password.value;  
    
  if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;  
  }else if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    }  

    var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
}
}  