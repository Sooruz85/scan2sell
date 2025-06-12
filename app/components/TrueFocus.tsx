import React from 'react';

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
            className="true-focus-char inline-block"
            style={{
              animationDelay: `${index * 0.05}s`,
              marginRight: char === ' ' ? '0.5em' : '0.1em'
            }}
          >
            {char}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default TrueFocus;
