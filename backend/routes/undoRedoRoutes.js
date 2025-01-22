const express = require('express');
const router = express.Router();

let history = [];
let undoneHistory = [];

// POST for undo action
router.post('/undo', (req, res) => {
  if (history.length > 0) {
    const lastAction = history.pop();
    undoneHistory.push(lastAction);
    res.status(200).json({ action: 'undo', data: lastAction });
  } else {
    res.status(400).json({ error: 'No actions to undo' });
  }
});

// POST for redo action
router.post('/redo', (req, res) => {
  if (undoneHistory.length > 0) {
    const lastUndoneAction = undoneHistory.pop();
    history.push(lastUndoneAction);
    res.status(200).json({ action: 'redo', data: lastUndoneAction });
  } else {
    res.status(400).json({ error: 'No actions to redo' });
  }
});

// Store action for undo/redo
router.post('/actions', (req, res) => {
  const action = req.body;
  history.push(action);
  res.status(200).json({ action: 'action stored', data: action });
});

module.exports = router;
