export const componentes = [
  // 🔹 RESISTORES LINEALES
  {
    id: 'resistor-1k',
    nombre: 'Resistor 1kΩ',
    categoria: 'Resistores Lineales',
    descripcion: 'Limita corriente y divide voltaje. El valor se lee por código de colores o marcado SMD.',
    specs: { 'Resistencia': '1kΩ ±5%', 'Potencia': '0.25W', 'Tolerancia': '±5%', 'Tipo': 'Película de carbón' },
    modelo: 'modelos/resistor-1k.glb',
    color: '#e74c3c'
  },
  {
    id: 'potenciometro',
    nombre: 'Potenciómetro 10kΩ',
    categoria: 'Resistores Lineales',
    descripcion: 'Resistor variable con cursor ajustable. Usado en controles de volumen y calibración.',
    specs: { 'Resistencia': '10kΩ', 'Tipo': 'Rotativo/Lineal', 'Potencia': '0.1W', 'Ejes': '3 terminales' },
    modelo: 'modelos/potenciometro.glb',
    color: '#e67e22'
  },
  {
    id: 'resistor-smd',
    nombre: 'Resistor SMD 0805',
    categoria: 'Resistores Lineales',
    descripcion: 'Montaje superficial. Marcado con 3 o 4 dígitos. Ideal para PCB compactas.',
    specs: { 'Tamaño': '0805 (2.0x1.25mm)', 'Potencia': '0.125W', 'Tecnología': 'Película gruesa', 'Soldadura': 'Reflow' },
    modelo: 'modelos/resistor-smd.glb',
    color: '#f39c12'
  },

  //  RESISTORES NO LINEALES
  {
    id: 'termistor',
    nombre: 'Termistor NTC 10kΩ',
    categoria: 'Resistores No Lineales',
    descripcion: 'Varía su resistencia con la temperatura. Usado en sensores térmicos y protección.',
    specs: { 'R a 25°C': '10kΩ', 'Coeficiente': 'Negativo (NTC)', 'Precisión': '±1%', 'Rango': '-40°C a 125°C' },
    modelo: 'modelos/termistor.glb',
    color: '#2ecc71'
  },
  {
    id: 'fotorresistor',
    nombre: 'Fotorresistor LDR',
    categoria: 'Resistores No Lineales',
    descripcion: 'Disminuye su resistencia al recibir luz. Base de circuits crepusculares y alarmas.',
    specs: { 'R oscuridad': '>1MΩ', 'R luz (10lux)': '10kΩ', 'Tiempo resp.': '10-30ms', 'Espectro': 'Visible' },
    modelo: 'modelos/fotorresistor.glb',
    color: '#27ae60'
  },

  // 🔹 CONDENSADORES
  {
    id: 'condensador-electrolitico',
    nombre: 'Condensador Electrolítico 100µF',
    categoria: 'Condensadores',
    descripcion: 'Almacena carga con alta capacitancia. Polarizado: el lado marcado (-) va a tierra.',
    specs: { 'Capacitancia': '100µF', 'Voltaje': '25V', 'Tolerancia': '±20%', 'Tipo': 'Aluminio radial' },
    modelo: 'modelos/condensador-electrolitico.glb',
    color: '#3498db'
  },
  {
    id: 'condensador-ceramico',
    nombre: 'Condensador Cerámico 100nF',
    categoria: 'Condensadores',
    descripcion: 'No polarizado, estable y compacto. Usado para filtrado y desacople en fuentes digitales.',
    specs: { 'Capacitancia': '100nF (0.1µF)', 'Voltaje': '50V', 'Tolerancia': '±10%', 'Tipo': 'X7R multicapa' },
    modelo: 'modelos/condensador-ceramico.glb',
    color: '#2980b9'
  },

  // 🔹 DIODOS
  {
    id: 'diodo-rectificador',
    nombre: 'Diodo Rectificador 1N4007',
    categoria: 'Diodos',
    descripcion: 'Permite corriente en un solo sentido. Base de fuentes de alimentación AC/DC.',
    specs: { 'V inverso': '1000V', 'I directo': '1A', 'Caída Vf': '0.7V', 'Tipo': 'Silicio estándar' },
    modelo: 'modelos/diodo-rectificador.glb',
    color: '#9b59b6'
  },
  {
    id: 'led-rgb',
    nombre: 'LED RGB 5mm',
    categoria: 'Diodos',
    descripcion: 'Emite rojo, verde y azul. Control por PWM para generar millones de colores.',
    specs: { 'Pines': '4 (Ánodo común o Cátodo)', 'Vf por canal': '2.0-3.2V', 'I máx': '20mA/canal', 'Ángulo': '30°' },
    modelo: 'modelos/led-rgb.glb',
    color: '#e74c3c'
  },
  {
    id: 'fotodiodo',
    nombre: 'Fotodiodo BPW34',
    categoria: 'Diodos',
    descripcion: 'Convierte luz en corriente. Usado en sensores ópticos, fibra y controles remotos.',
    specs: { 'Corriente luz': '10-50µA', 'Tiempo resp.': '10ns', 'Espectro': 'Visible-IR', 'Encapsulado': 'T-1 3/4' },
    modelo: 'modelos/fotodiodo.glb',
    color: '#8e44ad'
  },

  // 🔹 TRANSISTORES
  {
    id: 'transistor-npn',
    nombre: 'Transistor BJT NPN 2N2222',
    categoria: 'Transistores',
    descripcion: 'Amplifica o conmuta señales. Configura en emisor común, base común o colector común.',
    specs: { 'Tipo': 'NPN BJT', 'Vceo': '40V', 'Ic máx': '800mA', 'Ganancia (hFE)': '100-300', 'Pinout': 'E-B-C' },
    modelo: 'modelos/transistor-npn.glb',
    color: '#34495e'
  },

  // 🔹 CIRCUITOS INTEGRADOS - ANALÓGICOS
  {
    id: 'lm386',
    nombre: 'Amplificador de Audio LM386',
    categoria: 'CI Analógicos',
    descripcion: 'Amplificador de baja potencia. Ganancia ajustable con capacitor externo. Ideal para altavoces pequeños.',
    specs: { 'Ganancia': '20-200x', 'Voltaje': '4-12V', 'Potencia salida': '0.3-0.7W', 'Pines': '8 (DIP/SOIC)' },
    modelo: 'modelos/lm386.glb',
    color: '#16a085'
  },

  //  CIRCUITOS INTEGRADOS - DIGITALES
  {
    id: '7447',
    nombre: 'Decodificador 7447',
    categoria: 'CI Digitales',
    descripcion: 'Convierte código BCD (4 bits) a salidas para display de 7 segmentos (ánodo común).',
    specs: { 'Familia': 'TTL 74LS', 'Entradas': '4 BCD', 'Salidas': '7 segmentos + RbI/LT', 'Voltaje': '5V' },
    modelo: 'modelos/7447.glb',
    color: '#c0392b'
  },
  {
    id: '74138',
    nombre: 'Decodificador 3 a 8 líneas 74138',
    categoria: 'CI Digitales',
    descripcion: 'Activa una de 8 salidas según 3 bits de entrada. Usado en selección de memoria y demultiplexación.',
    specs: { 'Familia': 'TTL', 'Entradas': '3 (A,B,C)', 'Salidas': '8 activas en bajo', 'Habilitación': '3 pines (G1,G2A,G2B)' },
    modelo: 'modelos/74138.glb',
    color: '#d35400'
  },

  // 🔹 CIRCUITOS INTEGRADOS - MIXTOS/ESPECIALES
  {
    id: 'ne555',
    nombre: 'Temporizador NE555',
    categoria: 'CI Mixtos',
    descripcion: 'Genera pulsos, oscilaciones o retardos. Configurable en modo astable, monoestable o biestable.',
    specs: { 'Voltaje': '4.5-16V', 'Frecuencia máx': '500kHz', 'Corriente salida': '200mA', 'Pines': '8 (DIP)' },
    modelo: 'modelos/ne555.glb',
    color: '#f1c40f'
  },
  {
    id: 'arduino-uno',
    nombre: 'Microcontrolador Arduino Uno',
    categoria: 'CI Mixtos',
    descripcion: 'Placa basada en ATmega328P. Ideal para prototipado rápido con entradas/salidas digitales y analógicas.',
    specs: { 'MCU': 'ATmega328P', 'Clock': '16MHz', 'Flash': '32KB', 'Pines I/O': '14 dig / 6 anal', 'USB': 'Tipo B' },
    modelo: 'modelos/arduino-uno.glb',
    color: '#2ecc71'
  },
  {
    id: 'microprocesador',
    nombre: 'Microprocesador (Ej. 8085/ARM)',
    categoria: 'CI Mixtos',
    descripcion: 'CPU central que ejecuta instrucciones. Requiere memoria, reloj y buses externos para funcionar.',
    specs: { 'Arquitectura': '8/16/32 bits', 'Clock': 'Variable', 'Pines': '40-100+', 'Función': 'Cálculo y control' },
    modelo: 'modelos/microprocesador.glb',
    color: '#7f8c8d'
  },
  {
    id: 'ram',
    nombre: 'Memoria RAM (SRAMDRAM)',
    categoria: 'CI Mixtos',
    descripcion: 'Almacenamiento volátil de datos. SRAM es rápida y cara; DRAM es densa y requiere refresco.',
    specs: { 'Tipo': 'Volátil', 'Acceso': 'Aleatorio', 'Velocidad': 'ns (SRAM) / µs (DRAM)', 'Uso': 'Memoria de trabajo' },
    modelo: 'modelos/ram.glb',
    color: '#95a5a6'
  }
];
