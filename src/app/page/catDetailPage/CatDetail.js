import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CAT } from "../../../api/queries";
import { LoadingSplash } from "../splashPage/SplashScreen";
import CatDetailDetail from "./CatDetailDetail";

const CatDetail = (props) => {
  const { loading, error, data } = useQuery(GET_CAT, {
    variables: { id: parseInt(props.match.params.catId) }
  });

  if (loading) return <LoadingSplash />;
  if (error) return <p>error :(</p>;
  if (data) {
    return <CatDetailDetail data={data} />;
  }
};

export default CatDetail;
