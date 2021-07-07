import React from "react";
import { useQuery } from "@apollo/client";
import { LoadingSplash } from "../splashPage/SplashScreen";
import CatFeedDetail from "./CatFeedDetail";
import { GET_ALL_CATS } from "../../../api/queries";

const CatFeed = () => {
  const { loading, error, data } = useQuery(GET_ALL_CATS);

  if (loading) return <LoadingSplash />;
  if (error) return <p>error :(</p>;
  if (data) {
    return <CatFeedDetail data={data} />;
  }
};

export default CatFeed;
