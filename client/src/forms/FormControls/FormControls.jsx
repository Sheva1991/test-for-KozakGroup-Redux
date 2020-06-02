import React from 'react'
import { Field } from 'redux-form';


const FormControl = ({ meta, children }) => {
    const hasError = meta.touched && meta.error
    return (
        <div>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div >
    )
}


export const Textarea = (props) => {
    const { input, meta, ...restProps } = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, ...restProps } = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}


export function createField(placeholder,
    name,
    validadtors,
    component,
    type,
    value,
    props = {}, text = '') {
    return (
        <div>
            <Field className='yellow-input' placeholder={placeholder} name={name}
                validate={validadtors}
                component={component}
                value={value}
                type={type}
                {...props} />
        </div>
    )
}
