const calculateTemp = () => {
   const number = document.getElementById("myform").elements[0].value;
   const myOption = document.getElementById("myform").elements[1].value;

   let result;
   const CeltoFah = (num) => {
      let fah_result = Math.round((9 / 5) * num + 32);
      return fah_result;
   };

   const FahtoCel = (num) => {
      let cel_result = Math.round(((num - 32) * 5) / 9);
      return cel_result;
   };

   if (myOption == "fah") {
      result = CeltoFah(number);
      document.getElementById("myAnswer").innerHTML = `Answer: ${result} ° Fahrenheit`;
   } else {
      result = FahtoCel(number);
      document.getElementById("myAnswer").innerHTML = `Answer: ${result} ° Celcius`;
   }
};
