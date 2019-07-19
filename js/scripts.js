var firstName,lastName,cc,yy,mm,dd,gender;


firstName=document.querySelector("#first-name").Value
lastName=document.getElementById("last-name").value;
cc=document.getElementById("century").value;
dd=document.getElementById("date").value;
mm=document.getElementById("month").value;
yy=document.getElementById("year").value;
female=document.getElementById("female").value;
male=document.getElementById("male").value;

document.getElementById('button').addEventListener('click', function(){
    // var d = (( (cc/4) -2*cc-1) + (5*yy/4)+ (26*(mm+1)/10) + dd )%7;
    // var result= Math.floor(d);
    // document.getElementById('final').textContent=result;
    console.log(cc);;
})

// /***********************************************************DAYS ARRAY*****************/
// var days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// var isunday,imonday,ituesday,iwednesday,ithursday,ifriday,isaturday;
// isunday=days.indexOf("sunday");
// imonday=days.indexOf("monday");
// ituesday=days.indexOf("tuesday");
// iwednesday=days.indexOf("wednesday");
// ithursday=days.indexOf("thursday");
// ifriday=days.indexOf("friday");
// isaturday=days.indexOf("saturday");

// /**********************************************************GENDER ARRAY********************/
// var gender1=["female","male"];


//  /**********************************************************NAMES ARRAY********************/
// var femaleNames,maleNames;
// femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
// maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]



// /************************************************************SWITCH*************************/






  

// switch (true) {
//     case result===isunday&& female===gender1[0] :
//         document.getElementById('final').textContent=firstName+" "+lastName+ " your new name is " +femaleNames[0]
//         break;
//     case result===imonday && female===gender1[0] :
//         document.getElementById('final').textContent=firstName+" "+lastName+ " your new name is " +femaleNames[1]
//         break;
//     case result===ituesday && female===gender1[0]:
//         document.getElementById('final').textContent=firstName+" "+lastName+ " your new name is " +femaleNames[2];
//         break;
//     case result===iwednesday && female===gender1[0]:
//         document.getElementById('final').textContent=firstName+" "+lastName+ " your new name is " +femaleNames[3];
//         break;
//     case result===ithursday && female===gender1[0]:
//         document.getElementById('final').textContent=firstName+" "+lastName+ " your new name is " +femaleNames[4];
//         break;
//     case result===ifriday && female===gender1[0]:
//         document.getElementById('final').textContent=firstName+" "+lastName+ " your new name is " +femaleNames[5];
//         break;
//     case result===isaturday && female===gender1[0]:
//         document.getElementById('final').textContent=firstName+" "+lastName+ " your new name is " +femaleNames[6];
//         break;
//     case result===isunday && male===gender1[1]:
//         document.getElementById('final').textContent=firstName+" "+lastName+ " your new name is " +maleNames[0];
//         break;
//     case result===imonday && male===gender[1]:
//         document.getElementById('final').textContent=firstName+" "+lastName+ " your new name is " +maleNames[1];
//         break;
//     case result===ituesday && male===gender1[1] :
//         document.getElementById('final').textContent=firstName+" "+lastName+ " your new name is " +maleNames[2];
//         break;
//     case result===iwednesday && male===gender1[1]:
//         document.getElementById('final').textContent=firstName+" "+lastName+ " your new name is " +maleNames[3];
//         break;
//     case result===ithursday && male===gender1[1]:
//         document.getElementById('final').textContent=firstName+" "+lastName+ " your new name is " +maleNames[4];
//         break;
//     case result===ifriday && male===gender1[1]:
//         document.getElementById('final').textContent= firstName+" "+lastName+ " your new name is " +maleNames[5];
//         break;
//     case result===isaturday && male===gender1[1]:
//         document.getElementById('final').textContent=firstName+" "+lastName+ " your new name is " +maleNames[6];
//         break;
//      default:
//         document.getElementById('final').textContent=firstName+" "+lastName+ " Please enter the data as described";
//         break;
// }

// })
