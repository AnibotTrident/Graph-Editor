// src/components/Graph.js
import React, { useEffect, useState } from 'react';
import { getNodes, getEdges } from '../api';  // Import the getNodes and getEdges API functions

const Graph = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nodesData = await getNodes();
        const edgesData = await getEdges();
        setNodes(nodesData);
        setEdges(edgesData);
      } catch (error) {
        console.error('Error fetching graph data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Graph Viewer</h2>
      <div>
        <h3>Nodes</h3>
        <ul>
          {nodes.map((node) => (
            <li key={node._id}>{node.label} - ({node.position.x}, {node.position.y})</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Edges</h3>
        <ul>
          {edges.map((edge) => (
            <li key={edge._id}>
              {edge.startNodeId} -> {edge.endNodeId}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Graph;
