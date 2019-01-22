import React from 'react'
import { ErrorMessage } from 'formik'
import { FormGroup } from 'reactstrap'
import { Field as FormikField } from 'formik'
import {InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';

export const MyField = (props) => {
  const { touched, errors, name, type = 'text',placeholder,faClass } = props

  return (
    <FormGroup>
      <div>Please Enter {placeholder} :</div>
      <br/>
      <InputGroup className="mb-4">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className={faClass}/>
          </InputGroupText>
        </InputGroupAddon>
        <FormikField
          className={`form-control ${errors[name] && touched[name] ? 'is-invalid' : null}
               ${!errors[name] && touched[name] ? 'is-valid' : null}`}
          type={type}
          name={name}
          placeholder={placeholder}
        />
      </InputGroup>


      <ErrorMessage
        style={{ display: 'block' }}
        className='invalid-feedback d-block'
        name={name}
        component="div"
      />
    </FormGroup>
  )
}