import axios from 'axios'
import config from '../config/config'

const get = async () => {
    try {
        const result = await axios.get(`${config.domain}/products`)
        // console.log('result api')
        // console.log(result)
        return result.data
    } catch (error) {
        console.log('error api')
        console.log(error)
        return await error.message
    }
}

export default { get }