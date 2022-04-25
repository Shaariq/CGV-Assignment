const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const orbit = new THREE.OrbitControls(camera, renderer.domElement);

camera.position.set(0, 10, 25);
orbit.update();


const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshStandardMaterial({
    color: 0xFFFFFF, side: THREE.DoubleSide
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;

var objLoader = new THREE.OBJLoader();
objLoader.load('./Assets/Models/A-posed_Wild_Rift_Sentinel_Irelia.obj', function (object) {
    scene.add(object);
    object.position.set(0, 0.35, 0);
});

const ambientLight = new THREE.AmbientLight( 0x404040 );
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );

const animate = () => {
    renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate);