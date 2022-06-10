# FPS Aim Trainer - COMS3006A (CGV)

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

# Setup

First install dependencies:
```bash
$ npm install
```
Install Three.js as well:
```bash
$npm install three
```

This project uses a simple express.js server to run three.js. To start the server run:
```bash
$ npm start
```
Open http://127.0.0.1:3000 to view the project. 

# Design

The Aim Trainer game begins with the user being placed in the game environment which consist of a plane/map, skybox and obstacles/walls which are placed on the map. The user will see a first person view of the gun as well as targets moving around the map. The user is also able to move around the map using WASD keys on a keyboard.

When the left mouse button is clicked the gun will fire the stream of bullets. This is how user will shoot at the target. Thereby, exhibiting the shooting mechanics.

The Aim Trainer game is designed to follow the following process. The user has a predetermined of time to shoot all the parts/targets. If if the user is able to shoot all the present targets in the amount of time given they will proceed to the next level. However, if the user is not able to shoot all the targets, this would result in a loss. Level one consists of an arbitrary number of targets moving at an arbitrary speed. Level 2 consists of more targets than in level one as well as moving at a faster speed than in level one period stop. Level three consists of even more targets moving at an even faster speed. 

When bullets hit the targets the game will increase their score.

Furthermore, the game has various light sources placed around the world. These light sources are used to generate lighting effects for the game environment . Additionally, the game has a third person feature in which the user can switch to a third person view. As well as, a minimap which is a aive representation of the ongoing game environment in a minimap view.

# UI

The Aim Trainer game has a start screen. On the start screen a begin game but then his present. Pressing this button will direct the user to the level selecting screen. The level selecting screen allows the user to select any one of three levels. When the user selects any of the levels they will be immediately brought into the game environment. In the game environment the user is available to do play the game in which case they will see the player model, the map, the mini map as well as targets and more. In the top right corner of the screen there are buttons to change the setting of the mapby way of changing skyboxes, and at the top left corner of the screen but then his present to return the user back to the level select screen.













