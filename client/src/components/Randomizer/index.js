  import React from "react";

//   function GetValue() {

//   {
//       var myarray= new Array("item1","item2","item3");
//       var random = myarray[Math.floor(Math.random() * myarray.length)];
//       //alert(random);
//       document.getElementById("message").innerHTML=random;
//   };
// }

function RandomizerFunction() {

  return (

    function GetValue()
    {
        var myarray= new Array("item1","item2","item3");
        var random = myarray[Math.floor(Math.random() * myarray.length)];
        //alert(random);
        document.getElementById("message").innerHTML=random;
    }

  )}

  export default RandomizerFunction;