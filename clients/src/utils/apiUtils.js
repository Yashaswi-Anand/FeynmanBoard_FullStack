import axios from "axios";
const api_url = "http://localhost:8000";

// post api: post new topic with its percents
export const addTopicApi = async(topicData) => {
    console.log(topicData);
    try {
        const response = await axios({
            method: "POST",
            url: `${api_url}/addTopic`,
            data: topicData
          });
          return response;
    } catch (err) {
        console.log(err);
        return err;
    }
}