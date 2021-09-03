import React, { useReducer } from 'react'
const initialState = {
    'firstName': {
        'value': '',
        'error': [],
    },
    'lastName': {
        'value': '',
        "error": []
    },
    'email': {
        'value': '',
        "error": []
    }
}
function reducer(state, action) {
    return {
        ...state,
        [action.type]: {
            value: action.payload,
            error: action.error || []
        }

    }
}
const UserForm = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    function changeHandler(e) {
        
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value,
        })
    }



    const submitHandler = (e) => {
        e.preventDefault();
        let nameErrors = []
        
        if (state.firstName.value.length === 0) {
            nameErrors.push('name required')
        }
        console.log(nameErrors);
        dispatch({ 
           type: e.target[0].name,
           payload: e.target[0].value,
           error: nameErrors
        })
    }

    return (
        <div className="row">
            <form className="row" onSubmit={submitHandler}>
                {/* {
                    isSubmitted?
                    <h3 className="h3">Thank You For Submitting The Form</h3> :
                    <h3 className="h3">Please Submit The Form</h3>

                } */}
                <div className="mb-3">
                    {
                        state.firstName.error.map(message => <p style={{'color': 'red'}} key={message}>{message}</p>)
                    }
                    <label className="form-label" htmlFor="firstName">First Name:</label>
                    <input className="form-control" type="text" onChange={changeHandler} name="firstName" />
                    {/* {
                        usernameError?
                        <p className="text-danger">{usernameError}</p> : ''
                    } */}
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="lastName">Last Name:</label>
                    <input className="form-control" type="text" onChange={changeHandler} name="lastName" />
                    {/* {
                        emailError?
                        <p className="text-danger">{emailError}</p> : ''
                    } */}
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email:</label>
                    <input className="form-control" type="text" onChange={changeHandler} name="email" />
                    {/* {
                        emailError?
                        <p className="text-danger">{emailError}</p> : ''
                    } */}
                </div>

                <input className="btn btn-primary" type="submit" value="Submit" />

            </form>
            <div className="row">
                <h3 className="h3">First Name: {state.firstName.value}</h3>
                <h3 className="h3">Last Name:</h3>
                <h3 className="h3">Email:</h3>
                <h3 className="h3">Password:</h3>
                <h3 className="h3">Conf Pw:</h3>
            </div>
        </div>
    )
}

export default UserForm
