import React from 'react';
import PropTypes from 'prop-types';

function TechItem({tech, onDelete}) {

  return(

    <li>
    {tech}
    <button type="button" onClick={onDelete} >Remove</button>
    </li>

  );
}

TechItem.defaultProps = {
  tech: 'Oculdo'
}

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem;