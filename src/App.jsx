import './App.css';
import Flashcard from './components/Flashcard.jsx';
import { use, useState } from 'react';


const App = () => {
  const flashCards = [
    {
      question: "What is the average lifespan of a bunny?",
      answer: "The average lifespan of a bunny is 8-12 years.",
      valid: "8-12",
      hint: "range of 2 numbers ex.'1-2'"
    },
    {
      question: "What percentage of a bunnies diet should be hay roughly?",
      answer: "Bunnies primarily eat hay about 70% of their diet should be hay they should still always have unlimited access to hay, 20% fortified food (pellets), 8% greens, and 2% treats.",
      valid: "70",
      hint: "enter a number"
    },
    {
      question: "What are the two types of poop that bunnies produce?",
      answer: "Bunnies produce two types of poop: cecotropes (soft, nutrient-rich droppings that they eat) and regular hard droppings.",
      valid: "cecotropes and hard",
      hint: "all lowercase, 3 words, 2nd word is and"
    },
    {
      question: "Identify the type of stool shown in the image.",
      image: "https://images.squarespace-cdn.com/content/v1/63c1aca3dfd83d7d89495005/1675709637735-DL42IK3ADBKP7BX4LS4R/cecotropes+rabbit.png",
      answer: "The image shows cecotropes, which are soft, nutrient-rich droppings that bunnies eat to absorb nutrients.",
      valid: "cecotropes",
      hint: "plural all lowercase"
    },
    {
      question: "How many hours a day do bunnies need to exercise?",
      answer: "Yoy should strive to give your bunny at least 3-4 hours of exercise a day, this can be done by letting them out in a safe area or by playing with them.",
      valid: "3-4",
      hint: "range of 2 numbers ex.20-70"
    },
    {
      question: "How many hours a day do bunnies sleep?",
      answer: "Bunnies sleep for about 12-14 hours a day, but they are crepuscular animals, meaning they are most active during dawn and dusk. They often take short naps throughout the day and night. Additionally they can sleep with their eyes open, so it may be hard to tell when they are sleeping.",
      valid: "12-14",
      hint: "range of 2 numbers ex.1-2"
    }
  ]

  const NUM_OF_CARDS = 6;
  const MIN_INDEX = 0;
  const MAX_INDEX = 5;

  const [randNums, setRandNums] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [shuffleMode, setShuffleMode]  = useState(false);
  const [guess, setGuess] = useState('');
  const [correct, setCorrect] = useState('whitesmoke');

  const handleShuffle = () => {
    if (!shuffleMode){
      generateRandomArray();
    }
    setShuffleMode(!shuffleMode);
    setCurrentIndex(0);
    setAtStart(true);
    setAtEnd(false);
     
  };

  const handleChange = (e) => {
    setGuess(e.target.value);
    setCorrect('whitesmoke');
  };

  const checkAnswer = () => {
    if (shuffleMode){
      if(guess == currentRandCard.valid){
        setCorrect("green");
      }
      else{
        setCorrect("red");
      }
    }
    else{
      if (guess == currentCard.valid){
        setCorrect("green");
      }
      else{
        setCorrect("red");
      }
    }
  };

  const generateRandomArray = () => {
    const randSet = new Set();
    while (randSet.size < NUM_OF_CARDS){
      const randNum = Math.floor(Math.random() * (MAX_INDEX - MIN_INDEX + 1)) + MIN_INDEX;
      randSet.add(randNum);
    }
    const randArr = [...randSet];
    console.log(randArr);
    setRandNums(randArr);
  };

  const handleIncrement = () => {
    if (currentIndex === NUM_OF_CARDS - 2) {
      setCurrentIndex(currentIndex + 1);
      setAtEnd(true);
      setCorrect('whitesmoke');
      setGuess('');
    }
    else if (currentIndex < NUM_OF_CARDS - 2) {
      setCurrentIndex(currentIndex + 1);
      setAtStart(false);
      setCorrect('whitesmoke');
      setGuess('');
    }
  };

  const handleDecrement = () => {
    if (currentIndex === 1){
      setCurrentIndex(currentIndex - 1);
      setAtStart(true);
      setCorrect('whitesmoke');
      setGuess('');
    }
    else if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
      setAtEnd(false);
      setCorrect('whitesmoke');
      setGuess('');
    }
  };


  const currentCard = flashCards[currentIndex];
  const currentRandCard = flashCards[randNums[currentIndex]];

  return (
    <div className="App">
      <div className="header">
        <h2>Beginner's Guide to Being a Bunny Parent</h2>
        <h3>If you want to test your bunny knowledge or want to learn more about bunnies<br></br>
        you are in the right place! This is especially useful for new bunny parents.<br></br>
        </h3>
        <h4>By clicking on the flash cards you can view the answer on the back <br></br>
          Clicking the middle shuffle button will shuffle the card order<br></br>
          To go to the next card click the right arrow on the bottom right corner of the card.<br></br>
          If you want to go back to the previous card click the left arrow on the bottom left corner of the card.<br></br>
          Answers must be exact. Hints for their formatting is provided. <br></br>
        </h4>
        <h3>Total Number of Cards: {NUM_OF_CARDS}</h3>
        
      </div>
      <div className="flashcard-container"> 
        <Flashcard question={shuffleMode? currentRandCard.question : currentCard.question} answer={shuffleMode? currentRandCard.answer : currentCard.answer} image={shuffleMode? currentRandCard.image : currentCard.image} currentIndex={currentIndex} totalCards={NUM_OF_CARDS}/>
      </div>
      <div className="user-input">
        <br></br>
          <input type="text" name="answer" style={{ backgroundColor: correct }} value={guess} placeholder={shuffleMode? currentRandCard.hint : currentCard.hint} onChange={handleChange} className="textbox"></input>
          <br></br>
          <button type="submit" onClick={checkAnswer} className='right-button'>Check Answer</button>
      </div>
      <div className="button-containers">
          <button className="left-button" onClick={handleDecrement} style={{ opacity: atStart? 0: 1 }}>←</button>
          <button className="shuffle-button" onClick={handleShuffle} style={{  backgroundColor: shuffleMode? 'lightblue' : 'black', color: shuffleMode? 'black' : 'white' }}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfLpwqAgS72r8YE6aUbFkSjnNEmh2KYp3NNA&s' height="30px"></img><div>Shuffle Mode</div></button>
          <button className="right-button" onClick={handleIncrement} style={{ opacity: atEnd? 0: 1 }} >→</button>
      </div>

    </div>
  )
}

export default App