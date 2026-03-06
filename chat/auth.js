const SUPABASE_URL = 'https://ttymwhkhwwgljuguxeia.supabase.co';
const SUPABASE_KEY = 'TU_ANON_KEY_REAL'; // <-- REEMPLAZA ESTO
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// REGISTRO
const regForm = document.getElementById('register-form');
if (regForm) {
    regForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const phone = document.getElementById('phone').value;

        const { error } = await _supabase.auth.signUp({ 
            email, 
            password, 
            options: { data: { phone } } 
        });
        if (error) alert(error.message);
        else alert("Registro exitoso. Revisa tu email.");
    });
}

// LOGIN
const logForm = document.getElementById('login-form');
if (logForm) {
    logForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const { error } = await _supabase.auth.signInWithPassword({ email, password });
        if (error) alert(error.message);
        else window.location.href = "index.html";
    });
}

// LOGOUT
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
        await _supabase.auth.signOut();
        window.location.href = "login.html";
    });
}

// PROTECCIÓN DE RUTA
async function checkUser() {
    const { data: { session } } = await _supabase.auth.getSession();
    const path = window.location.pathname;
    if (!session && (path.includes('index.html') || path === '/')) {
        window.location.href = "login.html";
    }
}
checkUser();
