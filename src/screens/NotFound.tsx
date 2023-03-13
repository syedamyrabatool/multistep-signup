import React from "react";

const NotFound = () : React.ReactElement => {
  console.error('404');

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>
        <i>{404}</i>
      </p>
      <p>The page you requested does not exist.</p>

    </div>
  );
}

export default NotFound;