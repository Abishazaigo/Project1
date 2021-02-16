import {useForm} from 'react-hook-form';
import {useState} from 'react';

import Button from './Button';

function Form(){
    const[contacts, setContacts]=useState([{ value: null }]);
    const {register, watch, handleSubmit, errors} = useForm();
    const onSubmit = (data) => console.log(data);
    const qualification = watch('qualification');
    const country = watch('country');
    const state = watch('state');
    function handleChange(i, event) {
        const values = [...contacts];
        values[i].value = event.target.value;
        setContacts(values);
    }
    function handleAdd() {
        const values = [...contacts];
        values.push({ value: null });
        setContacts(values);
    }
    function handleRemove(i) {
        const values = [...contacts];
        values.splice(i, 1);
        setContacts(values);
    }
    return (
        <div className="container-fluid">
            <h3>Register here...</h3>
            <div className="row">
                <div className="col-3">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" ref={register({required: "required", pattern: {value: /^[A-Z]{2,}$/i}})}  className={`form-control ${errors && errors.first_name && "highlight"}`} name="first_name"  placeholder="Enter first name" />
                    <div className="text-danger">
                        {errors.first_name && errors.first_name.type === "required" && (
                        <span role="alert">Please enter the first name</span>
                        )}
                        {errors.first_name && errors.first_name.type === "pattern" && (
                        <span role="alert">Please enter the proper first name</span>
                        )}
                    </div>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" ref={register({ required: "required", pattern: {value: /^[A-Z]{2,}$/i}})}  className={`form-control ${errors && errors.last_name && "highlight"}`}  name="last_name" placeholder="Enter last name" />
                    <div className="text-danger">
                    {errors.last_name && errors.last_name.type === "required" && (
                    <span role="alert">Please enter the last name</span>
                    )}
                    {errors.last_name && errors.last_name.type === "pattern" && (
                        <span role="alert">Please enter the proper last name</span>
                    )}
                    </div>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" ref={register({required: "required", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}})}  className={`form-control ${errors && errors.email && "highlight"}`} name="email" placeholder="Enter email" />
                    <div className="text-danger">
                        {errors.email && errors.email.type === "required" && (
                        <span role="alert">Please enter the email</span>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                            <span role="alert">Please enter a proper mail id</span>
                        )}
                    </div>
                </div>
                <div className="form-group"> 
                    <label>Contact no:</label>
                    <div className="buttonIn">
                    <input type="tel" ref={register({required: "required"})}  className={`form-control ${errors && errors.phone && "highlight"}`} name="phone" placeholder="Enter phone no" />
                        <button type="button" name="adder" className="add bg-success" onClick={() => handleAdd()}>+</button>
                    </div>    
                    <div className="text-danger">
                            {errors.phone && errors.phone.type === "required" && (
                            <span role="alert">Please enter the phone no</span>
                            )}
                    </div>
                </div>
                <div className="form-group">
                    {contacts.map((contact, idx) => {
                        return (
                            <div key={{contact}-{idx}}>
                                <div className="buttonIn">
                                    <input type="tel"  className="form-control"  name="contact" placeholder="Enter phone no" onChange={e => handleChange(idx, e)} />
                                    <button type="button" className="add bg-danger" onClick={() => handleRemove(idx)}>x</button>
                                    <p></p>
                                </div>
                            </div>
                        );
                    })
                }
                </div>
                <div className="form-group">
                    <div className="dropdown">
                        <label>Country</label>  
                        <select ref={register({required: "required"})} name="country" id="country">
                            <option value="">Select</option>
                            <option value="India" >India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                        </select>
                    </div>
                    <div className="text-danger">
                        {errors.country && errors.country.type === "required" && (
                        <span role="alert">Please select country</span>
                        )}
                    </div>
                </div>
                
                <div className="form-group">
                <div className="dropdown">
                    <label>State</label>  
                    {country=="India" && (
                    <select ref={register({required: "required"})} name="state" id="state">
                    
                        <option value="">Select</option>
                        
                        <option value="Tamil Nadu" >Tamil Nadu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Kerala">Kerala</option>
                       
                    </select>
                      )}
                      {country=="USA" && (
                    <select ref={register({required: "required"})} name="state" id="state">
                    
                        <option value="">Select</option>
                        
                        <option value="California" >California</option>
                        <option value="Texas">Texas</option>
                        <option value="Florida">Florida</option>
                       
                    </select>
                      )}
                      {country=="UK" && (
                    <select ref={register({required: "required"})} name="state" id="state">
                    
                        <option value="">Select</option>
                        
                        <option value="Scotland" >Scotland</option>
                        <option value="Wales">Wales</option>
                        <option value="Northern Ireland">Northern Ireland</option>
                       
                    </select>
                      )}
                </div>
                <div className="text-danger">
                    {errors.state && errors.state.type === "required" && (
                    <span role="alert">Please select state</span>
                    )}
                </div>
            </div>
                
                
                <div className="form-group">
                <div className="dropdown">
                    <label>City</label>  
                    {state=="Tamil Nadu" && (
                    <select ref={register({required: "required"})} name="city" id="city">
                        <option value="">Select</option>
                        <option value="Chennai" >Chennai</option>
                        <option value="Madurai">Madurai</option>
                        <option value="Coimbatore">Coimbatore</option>
                    </select>
                     )}
                     {state=="Delhi" && (
                    <select ref={register({required: "required"})} name="city" id="city">
                        <option value="">Select</option>
                        <option value="New Delhi" >New Delhi</option>
                        <option value="Gurugram">Gurugram</option>
                        <option value="Connaught">Connaught</option>
                    </select>
                     )}
                     {state=="Kerala" && (
                    <select ref={register({required: "required"})} name="city" id="city">
                        <option value="">Select</option>
                        <option value="Thiruvananthapuram" >Thiruvananthapuram</option>
                        <option value="Kochi">Kochi</option>
                        <option value="Kozhikode">Kozhikode</option>
                    </select>
                     )}
                     {state=="California" && (
                    <select ref={register({required: "required"})} name="city" id="city">
                        <option value="">Select</option>
                        <option value="Los Angeles" >Los Angeles</option>
                        <option value="San Francisco">San Francisco</option>
                        <option value="San Deigo">San Deigo</option>
                    </select>
                     )}
                      {state=="Texas" && (
                    <select ref={register({required: "required"})} name="city" id="city">
                        <option value="">Select</option>
                        <option value="Houstan" >Houstan</option>
                        <option value="Dallas">Dallas</option>
                        <option value="Austin">Austin</option>
                    </select>
                     )}
                      {state=="Florida" && (
                    <select ref={register({required: "required"})} name="city" id="city">
                        <option value="">Select</option>
                        <option value="Miami" >Miami</option>
                        <option value="Orlando">Orlando</option>
                        <option value="Tampa">Tampa</option>
                    </select>
                     )}
                      {state=="Scotland" && (
                    <select ref={register({required: "required"})} name="city" id="city">
                        <option value="">Select</option>
                        <option value="Edinburgh" >Edinburgh</option>
                        <option value="Glasgow">Glasgow</option>
                        <option value="Dundee">Dundee</option>
                    </select>
                     )}
                      {state=="Wales" && (
                    <select ref={register({required: "required"})} name="city" id="city">
                        <option value="">Select</option>
                        <option value="Cardiff" >Cardiff</option>
                        <option value="Swansea">Swansea</option>
                        <option value="Newport">Newport</option>
                    </select>
                     )}
                      {state=="Northern Ireland" && (
                    <select ref={register({required: "required"})} name="city" id="city">
                        <option value="">Select</option>
                        <option value="Belfast" >Belfast</option>
                        <option value="Londonderry">Londonderry</option>
                        <option value="Lisburn">Lisburn</option>
                    </select>
                     )}
                </div>
                <div className="text-danger">
                    {errors.city && errors.city.type === "required" && (
                    <span role="alert">Please select city</span>
                    )}
                </div>
            </div>
               
                <div className="form-group">
                    <label>Gender</label>
                    <div className="form-check">
                        <input className="form-check-input" ref={register({ required: "required"})}  type="radio" name="gender" id="male" value="male" />
                        <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" ref={register({ required: "required"})} type="radio" name="gender" id="female" value="female" />
                        <label className="form-check-label">Female</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" ref={register({ required: "required"})} type="radio" name="gender" id="others" value="others" />
                        <label className="form-check-label">Others</label>
                    </div>
                    <div className="text-danger">
                        {errors.gender && errors.gender.type === "required" && (
                        <span role="alert">Please select gender</span>
                        )}
                    </div>
                </div>
                <div className="form-group">
                    <label>Hobbies</label>
                    <div className="form-check">
                        <input className="form-check-input" ref={register({ required: "required"})} type="checkbox" name="hobbies" id="reading" value="reading" />
                        <label className="form-check-label">Reading</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" ref={register({ required: "required"})} type="checkbox" name="hobbies" id="singing" value="singing" />
                        <label className="form-check-label">Singing</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" ref={register({ required: "required"})} type="checkbox" name="hobbies" id="gardening" value="gardening" />
                        <label className="form-check-label">Gardening</label>
                    </div>
                    <div className="text-danger">
                        {errors.hobbies && errors.hobbies.type === "required" && (
                        <span role="alert">Please select hobbies</span>
                        )}
                    </div>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <textarea ref={register({required:"required"})} className={`form-control ${errors && errors.address && "highlight"}`} name="address" placeholder="Enter address" rows="3" cols="5">
                    </textarea>
                    <div className="text-danger">
                        {errors.address && errors.address.type === "required" && (
                        <span role="alert">Please enter the address</span>
                        )}
                    </div>
                </div>
                <div className="form-group">
                    <div className="dropdown">
                        <label>Qualification</label>  
                        <select ref={register({required: "required"})} name="qualification" id="qualification">
                            <option value="">Select</option>
                            <option value="science" >Science</option>
                            <option value="engineer">Engineering</option>
                            <option value="doctor">MBBS</option>
                        </select>
                    </div>
                    <div className="text-danger">
                        {errors.qualification && errors.qualification.type === "required" && (
                        <span role="alert">Please select qualification</span>
                        )}
                    </div>
                </div>
                {qualification && (
                <div className="form-group">
                    <label>Branch</label>
                    <input type="text" ref={register({ required: true})} className="form-control" name="education"  placeholder="Enter qualification details" />
                </div>
                )}
                <Button className="btn btn-success btn-user btn-block " label="Submit" />
            </form>
            </div>
            <div className="col-8"></div>
            </div>
        </div>
      );
}
export default Form;