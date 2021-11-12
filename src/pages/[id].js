import * as React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query getMovie($id: Int!) {
    movieslist {
      moviedetail(id: $id) {
        id
        language
        medium_cover_image
        rating
        title
        description_full
      }
    }
  }
`;

const Detail = ({ id, data }) => {
  console.log(data.movieslist.moviedetail);
  return (
    <div className="from-blue-300 to-purple-800 bg-gradient-to-r w-full h-screen ">
      <div className="container mx-auto">
        <h1 className="text-6xl text-gray-100 font-bold pt-24">
          {data.movieslist.moviedetail.title}
        </h1>
        <p>{data.movieslist.moviedetail.description_full} </p>
        <img src={data.movieslist.moviedetail.medium_cover_image} />
      </div>
    </div>
  );
};

export default Detail;
