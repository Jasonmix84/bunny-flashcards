import './App.css';
import Flashcard from './components/Flashcard.jsx';
import { useState } from 'react';


const App = () => {
  const flashCards = [
    {
      question: "What is the average lifespan of a bunny?",
      answer: "The average lifespan of a bunny is 8-12 years."
    },
    {
      question: "What percentage of a bunnies diet should be hay roughly?",
      answer: "Bunnies primarily eat hay about 70% of their diet should be hay they should still always have unlimited access to hay, 20% fortified food (pellets), 8% greens, and 2% treats."
    },
    {
      question: "What are the two types of poop that bunnies produce?",
      answer: "Bunnies produce two types of poop: cecotropes (soft, nutrient-rich droppings that they eat) and regular hard droppings."
    },
    {
      question: "Identify the type of stool shown in the image.",
      image: "https://images.squarespace-cdn.com/content/v1/63c1aca3dfd83d7d89495005/1675709637735-DL42IK3ADBKP7BX4LS4R/cecotropes+rabbit.png",
      answer: "The image shows cecotropes, which are soft, nutrient-rich droppings that bunnies eat to absorb nutrients."
    },
    {
      question: "How many hours a day do bunnies need to exercise?",
      answer: "Yoy should strive to give your bunny at least 3-4 hours of exercise a day, this can be done by letting them out in a safe area or by playing with them."
    },
    {
      question: "How many hours a day do bunnies sleep?",
      answer: "Bunnies sleep for about 12-14 hours a day, but they are crepuscular animals, meaning they are most active during dawn and dusk. They often take short naps throughout the day and night. Additionally they can sleep with their eyes open, so it may be hard to tell when they are sleeping."
    }
  ]

  const NUM_OF_CARDS = 6;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShuffle = () => {
    const incrementVal = Math.floor(Math.random() * 7) + 1; // Randomly increment by 1 or 2
    setCurrentIndex(incrementVal % NUM_OF_CARDS);
  };

  const handleIncrement = () => {
    if (currentIndex < NUM_OF_CARDS - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleDecrement = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };


  const currentCard = flashCards[currentIndex];

  return (
    <div className="App">
      <div className="header">
        <h2>Beginner's Guide to Being a Bunny Parent</h2>
        <h3>If you want to test your bunny knowledge or want to learn more about bunnies<br></br>
        you are in the right place! This is especially useful for new bunny parents.<br></br>
        </h3>
        <h4>By clicking on the flash cards you can view the answer on the back <br></br>
          Clicking the middle shuffle button will display a random card<br></br>
          To go to the next card click the right arrow on the bottom right corner of the card.<br></br>
          If you want to go back to the previous card click the left arrow on the bottom left corner of the card.<br></br>
        </h4>
        <h3>Total Number of Cards: {NUM_OF_CARDS}</h3>
        
      </div>
      <div className="flashcard-container"> 
        <Flashcard question={currentCard.question} answer={currentCard.answer} image={currentCard.image} currentIndex={currentIndex} totalCards={NUM_OF_CARDS}/>
      </div>
      <div className="button-containers">
          <button className="left-button" onClick={handleDecrement}>←</button>
          <button className="shuffle-button" onClick={handleShuffle}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfLpwqAgS72r8YE6aUbFkSjnNEmh2KYp3NNA&s' height="30px"></img></button>
          <button className="right-button" onClick={handleIncrement}>→</button>
      </div>

    </div>
  )
}

export default App