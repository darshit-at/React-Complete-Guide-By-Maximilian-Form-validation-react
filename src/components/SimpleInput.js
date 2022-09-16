import { useState } from "react";
import '../index.css'

const SimpleInput = (props) => {
  const [enterName ,getEnterName] = useState('');
  const [isenterNameValid ,setisenterNameValid] = useState(true);
  
  const nameChangeHandler = (e)=>{
    if(e.target.value.length > 0) {
      setisenterNameValid(true)
    }
    getEnterName(e.target.value);
  };

  const handlerSubmit = (e) =>{
    let respone;
    e.preventDefault();
    if(enterName.trim().length===0) {
      setisenterNameValid(false);
      respone = 'Name field is empty'
   
    }
    else {
      respone = `Thank  you for your respone ${enterName}`
    }
    
    setisenterNameValid(true);
    props.onSubmitBtn(true ,respone);
    getEnterName('')
  };

  const nameBlurHandler = () =>{
    if(enterName.trim().length===0) {
      setisenterNameValid(false);

    }
  }
  
  const nameInputClasses = isenterNameValid ? 'form-control' : 'form-control invalid'
  return (
    <form onSubmit={handlerSubmit}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text'
        value= {enterName}
        id='name' 
        onChange={nameChangeHandler}
        onBlur = {nameBlurHandler}
        />


      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>


      
    </form>
  );
};

export default SimpleInput;
