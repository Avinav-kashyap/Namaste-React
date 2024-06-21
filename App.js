import React from "react";
import ReactDOM from "react-dom/client"


const TitleHeading =()=> (
<h1 id="heading">
namste avinav
</h1>);


const HeadingComponent = ()=>{
    return <div>
      <TitleHeading />
      <h1>this is avi</h1>
      </div>;
}
 
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);