import React from 'react';
import T from 'prop-types';

const Controls = ({
  onNextClick,
  onPrevClick,
  prevBtnDisabled,
  nextBtnDisabled,
}) => {
  return (
    <section>
      <button type="button" onClick={onPrevClick} disabled={prevBtnDisabled}>
        Backward
      </button>
      <button type="button" onClick={onNextClick} disabled={nextBtnDisabled}>
        Forward
      </button>
    </section>
  );
};

Controls.propTypes = {
  onNextClick: T.func.isRequired,
  onPrevClick: T.func.isRequired,
  prevBtnDisabled: T.bool.isRequired,
  nextBtnDisabled: T.bool.isRequired,
};

export default Controls;
