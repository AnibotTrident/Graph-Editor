// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';  // Backend URL

// Create Node
export const createNode = async (nodeData) => {
  try {
    const response = await axios.post(`${API_URL}/nodes`, nodeData);
    return response.data;
  } catch (error) {
    console.error('Error creating node:', error);
    throw error;
  }
};

// Create Edge
export const createEdge = async (edgeData) => {
  try {
    const response = await axios.post(`${API_URL}/edges`, edgeData);
    return response.data;
  } catch (error) {
    console.error('Error creating edge:', error);
    throw error;
  }
};

// Get Nodes
export const getNodes = async () => {
  try {
    const response = await axios.get(`${API_URL}/nodes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching nodes:', error);
    throw error;
  }
};

// Get Edges
export const getEdges = async () => {
  try {
    const response = await axios.get(`${API_URL}/edges`);
    return response.data;
  } catch (error) {
    console.error('Error fetching edges:', error);
    throw error;
  }
};
