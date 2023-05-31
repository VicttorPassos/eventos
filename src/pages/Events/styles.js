import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ImageContainer = styled.img`
    width: ${(props) => props.size ?? "10rem"};
    heigth: 10rem;
    margin-inline: 2rem;
    transition: 0.2s;

    &:hover{
        transform: scale(1.15)
    }
`

export const EventContainer = styled.div`
    background-color: ${(props) => props.theme.white};

    a {
        text-decoration: none
    }
`

export const NavContainer = styled(NavLink)`
`
