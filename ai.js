const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const ask = async (question) => {
  console.log("AI process ...");
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: question,
    temperature: 0.7,
    max_tokens: 4000,
  });
  console.log("choices numbers :", response.data.choices.length);
  console.log("AI processing finish");
  return response.data.choices[0].text;
};

module.exports = {
  ask,
};
