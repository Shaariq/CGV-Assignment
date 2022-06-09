// CGV Assignment - FPS AIM TRAINER

// ----------------------------------------
// Functions:
var UNITSIZE = 30;
var WALLHEIGHT = UNITSIZE / 3;
var healthCube;
var ai = []; // list to store all the AI bots 
var aiGeo = new THREE.BoxGeometry(5,5,5); // the geometry of the AI bots
var NUMAI = 5; // this is the number of bots that our game will have 
var PROJECTILEDAMAGE = 20;
var lastHealthPickup = 0;
var kills = 0; 
var health = 100;
var MOVESPEED = 10;
var LOOKSPEED = 0.075;
var BULLETMOVESPEED = MOVESPEED * 5;
let SCORE = 0;

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

function setWalls(){
  units = mapW;
  // setting up the walls
  var cube = new THREE.BoxGeometry(UNITSIZE, WALLHEIGHT, UNITSIZE);
	var materials = [
	                 new THREE.MeshLambertMaterial({/*color: 0x00CCAA,*/map: THREE.ImageUtils.loadTexture('Assets/resources/wall-1.jpg')}),
	                 new THREE.MeshLambertMaterial({/*color: 0xC5EDA0,*/map: THREE.ImageUtils.loadTexture('Assets/resources/wall-2.jpg')}),
	                 new THREE.MeshLambertMaterial({color: 0xFBEBCD}),
	                 ];
	for (var i = 0; i < mapW; i++) {
		for (var j = 0, m = map[i].length; j < m; j++) {
			if (map[i][j]) {
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
// the getRandBetween returns a random value between the two given variables. 
function getRandBetween(lo, hi) {
  return parseInt(Math.floor(Math.random()*(hi-lo+1))+lo, 10);
 }
 function setupAI() {
	for (var i = 0; i < NUMAI; i++) {
		addAI();
	}
}
function getMapSector(v) {
	var x = Math.floor((v.x + UNITSIZE / 2) / UNITSIZE + mapW/2);
	var z = Math.floor((v.z + UNITSIZE / 2) / UNITSIZE + mapW/2);
	return {x: x, z: z};
}
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
// this function is used to calculate the distance between two points. 
function distance(x1, y1, x2, y2) {
	return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
}
/**
 * Check whether a Vector3 overlaps with a wall.
 *
 * @param v
 *   A THREE.Vector3 object representing a point in space.
 *   Passing cam.position is especially useful.
 * @returns {Boolean}
 *   true if the vector is inside a wall; false otherwise.
 */
 function checkWallCollision(v) {
	var c = getMapSector(v);
	return map[c.x][c.z] > 0;
}



const movePhysics = (
  time,
  prevTime,
  velocity,
  moveForward,
  moveBack,
  moveRight,
  moveLeft,
  walkingSound
) => {
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
const createBullet = () => {
  return new THREE.Mesh(
    new THREE.SphereGeometry(0.05, 200, 200),
    new THREE.MeshBasicMaterial({ color: 0xBEC2CB })
  );
};

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

const mouseDown = () => {
  shoot = true;
};

const mouseUp = () => {
  shoot = false;
};
// ----------------------------------------
/*
let targetArr = [];

function targets() {
  var targetGeometry = new THREE.BoxGeometry(20, 20, 20);
  var targetMaterial = new THREE.MeshNormalMaterial();

  for (var i = 0; i < 45; i++) {
    var targetMesh = new THREE.Mesh(targetGeometry, targetMaterial);

    targetMesh.position.x = (Math.random() - 0.5) * 1000;
    targetMesh.position.y = 35;
    targetMesh.position.z = (Math.random() - 0.5) * 1000;

    let targetBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
    targetBox.setFromObject(targetMesh);
    //console.log(targetBox);

    targetArr.push(targetMesh);
    scene.add(targetMesh);
  }

  console.log(targetArr.length);
}
*/
// ----------------------------------------
// Initialize variables:

let moveForward = false;
let moveBack = false;
let moveLeft = false;
let moveRight = false;

let shoot = false;
const startingMin = 0.5;
let time2 = startingMin * 60;


let bullets = [];
var clock = new THREE.Clock(); // Used in render() for controls.update()
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
// ----------------------------------------

const renderer = new THREE.WebGLRenderer({
  antialias: true,
});

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
setWalls();


var skybox = null; // I set the skybox to null and also made it global so I could change to diiferent skyboxes

// these are the different array's that hold the urls for the textures for the different skyboxes
var AridArray = [
  "https://i.ibb.co/4RMh4yW/arid2-ft.jpg",
  "https://i.ibb.co/BzprVmY/arid2-bk.jpg",
  "https://i.ibb.co/QdTh2N5/arid2-up.jpg",
  "https://i.ibb.co/3vXGDFy/arid2-dn.jpg",
  "https://i.ibb.co/QPkp1gZ/arid2-rt.jpg",
  "https://i.ibb.co/HVvN38y/arid2-lf.jpg",
];

var CocoaArray = [
  "https://i.ibb.co/TgdMcTs/cocoa-ft.jpg",
  "https://i.ibb.co/W39zpjS/cocoa-bk.jpg",
  "https://i.ibb.co/wBDXQC4/cocoa-up.jpg",
  "https://i.ibb.co/fGD2N9m/cocoa-dn.jpg",
  "https://i.ibb.co/4Pnc12G/cocoa-rt.jpg",
  "https://i.ibb.co/DLL8VSc/cocoa-lf.jpg",
];

var MeadowArray = [
  "https://i.ibb.co/THRrZb3/meadow-ft.jpg",
  "https://i.ibb.co/jMzKjq8/meadow-bk.jpg",
  "https://i.ibb.co/m0W3m6q/meadow-up.jpg",
  "https://i.ibb.co/kDC3kR1/meadow-dn.jpg",
  "https://i.ibb.co/fYzTTvr/meadow-rt.jpg",
  "https://i.ibb.co/4SDrs9M/meadow-lf.jpg",
];

var HellArray = [
  "https://i.ibb.co/yX98hch/flame-ft.jpg",
  "https://i.ibb.co/Z6rR9jx/flame-bk.jpg",
  "https://i.ibb.co/nQ43ck2/flame-up.jpg",
  "https://i.ibb.co/w6nkJBL/flame-dn.jpg",
  "https://i.ibb.co/frFz93V/flame-rt.jpg",
  "https://i.ibb.co/hg74qN4/flame-lf.jpg",
];

function MakeSkyBox(ft, bk, up, dn, rt, lf) {
  // this function is used to create the skyboxe, I pass the urls as parameters
  let materialArray = [];
  let texture_ft = new THREE.TextureLoader().load(ft);
  let texture_bk = new THREE.TextureLoader().load(bk);
  let texture_up = new THREE.TextureLoader().load(up);
  let texture_dn = new THREE.TextureLoader().load(dn);
  let texture_rt = new THREE.TextureLoader().load(rt);
  let texture_lf = new THREE.TextureLoader().load(lf);

  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

  for (let i = 0; i < 6; i++) materialArray[i].side = THREE.BackSide;

  let skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
  skybox = new THREE.Mesh(skyboxGeo, materialArray);
  scene.add(skybox);
}


let plane;
const textureLoader = new THREE.TextureLoader();
const groundTexture = textureLoader.load(
  "./Assets/PlaneTexture/Dirt/Grass_005_BaseColor.jpg"
);
const tilesNormalMap = textureLoader.load(
  "./Assets/PlaneTexture/Dirt/Grass_005_Normal.jpg"
);
const tilesHeightMap = textureLoader.load(
  "./Assets/PlaneTexture/Dirt/Grass_005_Height.jpg"
);
const tilesRoughnessMap = textureLoader.load(
  "./Assets/PlaneTexture/Dirt/Grass_005_Roughness.jpg"
);
const tilesAmbientOcclusionMap = textureLoader.load(
  "./Assets/PlaneTexture/Dirt/Grass_005_AmbientOcclusion.jpg"
);

groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
groundTexture.repeat.set(100, 100);
groundTexture.anisotropy = 16;
groundTexture.encoding = THREE.sRGBEncoding;

const groundMaterial = new THREE.MeshPhongMaterial({
  map: groundTexture,
  normalMap: tilesNormalMap,
  displacementMap: tilesHeightMap,
  displacementScale: 0.05,
  aoMap: tilesAmbientOcclusionMap,
});

const planeGeometry = new THREE.PlaneGeometry(1000, 1000, 100, 100);
plane = new THREE.Mesh(planeGeometry, groundMaterial);
plane.rotateX(-Math.PI / 2);
plane.geometry.attributes.uv2 = plane.geometry.attributes.uv;
plane.receiveShadow = true;
scene.add(plane);

MakeSkyBox(
  AridArray[0],
  AridArray[1],
  AridArray[2],
  AridArray[3],
  AridArray[4],
  AridArray[5]
); // I called this so that the user is not welcomed with a black screen but rather the arid texture

// this function is called when the window is first loaded
window.onload = function () {
  const countdownEle = document.getElementById("countdown");
  function updateCountdown(){
    let seconds = time2%60;
    countdownEle.innerHTML = `${"00"}:${seconds}`;
    if(time2 > 0){
      time2--;
    }
  }
  setInterval(updateCountdown, 1000);

  function drawRadar() {
    var c = getMapSector(camera.position), context = document.getElementById('radar').getContext('2d');
    context.font = '10px Helvetica';
    for (var i = 0; i < mapW; i++) {
      for (var j = 0, m = map[i].length; j < m; j++) {
        var d = 0;
        for (var k = 0, n = ai.length; k < n; k++) {
          var e = getMapSector(ai[k].position);
          if (i == e.x && j == e.z) {
            d++;
          }
        }
        if (i == c.x && j == c.z && d == 0) {
          context.fillStyle = '#0000FF';
          context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
        }
        else if (i == c.x && j == c.z) {
          context.fillStyle = '#AA33FF';
          context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
          context.fillStyle = '#000000';
          context.fillText(''+d, i*20+8, j*20+12);
        }
        else if (d > 0 && d < 10) {
          context.fillStyle = '#FF0000';
          context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
          context.fillStyle = '#000000';
          context.fillText(''+d, i*20+8, j*20+12);
        }
        else if (map[i][j] > 0) {
          context.fillStyle = '#666666';
          context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
        }
        else {
          context.fillStyle = '#CCCCCC';
          context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
        }
      }
    }
  }
  drawRadar();
  setInterval(drawRadar, 1000);


  
  var arid = document.getElementById("arid"); // this is used to get the id's for the different buttons from the html
  var cocoa = document.getElementById("cocoa");
  var meadow = document.getElementById("meadow");
  var hell = document.getElementById("hell");

  cocoa.onclick = function CocoaSkyBox() {
    // the click function is called when the user clicks the button on the game
    MakeSkyBox(
      CocoaArray[0],
      CocoaArray[1],
      CocoaArray[2],
      CocoaArray[3],
      CocoaArray[4],
      CocoaArray[5]
    );
    const textureLoader = new THREE.TextureLoader();
    const groundTexture = textureLoader.load(
      "./Assets/PlaneTexture/Sand/Ground_Dirt_007_basecolor.jpg"
    );
    const tilesNormalMap = textureLoader.load(
      "./Assets/PlaneTexture/Sand/Ground_Dirt_007_normal.jpg"
    );
    const tilesHeightMap = textureLoader.load(
      "./Assets/PlaneTexture/Sand/Ground_Dirt_007_height.jpg"
    );
    const tilesRoughnessMap = textureLoader.load(
      "./Assets/PlaneTexture/Sand/Ground_Dirt_007_roughness.jpg"
    );
    const tilesAmbientOcclusionMap = textureLoader.load(
      "./Assets/PlaneTexture/Sand/Ground_Dirt_007_ambientOcclusion.jpg"
    );

    groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
    groundTexture.repeat.set(100, 100);
    groundTexture.anisotropy = 16;
    groundTexture.encoding = THREE.sRGBEncoding;

    const groundMaterial = new THREE.MeshPhongMaterial({
      map: groundTexture,
      normalMap: tilesNormalMap,
      displacementMap: tilesHeightMap,
      displacementScale: 0.05,
      aoMap: tilesAmbientOcclusionMap,
    });

    const planeGeometry = new THREE.PlaneGeometry(1000, 1000, 100, 100);
    plane = new THREE.Mesh(planeGeometry, groundMaterial);
    plane.rotateX(-Math.PI / 2);
    plane.geometry.attributes.uv2 = plane.geometry.attributes.uv;
    plane.receiveShadow = true;
    scene.add(plane);
  };

  arid.onclick = function AridSkyBox() {
    MakeSkyBox(
      AridArray[0],
      AridArray[1],
      AridArray[2],
      AridArray[3],
      AridArray[4],
      AridArray[5]
    );
    const textureLoader = new THREE.TextureLoader();
    const groundTexture = textureLoader.load(
      "./Assets/PlaneTexture/Dirt/Grass_005_BaseColor.jpg"
    );
    const tilesNormalMap = textureLoader.load(
      "./Assets/PlaneTexture/Dirt/Grass_005_Normal.jpg"
    );
    const tilesHeightMap = textureLoader.load(
      "./Assets/PlaneTexture/Dirt/Grass_005_Height.jpg"
    );
    const tilesRoughnessMap = textureLoader.load(
      "./Assets/PlaneTexture/Dirt/Grass_005_Roughness.jpg"
    );
    const tilesAmbientOcclusionMap = textureLoader.load(
      "./Assets/PlaneTexture/Dirt/Grass_005_AmbientOcclusion.jpg"
    );

    groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
    groundTexture.repeat.set(100, 100);
    groundTexture.anisotropy = 16;
    groundTexture.encoding = THREE.sRGBEncoding;

    const groundMaterial = new THREE.MeshPhongMaterial({
      map: groundTexture,
      normalMap: tilesNormalMap,
      displacementMap: tilesHeightMap,
      displacementScale: 0.05,
      aoMap: tilesAmbientOcclusionMap,
    });

    const planeGeometry = new THREE.PlaneGeometry(1000, 1000, 100, 100);
    plane = new THREE.Mesh(planeGeometry, groundMaterial);
    plane.rotateX(-Math.PI / 2);
    plane.geometry.attributes.uv2 = plane.geometry.attributes.uv;
    plane.receiveShadow = true;
    scene.add(plane);
  };

  meadow.onclick = function MeadowSkyBox() {
    MakeSkyBox(
      MeadowArray[0],
      MeadowArray[1],
      MeadowArray[2],
      MeadowArray[3],
      MeadowArray[4],
      MeadowArray[5]
    );
    const textureLoader = new THREE.TextureLoader();
    const groundTexture = textureLoader.load(
      "./Assets/PlaneTexture/Grass/Stylized_Grass_003_basecolor.jpg"
    );
    const tilesNormalMap = textureLoader.load(
      "./Assets/PlaneTexture/Grass/Stylized_Grass_003_normal.jpg"
    );
    const tilesHeightMap = textureLoader.load(
      "./Assets/PlaneTexture/Grass/Stylized_Grass_003_height.jpg"
    );
    const tilesRoughnessMap = textureLoader.load(
      "./Assets/PlaneTexture/Grass/Stylized_Grass_003_roughness.jpg"
    );
    const tilesAmbientOcclusionMap = textureLoader.load(
      "./Assets/PlaneTexture/Grass/Stylized_Grass_003_ambientOcclusion.jpg"
    );

    groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
    groundTexture.repeat.set(100, 100);
    groundTexture.anisotropy = 16;
    groundTexture.encoding = THREE.sRGBEncoding;

    const groundMaterial = new THREE.MeshPhongMaterial({
      map: groundTexture,
      normalMap: tilesNormalMap,
      displacementMap: tilesHeightMap,
      displacementScale: 0.05,
      aoMap: tilesAmbientOcclusionMap,
    });

    const planeGeometry = new THREE.PlaneGeometry(1000, 1000, 100, 100);
    plane = new THREE.Mesh(planeGeometry, groundMaterial);
    plane.rotateX(-Math.PI / 2);
    plane.geometry.attributes.uv2 = plane.geometry.attributes.uv;
    plane.receiveShadow = true;
    scene.add(plane);
  };

  hell.onclick = function HellSkyBox() {
    MakeSkyBox(
      HellArray[0],
      HellArray[1],
      HellArray[2],
      HellArray[3],
      HellArray[4],
      HellArray[5]
    );
    const textureLoader = new THREE.TextureLoader();
    const tilesBaseColor = textureLoader.load(
      "./Assets/PlaneTexture/Pebbles/Pebbles_029_BaseColor.jpg"
    );
    const tilesNormalMap = textureLoader.load(
      "./Assets/PlaneTexture/Pebbles/Pebbles_029_Normal.jpg"
    );
    const tilesHeightMap = textureLoader.load(
      "./Assets/PlaneTexture/Pebbles/Pebbles_029_Height.jpg"
    );
    const tilesRoughnessMap = textureLoader.load(
      "./Assets/PlaneTexture/Pebbles/Pebbles_029_Roughness.jpg"
    );
    const tilesAmbientOcclusionMap = textureLoader.load(
      "./Assets/PlaneTexture/Pebbles/Pebbles_029_AmbientOcclusion.jpg"
    );

    const groundTexture = textureLoader.load(
      "./Assets/PlaneTexture/Pebbles/Pebbles_029_BaseColor.jpg"
    );
    groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
    groundTexture.repeat.set(100, 100);
    groundTexture.anisotropy = 16;
    groundTexture.encoding = THREE.sRGBEncoding;

    const groundMaterial = new THREE.MeshPhongMaterial({
      map: groundTexture,
      normalMap: tilesNormalMap,
      displacementMap: tilesHeightMap,
      displacementScale: 0.05,
      aoMap: tilesAmbientOcclusionMap,
    });

    const planeGeometry = new THREE.PlaneGeometry(1000, 1000, 100, 100);
    plane = new THREE.Mesh(planeGeometry, groundMaterial);
    plane.rotateX(-Math.PI / 2);
    plane.geometry.attributes.uv2 = plane.geometry.attributes.uv;
    plane.receiveShadow = true;
    scene.add(plane);
  };
};

const camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.001,
  1000
);
camera.position.set(0, 2, 2);
scene.add(camera);
setupAI();

const controls = new THREE.PointerLockControls(camera, renderer.domElement);
window.addEventListener("dblclick", () => {
  controls.lock();
});

let obj;

var mtLoader = new THREE.MTLLoader();
mtLoader.setTexturePath("./Assets/Models/");
mtLoader.setPath("./Assets/Models/");
mtLoader.load("AssaultRifle2_4.mtl", function (materials) {
  materials.preload();
  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.setPath("./Assets/Models/");
  objLoader.load("AssaultRifle2_4.obj", function (object) {
    object.rotation.y = Math.PI / 1.75;
    object.scale.set(1, 1, 1);
    object.position.z = -0.75;
    object.position.y = -1;
    object.position.x = 1.5;
    obj = object;
    obj.castShadow = true;
    camera.add(obj);
  });
});

var manager = new THREE.LoadingManager();
manager.onProgress = function (item, loaded, total) {
  //console.log(item, loaded, total);
};

// model
var loader = new THREE.OBJLoader(manager);
loader.load("./Assets/Models/AssaultRifle2_4.obj", function (object) {
  object.traverse(function (child) {
    if (child instanceof THREE.Mesh) {
      //child.material.map = texture;
    }
  });

  object.rotation.y = Math.PI / 1.75;
  object.scale.set(1, 1, 1);
  object.position.z = -0.75;
  object.position.y = -1;
  object.position.x = 1.5;

  // obj = object;
  // camera.add(obj)
});

let mixer;
const charLoader = new THREE.FBXLoader();
charLoader.setPath("./Assets/Models/");
charLoader.load("Character.fbx", (fbx) => {
  fbx.scale.setScalar(0.1);
  fbx.traverse((c) => {
    c.castShadow = true;
  });
  const anim = new THREE.FBXLoader();
  anim.setPath("./Assets/Models/");
  anim.load("Walking.fbx", (anim) => {
    mixer = new THREE.AnimationMixer(fbx);
    const idle = mixer.clipAction(anim.animations[0]);
    idle.play();
  });
  fbx.position.set(0, -3, 0.65);
  fbx.rotation.y = Math.PI;
  fbx.scale.set(0.03, 0.03, 0.03);
  camera.add(fbx);
});

let reticle = new THREE.Mesh(
  new THREE.RingBufferGeometry(0.85 * 0.05, 0.05, 32),
  new THREE.MeshBasicMaterial({
    color: 0xffffff,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  })
);
reticle.position.z = -3 * 0.5;
camera.add(reticle);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
directionalLight.position.set(0, 10, 0)
directionalLight.castShadow = true;
scene.add(directionalLight);

const listener = new THREE.AudioListener();
camera.add(listener);

const sound = new THREE.Audio(listener);

const audioLoader = new THREE.AudioLoader();
audioLoader.load("./Assets/Audio/ambience.wav", function (buffer) {
  sound.setBuffer(buffer);
  sound.setLoop(true);
  sound.setVolume(0.5);
  sound.play();
});

const walkingSound = new THREE.Audio(listener);

audioLoader.load("./Assets/Audio/walking.wav", function (buffer) {
  walkingSound.setBuffer(buffer);
  walkingSound.setLoop(true);
  walkingSound.setVolume(0.9);
});

const gunSound = new THREE.Audio(listener);

audioLoader.load("./Assets/Audio/gunshot.mp3", function (buffer) {
  gunSound.setBuffer(buffer);
  gunSound.setLoop(true);
  gunSound.setVolume(0.5);
});

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);
document.addEventListener("mousedown", mouseDown);
document.addEventListener("mouseup", mouseUp);

let prevTime = performance.now();

let raycaster = new THREE.Raycaster(
  camera.getWorldPosition(new THREE.Vector3()),
  camera.getWorldDirection(new THREE.Vector3())
);

const animate = () => {
  var delta = clock.getDelta(), speed = delta * BULLETMOVESPEED;
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

animate();

window.addEventListener("resize", onWindowResize);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}


