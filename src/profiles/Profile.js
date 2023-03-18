import React from 'react'
import PropTypes from "prop-types"; 

const Profile=({fullname,profession,bio,handlename})=> {
    return (
    <>
    
    <h1 style={{ textAlign:"center",
        textTransform: "uppercase",
        fontFamily: 'Roboto Condensed',margin:"auto",}}> {fullname} </h1>
   
    <div> 
        <h2> <span>Bio:</span>{bio} 
       <p> Interests:Learning,Taking care of animals, Watching Moovies.</p></h2>
    </div>
    <div> 
        <h2> {profession}</h2>
        <button onClick={()=>handlename(`The UserName is ${fullname}`)} >know more</button>
    </div>
    
    </>
    )
}


Profile.defaultProps={fullname :"Angham ben amara"};
Profile.propTypes={ fullname :PropTypes.string,
                    profession :PropTypes.string,
                    bio:PropTypes.string,
                    handlename:PropTypes.func,
                };

export default Profile; 
