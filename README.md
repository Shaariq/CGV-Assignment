# FPS Aim Trainer - COMS3006A (CGV)

### How to run code
First install dependencies:
```bash
$ npm install
```
This project uses a simple express.js server to run three.js. To start the server run:
```bash
$ npm start
```
Open http://127.0.0.1:3000 to view the project. 


### To Do List:
* Collision Physics
* Rotating Skybox
* Multiple Levels
* Target models
* Scoreboard
* Add 3D Models to populate world
* Some lighting effects

# Documentation 

For this project, our group NoobieSoft, a group of 4 members were tasked to build a 3D computer game with 3 levels/stages that would be solely browser based using the Three.js graphics framework.

# What Makes up the Game

FPS Aim Trainer is comprised of 10 main components: sky boxes, game-plane/map/playing environment, walls, bots, bot-AI, bullet physics, collision physics, scoreboard and timer.

* Sky boxes are used to give an atmosphere and to give an image of far off 3d backgrounds.
* Game-plane/Map/Playing Environment is where the player's model is present and where the all of the game takes place.
* Walls are obstacles on the game-plane/map/playing environment.
* Bots are tagets that the player is required to shoot at to earn a score.
* Bot-AI is the artificial intelligence model that power the bots to move around the map and create difficulty.
* Bullet Physics relates to the behavior of the bullets as they leave the barrel of the gun.
* Collision physics refers to the interaction between bots when they are hit with a bullet.
* Scoreboard that displays score that is linked to collison physics model on order to drive up the score.
* Timer is used to time playing states.
