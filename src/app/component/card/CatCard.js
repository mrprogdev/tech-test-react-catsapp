import React from "react";
import CatCardCSS from "./CatCard.module.css";
import { Link } from "react-router-dom";
import { UPDATE_LIKE_CAT, UPDATE_UNLIKE_CAT } from "../../../api/queries";
import { useMutation } from "@apollo/client";
import HeartCircleButton from "../../../svg/HeartCircleButton";

const CatCard = ({ children, ...props }) => {
  const btnPressed = (btnLike) => {
    if (btnLike) {
      updateUnLikeCat({ variables: { id: parseInt(props.catId) } });
    }
    if (!btnLike) {
      updateLikeCat({ variables: { id: parseInt(props.catId) } });
    }
  };

  const [updateLikeCat] = useMutation(UPDATE_LIKE_CAT);
  const [updateUnLikeCat] = useMutation(UPDATE_UNLIKE_CAT);

  return (
    <>
      <div
        className={CatCardCSS.catCard}
        style={{ backgroundColor: props.catBackgroundColor }}
      >
        <Link
          to={{
            pathname: `/detail/${props.catId}`
          }}
        >
          <div className={CatCardCSS.catPhotoContainer}>
            <img
              className={CatCardCSS.catPhoto}
              src={props.image}
              width="160px"
              height="140px"
              alt="cat"
            />
          </div>
        </Link>
        <div className={CatCardCSS.catInfoContainer}>
          <div className={CatCardCSS.leftCol}>
            <span className={CatCardCSS.catName}>{props.catName}</span>
            <span className={CatCardCSS.catOwner}>
              Owned by
              <br />
              {props.ownerName}
            </span>
          </div>
          <div className={CatCardCSS.rightCol}>
            <HeartCircleButton
              isLiked={props.is_liked}
              onClick={() => {
                btnPressed(props.is_liked);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CatCard;
