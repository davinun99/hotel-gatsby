import React from 'react'
import {graphql} from 'gatsby';
import GatsbyImage from 'gatsby-image';
import {css} from '@emotion/core';
import Layout from './layout';
export const query = graphql`
query($slug: String!){
    allDatoCmsHabitacion(filter:{slug:{eq:$slug}}){
      nodes{
        titulo
        contenido
        imagen{
          fluid(maxWidth:1200){
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`
//data de los props del componente utiliza directamente el query de mas arriba
const HabitacionTemplate = ({data: {allDatoCmsHabitacion:{ nodes }}}) => {
    const {titulo, contenido, imagen} =  nodes[0];
    return (
        <Layout>
          <main css={css`
            margin: 0 auto;
            max-width:1200px;
            width: 95%;
          `}>
            <h1 css={css`
              text-align:center;
              margin-top: 4rem;
            `}>{titulo}</h1>
            <p>{contenido}</p>
            <GatsbyImage fluid={imagen.fluid}/>
          </main>
        </Layout>
    )
}

export default HabitacionTemplate;
