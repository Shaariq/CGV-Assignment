// CGV Assignment - FPS AIM TRAINER

/*/------------------------------------------------------------------------------------------/*/
// Functions:
var UNITSIZE = 30;
var WALLHEIGHT = UNITSIZE / 3;
var ai = []; // list to store all the AI bots 
var aiGeo = new THREE.BoxGeometry(5,5,5); // the geometry of the AI bots
var NUMAI = 5; // this is the number of bots that our game will have 
var MOVESPEED = 10; // this is to adjust the speed of the ai 
let SCORE = 0; // helps keep score 

/*/------------------------------------------------------------------------------------------/*/
/**
 * The variable map is used to help create the walls in our game as well as the mini map that
 * helps. The 1's and 2's are used to indicate where the walls should be and the 0's indicate 
 * open space.
 */
/*/------------------------------------------------------------------------------------------/*/
var map = [ // 1  2  3  4  5  6  7  8  9
           [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,], // 0
           [1, 1, 0, 0, 0, 0, 0, 1, 1, 1,], // 1
           [1, 1, 0, 0, 2, 0, 0, 0, 0, 1,], // 2
           [1, 0, 0, 0, 0, 2, 0, 0, 0, 1,], // 3
           [1, 0, 0, 2, 0, 0, 2, 0, 0, 1,], // 4
           [1, 0, 0, 0, 2, 0, 0, 0, 1, 1,], // 5
           [1, 1, 1, 0, 0, 0, 0, 1, 1, 1,], // 6
           [1, 1, 1, 0, 0, 1, 0, 0, 1, 1,], // 7
           [1, 1, 1, 1, 1, 1, 0, 0, 1, 1,], // 8
           [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,], // 9
           ], mapW = map.length, mapH = map[0].length;
/*/------------------------------------------------------------------------------------------/*/
/**
 * A function that setup the walls, by creating two geometrices and applying textures to them
 */
/*/------------------------------------------------------------------------------------------/*/
function setWalls(){
  units = mapW;
  // setting up the walls
  var cube = new THREE.BoxGeometry(UNITSIZE, WALLHEIGHT, UNITSIZE);
	var materials = [
	                 new THREE.MeshLambertMaterial({/*color: 0x00CCAA,*/map: THREE.ImageUtils.loadTexture('Assets/resources/wall-1.jpg')}),
	                 new THREE.MeshLambertMaterial({/*color: 0xC5EDA0,*/map: THREE.ImageUtils.loadTexture('Assets/resources/wall-2.jpg')}),
	                 new THREE.MeshLambertMaterial({color: 0xFBEBCD}),
	                 ];
	for (var i = 0; i < mapW; i++) { // we traverse through the map matrix 
		for (var j = 0, m = map[i].length; j < m; j++) {
			if (map[i][j]) { // where we have a 1 or 2 insert a wall 
				var wall = new THREE.Mesh(cube, materials[map[i][j]-1]);
				wall.position.x = (i - units/2) * UNITSIZE;
				wall.position.y = WALLHEIGHT/2;
				wall.position.z = (j - units/2) * UNITSIZE;
        wall.receiveShadow = true;
        wall.castShadow = true;
				scene.add(wall);
			}
		}
	}
}
/*/------------------------------------------------------------------------------------------/*/
/**
 * the getRandBetween returns a random value between the two given variables.
 * @param {*} lo 
 * @param {*} hi 
 * @returns 
 */
/*/------------------------------------------------------------------------------------------/*/
function getRandBetween(lo, hi) {
  return parseInt(Math.floor(Math.random()*(hi-lo+1))+lo, 10);
 }
 /*/------------------------------------------------------------------------------------------/*/
 /**
  * the setupAi function adds an ai objects
  */
 /*/------------------------------------------------------------------------------------------/*/
 function setupAI() {
 
  for (var i = 0; i < NUMAI; i++) {
          addAI();
    }  
}
/*/------------------------------------------------------------------------------------------/*/
/**
 * the getMapSector get coordinates in the scene 
 * @param {*} v 
 * @returns an array of coords
 */
/*/------------------------------------------------------------------------------------------/*/
function getMapSector(v) {
	var x = Math.floor((v.x + UNITSIZE / 2) / UNITSIZE + mapW/2);
	var z = Math.floor((v.z + UNITSIZE / 2) / UNITSIZE + mapW/2);
	return {x: x, z: z};
}
/*/------------------------------------------------------------------------------------------/*/
/**
 *the function creates an AI objects
 *adds the objecs to the scene
 */
/*/------------------------------------------------------------------------------------------/*/
function addAI() {
	var c = getMapSector(camera.position);
	var aiMaterial = new THREE.MeshBasicMaterial({/*color: 0xEE3333,*/map: THREE.ImageUtils.loadTexture('Assets/resources/face.png')});
	var o = new THREE.Mesh(aiGeo, aiMaterial);
	do {
		var x = getRandBetween(0, mapW-1);
		var z = getRandBetween(0, mapH-1);
	} while (map[x][z] > 0 || (x == c.x && z == c.z));
	x = Math.floor(x - mapW/2) * UNITSIZE;
	z = Math.floor(z - mapW/2) * UNITSIZE;
	o.position.set(x, UNITSIZE * 0.15, z);
	o.health = 100;
	//o.path = getAIpath(o);
	o.pathPos = 1;
	o.lastRandomX = Math.random();
	o.lastRandomZ = Math.random();
	o.lastShot = Date.now(); // Higher-fidelity timers aren't a big deal here.
	ai.push(o);
	scene.add(o);
}
/*/------------------------------------------------------------------------------------------/*/
/**
 * this function is used to calculate the distance between two points. 
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} x2 
 * @param {*} y2 
 * @returns 
 */
/*/------------------------------------------------------------------------------------------/*/
function distance(x1, y1, x2, y2) {
	return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
}
/*/------------------------------------------------------------------------------------------/*/
/**
 * Check whether a Vector3 overlaps with a wall.
 *
 * @param v
 *   A THREE.Vector3 object representing a point in space.
 *
 * @returns {Boolean}
 *   true if the vector is inside a wall; false otherwise.
 */
/*/------------------------------------------------------------------------------------------/*/
 function checkWallCollision(v) {
	var c = getMapSector(v);
	return map[c.x][c.z] > 0;
}

const movePhysics = ( time, prevTime, velocity, moveForward, moveBack, moveRight, moveLeft, walkingSound) => {

  const delta = (time - prevTime) / 1000;

  velocity.z -= velocity.z * 10.0 * delta;
  velocity.x -= velocity.x * 10.0 * delta;

  if (moveForward || moveBack) {
    velocity.z -= direction.z * 200 * delta;
    walkingSound.play();
    mixer.update(0.005);
  }
  if (moveRight || moveLeft) {
    velocity.x -= direction.x * 200 * delta;
    walkingSound.play();
    mixer.update(0.005);
  }
  if (!moveRight && !moveLeft && !moveForward && !moveBack) {
    walkingSound.pause();
  }

  controls.moveForward(-velocity.z * delta);
  controls.moveRight(-velocity.x * delta);
};
/*/------------------------------------------------------------------------------------------/*/
/**
 * A function that defines a bullet array
 * @param {*} arr 
 */
/*/------------------------------------------------------------------------------------------/*/
const bulletArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == undefined) {
      continue;
    }
    if (arr[i].alive == false) {
      arr.splice(i, 1);
      continue;
    }
    arr[i].position.add(arr[i].velocity);
  }
};
/*/------------------------------------------------------------------------------------------/*/
/**
 * The function creates objects
 * @returns bullets objects
 */
/*/------------------------------------------------------------------------------------------/*/
const createBullet = () => {
  return new THREE.Mesh(
    new THREE.SphereGeometry(0.05, 200, 200),
    new THREE.MeshBasicMaterial({ color: 0xBEC2CB })
  );
};
/*/------------------------------------------------------------------------------------------/*/
/**
 * the function set position ,velocity and the sound of the bullet and adds it to the scene
 * @param {*} shootState 
 * @param {*} arr 
 * @param {*} start 
 * @param {*} end 
 * @param {*} gunFire 
 */
/*/------------------------------------------------------------------------------------------/*/
const shootBullet = (shootState, arr, start, end, gunFire) => {
  if (shootState) {
    gunFire.play();
    let bullet = createBullet();

    let bulletBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
    bulletBB.setFromObject(bullet);
    console.log(bulletBB);

    bullet.alive = true;

    setTimeout(() => {
      bullet.alive = false;
      scene.remove(bullet);
    }, 500);

    bullet.position.set(start.x, start.y + 0.5, start.z);

    bullet.velocity = new THREE.Vector3(end.x, end.y, end.z);

    arr.push(bullet);
    scene.add(bullet);
  } else {
    gunFire.pause();
  }
};
/*/----------------------------------------------------------------------------/*/
/**
 * A function to setup the control keys true to be used when playing the game
 * W = forward
 * A = Left
 * S = Back
 * D = Right
 * @param {} e 
 */
/*/------------------------------------------------------------------------------------------/*/
const onKeyDown = (e) => {
  switch (e.code) {
    case "KeyW":
      moveForward = true;
      break;
    case "KeyA":
      moveLeft = true;
      break;
    case "KeyS":
      moveBack = true;
      break;
    case "KeyD":
      moveRight = true;
      break;
  }
};
/*/----------------------------------------------------------------------------/*/
/**
 * A function to setup the control keys false to be used when playing the game
 * W = forward
 * A = Left
 * S = Back
 * D = Right
 * @param {*} e 
 */
/*/------------------------------------------------------------------------------------------/*/
const onKeyUp = (e) => {
  switch (e.code) {
    case "KeyW":
      moveForward = false;
      break;
    case "KeyA":
      moveLeft = false;
      break;
    case "KeyS":
      moveBack = false;
      break;
    case "KeyD":
      moveRight = false;
      break;
  }
};
/*/-----------------------------------------------------------------------------------------/*/
/**
 * A function to set mousedown to enable or allow shooting
 */
/*/------------------------------------------------------------------------------------------/*/
const mouseDown = () => {
  shoot = true;
};
/*/------------------------------------------------------------------------------------------/*/
/**
 *A function to set mousedown to disable or disallow shooting
 */
/*/------------------------------------------------------------------------------------------/*/
const mouseUp = () => {
  shoot = false;
};

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);
document.addEventListener("mousedown", mouseDown);
document.addEventListener("mouseup", mouseUp);
/*/----------------------------------------------------------------/*/

/*/------------------------------------------------------------------------------------------/*/
// Initialize variables:

let moveForward = false;
let moveBack = false;
let moveLeft = false;
let moveRight = false;
let shoot = false;
const startingMin = 2;
let time2 = startingMin * 60;
let bullets = [];
var clock = new THREE.Clock(); // Used in render() for controls.update()
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
let prevTime = performance.now();
/*/------------------------------------------------------------------------------------------/*/
/**
 * Setup the renderer
 */
/*/------------------------------------------------------------------------------------------/*/
const renderer = new THREE.WebGLRenderer({ antialias: true,});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

 scene = new THREE.Scene();
 setWalls();
/*/------------------------------------------------------------------------------------------/*/
/**
 * Setup the perspective camera
 */
/*/------------------------------------------------------------------------------------------/*/
camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.001, 1000);
camera.position.set(0, 2, 2);
scene.add(camera);
setupAI();
/*/------------------------------------------------------------------------------------------/*/
/**
 * Pointockercontrol to give access to raw movement of the mouse
 */
/*/------------------------------------------------------------------------------------------/*/
const controls = new THREE.PointerLockControls(camera, renderer.domElement);
window.addEventListener("dblclick", () => {
  controls.lock();
});


/*/------------------------------------------------------------------------------------------/*/
/**
 * create a raycaster
 */
/*/------------------------------------------------------------------------------------------/*/
let raycaster = new THREE.Raycaster(
  camera.getWorldPosition(new THREE.Vector3()),
  camera.getWorldDirection(new THREE.Vector3())
);
/*/------------------------------------------------------------------------------------------/*/
/**
 * animate function to render the game
 */
/*/------------------------------------------------------------------------------------------/*/
const animate = () => {
  var delta = clock.getDelta();
	var aispeed = delta * MOVESPEED;
  requestAnimationFrame(animate);

  const time = performance.now();

  bulletArray(bullets);

  direction.z = Number(moveForward) - Number(moveBack);
  direction.x = Number(moveRight) - Number(moveLeft);

  if (controls.isLocked) {
    raycaster.set(
      camera.getWorldPosition(new THREE.Vector3()),
      camera.getWorldDirection(new THREE.Vector3())
    );

    movePhysics(
      time,
      prevTime,
      velocity,
      moveForward,
      moveBack,
      moveRight,
      moveLeft,
      walkingSound
    );

    let start = obj.getWorldPosition(new THREE.Vector3());
    let end = camera.getWorldDirection(new THREE.Vector3());
    shootBullet(shoot, bullets, start, end, gunSound);
  }

  prevTime = time;

  let currentPosition = camera.getWorldPosition(new THREE.Vector3());
  
  // move the AI around the grid 
  for (var i = ai.length-1; i >= 0; i--) {
		var a = ai[i];
		// Move AI
		var r = Math.random();
		if (r > 0.995) {
			a.lastRandomX = Math.random() * 2 - 1;
			a.lastRandomZ = Math.random() * 2 - 1;
		}
		a.translateX(aispeed * a.lastRandomX);
		a.translateZ(aispeed * a.lastRandomZ);
		var c = getMapSector(a.position);
		if (c.x < 0 || c.x >= mapW || c.y < 0 || c.y >= mapH || checkWallCollision(a.position)) {
			a.translateX(-2 * aispeed * a.lastRandomX);
			a.translateZ(-2 * aispeed * a.lastRandomZ);
			a.lastRandomX = Math.random() * 2 - 1;
			a.lastRandomZ = Math.random() * 2 - 1;
		}
		if (c.x < -1 || c.x > mapW || c.z < -1 || c.z > mapH) {
			ai.splice(i, 1);
			scene.remove(a);
			addAI();
		}
    // This is where we handle collision physics
    for (let i = bullets.length-1; i >= 0; i--) {
      let b = bullets[i], bulletPosition = b.position
      for (let j = ai.length-1; j >= 0; j--) {
        let a = ai[j];
        let aiPosition = a.position;
        if (bulletPosition.x < aiPosition.x + 2 && bulletPosition.x > aiPosition.x - 2 &&
            bulletPosition.z < aiPosition.z + 2 && bulletPosition.z > aiPosition.z - 2) {
          bullets.splice(i, 1);
          console.log("Target has been hit")
          scene.remove(b);
          scene.remove(a);
          ai.splice(j, 1)
          break;
        }
      }
    }
    SCORE = Math.abs(NUMAI - ai.length)
    // Here is the user's score 
    console.log("Current Score: " + SCORE);
    $("#score").html(SCORE);
	}
  if(time2 > 0 && ai.length == 0){
    console.log("Player wins")
    window.open('win_screen.html', '_self')
  }
  if(time2 == 0 && ai.length > 0){
    console.log("Player lost")
    window.open('lose_screen.html', '_self')
  }
  if(time2 == 0 && ai.length == 0){
    console.log("Player wins")
    window.open('win_screen.html', '_self')
  }
  
  renderer.render(scene, camera);
};
/*/------------------------------------------------------------------------------------------/*/
animate();


/*/------------------------------------------------------------------------------------------/*/
window.addEventListener("resize", onWindowResize);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
