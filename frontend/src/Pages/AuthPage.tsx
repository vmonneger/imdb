import {useContext} from "react";
import LoginForm from "../Component/LoginForm";
import HideIfLogged from "../Component/HideIfLogged";
import HideIfNotLogged from "../Component/HideIfNotLogged";
import { LoginResponseInterface } from "../Interface/ResponsesInterfaces";
import {LocalUserInterface} from "../Interface/LocalUserInterface";
import {useEffect, useState} from "react";
import useLogin from "../Hook/useLogin";
import { useIsLogin } from "../Hook/useIsLogin";
import useGetCookies from "../Hook/useGetCookies";
import useEraseCookie from "../Hook/useEraseCookie";
import useRegister from "../Hook/useRegister";

export const AuthPage = () => {
  const [loggedUser, setLoggedUser] = useState<LoginResponseInterface>({
    status: 'error',
    token: "",
    username: ""
  })

  const [localUser, setLocalUser] = useState<LocalUserInterface>({password: "", username: ""})
  const [needsLogin, setNeedsLogin] = useState<boolean>(true)

  const login = useLogin();
  const register = useRegister();
  const cookies = useGetCookies();
  const eraseCookie = useEraseCookie();
//   const isLogin = useIsLogin()


  useEffect(() => {
      if (Object.keys(cookies).includes('hetic_token') && Object.keys(cookies).includes('hetic_username')) {
          console.log('got cookies !', loggedUser)
          setLoggedUser(prev => ({
              ...prev,
              username: cookies.hetic_username,
              token: cookies.hetic_token
          }))
      }
  }, [])

  useEffect(() => {
      if (needsLogin && localUser.username !== '') {
          console.log('login ?')
          login(localUser.username, localUser.password)
              .then(data => setLoggedUser(data))
      } else if (!needsLogin && localUser.username !== '') {
          console.log('register ?', localUser.username)
          register(localUser.username, localUser.password)
              .then(data => setLoggedUser(data))
      }
  }, [localUser])

  const handleDisconnect = () => {
      setLoggedUser({
          status: 'error',
          token: "",
          username: ""
      });
      eraseCookie();
  }

  return (
    <>
        <HideIfLogged loggedUser={loggedUser}>
            <LoginForm setLocalUser={setLocalUser} needsLogin={needsLogin} setNeedsLogin={setNeedsLogin}/>
        </HideIfLogged>
        <HideIfNotLogged loggedUser={loggedUser}>
            <button className='btn btn-danger d-block mx-auto mb-3' onClick={handleDisconnect}>Disconnect</button>
        </HideIfNotLogged>
    </>
  )
}