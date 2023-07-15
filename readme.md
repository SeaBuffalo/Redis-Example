# Redis Example App
Basic Redis instance created with Node.js and Docker with sample inserting and listing functions.

## To Begin
Make sure you have Docker installed on your system
[Click here to download from the Docker homepage.](https://www.docker.com/)

Install all relevent dependencies
```sh
npm install
```

Then, run 
```sh
docker run --publish 6379:6379 --name node-redis --detach redis
```
to create a docker container with a Redis instance

---

[Here is a link to the documentation for Docker's Redis Image](https://hub.docker.com/_/redis/)

--- 

## Interacting with your Database
To view the contents of your database, simply run
```sh
node tasks
```
To insert a document to your collection, run
```sh
node tasks "Walk the dog."
```

See if you can create your own custom functionality with your new database!
[Here is a reference to the Redis npm package documentation](https://www.npmjs.com/package/redis)

## When you are finished playing with your Docker instance
Stop your container
```sh
docker stop <ContainerID>
```
and remove it with
```sh
docker rm --force <ContainerID>
```
You can check your current Docker containers and their ID's with the desktop app downloaded from the [Docker Website](https://www.docker.com/), or by running
```sh
docker ps
```

---

##### Enjoy, and don't forget to reference proper documentation
https://www.docker.com/

https://hub.docker.com/_/redis/

https://www.npmjs.com/package/redis

*Please note this instance is not password protected and necessary precautions should be made when creating production build databases.*

---

###### This short and simple example project was created with the help of Node.js cookbook (4th Edition) by *Bethany Griggs*
*I take no credit for this code and encourage everyone to [check out her book](https://www.packtpub.com/product/node-cookbook-fourth-edition/9781838558758) as it is a great way to learn Node.js*