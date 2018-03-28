import React from 'react';
import propTypes from 'prop-types';

const renderSyllables = list => list.map((syl, idx, syls) => (
  <em key={syl}>{syl}{idx + 1 < syls.length ? '-' : ''}</em>
));

const Syllables = ({ data }) => {
  if (data) {
    return (
      <div>
        <h3>syllables</h3>
        <p>
        ({data.count} syllables) <span className="syllables">[{renderSyllables(data.list)}]</span>
        </p>
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
