import axios from "axios";


const api = axios.create({
    baseURL : 'http://127.0.0.1:4000/',
    // auth : {
    //     username : "mahmoudv2022",
    //     password: "Vcutten2022"
    // }
    
   
    
})

export default api