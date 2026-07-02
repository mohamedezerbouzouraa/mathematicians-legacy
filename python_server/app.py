from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import google.generativeai as genai
from google.api_core.exceptions import ResourceExhausted

app = Flask(__name__)
CORS(app)
os.environ["GOOGLE_API_KEY"] = "xxxxxxxxxxxxxx"
genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
MODEL_NAME = "gemini-1.5-flash-latest"
SYSTEM_PROMPT = """
Tu es l'Assistant Mathématique IA du site "Héritage Mathématique".
Ton rôle est d'aider les utilisateurs à comprendre les concepts mathématiques,
les théorèmes (Gauss, Newton, Euler, etc.) et de résoudre des problèmes.
"""
model = genai.GenerativeModel(
    model_name=MODEL_NAME,
    system_instruction=SYSTEM_PROMPT
)
@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_input = data.get("message", "").strip()

    if not user_input:
        return jsonify({"reply": "Message vide reçu."}), 400
    chat_session = model.start_chat(history=[])
    response = chat_session.send_message(SYSTEM_PROMPT + "\nUtilisateur: " + user_input)
    return jsonify({"reply": response.text})
if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
