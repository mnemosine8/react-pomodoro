
import axios from 'axios';
const api = axios.create({
    
   
    baseURL: "https://pomodoro-sb.herokuapp.com/"
});

export default api;
