
import api from './axios'

const get_all = async () => {
   const res = await api.get('/products/')
    return res
}




export {get_all}

