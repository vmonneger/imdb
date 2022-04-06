import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import useLogin from "./Hook/useLogin";
import {BlogInterface, LoginResponseInterface} from "./Interface/ResponsesInterfaces";
import {LocalUserInterface} from "./Interface/LocalUserInterface";
import LoginForm from "./Component/LoginForm";
import HideIfLogged from "./Component/HideIfLogged";
import useRegister from "./Hook/useRegister";
import useGetBlogList from "./Hook/useGetBlogList";
import BlogList from "./Component/BlogList";
import HideIfNotLogged from "./Component/HideIfNotLogged";
import BlogForm from "./Component/BlogForm";

export default function App() {
    const [loggedUser, setLoggedUser] = useState<LoginResponseInterface>({
        status: 'error',
        token: "",
        username: ""
    })
    const [localUser, setLocalUser] = useState<LocalUserInterface>({password: "", username: ""})
    const [blogList, setBlogList] = useState<BlogInterface[]>([])
    const [needsLogin, setNeedsLogin] = useState<boolean>(true)
    const [needsUpdate, setNeedsUpdate] = useState<boolean>(false)

    const login = useLogin();
    const register = useRegister();
    const getBlogList = useGetBlogList();

    useEffect(() => {
        if (needsLogin) {
            login(localUser.username, localUser.password)
                .then(data => setLoggedUser(data))
        } else {
            register(localUser.username, localUser.password)
                .then(data => setLoggedUser(data))
        }
    }, [localUser])

    useEffect(() => {
        getBlogList()
            .then(data => {
                setBlogList(data)
                setNeedsUpdate(false)
            })
    }, [needsUpdate])

    return (
        <div className='container mt-5'>
            <HideIfLogged loggedUser={loggedUser}>
                <LoginForm setLocalUser={setLocalUser} needsLogin={needsLogin} setNeedsLogin={setNeedsLogin}/>
            </HideIfLogged>

            <HideIfNotLogged loggedUser={loggedUser}>
                <BlogForm loggedUser={loggedUser} setNeedsUpdate={setNeedsUpdate}/>
            </HideIfNotLogged>

            <BlogList blogList={blogList}/>
        </div>
    )
}
