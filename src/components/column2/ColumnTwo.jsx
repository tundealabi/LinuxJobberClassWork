import checked from '../../assets/checked.svg'
import { useState } from 'react'
import './columnTwo.css';
import line from '../../assets/l.svg'
import { Link } from 'react-router-dom'

const ColumnTwo = () => {
   const [ answer, setAnswer ] = useState('')
   const [ isStudent, setStudent ] = useState(false)

   const [ graduate, setGraduate ] = useState('')
   const [ isGraduate, setIsGraduate ] = useState(false)

   const [ postGrad, setPostGrad ] = useState('')
   const [ isPostGrad, setIsPostGrad ] = useState(false)

   const [ completed, setCompleted ] = useState('')
   const [ isComplete, setIsComplete ] = useState(false)

//  HANDLE QUESTION TWO
   const handleYes = () => {
    setStudent(true)
    setAnswer('Yes')
   }
   const handleNo = () => {
    setStudent(true)
    setAnswer('No')
   }

// HANDLE QUESTION THREE
   const handleGradYes = () => {
    setIsGraduate(true)
    setGraduate('Yes')
   }
   const handleGradNo = () => {
    setIsGraduate(true)
    setGraduate('No')    
   }

// HANDLE QYESTION FOUR
   const handlePostGradYes = () => {
    setIsPostGrad(true)
    setPostGrad('Yes')
   }
   const handlePostGradNo = () => {
    setIsPostGrad(true)
    setPostGrad('No')
    setIsComplete(true)
   }

// HANDLE SUB-QUESTION FOUR
   const handleCompleteYes = () => {
    setIsComplete(true)
    setCompleted('Yes')
   }
   const handleCompleteNo = () => {
    setIsComplete(true)
    setCompleted('No')
   }


  return (
    <form className={`profile ${isStudent && 'profille'} `} >
      <div className="profile-checked">
        <img src={checked} alt="a" className="ccc" />
      </div>
      <ol className="ol-body">
        <li>
          <p className="text-dscptn">Course of study in school: </p>
          <div className="flexme">
            <input
              type="text"
              placeholder="Course of study"
              className="btn-input txt-input"
            />
          </div>
        </li>
        <li>
          <div className="fllxx">
            <p className="text-dscptn">Are you a student? </p>
            <div className={`fllxx ${answer === 'No' && 'gry'} `}>
              {isStudent && <span class="material-symbols-outlined">done</span>}
              <p>{answer}</p>
            </div>
          </div>
          <div 
            className="flexme"
            style={{
              display : isStudent && 'none',
            }}
          >
            <input type="button" defaultValue="Yes" className="btn-input" onClick={handleYes} />
            <input type="button" defaultValue="No" className="btn-input" onClick={handleNo}  />
          </div>
          {answer === 'Yes' &&
            <div className="flexme">
            <input
              type="text"
              placeholder="Course of study"
              className="btn-input short-input cursor"
            />
            <input
              type="text"
              placeholder="Expected Graduation date"
              className="btn-input short-input cursor"
            />
            <span className="material-symbols-outlined absl">reply</span>
          </div>}
        </li>
        <li>
        <div className="fllxx">
            <p className="text-dscptn"> Did you graduate?</p>
            <div className={`fllxx ${graduate === 'No'  && 'gry'} `}>
              {(graduate !== '') && <span className="material-symbols-outlined">done</span>}
              <p>{graduate}</p>
            </div>
          </div>
          <div 
            className="flexme"
            style={{
              display : isGraduate && 'none'
            }}
          >
            <input type="button" defaultValue="Yes" className="btn-input" onClick={handleGradYes} />
            <input type="button" defaultValue="No" className="btn-input" onClick={handleGradNo}  />
          </div>
          { graduate === 'No' &&
            <div className="flexme">
            <input
              type="text"
              placeholder="Current occupation "
              className="btn-input short-input cursor"
            />
            <span className="material-symbols-outlined absl adxgf">reply</span>
          </div>}
        </li>
        <li>
          <div className="fllxx">
            <p className="text-dscptn"> Does your country require post-graduation service?</p>
            <div 
              class={`fllxx ${postGrad === "No"  && 'gry'} `}>
              {isPostGrad && <span className="material-symbols-outlined">done</span>}
              <p>{postGrad}</p>
            </div>
          </div>
          <div 
            className="flexme"
            style={{
                display: isPostGrad && 'none' 
              }} 
          >
            <input type="button" defaultValue="Yes" className="btn-input" onClick={handlePostGradYes} />
            <input type="button" defaultValue="No" className="btn-input" onClick={handlePostGradNo}  />
          </div>
          {postGrad === 'Yes' &&
          
            <div className="hyc">
              <div className="flexme">
                <p className="text-dscptn hyc">Have you oompleted?</p>
                <div 
                  className={`flexme ${isStudent && 'gry'} `}>
                  {isComplete &&<span className="material-symbols-outlined">done</span>}
                  {<p>{completed}</p>}
                </div>
              </div>
            <div 
              className="flexme"
              style={{
                display: isComplete && 'none'
              }}
            >
              <input type="button" defaultValue="Yes" className="btn-input" onClick={handleCompleteYes} />
              <input type="button" defaultValue="No" className="btn-input" onClick={handleCompleteNo} />
            </div>
            <img src={line} alt="l" className="l-abslt" />
          </div>}

        </li>
      </ol>
      {(isStudent && isGraduate && isComplete && isPostGrad) && 
      <Link to='/interest'>
        <button className="next">
          <p>Next Step</p>
          <span className="material-symbols-outlined arrow">arrow_forward_ios</span>
        </button>
      </Link>}
    </form>

  )
}


export default ColumnTwo