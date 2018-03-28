import React from 'react';
import propTypes from 'prop-types';

const renderSyllables = list => list.map((syl, idx, syls) => (
  <em key={syl}>{syl}{idx + 1 < syls.length ? '-' : ''}</em>
));

// TODO: visually, it is implied that pronounce refers to the word.
// Explore what aria roles would best suit this sitation. described-by?
function speakPronunciation(e) {
  e.preventDefault();
  const message = new SpeechSynthesisUtterance();
  const syllables = document.querySelector('.syllables');
  const text = syllables.innerText
    .substring(1, syllables.innerText.length - 1)
    .replace(/-/g, '');

  message.text = text;
  speechSynthesis.speak(message);
}

const Syllables = ({ data }) => {
  if (data) {
    return (
      <div>
        <h3>syllables</h3>
        <p>
        ({data.count} syllables) <span className="syllables">[{renderSyllables(data.list)}]</span>
        </p>
        {'speechSynthesis' in window &&
        <button onClick={speakPronunciation}>pronounce</button>
        }
      </div>
    );
  }

  return null;
};

Syllables.propTypes = {
  data: propTypes.shape({
    count: propTypes.number,
    list: propTypes.array,
  }).isRequired,
};

export default Syllables;
