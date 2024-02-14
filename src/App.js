import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
// React Element 
// const heading = (<h1>Namaste react using JSX 🚀</h1>); 

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// React Functional component 
// const HeadingComponent =()=>{
//     return( 
//     <div>
//         <h1>Namaste react Functional component 🚀</h1>
//     </div>
//     );
// } 

// other way of writing Functional component 

// const HeadingComponent =()=> <h1>Namaste react Functional component 🚀</h1>;

const AppLayout =()=>{
    return (
    <div className="app">
        <Header />
        <Body />
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);