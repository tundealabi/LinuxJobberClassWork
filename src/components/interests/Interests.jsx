import './interest.css'
import checked from '../../assets/checked.svg'
import Sliderr from '../sliderr/Slider';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import rangeData from '../../static/rangeData';

const Interests = () => {
  const [ rangeValue, setRangeValue ] = useState(0)
  const [ rangeValue1, setRangeValue1 ] = useState(0)
  const [ rangeValue2, setRangeValue2 ] = useState(0)
  const [ rangeValue3, setRangeValue3 ] = useState(0)
  const [ rangeValue4, setRangeValue4 ] = useState(0)
  const [ rangeValue5, setRangeValue5 ] = useState(0)
  const [ rangeValue6, setRangeValue6 ] = useState(0)
  const [ rangeValue7, setRangeValue7 ] = useState(0)
  const [ equal, setEqual ] = useState(true)

  const onSliderChange = (e , newValue) => {
     setRangeValue(parseInt(e.target.value))
     newValue = parseInt(e.target.value)
       if (newValue === rangeValue1|| rangeValue2 || rangeValue3 || rangeValue4 || rangeValue5|| rangeValue6 || rangeValue7){
        setEqual(false)
        console.log(equal)
       } else {
        setEqual(true)
       }
   }
   const onSliderChange1 = (e, newValue) => {
     setRangeValue1(parseInt(e.target.value))
   }
   const onSliderChange2 = (e, newValue) => {
     setRangeValue2(parseInt(e.target.value))
   }
   const onSliderChange3 = (e, newValue) => {
     setRangeValue3(parseInt(e.target.value))
   }
   const onSliderChange4 = (e, newValue) => {
     setRangeValue4(parseInt(e.target.value))
   }
   const onSliderChange5 = (e, newValue) => {
     setRangeValue5(parseInt(e.target.value))
   }

   const onSliderChange6 = (e, newValue) => {
     setRangeValue6(parseInt(e.target.value))
   }
   const onSliderChange7 = (e, newValue) => {
     setRangeValue7(parseInt(e.target.value))
   }
  

  return (
    <div className="interest">
      <div className="profile-checked topcheck">
        <img src={checked} alt="a" className="ccc " />
      </div>
      <div className="sub-interst">
        <p className="int-txt">Score your level of interest in these job titles:</p>
        <div className="slider-range-container">
        <Sliderr
            title = {'Cyber Security'}
            min = {1}
            max = {10}
            step = {1}
            value = {rangeValue}
            onChangeValue = {onSliderChange}
          />
          <Sliderr
            title = {'Project Manager'}
            min = {1}
            max = {10}
            step = {1}
            value = {rangeValue1}
            onChangeValue = {onSliderChange1}
          />
          <Sliderr
            title = {'Developer'}
            min = {1}
            max = {10}
            step = {1}
            value = {rangeValue2}
            onChangeValue = {onSliderChange2}
          />
          <Sliderr
            title = {'Product Manager'}
            min = {1}
            max = {10}
            step = {1}
            value = {rangeValue3}
            onChangeValue = {onSliderChange3}
          />
          <Sliderr
            title = {'DevOps'}
            min = {1}
            max = {10}
            step = {1}
            value = {rangeValue4}
            onChangeValue = {onSliderChange4}
          />
          <Sliderr
            title = {'Marketer'}
            min = {1}
            max = {10}
            step = {1}
            value = {rangeValue5}
            onChangeValue = {onSliderChange5}
          />
          <Sliderr
            title = {'Designer'}
            min = {1}
            max = {10}
            step = {1}
            value = {rangeValue6}
            onChangeValue = {onSliderChange6}
          />
          <Sliderr
            title = {'Writer'}
            min = {1}
            max = {10}
            step = {1}
            value = {rangeValue7}
            onChangeValue = {onSliderChange7}
          />
        </div>
      </div>

      <p
        style={{
          fontSize: 18,
          fontStyle: 'italic',
          color: !equal ? 'var(--red)' :'var(--sliderText)',
          marginTop: 10
        }}
      >* You cannot pick a number twice.</p>
      <Link to='/my-profile'>
        <button className="next">
          <p>Done</p>
          <span className="material-symbols-outlined arrow">arrow_forward_ios</span>
        </button>
      </Link>
    </div>
  )
}

export default Interests;