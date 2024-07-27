import axios from 'axios';

const API_URL = 'https://api.github.com';

export const searchUsers = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/search/users`, {
      params: { q: username, per_page: 5 },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

export const getUserRepos = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching repos for user ${username}:`, error);
    throw error;
  }
};
