
 function p(){
   
    gender=document.getElementById("gender").value;

    yy=document.getElementById("year").value;
    cc=document.getElementById("century").value;
    dd=document.getElementById("date").value;
    mm=document.getElementById("month").value;
    if((dd>31||dd<1) || (mm>12||mm<1)){
        alert("Please enter the right date and month") 
    }else{
        if(dd>29 && mm==2){
            alert("Please enter the right date of february")
        }else{
            var d = ((( (cc/4) -2*cc-1)) + ((5*yy/4))+ ((26*(mm+1)/10)) + dd )%7;
            var result= Math.floor(d);
            gender1=["female","male"];
            femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
            maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]


// /************************************************************SWITCH*************************/






  

switch (true) {
    case result===0 && gender===gender1[0] :
        window.alert(" your new akan name is " +femaleNames[0]+ " you were born on sunday ")
        break;
    case result===1 && gender===gender1[0] :
        window.alert(" your new akan name is " +femaleNames[1]+" you were born on monday ")
        break;
    case result===2 && gender===gender1[0]:
        window.alert(" your new name akan is " +femaleNames[2]+" you were born on tuesday");
        break;
    case result===3 && gender===gender1[0]:
        window.alert(" your new akan name is " +femaleNames[3]+ " you were born on wednesday");
        break;
    case result===4 && gender===gender1[0]:
        window.alert(" your new akan name is " +femaleNames[4]+" you were born on thursday");
        break;
    case result===5 && gender===gender1[0]:
        window.alert(" your new akan name is " +femaleNames[5]+" you were born on friday");
        break;
    case result===6 && gender===gender1[0]:
        window.alert(" your new akan name is " +femaleNames[6]+" you were born on saturday");
        break;
    case result===0 && gender===gender1[1]:
        window.alert(" your new akan  name is " +maleNames[0]+" you were born on sunday");
        break;
    case result===1 && gender===gender[1]:
        window.alert(" your akan new name is " +maleNames[1]+" you were born on monday");
        break;
    case result===2 && gender===gender1[1] :
        window.alert(" your new akan name is " +maleNames[2]+" you were born on tuesday");
        break;
    case result===3 && gender===gender1[1]:
        window.alert(" your new akan name is " +maleNames[3]+" you were born on wednesday");
        break;
    case result===4 && gender===gender1[1]:
        window.alert(" your new akan name is " + maleNames[4]+" you were born on thursday");
        break;
    case result===5 && gender===gender1[1]:
        window.alert(" your new akan name is " +maleNames[5]+" you were born on friday");
        break;
    case result===6 && gender===gender1[1]:
        window.alert(" your new akan name is " +maleNames[6]+" you were born on saturday");
        break;
     default:
        window.alert("Please enter the data as described");
        break;
}

}
        }
    };
    
