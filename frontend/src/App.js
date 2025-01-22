// src/App.js
import React from 'react';
import Node from './components/Node';   // Import Node component
import Edge from './components/Edge';   // Import Edge component
import Graph from './components/Graph'; // Import Graph component

const App = () => {
  return (
    <div>
      <h1>Graph Editor</h1>
      <Node />   {/* Node creation form */}
      <Edge />   {/* Edge creation form */}
      <Graph />  {/* Graph viewer */}
    </div>
  );
};

export default App;
