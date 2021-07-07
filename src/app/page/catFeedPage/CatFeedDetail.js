import React, { useState, useMemo } from "react";
import CatCard from "../../component/card/CatCard";
import CatFeedCSS from "./CatFeed.module.css";
import { Grid, Container } from "@material-ui/core";

const CatFeedDetail = (props) => {
  console.log(props);

  const [isLiked, setIsLiked] = useState(false);
  const cats = useMemo(() => {
    if (isLiked) {
      return props.data.fetchCats.filter((item) => item.is_liked === isLiked);
    } else {
      return props.data.fetchCats;
    }
  }, [isLiked]);

  return (
    <Container>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <p className={`${CatFeedCSS.defaultFont} ${CatFeedCSS.feedHeader}`}>
              Catsat
            </p>
          </Grid>
          <Grid item xs={12}>
            <p
              className={`${CatFeedCSS.defaultFont} ${CatFeedCSS.feedSubtitle}`}
            >
              Look after cute cats
              <br /> for strangers for free.
            </p>
          </Grid>

          <Grid
            style={{ marginTop: "35px", marginLeft: "10px" }}
            container
            alignContent="space-between"
          >
            <Grid item xs={6}>
              <button
                className={CatFeedCSS.activeBtn}
                className={isLiked ? CatFeedCSS.button1 : CatFeedCSS.orange}
                onClick={() => setIsLiked(false)}
              >
                All cats
              </button>
            </Grid>
            <Grid item xs={6}>
              <button
                className={CatFeedCSS.activeBtn}
                className={isLiked ? CatFeedCSS.orange : CatFeedCSS.button2}
                onClick={() => setIsLiked(true)}
              >
                Liked
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Grid style={{ marginTop: "25px" }} container spacing={2}>
        {cats.map(
          ({
            id,
            name,
            age,
            description,
            is_liked,
            image_url,
            owner,
            background_color
          }) => (
            <Grid key={id} item xs={6}>
              <CatCard
                key={id}
                catId={id}
                image={image_url}
                age={age}
                is_liked={is_liked}
                description={description}
                catName={name}
                catBackgroundColor={background_color}
                ownerName={owner[0].name}
                ownerPhone={owner[0].phone}
                ownerEmail={owner[0].email}
                ownerAddress={owner[0].address}
              ></CatCard>
            </Grid>
          )
        )}
      </Grid>
    </Container>
  );
};

export default CatFeedDetail;
