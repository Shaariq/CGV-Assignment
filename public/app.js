// ----------------------------------------
// Functions:
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
  }
  if (moveRight || moveLeft) {
    velocity.x -= direction.x * 200 * delta;
    walkingSound.play();
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
    new THREE.SphereGeometry(0.015, 50, 50),
    new THREE.MeshBasicMaterial({ color: 0x22ffdd })
  );
};

const shootBullet = (shootState, arr, start, end, gunFire) => {
  if (shootState) {
    gunFire.play();
    let bullet = createBullet();

    bullet.alive = true;

    setTimeout(() => {
      bullet.alive = false;
      scene.remove(bullet);
    }, 10000);

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

// ----------------------------------------
// Initialize variables:
const skyboxImage = "arid2";

let moveForward = false;
let moveBack = false;
let moveLeft = false;
let moveRight = false;

let shoot = false;

let bullets = [];

const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
// ----------------------------------------

const renderer = new THREE.WebGLRenderer({
  antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

let materialArray = [];
let texture_ft = new THREE.TextureLoader().load(
  "https://i.ibb.co/4RMh4yW/arid2-ft.jpg"
);
let texture_bk = new THREE.TextureLoader().load(
  "https://i.ibb.co/BzprVmY/arid2-bk.jpg"
);
let texture_up = new THREE.TextureLoader().load(
  "https://i.ibb.co/QdTh2N5/arid2-up.jpg"
);
let texture_dn = new THREE.TextureLoader().load(
  "https://i.ibb.co/3vXGDFy/arid2-dn.jpg"
);
let texture_rt = new THREE.TextureLoader().load(
  "https://i.ibb.co/QPkp1gZ/arid2-rt.jpg"
);
let texture_lf = new THREE.TextureLoader().load(
  "https://i.ibb.co/HVvN38y/arid2-lf.jpg"
);

materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

for (let i = 0; i < 6; i++) materialArray[i].side = THREE.BackSide;

let skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
let skybox = new THREE.Mesh(skyboxGeo, materialArray);
scene.add(skybox);

const camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.001,
  1000
);
camera.position.set(0, 2, 2);
scene.add(camera);

const controls = new THREE.PointerLockControls(camera, renderer.domElement);
window.addEventListener("click", () => {
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
    camera.add(obj);
  });
});

var manager = new THREE.LoadingManager();
manager.onProgress = function (item, loaded, total) {
  console.log(item, loaded, total);
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

const globalLight = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
globalLight.position.set(0.5, 1, 0.75);
camera.add(globalLight);

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
  walkingSound.setVolume(0.8);
});

const gunSound = new THREE.Audio(listener);

audioLoader.load("./Assets/Audio/gunfire.mp3", function (buffer) {
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
  //mesh.rotation.x += 0.005;
  //mesh.rotation.y += 0.005;
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

  renderer.render(scene, camera);
};

animate();

window.addEventListener("resize", onWindowResize);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
