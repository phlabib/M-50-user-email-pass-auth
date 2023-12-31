import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../HeroRegister/firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess]= useState ('');
    const [showPassword, setShowPassword] = useState (false);


    const handleRegister = e => {
     e.preventDefault ();
     const email = e.target.email.value;
     const password = e.target.password.value;
     const accepted = e.target.terms.checked;
        
    
        console.log(email, password, accepted);
        
        // reset error
        setRegisterError('');
        setRegisterSuccess('');

        if(password.length < 6){
            setRegisterError ('Password should be at least 6 characters');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('You should have at last One Uppercase Characters')
            return;
        }
        else if (!accepted) {
            setRegisterError('Please accept our T&C!!')
            return;
        }


        // creat user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            setRegisterSuccess("User Registation SuccessFully")
        })
        .catch(error=> {
            console.error(error);
            setRegisterError(error.message);
        })
    }
    // console.log('from submit');

    return (
        <div className="">
           <div className="mx-auto md:w-1/2  text-center">
           <h2 className="text-3xl mb-4 text-center">Please Register</h2>
            <form onSubmit={handleRegister}>
                <input className="border mb-4 w-full py-2 px-4" type="email" name="email" placeholder="E-mail" required/> <br />
             <div className="relative border mb-4">
             <input 
                className="border w-full py-2 px-4" 
                type= {showPassword ? "text" : "password" }
                name="password"  
                placeholder="Password"
                id=""required/>
                <span className="absolute top-3 right-3" onClick={() => setShowPassword(!showPassword)}>
                    {
                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
                </span>
             </div>
                 <br />
                    <input className="mb-4" type="checkbox" name="terms" id="terms" />
                    <label  htmlFor="terms">Accept <a className="text-blue-500 underline " href="">Terms and Conditions</a></label>

                 <br />
                <input className="btn btn-secondary mb-4 w-full" type="submit" value='Register' />
            </form>
            {
                registerError && <p className="text-red-600">{registerError}</p>
            }
            {
                registerSuccess && <p className="text-green-600">{registerSuccess}</p>
            }
            <p>Already have an account? Please Login <Link className="text-blue-500 underline" to = '/login'>Login</Link> </p>
           </div>
        </div>
    );
};

export default Register;