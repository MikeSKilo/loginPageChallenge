import React, { useState } from 'react'
import Axios from 'axios';
import { useEffect } from 'react';

const ProfileEdit = ({ formData }) => {
    const [form, setForm] = useState();
 
    useEffect(() => {
        
        setForm({
            
            email:formData.email,
            phoneNumber:formData.phone,
            avatarURL:formData.picture,
            fullName:formData.name,
            balance:formData.balance,
            age: formData.age,
            eyeColor:formData.eyeColor,
            company: formData.company,
            address: formData.address
        })
    },[])
   
    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        
    };
     const endpointURL = process.env.REACT_APP_URL;
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, phoneNumber, avatarURL, fullName, balance, age, eyeColor, company, address } = form;
        await Axios.put(`${endpointURL}/update`, {
            email, phoneNumber, avatarURL, fullName, balance, age, eyeColor, company, address
        }).then(editSuccess).catch(editError);
    

    }
    const editSuccess = res => {
        console.log("editSuccess",res);
        window.location.reload();
    }
    const editError = err => {
        console.warn("editError",err)
    }
    if(form)
    return (
        
        <form className='m-3' onSubmit={handleSubmit} >
            <div className="row">
                <div className="col">


                                      
                    <div className="form-group">
                        <label htmlFor="fullName" for="fullName" >Full Name</label>
                        <input
                            aria-describedby="nameHelp"
                            id='fullName'
                            class="form-control"
                            type="text"
                            name='fullName'
                            value={form.fullName}
                            placeholder='Full Name'
                            onChange={handleChange}
                            required
                        />
                        <small id="nameHelp" class="form-text text-muted">Plesae enter your name</small>
                    </div>
                                      
                    <div className="form-group">
                        <label htmlFor="username" for="username">email</label>
                        <input
                            id="username"
                            aria-describedby='usernameHelp'
                            class="form-control"
                            type="text"
                            name='email'
                            value={form.email}
                            placeholder='email'
                            onChange={handleChange}
                            required
                        />
                        <small id="usernameHelp" class="form-text text-muted">Plesae enter your email</small>
                    </div>
                                       
                    <div className="form-group">
                        <label htmlFor="phoneNumber" for='phoneNumber'>Phone Number</label>
                        <input
                            id='phoneNumber'
                            aria-describedby='phoneHelp'
                            class="form-control"
                            type="text"
                            name='phoneNumber'
                            value={form.phoneNumber}
                            placeholder='Phone Number'
                            onChange={handleChange}
                            required
                        />
                        <small id="phoneHelp" class="form-text text-muted">Plesae enter your Phone Number</small>
                    </div>
                                      
                                        
                    <div className="form-group">
                        <label htmlFor="avatarURL" for='avatarURL'>Avatar URL</label>
                        <input
                            id='avatarURL'
                            aria-describedby='avatarHelp'
                            class="form-control"
                            type="text"
                            name='avatarURL'
                            value={form.avatarURL}
                            placeholder='Avatar URL'
                            onChange={handleChange}
                            required
                        />
                        <small id="avatarHelp" class="form-text text-muted">Plesae enter your Avatar URL</small>
                    </div>               
                    <div className="form-group">
                        <button className='btn btn-primary' > Save</button>
                    </div>
                </div>
                {/* another column */}
                <div className="col">
                                      
                    <div className="form-group">
                        <label htmlFor="eyeColor" for='eyeColor'>Eye Color</label>
                        <input
                            id='eyeColor'
                            aria-describedby='eyeColorHelp'
                            class="form-control"
                            type="test"
                            name='eyeColor'
                               value={form.eyeColor}
                            placeholder='Enter your eye color'
                            onChange={handleChange}
                            required
                        />
                        <small id="eyeColorHelp" class="form-text text-muted">Plesae enter your Eye Color</small>
                    </div>
                                  
                                       
                    <div className="form-group">
                        <label htmlFor="balance" for='balance'>Balance</label>
                        <input
                            id='balance'
                            aria-describedby='balanceHelp'
                            class="form-control"
                            type="text"
                            name='balance'
                              value={form.balance}
                            placeholder='Enter your currnet balance'
                            onChange={handleChange}
                            required
                        />
                        <small id="balanceHelp" class="form-text text-muted">Plesae enter your Balance</small>
                    </div>
                                     
                                    
                    <div className="form-group">
                        <label htmlFor="age" for='age'>Age</label>
                        <input
                            id='age'
                            aria-describedby='ageHelp'
                            class="form-control"
                            type="text"
                            name='age'
                            placeholder='Age'
                                value={form.age}
                            onChange={handleChange}
                            required
                        />
                        <small id="ageHelp" class="form-text text-muted">Plesae enter your Age</small>
                    </div>
                                     
                                     
                    <div className="form-group">
                        <label htmlFor="company" for='company'>Company</label>
                        <input
                            id='company'
                            aria-describedby='companyHelp'
                            class="form-control"
                            type="text"
                            name='company'
                            placeholder='Company'
                                 value={form.company}
                            onChange={handleChange}
                            required
                        />
                        <small id="companyHelp" class="form-text text-muted">Plesae enter your Company</small>
                    </div>
                                   
                    <div className="form-group">
                        <label htmlFor="address" for='address'>Address</label>
                        <input
                            id='address'
                            aria-describedby='addressHelp'
                            class="form-control"
                            type="text"
                            name='address'
                            placeholder='Address'
                               value={form.address}
                            onChange={handleChange}
                            required
                        />
                        <small id="addressHelp" class="form-text text-muted">Plesae enter your Address</small>
                    </div>
                                     
                                        
                </div>
            </div>
        </form>
        
    )
}

export default ProfileEdit