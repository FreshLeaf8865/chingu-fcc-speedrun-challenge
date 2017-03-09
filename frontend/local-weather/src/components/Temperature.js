import React from 'react';

const Temperature = (props) => {
  return (
    <div onClick={props.handleToggle} className="temperature__container">
      {props.show_c ? props.temp_c + ' \xB0C' : props.temp_f + ' \xB0F'}
    </div>
  )
}

export default Temperature;
