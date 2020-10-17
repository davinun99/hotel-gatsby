import GatsbyImage from 'gatsby-image';
import React from 'react'
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {Link} from 'gatsby';

const Boton = styled(Link)`
    margin-top: 2rem;
    padding:1rem;
    background-color:rgba(44,62,80,.85);
    width:100%;
    color: #fff;
    display:block;
    text-decoration:none;
    text-transform:uppercase;
    font-weight:700;
    text-align:center;
`;

const HabitacionPreview = ({habitacion}) => {
    const {titulo, contenido, imagen, slug} = habitacion;
    return (
        <li css={css`
            border:1px solid #e1e1e1;
            margin-bottom: 2rem;
        `}>
            <GatsbyImage fluid={imagen.fluid}/>
            <div css={css`
                padding: 3rem;
            `}>
                <h3 css={css`
                    font-size:3rem;
                `}>{titulo}</h3>
                <p css={css`
                    text-align:justify;
                `}>{contenido}</p>
                <Boton to={slug}>
                    Ver habitacion
                </Boton>
            </div>
        </li>
    )
}

export default HabitacionPreview
