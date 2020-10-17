/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({actions, graphql, reporter}) => {
    const resultado = await graphql(`
    query{
        allDatoCmsHabitacion{
            nodes{
                slug
            }
        }
    }`);
    //console.log(resultado.data.allDatoCmsHabitacion.nodes);
    if(resultado.errors){
        reporter.panic('No hubo resultados', resultado.errors);
    }
    //si hay paginas crear los archivos
    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;
    habitaciones.forEach(habitacion => {
        //actions de gatsby ya tiene el metodo para crear las paginas dinamicas (createPage)
        actions.createPage({
            path: habitacion.slug,
            component: require.resolve('./src/components/habitaciones.jsx'),
            context: {
                slug: habitacion.slug
            }
        });
    });
}