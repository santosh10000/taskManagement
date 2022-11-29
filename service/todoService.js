import axios from 'axios';
const getRestApi = "http://localhost:8084/api/v1/getAll"
const saveRestApi = "http://localhost:8084/api/v1/add"
const getRestApiById = "http://localhost:8084/api/v1/getTask"

class TodoService{
    getAll(){
        return axios.get(getRestApi);
    }
    add(todo){
        return axios.post(saveRestApi, todo);
    }
    getTaskById(id){
        return axios.get(getRestApiById + '/' + id);

    }
    updateTask(id, todo){
        return axios.put(getRestApiById + '/'+ id, todo);
    }
    deleteTask(id){
        return axios.delete(getRestApiById + '/' + id);
    }

}
export default new TodoService();