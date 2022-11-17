const Topic = require("../models/feynmanTopic");


// add topic with its description
exports.addTopics = async(req,res) =>{
    try {
        console.log(req.body);
        const data = {
            topicName: req.body.topicName,
            textArray: req.body.textArray,
            percentage: req.body.percentage
        }
        // create new topic document in database
        const topic = await Topic.create(data)
        if(!topic){
            return res.status(400).json({message: 'topic creation error.'});
        }
        return res.status(200).json({ message: 'Topic added successfully !!!'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}


// fetching all topic and description 
exports.findTopic = async(req,res) =>{
    try {
        // find all topics 
        const topics = await Topic.find()
        if(topics.length === 0){
            return res.status(400).json({topics: [],message: 'No available topics.  '});
        }
        return res.status(200).json({topics: topics, message: 'Topics fetch successfully!!!'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}
