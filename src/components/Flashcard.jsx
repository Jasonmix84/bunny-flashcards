import { useState } from 'react';
import './Flashcard.css'; 

const Flashcard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        console.log('Card clicked');
        console.log('Current flipped state:', isFlipped);
        setIsFlipped(!isFlipped);
    };
     

    return (
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <h3>Question:</h3>
                <h2>{props.question}</h2>
                {props.image && <img src={props.image} alt="Flashcard visual aid" height="200px"/>}
                <h5>{props.currentIndex + 1} / {props.totalCards}</h5>
            </div>
            <div className="flip-card-back">
                <h3>Answer:</h3>
                <h2>{props.answer}</h2>
            </div>
        </div>
        </div>
    );
}

export default Flashcard;