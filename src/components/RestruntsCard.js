import { IMG_CDN_URL } from "../utils/constants";
const RestruntCard = ({
    name,
    avgRatingString,
    cuisines,
    cloudinaryImageId
}) => {
  return (
    <div className="restrunts-card">
      <img className="card-img" src={IMG_CDN_URL+cloudinaryImageId} />
      <div className="card-title">
      <h4>{name}</h4>
      <h5>{avgRatingString}</h5>
      <h5>{cuisines}</h5>
      </div>
    </div>
  );
};

export default RestruntCard;