  // FirstComponent.js
  import React from 'react';

  const FirstComponent = (props) => {
    console.log("***This is FirstComp Props***", props.items)
    return (
        <h1>To Do List</h1>
    )
  }

  export default FirstComponent;