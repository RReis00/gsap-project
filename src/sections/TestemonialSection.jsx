import { useRef } from "react";
import { cards } from "../constants";

const TestemonialSection = () => {
  const vdRef = useRef([]);

  const handlePlay = (index) => {
    const video = vdRef.current[index];
    console.log(video);
  };

  const handlePause = (index) => {
    const video = vdRef.current[index];
    console.log(video);
  };

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title">What's</h1>
        <h1 className="text-light-brown first-title">Everyone</h1>
        <h1 className="text-black first-title">Talking</h1>
      </div>

      <div className="pin-box">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card ${card.translation} ${card.rotation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              ref={(el) => (vdRef.current[index] = el)}
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestemonialSection;
