import React from 'react';

import {FormInputContainer} from './Form-Input.styles';

const FormInput = ({children}) => {
    return (  
        <FormInputContainer>
        {children}
      </FormInputContainer>
    );
}
 
export default FormInput;