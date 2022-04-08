import {useState} from "react";
import {CookieInterface} from "../Interface/CookieInterface";

export default function useGetCookies(): CookieInterface {
    let cookies: object = {};

    const cookiesAsString = document.cookie.split('; ');
    // console.log(cookiesAsString);

    cookiesAsString.map(cookie => {
        let vals = cookie.split('=');
        cookies = {
            ...cookies,
            [vals[0]]: vals[1]
        };
    });

    return cookies as CookieInterface;
}
