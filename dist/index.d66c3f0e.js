// CGV Assignment - FPS AIM TRAINER
// ----------------------------------------
// Functions:
const movePhysics = (time, prevTime1, velocity1, moveForward1, moveBack1, moveRight1, moveLeft1, walkingSound1)=>{
    const delta = (time - prevTime1) / 1000;
    velocity1.z -= velocity1.z * 10.0 * delta;
    velocity1.x -= velocity1.x * 10.0 * delta;
    if (moveForward1 || moveBack1) {
        velocity1.z -= direction.z * 200 * delta;
        walkingSound1.play();
    }
    if (moveRight1 || moveLeft1) {
        velocity1.x -= direction.x * 200 * delta;
        walkingSound1.play();
    }
    if (!moveRight1 && !moveLeft1 && !moveForward1 && !moveBack1) walkingSound1.pause();
    controls.moveForward(-velocity1.z * delta);
    controls.moveRight(-velocity1.x * delta);
};
const bulletArray = (arr)=>{
    for(let i = 0; i < arr.length; i++){
        if (arr[i] == undefined) continue;
        if (arr[i].alive == false) {
            arr.splice(i, 1);
            continue;
        }
        arr[i].position.add(arr[i].velocity);
    }
};
const createBullet = ()=>{
    return new THREE.Mesh(new THREE.SphereGeometry(0.015, 50, 50), new THREE.MeshBasicMaterial({
        color: 0x22ffdd
    }));
};
const shootBullet = (shootState, arr, start, end, gunFire)=>{
    if (shootState) {
        gunFire.play();
        let bullet = createBullet();
        bullet.alive = true;
        setTimeout(()=>{
            bullet.alive = false;
            scene.remove(bullet);
        }, 10000);
        bullet.position.set(start.x, start.y + 0.5, start.z);
        bullet.velocity = new THREE.Vector3(end.x, end.y, end.z);
        arr.push(bullet);
        scene.add(bullet);
    } else gunFire.pause();
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
var skybox = null; // I set the skybox to null and also made it global so I could change to diiferent skyboxes
// these are the different array's that hold the urls for the textures for the different skyboxes 
var AridArray = [
    "https://i.ibb.co/4RMh4yW/arid2-ft.jpg",
    "https://i.ibb.co/BzprVmY/arid2-bk.jpg",
    "https://i.ibb.co/QdTh2N5/arid2-up.jpg",
    "https://i.ibb.co/3vXGDFy/arid2-dn.jpg",
    "https://i.ibb.co/QPkp1gZ/arid2-rt.jpg",
    "https://i.ibb.co/HVvN38y/arid2-lf.jpg"
];
var CocoaArray = [
    "https://i.ibb.co/TgdMcTs/cocoa-ft.jpg",
    "https://i.ibb.co/W39zpjS/cocoa-bk.jpg",
    "https://i.ibb.co/wBDXQC4/cocoa-up.jpg",
    "https://i.ibb.co/fGD2N9m/cocoa-dn.jpg",
    "https://i.ibb.co/4Pnc12G/cocoa-rt.jpg",
    "https://i.ibb.co/DLL8VSc/cocoa-lf.jpg"
];
var MeadowArray = [
    "https://i.ibb.co/THRrZb3/meadow-ft.jpg",
    "https://i.ibb.co/jMzKjq8/meadow-bk.jpg",
    "https://i.ibb.co/m0W3m6q/meadow-up.jpg",
    "https://i.ibb.co/kDC3kR1/meadow-dn.jpg",
    "https://i.ibb.co/fYzTTvr/meadow-rt.jpg",
    "https://i.ibb.co/4SDrs9M/meadow-lf.jpg"
];
var HellArray = [
    "https://i.ibb.co/yX98hch/flame-ft.jpg",
    "https://i.ibb.co/Z6rR9jx/flame-bk.jpg",
    "https://i.ibb.co/nQ43ck2/flame-up.jpg",
    "https://i.ibb.co/w6nkJBL/flame-dn.jpg",
    "https://i.ibb.co/frFz93V/flame-rt.jpg",
    "https://i.ibb.co/hg74qN4/flame-lf.jpg"
];
function MakeSkyBox(ft, bk, up, dn, rt, lf) {
    let materialArray = [];
    let texture_ft = new THREE.TextureLoader().load(ft);
    let texture_bk = new THREE.TextureLoader().load(bk);
    let texture_up = new THREE.TextureLoader().load(up);
    let texture_dn = new THREE.TextureLoader().load(dn);
    let texture_rt = new THREE.TextureLoader().load(rt);
    let texture_lf = new THREE.TextureLoader().load(lf);
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
    skybox = new THREE.Mesh(skyboxGeo, materialArray);
    scene.add(skybox);
}
MakeSkyBox(AridArray[0], AridArray[1], AridArray[2], AridArray[3], AridArray[4], AridArray[5]); // I called this so that the user is not welcomed with a black screen but rather the arid texture
window.onload = function() {
    var arid = document.getElementById("arid"); // this is used to get the id's for the different buttons from the html
    var cocoa = document.getElementById("cocoa");
    var meadow = document.getElementById("meadow");
    var hell = document.getElementById("hell");
    cocoa.onclick = function CocoaSkyBox() {
        MakeSkyBox(CocoaArray[0], CocoaArray[1], CocoaArray[2], CocoaArray[3], CocoaArray[4], CocoaArray[5]);
    };
    arid.onclick = function AridSkyBox() {
        MakeSkyBox(AridArray[0], AridArray[1], AridArray[2], AridArray[3], AridArray[4], AridArray[5]);
    };
    meadow.onclick = function MeadowSkyBox() {
        MakeSkyBox(MeadowArray[0], MeadowArray[1], MeadowArray[2], MeadowArray[3], MeadowArray[4], MeadowArray[5]);
    };
    hell.onclick = function HellSkyBox() {
        MakeSkyBox(HellArray[0], HellArray[1], HellArray[2], HellArray[3], HellArray[4], HellArray[5]);
    };
};
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.001, 1000);
camera.position.set(0, 2, 2);
scene.add(camera);
const controls = new THREE.PointerLockControls(camera, renderer.domElement);
window.addEventListener("dblclick", ()=>{
    controls.lock();
});
let obj;
var mtLoader = new THREE.MTLLoader();
mtLoader.setTexturePath("./Assets/Models/");
mtLoader.setPath("./Assets/Models/");
mtLoader.load("AssaultRifle2_4.mtl", function(materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath("./Assets/Models/");
    objLoader.load("AssaultRifle2_4.obj", function(object) {
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
manager.onProgress = function(item, loaded, total) {
    console.log(item, loaded, total);
};
// model
var loader = new THREE.OBJLoader(manager);
loader.load("./Assets/Models/AssaultRifle2_4.obj", function(object) {
    object.traverse(function(child) {
        THREE.Mesh;
    });
    object.rotation.y = Math.PI / 1.75;
    object.scale.set(1, 1, 1);
    object.position.z = -0.75;
    object.position.y = -1;
    object.position.x = 1.5;
// obj = object;
// camera.add(obj)
});
let reticle = new THREE.Mesh(new THREE.RingBufferGeometry(0.0425, 0.05, 32), new THREE.MeshBasicMaterial({
    color: 0xffffff,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide
}));
reticle.position.z = -1.5;
camera.add(reticle);
const globalLight = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
globalLight.position.set(0.5, 1, 0.75);
camera.add(globalLight);
const listener = new THREE.AudioListener();
camera.add(listener);
const sound = new THREE.Audio(listener);
const audioLoader = new THREE.AudioLoader();
audioLoader.load("./Assets/Audio/ambience.wav", function(buffer) {
    sound.setBuffer(buffer);
    sound.setLoop(true);
    sound.setVolume(0.5);
    sound.play();
});
const walkingSound = new THREE.Audio(listener);
audioLoader.load("./Assets/Audio/walking.wav", function(buffer) {
    walkingSound.setBuffer(buffer);
    walkingSound.setLoop(true);
    walkingSound.setVolume(0.8);
});
const gunSound = new THREE.Audio(listener);
audioLoader.load("./Assets/Audio/gunfire.mp3", function(buffer) {
    gunSound.setBuffer(buffer);
    gunSound.setLoop(true);
    gunSound.setVolume(0.5);
});
document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);
document.addEventListener("mousedown", mouseDown);
document.addEventListener("mouseup", mouseUp);
let prevTime = performance.now();
let raycaster = new THREE.Raycaster(camera.getWorldPosition(new THREE.Vector3()), camera.getWorldDirection(new THREE.Vector3()));
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
        movePhysics(time, prevTime, velocity, moveForward, moveBack, moveRight, moveLeft, walkingSound);
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

//# sourceMappingURL=index.d66c3f0e.js.map
