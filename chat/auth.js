// Configuración de Supabase
const SUPABASE_URL = 'https://ttymwhkhwwgljuguxeia.supabase.co';
const SUPABASE_KEY = 'TU_ANON_KEY_AQUI'; // USA TU ANON KEY REAL DEL DASHBOARD
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Registro de usuarios
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const { data, error } = await _supabase.auth.signUp({ email, password });

        if (error) alert("Error: " + error.message);
        else alert("¡Registro exitoso! Revisa tu correo.");
    });
}

// Cerrar sesión
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
        await _supabase.auth.signOut();
        window.location.href = "login.html";
    });
}

// Protección de rutas: Si no hay sesión, volver al login
async function checkSession() {
    const { data: { session } } = await _supabase.auth.getSession();
    const isIndex = window.location.pathname.includes('index.html') || window.location.pathname === '/';
    
    if (!session && isIndex) {
        window.location.href = "login.html";
    }
}
checkSession();
