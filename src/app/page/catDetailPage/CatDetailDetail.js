import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import CatDetailCSS from "./CatDetail.module.css";
import { useMutation } from "@apollo/client";
import { UPDATE_LIKE_CAT, UPDATE_UNLIKE_CAT } from "../../../api/queries";
import CatLikedButton from "../../../svg/CatLikedButton";
import CatLikeButton from "../../../svg/CatLikeButton";
import CloseCircleButton from "../../../svg/CloseCircleButton";

const CatDetailDetail = (props) => {
  const cat = useMemo(() => {
    return props.data.fetchCat;
  }, [props.data.fetchCat]);

  const [updateLikeCat] = useMutation(UPDATE_LIKE_CAT);
  const [updateUnLikeCat] = useMutation(UPDATE_UNLIKE_CAT);

  const likeButtonAction = (status) => {
    if (status) {
      updateUnLikeCat({
        variables: { id: parseInt(cat.id) }
      });
    }
    if (!status) {
      updateLikeCat({
        variables: { id: parseInt(cat.id) }
      });
    }
  };

  return (
    <div
      className={CatDetailCSS.container}
      style={{
        backgroundColor: cat.background_color,
        height: "100vh"
      }}
    >
      <div>
        <img
          style={{ height: "330px", width: "100%", objectFit: "cover" }}
          src={cat.image_url}
          alt="Italian Trulli"
        />
        <Link to={{ pathname: "/", state: { dataLoaded: true } }}>
          <CloseCircleButton className={CatDetailCSS.closeIcon} />
        </Link>
      </div>

      <div className={CatDetailCSS.catDetailContainer}>
        <div className={CatDetailCSS.nameAgeContainer}>
          <span className={CatDetailCSS.name}>{cat.name}</span>
          <span className={CatDetailCSS.age}>{cat.age} years old</span>
        </div>
        <div
          style={{ marginTop: "10px" }}
          onClick={() => likeButtonAction(cat.is_liked)}
        >
          {cat.is_liked ? (
            <CatLikedButton rectangleFill={"#F46D5C"} />
          ) : (
            <CatLikeButton rectangleFill={"white"} />
          )}
        </div>
      </div>

      <div className={CatDetailCSS.catBioContainer}>
        <div className={CatDetailCSS.catBio}>
          <span>{cat.description}</span>
        </div>
      </div>
      <div className={CatDetailCSS.ownerBioContainer}>
        <span className={CatDetailCSS.ownerName}>
          Owned By {cat.owner[0].name}
        </span>
        <div className={CatDetailCSS.ownerBio}>
          <div className={CatDetailCSS.bioCol1}>
            <span>Phone</span>
            <span>Email</span>
            <span>Location</span>
          </div>
          <div className={CatDetailCSS.bioCol2}>
            <span className={CatDetailCSS.altFont}>{cat.owner[0].phone}</span>
            <span className={CatDetailCSS.altFont}>{cat.owner[0].email}</span>
            <span className={CatDetailCSS.altFont}>{cat.owner[0].address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatDetailDetail;
