import React from 'react';
import propTypes from 'prop-types';
import isEmpty from 'lodash.isempty';

// This crazy API returns different data structures, so check what I'm getting.
const renderPronunciation = (data) => {
  if (typeof data === 'string') {
    return <p>all: {data}</p>;
  }

  const all = Object.entries(data);

  return all.map(el => <p key={el}>{el[0]}: {el[1]}</p>);
};

const Pronunciation = ({ data }) => {
  // Sometimes the API returns empty objects!
  if (data && !isEmpty(data)) {
    return (
      <div>
        <h3>pronunciation</h3>
        {renderPronunciation(data)}
      </div>
    );
  }

  return null;
};

// FIXME: test "backbiting",
Pronunciation.propTypes = {
  data: propTypes.shape({
    pronunciation: propTypes.oneOfType([
      propTypes.string,
      propTypes.object,
    ]),
  }).isRequired,
};

export default Pronunciation;
