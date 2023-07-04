/*let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonValue = e.target.innerHTML;

    if (buttonValue === '=') {
      const result = evalString(string);
      document.querySelector('input').value = result;
      string = "";
    } else if (buttonValue === 'C') {
      string = "";
      document.querySelector('input').value = string;
    } else {
      string += buttonValue;
      document.querySelector('input').value = string;
    }
  });
});
/*/

let screen = document.getElementById('screen');
buttons =  document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
  item.addEventListener('click' , (e)=>{
    buttonText = e.target.innerText;
    console.log('Button text is ', buttonText );
    if(buttonText == '*'){
      buttonText = '*';
      screenValue += buttonText;
      screen.value = screenValue;
    }
      else  if(buttonText == '+'){
      buttonText = '+';
      screenValue += buttonText;
      screen.value = screenValue;
    }
      else if(buttonText == '-'){
      buttonText = '-';
      screenValue += buttonText;
      screen.value = screenValue;
    }
     else  if(buttonText == '/'){
      buttonText = '/';
      screenValue += buttonText;
      screen.value = screenValue;
    }
   else if (buttonText == '=') {
  screen.value = eval(screenValue.replace("^", "**"));
}

    else if(buttonText == 'C'){
      screenValue ='';
      screen.value = screenValue;
    }
      else  if(buttonText == '%'){
      buttonText = '%';
      screenValue += buttonText;
      screen.value = screenValue;
    }

    else if (buttonText === '!') {
      let number = parseInt(screenValue);
      if (number === 0) {
        screenValue = '1';
        screen.value = screenValue;
      } else if (number > 0) {
        let fact = 1;
        for (let i = 1; i <= number; i++) {
          fact *= i;
        }
        screenValue = fact.toString();
        screen.value = screenValue;
      } else {
        screenValue = 'Invalid input';
        screen.value = screenValue;
      }
    }
      
    else{
      screenValue += buttonText;
      screen.value = screenValue;
    } 
  })
}


