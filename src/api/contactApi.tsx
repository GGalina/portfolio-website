export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export async function sendContactForm(data: ContactFormData): Promise<void> {
  const response = await fetch(`${API_URL}/send-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }
}
