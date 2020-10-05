import React from 'react';
import {graphql, useStaticQuery} from gatsby;
const ImagenHotel = () => {
    `query {
        allFile(filter:{sourceInstanceName:{eq: "images"}}){
          nodes{
            relativePath
            childImageSharp{
              fluid{
                src
              }
            }
          }
        }
      }`
    return (
        <p>Test</p>
    )
}

export default ImagenHotel
