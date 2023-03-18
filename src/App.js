import React from "react";
import './App.css';
import Profile from './profiles/Profile';


function App() { 
  const handlename = (fullname) => {
  alert(`${fullname}`);
};
return (
  <>
   <Profile
          fullname={"angham ben amara"}

         bio = {` -- fullname : angham ben amara
          -- Age : 23 years old
          -- Gender : Female 
          `}
              

          profession={"I am a biologist and  a student at GO My Code Academy, looking for a new experience"}
          handlename={handlename}>

          </Profile>
  

   

    
    </>
   
  );
}

export default App;




