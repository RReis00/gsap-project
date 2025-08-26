import { flavorlists } from "../constants";

const FlavorSlider = () => {
  return (
    <div className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => {
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          ></div>;
        })}
      </div>
    </div>
  );
};

export default FlavorSlider;
