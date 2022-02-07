import React from "react";

import pictureWithCat from "../../static/assets/images/1.jpg";
import pictureWithCascade from "../../static/assets/images/3.jpg";

const AboutPage = (props) => {
    return (
        <div className="about-wrapper">
            <div className="content-wrapper">
                <p>
                    <img src={pictureWithCat} alt="Me!" />
                    Tara Richardson is a recent graduate of Bottega University with several years of
                    coding experience under her belt in a mix of Java, Python, and Javascript. She
                    is currently making the move from hobbyist to professional.
                </p>
                <p>
                    <img src={pictureWithCascade} alt="Me and Cascade the water snake" />
                    She is currently employed by her local Department of Parks & Recreation, where
                    she leads archery classes and educates the public about local wildlife.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
