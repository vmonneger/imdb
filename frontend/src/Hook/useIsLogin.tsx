import useGetCookies from "./useGetCookies";
import {useEffect} from 'react'

export const useIsLogin = () => {
  const cookies = useGetCookies();
  
  if (Object.keys(cookies).includes('hetic_token') && Object.keys(cookies).includes('hetic_username')) {
    return true
  } else {
    return false
  }
}