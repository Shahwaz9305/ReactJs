const Restaurant=(props)=>{
    const { resData } = props;

const {
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  costForTwo,
  deliveryTime,
} = resData?.data;
    return(
        <div className="card">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="img" />
            <h3>{name}</h3>
            <h3>{cuisines}</h3>
            <h3>{avgRating}*</h3>
            <h3>{deliveryTime}</h3>
        </div>
    );
}
export default Restaurant;