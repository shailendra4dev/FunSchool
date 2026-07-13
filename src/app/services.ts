// Environment Variables
const API_URL = import.meta.env.VITE_API_URL;

// Fetch Posts data from the API
export async function fetchPosts() {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}
