import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import Axios from 'axios'
import Logo from '../assets/logo.png'
import Swal from 'sweetalert2'

const cookies = new Cookies();


const Auth = () => {
    const [form, setForm] = useState();
    const [isSignup, setIsSignup] = useState(true)
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        
    };
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
    };
    const submitSuccess = res => {
        console.log('submitSuccess',res);
        cookies.set('guid', res.data.guid);
        cookies.set('email', res.data.email);
        if (isSignup) {
            cookies.set('phoneNumber', res.data.phoneNumber);
            cookies.set('avatarURL', res.data.avatarURL);   
        }
        window.location.reload();
    }
    const submitError = err => {
        console.warn('submitError', err)
    }

    const endpointURL = process.env.REACT_APP_URL;
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email,
            password,
            phoneNumber,
            avatarURL,
            fullName,
            balance,
            age,
            eyeColor,
            company,
            address, confirmPassword } = form;
        if (password === confirmPassword)
        {
            await Axios.post(`${endpointURL}/${isSignup ? 'signup' : 'login'}`, {
                email, password, phoneNumber, avatarURL, fullName, balance,age, eyeColor, company, address
            }).then(submitSuccess).catch(submitError);
        }
        else {
            Swal.fire("passwords do not match")
        }

    }
    return (
        <div className="container p-4">
            <div className="row">
                <div className="col">
                    <div className="text-center">

                        <img
                            src={Logo}
                            alt="logo"
                            className='img-fluid'
                            style={{ height: '7.5rem', objectFit: 'fill' }}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>

                        </div>
                        <div className="card-body">
                            <form className='m-3' onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col">


                                        {isSignup && (
                                            <div className="form-group">
                                                <label htmlFor="fullName" for="fullName" >Full Name</label>
                                                <input
                                                    aria-describedby="nameHelp"
                                                    id='fullName'
                                                    class="form-control"
                                                    type="text"
                                                    name='fullName'
                                                    placeholder='Full Name'
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <small id="nameHelp" class="form-text text-muted">Plesae enter your name</small>
                                            </div>
                                        )}
                                        <div className="form-group">
                                            <label htmlFor="username" for="username">email</label>
                                            <input
                                                id="username"
                                                aria-describedby='usernameHelp'
                                                class="form-control"
                                                type="text"
                                                name='email'
                                                placeholder='email'
                                                onChange={handleChange}
                                                required
                                            />
                                            <small id="usernameHelp" class="form-text text-muted">Plesae enter your email</small>
                                        </div>
                                        {isSignup && (
                                            <div className="form-group">
                                                <label htmlFor="phoneNumber" for='phoneNumber'>Phone Number</label>
                                                <input
                                                    id='phoneNumber'
                                                    aria-describedby='phoneHelp'
                                                    class="form-control"
                                                    type="text"
                                                    name='phoneNumber'
                                                    placeholder='Phone Number'
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <small id="phoneHelp" class="form-text text-muted">Plesae enter your Phone Number</small>
                                            </div>
                                        )}
                                        {isSignup && (
                                            <div className="form-group">
                                                <label htmlFor="avatarURL" for='avatarURL'>Avatar URL</label>
                                                <input
                                                    id='avatarURL'
                                                    aria-describedby='avatarHelp'
                                                    class="form-control"
                                                    type="text"
                                                    name='avatarURL'
                                                    placeholder='Avatar URL'
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <small id="avatarHelp" class="form-text text-muted">Plesae enter your Avatar URL</small>
                                            </div>
                                        
                                        )}
                                        <div className="form-group">
                                            <label htmlFor="password" for='password'>Password</label>
                                            <input
                                                id='password'
                                                aria-describedby='passwordHelp'
                                                class="form-control"
                                                type="password"
                                                name='password'
                                                placeholder='Password'
                                                onChange={handleChange}
                                                required
                                            />
                                            <small id="passwordHelp" class="form-text text-muted">Plesae enter your Password</small>
                                        </div>
                                        {isSignup && (
                                            <div className="form-group">
                                                <label htmlFor="confirmPassword" for='confirmPassword'>Confirm Password</label>
                                                <input
                                                    id='confirmPassword'
                                                    aria-describedby='confirmHelp'
                                                    class="form-control"
                                                    type="password"
                                                    name='confirmPassword'
                                                    placeholder='Confirm Password'
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <small id="confirmHelp" class="form-text text-muted">Plesae Confirm your Password</small>
                                            </div>
                                        )}
                                        <div className="form-group">
                                            <button className='btn btn-primary'>{isSignup ? "Sign Up" : "Sign In"}</button>
                                        </div>
                                    </div>
                                    {/* another column */}
                                    <div className="col">
                                        {isSignup && (
                                            <div className="form-group">
                                                <label htmlFor="eyeColor" for='eyeColor'>Eye Color</label>
                                                <input
                                                    id='eyeColor'
                                                    aria-describedby='eyeColorHelp'
                                                    class="form-control"
                                                    type="test"
                                                    name='eyeColor'
                                                    placeholder='Enter your eye color'
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <small id="eyeColorHelp" class="form-text text-muted">Plesae enter your Eye Color</small>
                                            </div>
                                        )}
                                        {isSignup && (
                                            <div className="form-group">
                                                <label htmlFor="balance" for='balance'>Balance</label>
                                                <input
                                                    id='balance'
                                                    aria-describedby='balanceHelp'
                                                    class="form-control"
                                                    type="text"
                                                    name='balance'
                                                    placeholder='Enter your currnet balance'
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <small id="balanceHelp" class="form-text text-muted">Plesae enter your Balance</small>
                                            </div>
                                        )}
                                        {isSignup && (
                                            <div className="form-group">
                                                <label htmlFor="age" for='age'>Age</label>
                                                <input
                                                    id='age'
                                                    aria-describedby='ageHelp'
                                                    class="form-control"
                                                    type="text"
                                                    name='age'
                                                    placeholder='Age'
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <small id="ageHelp" class="form-text text-muted">Plesae enter your Age</small>
                                            </div>
                                        )}
                                        {isSignup && (
                                            <div className="form-group">
                                                <label htmlFor="company" for='company'>Company</label>
                                                <input
                                                    id='company'
                                                    aria-describedby='companyHelp'
                                                    class="form-control"
                                                    type="text"
                                                    name='company'
                                                    placeholder='Company'
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <small id="companyHelp" class="form-text text-muted">Plesae enter your Company</small>
                                            </div>
                                        )}
                                        {isSignup && (
                                            <div className="form-group">
                                                <label htmlFor="address" for='address'>Address</label>
                                                <input
                                                    id='address'
                                                    aria-describedby='addressHelp'
                                                    class="form-control"
                                                    type="text"
                                                    name='address'
                                                    placeholder='Adress'
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <small id="addressHelp" class="form-text text-muted">Plesae enter your Address</small>
                                            </div>
                                        )}
                                        
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div className="card-footer">
                            <div className="auth__form-container_fields-account">
                                <p>
                                    {isSignup
                                        ? "Already have an account?"
                                        : "Don't have an account?"
                                    }
                                    <span onClick={switchMode}>
                                        {isSignup ? ' Sign In' : ' Sign Up'}

                                    </span>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Auth