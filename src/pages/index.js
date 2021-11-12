import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

export const query = graphql`
  {
    movieslist {
      movies {
        id
        medium_cover_image
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const movies = data.movieslist.movies;

  console.log(movies);

  return (
    <>
      <div className="from-blue-300 to-purple-800 bg-gradient-to-r w-full h-96 ">
        <div className="container mx-auto">
          <h1 className="text-6xl text-gray-100 font-bold pt-24">
            Gatsby Graphql
          </h1>
        </div>
      </div>

      <div className="container mx-auto mt-10 flex flex-row flex-wrap items-center justify-center w-full h-96">
        {movies.map((m) => {
          return (
            <div className="mr-4 p-4" key={m.id}>
              <Link to={`/${m.id}`}>
                <div className="rounded-lg">
                  <img
                    className="rounded-lg shadow-md bg-cover bg-center h-full w-full"
                    src={m.medium_cover_image}
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default IndexPage;
