# <b> Discord GPT </b>

This is a very simple Discord bot that will use the OpenAI API, to be
able to query and recieve very useful information like you
would in ChatGPT. <br>

You can invite my bot to your server using the following link:<br>
https://discord.com/api/oauth2/authorize?client_id=1062788328224735252&permissions=3072&scope=bot

TRIGGER_MESSAGE : `!invoker`

## <b> Why i decide to create this bot </b>

Firstly, I dont wanna have to reconnect to https://chat.openai.com/chat when my session expire, in discord i dont have to reconnect.

Secundly, I wanna use the bot where ever i am, when i dont have wifi, discordapp in my phone is very good to save mobile data, instead of open the website in a mobile navigator.

That why i create a discord bot using openAI.

## <b> What is ChatGPT? </b>

ChatGPT is a chatbot web application written by the developers
at OpenAI to be used in conjunction with their own API that uses
GPT-3's neural network of deep learning.

## <b> Setup and create your own bot </b>

### <b> Clone project </b>

clone this project in your local machine

```bash
git clone git@github.com:AndrianinaH/discord-bot-chatgpt.git
```

or

```bash
git clone https://github.com/AndrianinaH/discord-bot-chatgpt.git
```

### <b> Create discord bot </b>

got to https://discord.com/developers/applications

1- create a application

2- go to Bots > create a discord bot and get the `DISCORD_BOT_TOKEN`

3- always in Bot section :

        - allow Authorization Flow : public bot
        - allow all Privileged Gateway Intents : PRESENCE INTENT and SERVER MEMBERS INTENT and MESSAGE CONTENT INTENT
        - select Bot > select Read messages/View Channels and select Send Messages

4- go to 0Auth2 > URL Generator > select Bot > select Read messages/View Channels and select Send Messages

### <b> Get your OPENAI_API_KEY </b>

go to https://beta.openai.com/account/api-keys

### <b> invite your bot in discord </b>

First you have to invite your bot in your discord server by following the link you generate previously from the 0Auth2 section in https://discord.com/developers/applications

### <b>Run the server bot in your localhost </b>

#### <b> .env </b>

create a .env following the .env_example

1- use your credentials `DISCORD_BOT_TOKEN` and `OPENAI_API_KEY`

2- `TRIGGER_MESSAGE` :

- its your custom message to trigger the bot in a discord channel. For my bot, i use <b>`!invoker`</b>

- You can use what ever you want here to trigger the bot.

- Example : `!bot donne moi la liste de tous les films du studio Ghibli`

#### <b> install package </b>

run `yarn install` or `npm install`

#### <b> start the bot server localy </b>

run `yarn start`
your bot is now online in your discord server where you have invite him

### <b> Run the server bot online </b>

#### <b> create a github repo where you gonna push your code </b>

#### <b> hosting </b>

I use https://railway.app/ to host the bot server and keep him always online

- create a application and follow the step where you have to connect your github repo to railway

- clic in the application

- Variables > add the variables from your `.env`

- Settings > Deploy > start command add `yarn start` or `npm start`

Now after every push you do to your github repo in the specify git branch (default master) your bot server rebuild and restart automatically
