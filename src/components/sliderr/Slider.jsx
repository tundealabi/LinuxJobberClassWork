import './slider.css';
// import Slider from '@mui/material/Slider';

const Sliderr = (props) => {
  const { min, max, step, value, title, onChangeValue } = props;

  const handleChange = () => (e) => {
    onChangeValue(e);
  };

  return (
    <div className="slider-container">
      <div className="slider-desc">
        <p className="slider-title">{title} </p>
        <span
          style={{
            color: '#002851',
          }}
        >
          {value}/{max}
        </span>
      </div>
      <div>
        <input
          className="sliderInput"
          type="range"
          name={title}
          max={max}
          min={min}
          step={step}
          value={value}
          id="paul"
          onChange={handleChange(max)}
        />
      </div>
    </div>
  );
};

export default Sliderr;
