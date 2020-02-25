import React, { useState } from 'react';
import T from 'prop-types';
import Controls from '../Controls/Controls';
import Progress from '../Progress/Progress';
import Publication from '../Publication/Publication';

const Reader = ({ items }) => {
  const [publicationIndex, handleIndex] = useState(0);

  const onIncreaseClick = () => {
    handleIndex(publicationIndex + 1);
  };
  const onDecreaseClick = () => {
    handleIndex(publicationIndex - 1);
  };

  const { length } = items;
  const publication = items[publicationIndex];
  const { text, title } = publication;
  const nextBtnDisabled = publicationIndex + 1 === length;

  return (
    <>
      <Controls
        onNextClick={onIncreaseClick}
        onPrevClick={onDecreaseClick}
        prevBtnDisabled={!publicationIndex}
        nextBtnDisabled={nextBtnDisabled}
      />
      <Progress currentPage={publicationIndex} totalPages={length} />
      <Publication title={title} text={text} />
    </>
  );
};

Reader.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      title: T.string.isRequired,
      text: T.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Reader;
