// ----------------------------------------
// Functions:
const movePhysics = (
  time,
  prevTime,
  velocity,
  moveForward,
  moveBack,
  moveRight,
  moveLeft
) => {
  const delta = (time - prevTime) / 1000;

  velocity.z -= velocity.z * 10.0 * delta;
  velocity.x -= velocity.x * 10.0 * delta;

  if (moveForward || moveBack) {
    velocity.z -= direction.z * 200 * delta;
  }
  if (moveRight || moveLeft) {
    velocity.x -= direction.x * 200 * delta;
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
    new THREE.SphereGeometry(0.01, 50, 50),
    new THREE.MeshBasicMaterial({ color: 0x22ffdd })
  );
};

const shootBullet = (shootState, arr) => {
  if (shootState) {
    let bullet = createBullet();

    bullet.alive = true;

    setTimeout(() => {
      bullet.alive = false;
      scene.remove(bullet);
    }, 10000);

    let currentPosition = camera.getWorldPosition(new THREE.Vector3());
    let currentDirection = new THREE.Vector3();
    currentDirection = raycaster.ray.direction;

    bullet.position.set(
      currentPosition.x,
      currentPosition.y,
      currentPosition.z
    );

    bullet.velocity = new THREE.Vector3(
      currentDirection.x,
      currentDirection.y,
      currentDirection.z
    );

    arr.push(bullet);
    scene.add(bullet);
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
// This is just to see better
scene.background = new THREE.Color(0xffffff);
scene.fog = new THREE.Fog(0x777777, 0, 750);
// You can delete the two lines above when we have the skybox

const camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 2);

const controls = new THREE.PointerLockControls(camera, renderer.domElement);
window.addEventListener("click", () => {
  controls.lock();
});

const planeGeometry = new THREE.PlaneGeometry(400, 400, 100, 100);
const planeMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotateX(-Math.PI / 2);
scene.add(plane);

const globalLight = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
globalLight.position.set(0.5, 1, 0.75);
scene.add(globalLight);

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);
document.addEventListener("mousedown", mouseDown);
document.addEventListener("mouseup", mouseUp);

let prevTime = performance.now();

let raycaster = new THREE.Raycaster(
  camera.getWorldPosition(new THREE.Vector3()),
  camera.getWorldDirection(new THREE.Vector3())
);
let arrow = new THREE.ArrowHelper(
  camera.getWorldDirection(new THREE.Vector3()),
  camera.getWorldPosition(new THREE.Vector3()),
  3,
  0x00ff00
);

const animate = () => {
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
    scene.remove(arrow);
    arrow = new THREE.ArrowHelper(
      raycaster.ray.direction,
      raycaster.ray.origin,
      3,
      0x00ff00
    );
    arrow.line.visible = false;

    scene.add(arrow);

    movePhysics(
      time,
      prevTime,
      velocity,
      moveForward,
      moveBack,
      moveRight,
      moveLeft
    );

    shootBullet(shoot, bullets);
  }

  prevTime = time;

  renderer.render(scene, camera);
};

animate();

window.addEventListener("resize", onWindowResize);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
