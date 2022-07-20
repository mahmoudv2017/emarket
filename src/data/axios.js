import axios from "axios";


const api = axios.create({
    baseURL : 'http://127.0.0.1:8000/api/',
    // auth : {
    //     username : "mahmoudv2022",
    //     password: "Vcutten2022"
    // }
    
    withCredentials : false

})



export default api