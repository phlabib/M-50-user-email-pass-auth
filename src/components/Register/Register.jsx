import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../HeroRegister/firebase/firebase.config";
import { useState } from "react";


const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess]= useState ('');


    const handleRegister = e => {
     e.preventDefault ();
     const email = e.target.email.value;
     const password = e.target.password.value;
        
    
        console.log(email, password);


        if(password.length < 6){
            setRegisterError ('Password should be at least 6 characters');
            return;
        }

        // reset error
        setRegisterError('');
        setRegisterSuccess('');

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
                <input className="border mb-4 w-3/4 py-2 px-4" type="email" name="email" placeholder="E-mail" required/> <br />
                <input className="border mb-4 w-3/4 py-2 px-4" type="password" name="password"  placeholder="Password"/> <br />
                <input className="btn btn-secondary mb-4 w-3/4" type="submit" value='Register' />
            </form>
            {
                registerError && <p className="text-red-600">{registerError}</p>
            }
            {
                registerSuccess && <p className="text-green-600">{registerSuccess}</p>
            }
           </div>
        </div>
    );
};

export default Register;