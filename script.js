function Escribir(value) {
    var display = document.getElementById('display');
    if (value === 'delete') {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += value;
    }
  }
function Clear(value){
    display.value = ""
}

  function Calcular() {
    var display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }