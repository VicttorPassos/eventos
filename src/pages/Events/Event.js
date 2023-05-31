import { NavLink, useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import { EventContext } from "../../contexts/eventContext";
import { EventContainer, ImageContainer } from "./styles";

export function Event() {
    const { id } = useParams()
    const { events } = useContext(EventContext)
    
    const event = events.find(event => event.id === Number(id))
/* 
    async function mostrarUsuarios(){
        await fetch("http://localhost:80/api")
        .then(res => res.json())
        .then(data => console.log(data))
    }

    useEffect(() => {
        mostrarUsuarios()
    }, []) */
   
    if(!event){
        return (
            <>
                <NavLink to="/">Voltar para o inicio</NavLink>
                <h1>Evento não encontrado</h1>
            </>
        ) 
    }
    
    return (
        <EventContainer>
            <NavLink to="/">Voltar para o inicio</NavLink> {/* TAG A */}
            <h1>{event.name}</h1>
            <h1>{event.date}</h1>
            <ImageContainer
                size="20rem" 
                src={event.img} 
                alt={event.name}
                />
        </EventContainer>
    )
}
