import React from "react";

function Button({className='btn btn--secondary', btnText = "Temp Text", onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {btnText}
    </button>
  );
}

export default Button;
