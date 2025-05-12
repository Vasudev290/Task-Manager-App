import axios from "axios";
const API_URL = 'http://localhost:6969/api/tasks';

const fetchTasks = (filter = "all") => {
  return axios.get(`${API_URL}?filter=${filter}`);
};
const addTask = (task) => {
  return axios.post(API_URL, task);
};
const updateTasks = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};
const deleteTasks = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};


export { fetchTasks, addTask, updateTasks, deleteTasks }