const API_URL = "http://127.0.0.1:5000/chat";

document.getElementById('prompt').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();}});
async function sendMessage() {
    const input = document.getElementById("prompt");
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    const loadingId = "loading-" + Date.now();
    addMessage("L'IA réfléchit...", "bot", loadingId);

    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: text })
        });

        if (!res.ok) throw new Error("Erreur réseau");

        const data = await res.json();

        removeMessage(loadingId);
        addMessage(data.reply, "bot");

    } catch (e) {
        console.error("Erreur:", e);
        removeMessage(loadingId);
        addMessage("Désolé, impossible de contacter le serveur IA. Vérifiez que Flask est lancé sur le port 5000.", "bot");
    }
}
function addMessage(text, sender, id = null) {
    const messagesContainer = document.getElementById("messages");
    const msgDiv = document.createElement("div");

    msgDiv.className = "message " + sender;
    if (id) msgDiv.id = id;

    msgDiv.style.whiteSpace = "pre-wrap";
    msgDiv.innerText = text;

    messagesContainer.appendChild(msgDiv);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeMessage(id) {
    const element = document.getElementById(id);
    if (element) element.remove();
}
