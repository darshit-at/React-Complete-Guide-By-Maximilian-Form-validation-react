import React, { useState } from 'react';

const useUserInputData = (responeFunction) => {
    const [userFirstName, getFirstUserName] = useState('');
    const [userEmail, getUserEmail] = useState('');
    const [userLastName, getUserLastName] = useState('');

    const firstNameChangeHandler = (value) => {

        getFirstUserName(value)
    }
    const userEmailChangeHandler = (value) => {
        getUserEmail(value)
    }
    const lastNameChangeHandler = (value) => {
        getUserLastName(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const findIndex = userEmail.indexOf('@');
        const nextChar = userEmail.charAt(findIndex + 1);
        let respone;
    
        if (
            userEmail.trim().length === 0 ||
            userFirstName==='' ||
            userLastName.trim().length === 0) {
            respone = 'please fill the field'

        }

     else  if(isNaN(userFirstName) || isNaN(userLastName)) {
       respone ='Enter vaild name'
     
        }
      
      else  if (findIndex === -1 || nextChar !== 'g') {
            respone ='please Enter valid email'
    
        }
     else {
        respone = `Thank  you for your respone ${userFirstName} ${userLastName}`
     }

   
console.log(respone)
        responeFunction(true, respone);
        getFirstUserName('');getUserEmail('');getUserLastName('')
    }
    return {
        userEmail,
        userFirstName,
        userLastName,
        firstNameChangeHandler,
        userEmailChangeHandler,
        lastNameChangeHandler,
        handleSubmit
    }
};
export default useUserInputData;