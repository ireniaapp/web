// chat.js
const history = document.getElementById('conversation-history');
const input = document.getElementById('text-input');
const sendBtn = document.getElementById('send-btn');
const voiceBtn = document.getElementById('voice-trigger');
const statusText = document.getElementById('status-text');

function appendMessage(role, text) {
    const msg = document.createElement('div');
    msg.className = `max-w-[80%] p-4 rounded-2xl ${role === 'user' ? 'bg-blue-600 text-white self-end' : 'bg-slate-800 text-slate-200 self-start'}`;
    msg.innerText = text;
    history.appendChild(msg);
    history.scrollTop = history.scrollHeight;
}

// Enviar texto
sendBtn.addEventListener('click', () => {
    if (!input.value.trim()) return;
    appendMessage('user', input.value);
    
    // Simulación de respuesta de Irenia
    setTimeout(() => {
        appendMessage('assistant', "Entendido. Estoy procesando tu información médica para darte un diagnóstico preciso.");
    }, 1000);
    
    input.value = '';
});

// Animación de Micrófono
let listening = false;
voiceBtn.addEventListener('click', () => {
    listening = !listening;
    if (listening) {
        voiceBtn.classList.add('orb-listening');
        statusText.innerText = "Escuchando voz...";
        statusText.classList.replace('text-blue-500', 'text-red-500');
    } else {
        voiceBtn.classList.remove('orb-listening');
        statusText.innerText = "Motor Listo";
        statusText.classList.replace('text-red-500', 'text-blue-500');
    }
});
