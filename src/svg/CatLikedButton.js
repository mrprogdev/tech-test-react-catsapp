import React from "react";

const CatLikedButton = ({ rectangleFill }) => {
  return (
    <svg
      width="112"
      height="36"
      viewBox="0 0 112 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill="white" />
      <rect width="112" height="36" rx="18" fill={rectangleFill} />
      <path
        d="M38.3666 12.8417C37.941 12.4158 37.4356 12.078 36.8794 11.8476C36.3232 11.6171 35.727 11.4985 35.1249 11.4985C34.5229 11.4985 33.9267 11.6171 33.3705 11.8476C32.8143 12.078 32.3089 12.4158 31.8833 12.8417L30.9999 13.725L30.1166 12.8417C29.2569 11.9819 28.0908 11.4989 26.8749 11.4989C25.6591 11.4989 24.493 11.9819 23.6333 12.8417C22.7735 13.7014 22.2905 14.8675 22.2905 16.0833C22.2905 17.2992 22.7735 18.4653 23.6333 19.325L24.5166 20.2083L30.9999 26.6917L37.4833 20.2083L38.3666 19.325C38.7924 18.8994 39.1302 18.394 39.3607 17.8378C39.5912 17.2816 39.7098 16.6854 39.7098 16.0833C39.7098 15.4813 39.5912 14.8851 39.3607 14.3289C39.1302 13.7727 38.7924 13.2673 38.3666 12.8417Z"
        fill="white"
      />
      <path
        d="M47.9414 23V11.672H50.6934V20.616H55.0774V23H47.9414ZM59.0673 12.488C59.0673 12.6907 59.0246 12.8827 58.9393 13.064C58.8646 13.2347 58.758 13.384 58.6193 13.512C58.4913 13.64 58.3313 13.7413 58.1393 13.816C57.958 13.8907 57.766 13.928 57.5633 13.928C57.1366 13.928 56.7793 13.7893 56.4913 13.512C56.2033 13.224 56.0593 12.8827 56.0593 12.488C56.0593 12.296 56.0966 12.1147 56.1713 11.944C56.246 11.7627 56.3526 11.608 56.4913 11.48C56.63 11.352 56.79 11.2507 56.9713 11.176C57.1526 11.0907 57.35 11.048 57.5633 11.048C57.766 11.048 57.958 11.0853 58.1393 11.16C58.3313 11.2347 58.4913 11.336 58.6193 11.464C58.758 11.592 58.8646 11.7467 58.9393 11.928C59.0246 12.0987 59.0673 12.2853 59.0673 12.488ZM56.2513 23V15.032H58.8753V23H56.2513ZM69.5137 23H66.2657L63.6577 19.176H63.6097V23H60.9697V10.904H63.6097V18.264H63.6577L66.2017 15.032H69.3857L66.3137 18.632L69.5137 23ZM75.6761 18.104C75.6761 17.688 75.5427 17.3307 75.2761 17.032C75.0201 16.7333 74.6307 16.584 74.1081 16.584C73.8521 16.584 73.6174 16.6267 73.4041 16.712C73.1907 16.7867 73.0041 16.8933 72.8441 17.032C72.6841 17.1707 72.5561 17.336 72.4601 17.528C72.3641 17.7093 72.3107 17.9013 72.3001 18.104H75.6761ZM78.0921 19.112C78.0921 19.2187 78.0921 19.3253 78.0921 19.432C78.0921 19.5387 78.0867 19.64 78.0761 19.736H72.3001C72.3214 19.96 72.3854 20.1627 72.4921 20.344C72.6094 20.5253 72.7534 20.6853 72.9241 20.824C73.1054 20.952 73.3027 21.0533 73.5161 21.128C73.7401 21.2027 73.9694 21.24 74.2041 21.24C74.6201 21.24 74.9721 21.1653 75.2601 21.016C75.5481 20.856 75.7827 20.6533 75.9641 20.408L77.7881 21.56C77.4147 22.104 76.9187 22.5253 76.3001 22.824C75.6921 23.112 74.9827 23.256 74.1721 23.256C73.5747 23.256 73.0094 23.1653 72.4761 22.984C71.9427 22.792 71.4734 22.52 71.0681 22.168C70.6734 21.8053 70.3587 21.3627 70.1241 20.84C69.9001 20.3173 69.7881 19.72 69.7881 19.048C69.7881 18.3973 69.9001 17.8107 70.1241 17.288C70.3481 16.7547 70.6521 16.3067 71.0361 15.944C71.4201 15.5707 71.8734 15.2827 72.3961 15.08C72.9187 14.8773 73.4841 14.776 74.0921 14.776C74.6787 14.776 75.2174 14.8773 75.7081 15.08C76.1987 15.272 76.6201 15.5547 76.9721 15.928C77.3241 16.3013 77.5961 16.7547 77.7881 17.288C77.9907 17.8213 78.0921 18.4293 78.0921 19.112ZM85.7513 23V21.96H85.7193C85.4633 22.3653 85.0953 22.68 84.6153 22.904C84.146 23.1173 83.6446 23.224 83.1113 23.224C82.514 23.224 81.9806 23.1067 81.5113 22.872C81.042 22.6373 80.642 22.328 80.3113 21.944C79.9913 21.5493 79.746 21.096 79.5753 20.584C79.4046 20.072 79.3193 19.5387 79.3193 18.984C79.3193 18.4293 79.4046 17.9013 79.5753 17.4C79.7566 16.888 80.0073 16.44 80.3273 16.056C80.658 15.672 81.0526 15.368 81.5113 15.144C81.9806 14.92 82.5033 14.808 83.0793 14.808C83.666 14.808 84.162 14.92 84.5673 15.144C84.9726 15.368 85.2873 15.6133 85.5113 15.88H85.5433V10.904H88.1673V23H85.7513ZM85.6553 19C85.6553 18.744 85.6073 18.4933 85.5113 18.248C85.426 18.0027 85.298 17.784 85.1273 17.592C84.9673 17.4 84.77 17.2453 84.5353 17.128C84.3006 17.0107 84.034 16.952 83.7353 16.952C83.426 16.952 83.154 17.0107 82.9193 17.128C82.6846 17.2453 82.4873 17.4 82.3273 17.592C82.1673 17.7733 82.0446 17.9867 81.9593 18.232C81.8846 18.4773 81.8473 18.728 81.8473 18.984C81.8473 19.24 81.8846 19.496 81.9593 19.752C82.0446 19.9973 82.1673 20.216 82.3273 20.408C82.4873 20.6 82.6846 20.7547 82.9193 20.872C83.154 20.9893 83.426 21.048 83.7353 21.048C84.034 21.048 84.3006 20.9893 84.5353 20.872C84.77 20.7547 84.9673 20.6 85.1273 20.408C85.298 20.216 85.426 19.9973 85.5113 19.752C85.6073 19.5067 85.6553 19.256 85.6553 19Z"
        fill="white"
      />
    </svg>
  );
};

export default CatLikedButton;
