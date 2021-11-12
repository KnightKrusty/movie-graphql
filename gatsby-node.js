const path = require("path");

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      movieslist {
        movies {
          id
          medium_cover_image
        }
      }
    }
  `);

  data.movieslist.movies.forEach((node) => {
    actions.createPage({
      path: `/${node.id}`,
      component: path.resolve(`./src/pages/[id].js`),
      context: {
        id: node.id,
      },
    });
  });
};
