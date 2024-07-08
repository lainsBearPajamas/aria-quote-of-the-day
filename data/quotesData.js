
export class Quote {
  image;
  name;
  text;

  constructor(quoteDetails) {
    this.image = quoteDetails.image;
    this.name = quoteDetails.name;
    this.text = quoteDetails.text;
  }
}



export const quotes = [{
  image: '/aria-quote-of-the-day/images/aria-akira.png',
  name: 'Akira Ferrari',
  text: "You shouldn't think that those were good times. It is better to think those were good times too."
}, {
  image: '/aria-quote-of-the-day/images/aria-akari.webp',
  name: 'Akari Mizunashi',
  text: "Many things change with time but some things never change. And there are things that are beautiful because they change, as well as things that are beautiful because they never change. Both are beautiful in their own way."
}, {
  image: '/aria-quote-of-the-day/images/aria-alicia.jpg',
  name: 'Alicia florence',
  text: "The world looks wonderful to those who are wonderful inside."
}, {
  image: '/aria-quote-of-the-day/images/aria-akari-2.jpg',
  name: 'Akari Mizunashi',
  text: "If one feels it is fun now, one will be able to enjoy life the most. Everything will change over time, so we must treasure the happy moments before us."
}, {
  image: '/aria-quote-of-the-day/images/aria-alicia-2.webp',
  name: 'Alicia Florence',
  text: "There are some people who are rich and stay in beautiful places but are still unhappy. There are some people who are poor, but happy. In the end, happiness or sadness, only the person can determine."
}, {
  image: '/aria-quote-of-the-day/images/aria-alicia-4.webp',
  name: 'Alicia Florence',
  text: "Back then, now, and from now on, in the time you spend with others, lots of small fun things are born and disappear. If you are able to capture each of them, you’ll never run out of fun things. Forever and ever. And here’s one point of advice. Thinking that now is fun is what makes it the most fun."
}, {
  image: '/aria-quote-of-the-day/images/aria-akari-5.webp',
  name: 'Akari Mizunashi',
  text: "Mysterious things, when you were a child you used to think: “They exist for sure!”, but all of a sudden it changes to, “It would be nice if they existed.” I wonder when and why you stop believing."
}, {
  image: '/aria-quote-of-the-day/images/aria-akino.webp',
  name: 'Akino Ametsuchi',
  text: "Isn’t it okay to consider sad or hard times as the seasoning that lets you enjoy life? You can change them inside yourself so that you can enjoy anything. It truly is a wonderful thing, living each day."
}, {
  image: '/aria-quote-of-the-day/images/aria-akari-6.png',
  name: 'Akari Mizunashi',
  text: "On a planet that had neither water nor air from the feelings of people building this city was born a great miracle. Perhaps, our meeting is also a miracle?"
}, {
  image: '/aria-quote-of-the-day/images/aria-ai.webp',
  name: 'Ai Aino',
  text: "Akari, in todays letter you have used the world 'amazing' 34 times. I think it must have been really amazing!"
}]

export const quote = new Quote (quotes[2]);
console.log(quote);