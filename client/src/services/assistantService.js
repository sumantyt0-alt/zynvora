import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Har request ke saath token apne aap bhejo
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const askAssistant = async (message) => {
  const res = await API.post("/assistant/chat", {
    message,
  });

  return res.data.reply;
};

export const streamAssistant = async (message, chatId, { onStart, onToken, onDone, onError }) => {
  const token = localStorage.getItem("token"); // wahi naam jo upar interceptor mein hai

  const res = await fetch(`${import.meta.env.VITE_API_URL}/assistant/chat/stream`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ message, chatId }),
  });

  if (!res.ok || !res.body) {
    onError?.(res.status === 401 ? "Pehle login karo" : "AI server error");
    return;
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const parts = buffer.split("\n\n");
    buffer = parts.pop();

    for (const part of parts) {
      if (!part.startsWith("data: ")) continue;
      const evt = JSON.parse(part.slice(6));

      if (evt.type === "start") onStart?.(evt.chatId);
      else if (evt.type === "token") onToken?.(evt.token);
      else if (evt.type === "done") onDone?.();
      else if (evt.type === "error") onError?.(evt.message);
    }
  }
};