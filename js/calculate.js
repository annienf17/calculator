
 
function backspace() {
           
    var displayVal  = document.getElementById('display-val').value;
    document.getElementById('display-val').value=displayVal.substring(0,displayVal.length -1);
  }

function calc(val) {
    document.getElementById("display-val").value = val;
} 

function math(val) {
    document.getElementById("display-val").value += val;
} 

function err() {
    try {
        calc(eval(document.getElementById("display-val").value))
    }
    catch(err) {
        calc('E')
    }
}





   