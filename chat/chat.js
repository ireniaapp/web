const chatForm = document.getElementById('chat-form');
const textInput = document.getElementById('text-input');
const history = document.getElementById('conversation-history');
const voiceTrigger = document.getElementById('voice-trigger');
const statusText = document.getElementById('status-text');

// Función para pintar mensajes
function addMsg(role, content) {
    const div = document.createElement('div');
    div.className = `p-4 rounded-2xl max-w-[80%] ${role === 'user' ? 'bg-blue-600 text-white self-end ml-auto' : 'bg-slate-800 text-slate-200 self-start'}`;
    div.innerText = content;
    history.appendChild(div);
    history.scrollTop = history.scrollHeight;
}

// Enviar mensaje
if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = textInput.value.trim();
        if (!text) return;

        addMsg('user', text);
        textInput.value = '';

        // Simulación de respuesta IA
        setTimeout(() => {
            addMsg('assistant', "Irenia Pro está analizando tu consulta... ¿Tienes algún síntoma adicional?");
        }, 1000);
    });
}

// Efecto de Micrófono
let isListening = false;
voiceTrigger.addEventListener('click', () => {
    isListening = !isListening;
    if (isListening) {
        voiceTrigger.classList.add('orb-listening');
        statusText.innerText = "Escuchando...";
    } else {
        voiceTrigger.classList.remove('orb-listening');
        statusText.innerText = "Motor Listo";
    }
});
