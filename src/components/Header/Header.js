import "./Header.css"
import eventIco from "../../assets/evento.png"

export function Header(){
    return (
        <header>
            <div>
                <h1>Sympla</h1>
                <img src={eventIco} alt=""/>
            </div>

            <div>
                <a href="#">Acesse sua conta</a>
                <a href="#">Eventos</a>
                <a href="#">Crie seu evento</a>
            </div>
        </header>
    )
}