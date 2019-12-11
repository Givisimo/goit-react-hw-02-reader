import React, { Component } from 'react';
import T from 'prop-types';
import Controls from '../Controls/Controls';
import Progress from '../Progress/Progress';
import Publication from '../Publication/Publication';

class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  static propTypes = {
    items: T.arrayOf(
      T.shape({
        id: T.string.isRequired,
        title: T.string.isRequired,
        text: T.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  onIncreaseClick = e => {
    e.preventDefault();
    this.setState(state => ({
      publicationIndex: state.publicationIndex + 1,
    }));
  };

  onDecreaseClick = e => {
    e.preventDefault();
    this.setState(state => ({
      publicationIndex: state.publicationIndex - 1,
    }));
  };

  render() {
    const { publicationIndex } = this.state;
    const { items } = this.props;
    const { length } = items;
    const publication = items[publicationIndex];
    const { text, title } = publication;
    const nextBtnDisabled = publicationIndex + 1 === length;

    return (
      <>
        <Controls
          onNextClick={this.onIncreaseClick}
          onPrevClick={this.onDecreaseClick}
          prevBtnDisabled={!publicationIndex}
          nextBtnDisabled={nextBtnDisabled}
        />
        <Progress currentPage={publicationIndex} totalPages={length} />
        <Publication title={title} text={text} />
      </>
    );
  }
}

export default Reader;
