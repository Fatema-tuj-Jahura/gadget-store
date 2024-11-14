import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";
import { Helmet } from 'react-helmet-async';



const Home = () => {
    return (
        <div>
          <Helmet>
          <title>Home - Gadget Heaven</title>
         </Helmet>  
        <Banner></Banner>
        <Gadgets></Gadgets>
        </div>
    );
};

export default Home;