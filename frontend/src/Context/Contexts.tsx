import React from "react"
import { createContext, useContext, useReducer } from 'react';
import useGetCookies from "../Hook/useGetCookies";

  const cookies = useGetCookies();

  let isLogin: boolean

  if (Object.keys(cookies).includes('hetic_token') && Object.keys(cookies).includes('hetic_username')) {
    isLogin = true
  } else {
    isLogin = false
  }
  
  
  // export const isLoginContext = React.createContext({
  //   isLogin: false,
  //   changeState: () => !isLogin
  // })
  // console.log('login context', isLogin)
// export const isLoginContext = React.createContext(false)


const LoginContext = createContext({});

const LoginDispatchContext = createContext({});

export function LoginProvider({ children }: any) {
  const [login, dispatch] = useReducer(
    reducer,
    initial
  );

  return (
    <LoginContext.Provider value={login}>
      <LoginDispatchContext.Provider value={dispatch}>
        {children}
      </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  );
}

export function useLogin() {
  return useContext(LoginContext);
}

export function useLoginDispatch() {
  return useContext(LoginDispatchContext);
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'logout': {
      return {
        isLogin: false
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initial = { isLogin }


console.log('initial dnas context', initial)