import React, { useState } from "react";
import CatCardCSS from "./CatCard.module.css";
import { Link } from "react-router-dom";
import { UPDATE_LIKE_CAT, UPDATE_UNLIKE_CAT } from "../../../api/queries";
import { useMutation } from "@apollo/client";

const CatCard = ({ children, ...props }) => {
  const [btnLike, setBtnLike] = useState(props.is_liked);

  const btnPressed = (btnLike) => {
    if (btnLike) {
      updateUnLikeCat({ variables: { id: parseInt(props.catId) } });
      console.log(updateUnLikeCat);
      setBtnLike(!btnLike);
    }
    if (!btnLike) {
      updateLikeCat({ variables: { id: parseInt(props.catId) } });
      console.log(updateUnLikeCat);
      setBtnLike(!btnLike);
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
            pathname: `/detail/${props.catId}`,
            catDetail: {
              id: props.catId,
              name: props.catName,
              age: props.age,
              image_url: props.image,
              is_liked: props.is_liked,
              description: props.description,
              background_color: props.catBackgroundColor,
              ownerName: props.ownerName,
              ownerPhone: props.ownerPhone,
              ownerEmail: props.ownerEmail,
              ownerAddress: props.ownerAddress
            }
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
            <svg
              onClick={() => {
                btnPressed(btnLike);
              }}
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18" cy="18" r="18" fill="white" />
              <path
                d="M25.3667 12.8417C24.9411 12.4158 24.4357 12.078 23.8795 11.8476C23.3233 11.6171 22.7271 11.4985 22.1251 11.4985C21.523 11.4985 20.9268 11.6171 20.3706 11.8476C19.8144 12.078 19.309 12.4158 18.8834 12.8417L18.0001 13.725L17.1167 12.8417C16.257 11.9819 15.0909 11.4989 13.8751 11.4989C12.6592 11.4989 11.4931 11.9819 10.6334 12.8417C9.77365 13.7014 9.29065 14.8675 9.29065 16.0833C9.29065 17.2992 9.77365 18.4653 10.6334 19.325L11.5167 20.2083L18.0001 26.6917L24.4834 20.2083L25.3667 19.325C25.7926 18.8994 26.1304 18.394 26.3608 17.8378C26.5913 17.2816 26.7099 16.6854 26.7099 16.0833C26.7099 15.4813 26.5913 14.8851 26.3608 14.3289C26.1304 13.7727 25.7926 13.2673 25.3667 12.8417Z"
                fill={btnLike ? "#F46D5C" : "none"}
                stroke="#F46D5C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatCard;
