import React from 'react';
import propTypes from 'prop-types';
import Syllables from '../Syllables';
import Pronunciation from '../Pronunciation';

// TODO: visually, it is implied that pronounce refers to the word.
// Explore what aria roles would best suit this sitation. described-by?
// NOTE: It's a real shame that the web speech synthesis API doesn't honor
// the International Phoenetic Alphabet, because I'd love to put this pronuncation
// function under the pronunciation section, where it logically (and more helpfully)
// belongs, allowing variance in emphasis.
function speakPronunciation(e) {
  e.preventDefault();
  const message = new SpeechSynthesisUtterance();
  const word = document.querySelector('[data-pronounce]').innerText;

  message.text = word;
  speechSynthesis.speak(message);
}

// NOTE: depending heavingly on conditional rendering to prevent propType ".isRequired" violations.
const DescriptionList = ({ data }) => (
  <dl>
    <dt>
      <h2 data-pronounce>{data.word}</h2>
      {'speechSynthesis' in window &&
      <button onClick={speakPronunciation}>pronounce</button>
      }
      {data.syllables &&
      <Syllables data={data.syllables} />
      }
      {data.pronunciation &&
      <Pronunciation data={data.pronunciation} />
      }
    </dt>
    {data.results &&
    data.results.map(result => (
      <dd key={result.definition}>{result.definition}</dd>
    ))
    }
    <style jsx>{`
     h2 {
       font-size: 2.16em;
     }
    `}
    </style>
  </dl>
);

DescriptionList.propTypes = {
  data: propTypes.shape({
    results: propTypes.arrayOf(propTypes.object),
    word: propTypes.string,
  }).isRequired,
};

export default DescriptionList;
