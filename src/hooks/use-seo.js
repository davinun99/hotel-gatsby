import {graphql, useStaticQuery} from "gatsby";

const useSeo = ()=>{
    const resultados = useStaticQuery(graphql`
    query{
        datoCmsSite{
            globalSeo{
                siteName,
                titleSuffix,
                fallbackSeo{
                    title,
                    description
                }
            }
        }
    }`);
    return resultados.datoCmsSite.globalSeo;
}

export default useSeo;