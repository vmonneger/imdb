import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";
import axios from "axios";

export default function useRegister() {
    return (username: string, password: string): Promise<LoginResponseInterface> => {
        return axios({
            url: 'http://localhost:8000/register.php',
            method: 'post',
            withCredentials: true,
            data: new URLSearchParams({
                username: username,
                password: password
            })
        })
            .then(res => res.data)
    }
}
