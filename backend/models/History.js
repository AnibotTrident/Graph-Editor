const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now }, // Action timestamp
    actionType: { type: String, required: true }, // Action type (e.g., "add_node", "delete_edge")
    data: { type: mongoose.Schema.Types.Mixed, required: true }, // Data related to the action
});

module.exports = mongoose.model('History', historySchema);
