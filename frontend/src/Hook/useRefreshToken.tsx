import axios from "axios";
import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";

export default function useRefreshToken() {
    return (): Promise<LoginResponseInterface> => {
        return axios.get('http://localhost:8000/refresh-token.php', {
            withCredentials: true
        }).then(res => {
            console.log(res.data)
            return res.data
        })
    }
}
