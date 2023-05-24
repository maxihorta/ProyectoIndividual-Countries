 
 const   validate = (input) => {
  
    var expRegNombre = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+[']{0,2}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+[']{0,2}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;

  let errors = {};
  if (!expRegNombre.test(input.name)  ) {
    errors.name = "Enter a valid name";
  }
  else if(!input.name[3]){
    errors.name ="The name must contain more than 3 letters"
  }


  if(input.difficulty === ""){ 
    errors.difficulty =" Enter a number for the difficulty"
  }
  else if ( input.difficulty >= 6 || input.difficulty <= 0 ) {
    errors.difficulty = "Enter a number from 1 to 5";
  }
  


  if (input.duration === "" || (parseInt(input.duration.slice(0,2)) >= 15 && parseInt(input.duration.slice(4,5)) > 0) || (parseInt(input.duration.slice(0,2)) >= 15 && parseInt(input.duration.slice(3,4)) > 0) || (parseInt(input.duration.slice(3,5)) <=  0 && parseInt(input.duration.slice(0,2))===0)) {

    errors.duration = "Enter a duration less than 15 hours";

  }


  if (input.season === "") {

    errors.season = "Select a season";
    
  }


  if(input.idCountry[0]===undefined ){
    errors.idCountry = "Enter one or more countries"
  } 
    
  return errors;
}

export default validate