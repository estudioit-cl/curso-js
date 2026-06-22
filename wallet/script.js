// ============================================================
// WALLET APP - Archivo JavaScript Maestro
// ============================================================

// --- CREDENCIALES DE ACCESO ---
const CREDENTIALS = {
  usuario: 'cliente',
  password: '123456'
};

// --- DATOS MAESTROS ---
// Tabla maestra de transacciones (compartida entre páginas via localStorage)
let tabla_maestra = JSON.parse(localStorage.getItem('tabla_maestra')) || [
  { tipo: 'deposito',      monto: 50000, fecha: '2025-06-01', destinatario: '' },
  { tipo: 'transferencia', monto: 12000, fecha: '2025-06-05', destinatario: 'Juan Perez' },
  { tipo: 'deposito',      monto: 30000, fecha: '2025-06-10', destinatario: '' },
  { tipo: 'transferencia', monto: 5000,  fecha: '2025-06-15', destinatario: 'Luis Gonzalez' }
];

// --- LISTADO DE DESTINATARIOS ---
let destinatarios = JSON.parse(localStorage.getItem('destinatarios')) || [
  'Juan Perez',
  'Luis Gonzalez',
  'Andres Tapia'
];

// --- FUNCIONES DE PERSISTENCIA ---
function guardarTabla() {
  localStorage.setItem('tabla_maestra', JSON.stringify(tabla_maestra));
}

function guardarDestinatarios() {
  localStorage.setItem('destinatarios', JSON.stringify(destinatarios));
}

// --- FUNCIONES DE TRANSACCIONES ---
function agregarTransaccion(tipo, monto, destinatario = '') {
  const hoy = new Date();
  const fecha = hoy.toISOString().split('T')[0];
  tabla_maestra.unshift({ tipo, monto: parseFloat(monto), fecha, destinatario });
  guardarTabla();
}

function agregarDestinatario(nombre) {
  const nombreLimpio = nombre.trim();
  if (nombreLimpio && !destinatarios.includes(nombreLimpio)) {
    destinatarios.push(nombreLimpio);
    guardarDestinatarios();
    return true;
  }
  return false;
}

// --- FUNCIONES DE AUTENTICACIÓN ---
function verificarSesion() {
  return sessionStorage.getItem('wallet_auth') === 'true';
}

function iniciarSesion(usuario, password) {
  if (usuario === CREDENTIALS.usuario && password === CREDENTIALS.password) {
    sessionStorage.setItem('wallet_auth', 'true');
    return true;
  }
  return false;
}

function cerrarSesion() {
  sessionStorage.removeItem('wallet_auth');
  window.location.href = 'login.html';
}

// --- FUNCIÓN DE FORMATO ---
function formatMonto(monto) {
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(monto);
}

function formatFecha(fecha) {
  const [y, m, d] = fecha.split('-');
  return `${d}/${m}/${y}`;
}
