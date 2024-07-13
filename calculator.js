let currentValue = "";

function button1(input){
    currentValue += input;
    document.getElementById("display").value = currentValue;


}
function clearbutton(){
    currentValue = "";
    document.getElementById("display").value = currentValue;
    

}
function equalto(){
    try{
        let result = eval(currentValue);
        document.getElementById('display').value = result;
        currentValue = result;
    }catch(error){
        currentValue = "Error";
        document.getElementById('display').value = currentValue;

    }
    

}