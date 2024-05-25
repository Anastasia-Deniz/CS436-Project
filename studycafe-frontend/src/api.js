import axios from 'axios';

const API_BASE_URL = 'http://35.238.106.160/api';

export const registerUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const addGoal = async (goal) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/goal/addGoal`, goal);
    return response.data;
  } catch (error) {
    console.error('Error adding goal:', error);
    throw error;
  }
};

export const getGoals = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/goal/getGoals`);
    return response.data;
  } catch (error) {
    console.error('Error fetching goals:', error);
    throw error;
  }
};

export const getUserGoals = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/getGoals?user_id=${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user goals:', error);
    throw error;
  }
};

export const deleteGoal = async (goalId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/goal/delete/${goalId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting goal:', error);
    throw error;
  }
};

export const completeGoal = async (goalId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/goal/complete/${goalId}`);
    return response.data;
  } catch (error) {
    console.error('Error completing goal:', error);
    throw error;
  }
};

export const getUserRewards = async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/user/getRewards?user_id=${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user rewards:', error);
      throw error;
    }
  };