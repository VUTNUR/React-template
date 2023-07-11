import React from "react";
import A from "./components/Anchor"
import pic from "./download.jpg"
import H from "./components/H1"
 
const Details=()=>{
    return (
        <div>
            <nav className="navBar">
                <h1 style={{color:"white"}}>Nethaji Goud</h1>
                 <A value="Home"/>
                 <A value="About"/>
                 <A value="Contact"/>
                 <A value="Qualification"/>
                 <A value="Skills"/>
            </nav>
            <H value="About Me"/>
            <div style={{textAlign:"center"}}>
            <img src={pic} alt="Man" style={{borderRadius:"50%",width:"200px", height:"200px"}}></img>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur id sit vitae accusamus ipsam aut dolores labore a odit aliquid, eligendi suscipit culpa cupiditate corrupti, nobis, dolorem quisquam aspernatur ducimus?</p>
            <hr style={{color:"black"}}></hr>
            <div>
            <H value="Skills"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur id sit vitae accusamus ipsam aut dolores labore a odit aliquid, eligendi suscipit culpa cupiditate corrupti, nobis, dolorem quisquam aspernatur ducimus?</p>
            </div>
        </div>
    )
}

export default Details;
