import * as THREE from 'three';
import { DoubleSide } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(0, 10, 25);
orbit.update();


const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF, side: DoubleSide
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;

const animate = () => {
    renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate);