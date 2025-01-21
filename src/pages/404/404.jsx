import { NavLink } from "react-router-dom"
import "./ErrorPage.scss"

function Error () {
    return (
    <main className="errorPage">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n’existe pas.</h2>
        <NavLink className="link" to ="/">Retourner sur la page d’accueil</NavLink>
    </main>
    )
}

export default Error