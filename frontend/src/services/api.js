const API_BASE_URL = "http://127.0.0.1:8000/api";

export async function sendContactStatus(name) {
  const response = await fetch(`${API_BASE_URL}/status`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_name: name,
    }),
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
}
