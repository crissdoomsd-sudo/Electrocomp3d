import { initViewer, loadComponentModel, resetCamera, takeScreenshot } from './viewer.js';
import { componentes } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initViewer('canvas-container');
  renderList();
  setupControls();
});

function renderList() {
  const list = document.getElementById('component-list');
  list.innerHTML = '';
  componentes.forEach(comp => {
    const li = document.createElement('li');
    li.textContent = comp.nombre;
    li.dataset.id = comp.id;
    li.addEventListener('click', () => selectComponent(comp.id));
    list.appendChild(li);
  });
}

function selectComponent(id) {
  const comp = componentes.find(c => c.id === id);
  if (!comp) return;
  document.querySelectorAll('#component-list li').forEach(li => {
    li.classList.toggle('active', li.dataset.id === id);
  });
  loadComponentModel(comp.modelo, comp.color);
  showDetails(comp);
}

function showDetails(comp) {
  document.getElementById('comp-title').textContent = comp.nombre;
  let html = `<p>${comp.descripcion}</p><div class="spec-grid">`;
  for (const [key, val] of Object.entries(comp.specs)) {
    html += `<div class="spec-item"><div class="spec-label">${key}</div><div class="spec-value">${val}</div></div>`;
  }
  html += `</div><p style="margin-top:1rem; color:#888; font-size:0.85rem;">📁 Modelo: ${comp.modelo}</p>`;
  document.getElementById('comp-info').innerHTML = html;
}

function setupControls() {
  document.getElementById('btn-reset').addEventListener('click', resetCamera);
  document.getElementById('btn-screenshot').addEventListener('click', takeScreenshot);
  document.getElementById('btn-compare').addEventListener('click', () => {
    alert('🔧 Modo comparación: seleccionado 1 componente. Haz clic en otro para ver diferencias (funcionalidad en desarrollo).');
  });
}
