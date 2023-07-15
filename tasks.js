const client = require("redis").createClient();
const task = process.argv[2];

client.on("error", err => console.log("Redis Client Error: ", + err));

async function main() {
  await client.connect();

  if (task) {
    await client.set(Math.random().toString(32).replace(".", ""), task);
    console.log("Posted: ", task);
  }

  const keys = await client.sendCommand(["keys", "*"]);

  for (let i = 0; i < keys.length; i++) {
    console.log(`Key: ${keys[i]} || Value: ${await client.get(keys[i])}`)
  }

  await client.quit();
}

main();