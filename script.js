function clearDisplay() {
    document.getElementById('display').innerText = '';
  }
  
  function deleteLast() {
    let current = document.getElementById('display').innerText;
    document.getElementById('display').innerText = current.slice(0, -1);
  }
  
  function appendCharacter(character) {
    document.getElementById('display').innerText += character;
  }
  
  function calculate() {
    let display = document.getElementById('display');
    try {
      display.innerText = eval(display.innerText);
    } catch (error) {
      display.innerText = 'Error';
    }
  }
    