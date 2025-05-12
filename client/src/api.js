import axios from "axios";
const API_URL = 'http://localhost:6969/api/tasks';

const fetchTasks = (filter) => axios.get(`${API_URL}?filter=${filter}`)
const addTask = (task) => axios.post(API_URL, task);
const updateTasks = (id, data) => axios.put(`${API_URL}/${id}`, data)
const deleteTasks = (id) => axios.delete(`${API_URL}/${id}`)


export { fetchTasks, addTask, updateTasks, deleteTasks }