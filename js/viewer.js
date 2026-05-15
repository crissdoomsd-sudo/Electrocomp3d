import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let scene, camera, renderer, controls, loader;
let currentModel = null;

export function initViewer(containerId) {
  const container = document.getElementById(containerId);
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#15151e');
  scene.fog = new THREE.Fog('#15151e', 5, 20);
  camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 2, 4);
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);
  const dir = new THREE.DirectionalLight(0xffffff, 1.2);
  dir.position.set(3, 4, 2);
  dir.castShadow = true;
  scene.add(dir);
  const grid = new THREE.GridHelper(4, 20, 0x333344, 0x222233);
  scene.add(grid);
  loader = new GLTFLoader();
  window.addEventListener('resize', () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

export function loadComponentModel(path, colorHint) {
  if (currentModel) {
    scene.remove(currentModel);
    currentModel.traverse(child => {
      if (child.isMesh) {
        child.geometry.dispose();
        if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
        else child.material.dispose();
      }
    });
  }
  loader.load(path, (gltf) => {
    currentModel = gltf.scene;
    currentModel.scale.set(1.5, 1.5, 1.5);
    currentModel.position.set(0, 0.5, 0);
    currentModel.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (!child.material.map && colorHint) child.material.color.set(colorHint);
      }
    });
    scene.add(currentModel);
  }, undefined, () => {
    console.warn('⚠️ Modelo no encontrado. Mostrando fallback.');
    createFallbackModel(colorHint || '#00d4ff');
  });
}

function createFallbackModel(color) {
  const geo = new THREE.BoxGeometry(1, 1.5, 0.3);
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.3, metalness: 0.6 });
  currentModel = new THREE.Mesh(geo, mat);
  currentModel.position.set(0, 0.75, 0);
  scene.add(currentModel);
}

export function resetCamera() {
  camera.position.set(0, 2, 4);
  controls.target.set(0, 0.5, 0);
  controls.update();
}

export function takeScreenshot() {
  renderer.render(scene, camera);
  const link = document.createElement('a');
  link.download = 'electrocomp-capture.png';
  link.href = renderer.domElement.toDataURL('image/png');
  link.click();
}