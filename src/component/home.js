import React from "react";
import Webcam from "react-webcam";
const Home = () => {

    const tocuh = () => {
        alert('You are hacked ..!!')
    }

    return (

        <Webcam
            onClick={tocuh}
            audio={false}
            height={'100%'}
            screenshotFormat="image/jpeg"
            width={'100%'}
        >
        </Webcam>

    );
};

export default Home;