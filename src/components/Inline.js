// We can also style components using inline styles.
// In this method we create an object and assign styling properties to this object in camelCase.Then we can assign this object to the style property
// of the element which we want to apply those styles

import React from "react";

let styles = {
  fontSize: "50px",
  color: "green",
  // letterSpacing:"50px"
};

function Inline() {
  return (
    <div>
      <h2 className='error'>CSS Styling</h2>
      {/* <h2 className={styles.success}>CSS Modules Styling</h2> */}
      <h2 style={styles}>I am using Inline Styles</h2>
    </div>
  );
}

export default Inline;
