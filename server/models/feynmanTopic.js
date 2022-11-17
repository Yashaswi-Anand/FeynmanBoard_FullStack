const mongoose = require('mongoose');

const topicSchema = mongoose.Schema({
    topicName:{
        type: String,
        required: true,
    },
    textArray:{
        type: Array,
        required: true
    },
    percentage:{
        type: String,
        required: true,
    },  
})

const Topic = mongoose.model('Topic',topicSchema);

module.exports = Topic