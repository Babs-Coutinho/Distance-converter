(function(){
     "use strict";

     let convertType = "miles";
    let form = document.getElementById("convert");
    let head = document.querySelector("h1");
    let para = document.querySelector("p");
    
   form.addEventListener('submit', function(event){
       event.preventDefault();
         let distance = parseFloat(document.getElementById("distance").value);
        // document.querySelector("h2").innerHTML = distance;

      if (distance){
        if(convertType ==="miles"){
          let converted = (distance * 1.69344). toFixed(3);
          document.querySelector("h2").innerHTML = `${distance} miles converts to ${converted} kilometre`;
        }
       else {
        let converted = (distance * 0.621371192).toFixed(3);
          document.querySelector("h2").innerHTML = `${distance} kilometre converts to ${converted} miles`;
       }
      }
      else{
        document.querySelector("h2").innerHTML = "Please input a number!";
      }
         });
       window.addEventListener('keydown', function(evt){
        let key = evt.code;
        //  alert(key);
         if ( key == "KeyM"){
          convertType = "kilometre";
          head.innerHTML = "Kilometre to Miles converter";
          para.innerHTML = "Type distance in Kilometre click the search button to converts it to Miles";
        }
        else if ( key === "KeyK"){
          convertType = "miles";
          head.innerHTML = "  Miles to Kilometre converter";
          para.innerHTML = "Type distance in Miles click the search button to converts it to Kilometre";
        }
        });
      
       
       
}());
   