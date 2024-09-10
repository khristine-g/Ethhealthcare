import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Home.css";

const Home = () =>{

    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/getstarted');
      };
    

return(
<div >  

    <div className='home-container'>

    <h2 className="home-title">Hero</h2>
            <p className="home-paragraph">
              Get to know how this works
            </p>
            <button className="getstarted-button" onClick={handleGetStartedClick}>Get Started</button>



</div>
</div>



)



}
export default Home;