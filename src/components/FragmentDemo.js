import React from "react";

function FragmentDemo() {
  return (
    <React.Fragment>
      <h1>Hello Everyone</h1>
      <p>How are you?</p>
    </React.Fragment>
  );
}

export default FragmentDemo;


// A fragment in React is used when we want to add multiple elements to a componenent,But we do not want to add extra nodes.