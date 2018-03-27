import React from 'react';
import propTypes from 'prop-types';
import Syllables from '../Syllables';
import Pronunciation from '../Pronunciation';

// NOTE: depending heavingly on conditional rendering to prevent propType ".isRequired" violations.
const DescriptionList = ({ data }) => (
  <dl>
    <dt>
      <h2>{data.word}</h2>
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
  </dl>
);

DescriptionList.propTypes = {
  data: propTypes.shape({
    results: propTypes.arrayOf(propTypes.object),
    word: propTypes.string,
  }).isRequired,
};

export default DescriptionList;
