import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginProvider } from './Context/Contexts'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { HomePage } from "./Pages/HomePage"
import { AuthPage } from "./Pages/AuthPage"
import { MoviePage } from "./Pages/MoviePage"
import Navbar from "./Component/Navbar"


export default function App() {

    return (
        <BrowserRouter>
            <LoginProvider>
                <Navbar />
                <div className='container mt-5'>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="auth" element={<AuthPage />} />
                        <Route path="movie/:id" element={<MoviePage />} />
                    </Routes>
                </div>
            </LoginProvider>
        </BrowserRouter>
    )
}
