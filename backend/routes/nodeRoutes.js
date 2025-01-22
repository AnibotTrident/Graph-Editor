const express = require('express');
const router = express.Router();
const Node = require('../models/Node'); // Assuming you have a Node model

// GET all nodes
router.get('/', async (req, res) => {
  try {
    const nodes = await Node.find();
    res.json(nodes);
  } catch (error) {
    console.error('Error fetching nodes:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new node
router.post('/', async (req, res) => {
  try {
    const { label, position } = req.body;

    // Validate input
    if (!label || !position || !position.x || !position.y) {
      return res.status(400).json({ error: 'Missing required fields: label, position.x, position.y' });
    }

    const newNode = new Node({
      label,
      position,
    });

    await newNode.save();
    res.status(201).json(newNode);
  } catch (error) {
    console.error('Error creating node:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
