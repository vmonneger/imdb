import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";

interface HideIfNotLoggedPropsInterface {
    loggedUser: LoginResponseInterface,
    children: JSX.Element
}

export default function HideIfNotLogged({loggedUser, children}: HideIfNotLoggedPropsInterface) {
    if (!loggedUser.token) {
        return <></>
    }
    return children
}
