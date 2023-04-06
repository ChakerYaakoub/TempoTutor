import { useState, useEffect, useRef, useReducer } from 'react';
import * as React from 'react';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { FormValidator } from '@syncfusion/ej2-inputs';
import LoginNot from '../components/LoginNot';
import ScrolLoading from '../components/ScrolLoading'
import appIcon from "../data/data/iconBlack.png";

let formObject;
const LoginAdmin = () => {

    // useEffect(() => {
    //     const token = localStorage.getItem('Admin-Token');
    //     if (token) {
    //         window.location.href = '/';
    //     }
    // }, []);



    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(false);


    const [initialState, setState] = useState({ email: '', password: '' });

    const userNameRef = useRef(null);


    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                return { ...state, [action.field]: typeof action.value === 'string' ? action.value.trim() : action.value };
            default:
                return initialState;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const update = (field) => (event) => {
        let value = event.value;

        dispatch({ type: 'update', field, value });
        setError(false);


    };

    useEffect(() => {
        userNameRef.current.focusIn();


        const options = {
            rules: {
                email: {
                    required: [true, '* Please enter Your Email'],
                    email: [true, '* Please enter a valid  Email'],
                },
                password: {
                    required: [true, '* Please enter your Password '],
                    minLength: [5, '* Please enter at least 5 characters.'],

                }
            },
        };

        formObject = new FormValidator('#loginForm', options);


    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formObject.validate()) {
            setLoading(true)
            try {
                const response = await fetch('http://localhost:3000/admin/loginAdmin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: state.email,
                        password: state.password
                    })
                });
                if (!response.ok) {
                    setLoading(false)
                    setError(true);
                    const err = await response.json();
                    throw new Error(err.message);
                }
                const data = await response.json();
                console.log('Success:', data);
                console.log(data.token)

                localStorage.setItem('Admin-Token', data.token);

                window.location.href = '/';
                setLoading(false)
            } catch (error) {
                console.error('Error:', error.message);
                setError(true);
                setLoading(false)
            }
        } else {
            console.log('Have to validate data');
        }
    };


    return (
        <div>

            <section class="bg-gray-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div class=" items-center inline-flex mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                
                            <img src={appIcon}  alt="logo" className='w-10' />
                            <span >Tempo<span className='text-sky-700'>Tutor</span> </span>
                     

                    </div>
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div class='items-center '>
                                <h1 class="text-xl  font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign in to your account
                                </h1>
                            </div>

                            <form class="space-y-4 md:space-y-6" id="loginForm" >
                                <div>
                                    <div className="form-group">
                                        <TextBoxComponent

                                            ref={userNameRef}
                                            name="email"
                                            value={state.email}
                                            change={update('email')}
                                            placeholder="You Email"
                                            floatLabelType="Auto"

                                            data-msg-containerid="errroForEmail"

                                        />
                                        <div id="errroForEmail" />
                                    </div>
                                </div>

                                <div>
                                    <div className="form-group">
                                        <TextBoxComponent


                                            name="password"
                                            type='password'
                                            value={state.password}
                                            change={update('password')}
                                            placeholder="You password"
                                            floatLabelType="Auto"
                                            data-msg-containerid="errroForpassword"

                                        />
                                        <div id="errroForpassword" />
                                    </div>

                                </div>



                                <button type="button"  style={{ background: 'black' }} onClick={handleSubmit} class="w-full text-white bg-black-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">

                                    {loading && <ScrolLoading />}
                                    {!loading && <> Sign in</>}


                                </button>

                                {error && <LoginNot />}



                                <p class="text-sm font-light text-sky-700  dark:text-gray-400">
                                    Note : This field is for admin only

                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default LoginAdmin