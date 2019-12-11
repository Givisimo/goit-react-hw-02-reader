import React from 'react';
import T from 'prop-types';

const Publication = ({ title, text }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};

Publication.propTypes = {
  title: T.string.isRequired,
  text: T.string.isRequired,
};

export default Publication;
