

const Register = () => {

    const handleRegister = e => {
        e.preventDegault ();
        console.log('object');

    }


    return (
        <div className="">
           <div className="mx-auto md:w-1/2  text-center">
           <h2 className="text-3xl mb-4 text-center">Please Register</h2>
            <form onSubmit={handleRegister}>
                <input className="border mb-4 w-3/4 py-2 px-4" type="email" name="email" placeholder="E-mail"/> <br />
                <input className="border mb-4 w-3/4 py-2 px-4" type="password" name="password"  placeholder="Password"/> <br />
                <input className="btn btn-secondary mb-4 w-3/4" type="submit" value='Register' />
            </form>
           </div>
        </div>
    );
};

export default Register;