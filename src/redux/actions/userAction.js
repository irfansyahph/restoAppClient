import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../../helper"

export const loginAction = (id) => {
    return async (dispatch) => {
        try {
            let res = await axios.get(`${API_URL}/users/id=${id}`)
            if (res.data.length > 0) {
                console.log("Data login iduser", res.data[0].id)
                await AsyncStorage.setItem("data", JSON.stringify(res.data[0]))
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: res.data[0]
                })
                return { success: true, message: "mantap" }
            } else {
                console.log(message = "gagal")
            }
        } catch (error) {
            console.log(error, message = "ini eror")
        }
    }
}