import {Quote, quotes} from '../data/quotesData.js'
import { getDayOfTheWeekName, getMonthName, renderDate } from '../utils/timeFormat.js';

let intervalChosen;
let quote;
function renderQuote() {

  const today = new Date();
  const dateObject = renderDate(today);
  const dayOfTheWeek = today.getDay();
  const dayOfTheWeekName = getDayOfTheWeekName(dayOfTheWeek);
  const monthName = getMonthName(dateObject);
  const date = today.getDate();


  let randomNumber = Math.random();
  console.log(randomNumber);

  const fragment = 1 / quotes.length;

  //now I need to get the correct day of the week name, as well as the correct month name and display them on the web page! 


  for (let i = 0; i < quotes.length; i++) {
    if (randomNumber >= i * fragment && randomNumber < (i + 1) * fragment) {
      if (intervalChosen === i) {
        console.log('same interval');
        renderQuote();
        
      } else if (intervalChosen !== i) {
        quote = quotes[i];
        intervalChosen = i; 
        console.log(intervalChosen, 'chosen interval');
      };
      
    }
  }
  
  const {image, text, name} = quote;

  //here we select the right div element. Then we add zero opacity class to it to make it appear invisible in the beginning. We also remove any full opacity classes we have added before to make it still appear invisible. Then we set a very short timeout that adds the full opacity class and removes the zero opacity class to the element. The trick here is that we have set full opacity's transition to one second. That means that the element instantly becomes invisible but takes one second to become visible. 
  const divElement = document.querySelector('.js-right-div');
  divElement.classList.remove('full-opacity');
  divElement.classList.add('zero-opacity');
  setTimeout(() => {
    divElement.classList.add('full-opacity');
    divElement.classList.remove('zero-opacity')
  }, 1)
  
  divElement.innerHTML = `
    <h1>Today: ${dayOfTheWeekName}, ${monthName} ${date}</h1>
    <div class="image-container">
      <img src="${image}" alt="" class="image">
    </div>

    <h3>${name}</h3>
    
    <p>${text}</p>
  `
}

const buttonElement = document.querySelector('.js-generate-button');
buttonElement.addEventListener('click', () => {
  renderQuote();
});
