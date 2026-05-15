import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let scene, camera, renderer, controls, loader;
let currentModel = null;

export function initViewer(containerId) {
  const container = document.getElementById(containerId);
  
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#15151e');
  
  camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 2, 4);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  // Luces
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);
  const dir = new THREE.DirectionalLight(0xffffff, 1);
  dir.position.set(2, 5, 2);
  scene.add(dir);

  // Rejilla de suelo
  const grid = new THREE.GridHelper(10, 20, 0x444444, 0x222222);
  scene.add(grid);

  loader = new GLTFLoader();

  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

export function loadComponentModel(path, colorHint) {
  // Limpiar modelo anterior
  if (currentModel) {
    scene.remove(currentModel);
    // Limpiar memoria
    currentModel.traverse(child => {
      if (child.isMesh) {
        child.geometry.dispose();
        if (child.material) child.material.dispose();
      }
    });
  }

  // Intentar cargar el archivo .glb
  loader.load(
    path,
    (gltf) => {
      currentModel = gltf.scene;
      currentModel.scale.set(1.5, 1.5, 1.5);
      scene.add(currentModel);
    },
    undefined,
    (error) => {
      console.warn('⚠️ No se encontró el modelo. Generando componente 3D automático...');
      // SI FALLA: Crear un componente genérico con código
      createAutoComponent(colorHint || '#00d4ff');
    }
  );
}

// ✨ FUNCIÓN MÁGICA: Dibuja un chip/componente si no hay archivo
function createAutoComponent(color) {
  const group = new THREE.Group();

  // Cuerpo del componente (Caja negra)
  const bodyGeo = new THREE.BoxGeometry(1, 0.4, 0.6);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.3 });
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  group.add(body);

  // Patas (Cilindros metálicos)
  const legGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.8);
  const legMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.8 });
  
  const positions = [
    [-0.4, 0, 0.4], [-0.4, 0, 0], [-0.4, 0, -0.4], // Izquierda
    [0.4, 0, 0.4], [0.4, 0, 0], [0.4, 0, -0.4]     // Derecha
  ];

  positions.forEach(pos => {
    const leg = new THREE.Mesh(legGeo, legMat);
    leg.position.set(...pos);
    leg.rotation.z = Math.PI / 2; // Acostar la pata
    group.add(leg);
  });

  // Indicador de color (círculo brillante arriba)
  const indicatorGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.05);
  const indicatorMat = new THREE.MeshStandardMaterial({ color: color, emissive: color, emissiveIntensity: 0.5 });
  const indicator = new THREE.Mesh(indicatorGeo, indicatorMat);
  indicator.position.y = 0.22;
  group.add(indicator);

  currentModel = group;
  currentModel.scale.set(1.5, 1.5, 1.5);
  scene.add(currentModel);
}

export function resetCamera() {
  camera.position.set(0, 2, 4);
  controls.target.set(0, 0, 0);
  controls.update();
}

export function takeScreenshot() {
  renderer.render(scene, camera);
  const link = document.createElement('a');
  link.download = 'captura-electrocomp.png';
  link.href = renderer.domElement.toDataURL('image/png');
  link.click();
}