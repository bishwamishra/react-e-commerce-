import FeaturedSection from "../components/FeaturedSection";
import "../pages/css/Homepage.css";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow.png";
import hero_image from "../../assets/hero_image.png";

const HomePage = () => {
  const showSection = ["NEW_ARRIVAL", "TOP_RATED", "RECOMMENDED", "TRENDING"];

  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hand-hand-icon">
              <p>new</p>
              <img src={hand_icon} alt="hand_icon" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="arrow_icon" />
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="hero_image" />
        </div>
      </div>
      <section>
        {showSection.map((item, index) => (
          <FeaturedSection key={index} featuredIn={item} />
        ))}
      </section>
    </>
  );
};

export default HomePage;
