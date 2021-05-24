import React from "react";

function Media({icon='bolt', heading, body}) {
  return (
    <div className="media">
      <div className="icon-container">
        <i className={"icon fa fa-" + icon} />
      </div>
      <h2 className='media__heading'>{heading}</h2>
      <p className="media__body">{body}</p>
    </div>
  );
}

export default Media;
