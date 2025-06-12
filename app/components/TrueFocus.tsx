import React from 'react';
import './TrueFocus.css';

interface TrueFocusProps {
  sentence: string;
}

const TrueFocus: React.FC<TrueFocusProps> = ({ sentence }) => {
  return (
    <div className="true-focus-container">
      <h2 className="text-3xl font-bold text-center tracking-wide">
        {sentence.split('').map((char, index) => (
          <span
            key={index}
            className={`true-focus-char ${char === ' ' ? 'space' : ''}`}
          >
            {char}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default TrueFocus;
