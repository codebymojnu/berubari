import React from 'react';
import Beauty from '../Beauty/Beauty';
import ChairmenMessage from '../ChairmenMessage/ChairmenMessage';
import CricketPlayer from '../CricketPlayer/CricketPlayer';
import Header from "../Header/Header";
import HelpMe from '../HelpMe/HelpMe';
import NewsArea from '../NewsArea/NewsArea';
import SSCbarGraph from '../SSCbarGraph/SSCbarGraph';
import UniversityStudent from '../UniversityStudent/UniversityStudent';

const Home = () => {
    return (
       <>
            <Header/>
            <ChairmenMessage/>
            <UniversityStudent/>
            <NewsArea/>
            <Beauty/>
            <CricketPlayer/>
            <HelpMe/>
            <SSCbarGraph/>
       </>
    );
};

export default Home;