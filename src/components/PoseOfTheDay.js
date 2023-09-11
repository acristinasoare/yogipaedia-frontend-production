import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/pose-of-the-day.scss";

const PoseOfTheDay = () => {
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    axios
      .get("https://yoga-api-nzy4.onrender.com/v1/poses")
      .then((response) => {
        const yogaPosesArray = response.data;
        const randomIndex = Math.floor(Math.random() * yogaPosesArray.length); //randomIndex is the index of a random object from yogaPosesArray
        setRandomImage(yogaPosesArray[randomIndex].url_png); //sets randomImage to the url of the random pose object
      });
  }, []);

  return (
    <div>
      <h2>Pose Of The Day</h2>
      <div>
        <img src={randomImage} alt="yoga pose of the day" />
      </div>
      <div>
        <p>
          Yoga is a holistic practice that originated in ancient India and
          encompases physical postures, breathing exercises, meditation, and
          ethical principles. It is a discipline aimed at promoting physical,
          mental, and spiritual well-being. Through the practice of yoga,
          individuals can improve flexibility, strength, and balance, while also
          reducing stress, enhancing mental clarity and fostering a sense of
          inner peace. Whether you are a beginner yogi or an aspiring yoga
          teacher, you can explore a variety of yoga poses by using the
          Yogipedia app.
        </p>
      </div>
    </div>
  );
};

export default PoseOfTheDay;
