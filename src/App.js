import BasicForm from './components/BasicForm.js';
import AlertMessage from './components/AlertMessage.js';
import SimpleInput from './components/SimpleInput'
import { useState } from 'react';

function App() {
  const [isReturnAlertMessage ,setIsReturnAlertMessage ] = useState(false);
  const [alertMessage ,getalertMessage ] = useState(false);

  const sentAlertMessage = (currentValue ,response) =>{
    console.log(response)
   setIsReturnAlertMessage(currentValue);
   getalertMessage(response);
 
  };

  return (
    <div className="app">
      <BasicForm  onSubmitBtn = {sentAlertMessage}/>
{/* <SimpleInput onSubmitBtn = {sentAlertMessage}/> */}
  {isReturnAlertMessage && <AlertMessage onRemoveAlertMessage = {sentAlertMessage} response = {alertMessage}/>}
    </div>
  );
}

export default App;
