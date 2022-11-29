import axios from "axios";
const userAddApi = "http://localhost:8084/api/v1/user/add";
const userGetAllApi = "http://localhost:8084/api/v1/user/getAllUser";
class UserService{
    getAllUser(){
        return axios.get(userGetAllApi)
    }
    add(user){
        return axios.post(userAddApi, user);
    }
   


}
export default new UserService();