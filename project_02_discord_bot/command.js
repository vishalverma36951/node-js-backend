const {REST, Routes} = require ("discord.js")

const commands = [
    {
        name: "create",
        description: "Creates a new short URL",
    },
];

const rest = new REST({version: "10"}).setToken(
    process.env.DISCORD_TOKEN
);

(async ()=>{
    try {
        console.log("Started refershing application (/) commands.");

        await rest.put(Routes.applicationCommands("1459505323609034806"), {body: commands});

        console.log("Successfully reloaded application (/) commands.");
    } catch(error){
        console.log(error);
    }
})()


// node command.js for registered command