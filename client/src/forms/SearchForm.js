import React from 'react'
import { reduxForm, Field } from 'redux-form'


const SearchForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className='searchFrom'>
            <div className='input-field'>
                <Field
                    name="search"
                    component="input"
                    type="text"
                    placeholder="Search"
                />
            </div>
            {props.error && <div>
                {props.error}
            </div>}
            <div>
                <button className='btn green accent-4'>Найти</button>
            </div>
        </form>

    )
}

export const SearchReduxForm = reduxForm({
    // a unique name for the form
    form: 'Search'
})(SearchForm)



