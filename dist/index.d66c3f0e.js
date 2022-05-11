// ----------------------------------------
// Functions:
const movePhysics = (time, prevTime1, velocity1, moveForward1, moveBack1, moveRight1, moveLeft1)=>{
    const delta = (time - prevTime1) / 1000;
    velocity1.z -= velocity1.z * 10.0 * delta;
    velocity1.x -= velocity1.x * 10.0 * delta;
    if (moveForward1 || moveBack1) velocity1.z -= direction.z * 200 * delta;
    if (moveRight1 || moveLeft1) velocity1.x -= direction.x * 200 * delta;
    controls.moveForward(-velocity1.z * delta);
    controls.moveRight(-velocity1.x * delta);
};
const bulletArray = (arr)=>{
    for(let i1 = 0; i1 < arr.length; i1++){
        if (arr[i1] == undefined) continue;
        if (arr[i1].alive == false) {
            arr.splice(i1, 1);
            continue;
        }
        arr[i1].position.add(arr[i1].velocity);
    }
};
const createBullet = ()=>{
    return new THREE.Mesh(new THREE.SphereGeometry(0.01, 50, 50), new THREE.MeshBasicMaterial({
        color: 0x22ffdd
    }));
};
const shootBullet = (shootState, arr)=>{
    if (shootState) {
        let bullet = createBullet();
        bullet.alive = true;
        setTimeout(()=>{
            bullet.alive = false;
            scene.remove(bullet);
        }, 10000);
        let currentPosition = camera.getWorldPosition(new THREE.Vector3());
        let currentDirection = new THREE.Vector3();
        currentDirection = raycaster.ray.direction;
        bullet.position.set(currentPosition.x, currentPosition.y, currentPosition.z);
        bullet.velocity = new THREE.Vector3(currentDirection.x, currentDirection.y, currentDirection.z);
        arr.push(bullet);
        scene.add(bullet);
    }
};
const onKeyDown = (e)=>{
    switch(e.code){
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
const onKeyUp = (e)=>{
    switch(e.code){
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
const mouseDown = ()=>{
    shoot = true;
};
const mouseUp = ()=>{
    shoot = false;
};
// ----------------------------------------
// ----------------------------------------
// Initialize variables:
const skyboxImage = 'arid2';
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
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
let materialArray = [];
let texture_ft = new THREE.TextureLoader().load('https://i.ibb.co/4RMh4yW/arid2-ft.jpg');
let texture_bk = new THREE.TextureLoader().load('https://i.ibb.co/BzprVmY/arid2-bk.jpg');
let texture_up = new THREE.TextureLoader().load('https://i.ibb.co/QdTh2N5/arid2-up.jpg');
let texture_dn = new THREE.TextureLoader().load('https://i.ibb.co/3vXGDFy/arid2-dn.jpg');
let texture_rt = new THREE.TextureLoader().load('https://i.ibb.co/QPkp1gZ/arid2-rt.jpg');
let texture_lf = new THREE.TextureLoader().load('https://i.ibb.co/HVvN38y/arid2-lf.jpg');
materialArray.push(new THREE.MeshBasicMaterial({
    map: texture_ft
}));
materialArray.push(new THREE.MeshBasicMaterial({
    map: texture_bk
}));
materialArray.push(new THREE.MeshBasicMaterial({
    map: texture_up
}));
materialArray.push(new THREE.MeshBasicMaterial({
    map: texture_dn
}));
materialArray.push(new THREE.MeshBasicMaterial({
    map: texture_rt
}));
materialArray.push(new THREE.MeshBasicMaterial({
    map: texture_lf
}));
for(let i = 0; i < 6; i++)materialArray[i].side = THREE.BackSide;
let skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
let skybox = new THREE.Mesh(skyboxGeo, materialArray);
scene.add(skybox);
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 2);
const controls = new THREE.PointerLockControls(camera, renderer.domElement);
window.addEventListener("click", ()=>{
    controls.lock();
});
var mtLoader = new THREE.MTLLoader();
mtLoader.setTexturePath("./Assets/Models/");
mtLoader.setPath("./Assets/Models/");
mtLoader.load("AssaultRifle2_4.mtl", function(materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath("./Assets/Models/");
    objLoader.load("AssaultRifle2_4.obj", function(object) {
        scene.add(object);
    });
});
const globalLight = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
globalLight.position.set(0.5, 1, 0.75);
scene.add(globalLight);
document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);
document.addEventListener("mousedown", mouseDown);
document.addEventListener("mouseup", mouseUp);
let prevTime = performance.now();
let raycaster = new THREE.Raycaster(camera.getWorldPosition(new THREE.Vector3()), camera.getWorldDirection(new THREE.Vector3()));
let arrow = new THREE.ArrowHelper(camera.getWorldDirection(new THREE.Vector3()), camera.getWorldPosition(new THREE.Vector3()), 3, 0x00ff00);
const animate = ()=>{
    //mesh.rotation.x += 0.005;
    //mesh.rotation.y += 0.005;
    requestAnimationFrame(animate);
    const time = performance.now();
    bulletArray(bullets);
    direction.z = Number(moveForward) - Number(moveBack);
    direction.x = Number(moveRight) - Number(moveLeft);
    if (controls.isLocked) {
        raycaster.set(camera.getWorldPosition(new THREE.Vector3()), camera.getWorldDirection(new THREE.Vector3()));
        scene.remove(arrow);
        arrow = new THREE.ArrowHelper(raycaster.ray.direction, raycaster.ray.origin, 3, 0x00ff00);
        arrow.line.visible = false;
        scene.add(arrow);
        movePhysics(time, prevTime, velocity, moveForward, moveBack, moveRight, moveLeft);
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

//# sourceMappingURL=index.d66c3f0e.js.map
