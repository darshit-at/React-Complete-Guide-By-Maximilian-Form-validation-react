import React from 'react'
import useUserInputData from './hooks/use-get-user-data';

const BasicForm = (props) => {
  const userInputData = useUserInputData(props.onSubmitBtn);
  const 
  {  
    userEmail ,
    userFirstName ,
    userLastName ,
    firstNameChangeHandler ,
     userEmailChangeHandler ,
     lastNameChangeHandler,
     handleSubmit
    } = userInputData

  return (
    <form onSubmit={handleSubmit}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={userFirstName} onChange={ (e) => firstNameChangeHandler(e.target.value)}/>
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={userLastName} onChange={(e) =>lastNameChangeHandler(e.target.value)}/>
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={userEmail}  onChange={(e) =>userEmailChangeHandler(e.target.value)}/>
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
