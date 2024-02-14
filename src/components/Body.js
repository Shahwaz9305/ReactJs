import Restaurant from "./Restaurant";
import resList from "../utils/mockData";
const Body =()=>{
    return (
        <div className="main-container">
            <div className="search">
                <h3>Search</h3>
            </div>
            <div className="restaurant-container">{
            resList.map((restaurant)=><Restaurant key={restaurant.data.id} resData={restaurant} />)
             }   
            </div>
        </div>
    );
}
export default Body;