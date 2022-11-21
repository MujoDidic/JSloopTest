//Get values from UI
//start or controller function
    function getValues(){
        let startValue = document.getElementById("startValue").value;
        let endValue = document.getElementById("endValue").value;
        
 //parse in to integers
        startValue = parseInt(startValue);
        endValue = parseInt(endValue);

//validation if input is integer
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = generateNumbers(startValue,endValue);

        //Output of numbers and HTML elements on UI
        displayNumbers(numbers);
    } 
    else {
        alert("Wrong input,please enter integers!!!");
    }
}

//Generate numbers from start value to end value
//programs logic
    function generateNumbers(parStartValue, parEndValue) {
        let numbers = [];

        for (let i = parStartValue; i <= parEndValue; i++) {
            numbers.push(i);
        }
        return numbers;
    }

//Display even numbers Bold
    function displayNumbers(numbers){
   
        let templateRows ="";

        for (let index = 0; index < numbers.length; index++) {
            
            let nameClass = "even";
            let number = numbers[index];
           
            if (number % 2 == 0) {
                nameClass = "even";
            } else {
                nameClass ="odd"
            }
            templateRows += `<tr><td class="${nameClass}">${number}</td></tr>`; 

        }
// input HTML element into UI
    document.getElementById("results").innerHTML = templateRows;
}