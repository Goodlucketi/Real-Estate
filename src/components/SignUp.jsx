import { Link } from "react-router-dom";

const SignUp = ({title, usertype, error, onSubmit, setFullname, setEmail, setPhone, setPwd, fullname, email, phone, pwd }) => {

    return ( 
        <div className="form px-4">
           
            <form onSubmit={onSubmit} className="auth p-6 md:w-4/12 mx-auto shadow-lg rounded-md">
                <h2 className="text-2xl md:text-3xl text-center mb-2 text-black p-2 w-9/12 rounded-md mx-auto font-sans font-bold text-blue-700">{title}</h2>
                {error && (
                        <p className="text-center text-red-600">{error}</p>
                    )}
                <div className="p-2 my-2">
                    <input type="text" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" name="fullname" value={fullname} placeholder="Fullname (Surname, Other Names)" onChange={(e)=>setFullname(e.target.value)} />
                </div>
                
                <div className="p-2 my-2">
                    <input type="email" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" name="email" value={email} placeholder="Eamil" onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div className="p-2 my-2">
                    <input type="text" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" name="phone" value={phone} placeholder="Phone Number" onChange={(e)=>setPhone(e.target.value)} />
                </div>

                <div className="p-2 my-2">
                    <input type="text" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" name="pwd" value={pwd} placeholder="Password" onChange={(e)=>setPwd(e.target.value)} />
                </div>

                <div className="p-2 my-2">
                    <input type="submit" value="Sign Up" className="p-3 rounded-md border-none w-full bg-blue-700 text-white hover:bg-blue-500 transition-all duration-500" />
                </div>
                <p className="p-2 text-center text-black">Already Have An Account? <Link to={`/${usertype}`} className="text-blue-700">Login</Link></p>
                <div className="privacy flex justify-center gap-10 mx-auto mb-3">
                    <p className="text-sm text-blue-700 p2">Privacy Policy</p>
                    <p className="text-sm text-blue-700 p2">Terms of Service</p>
                </div>

                <p className="p-2 text-center text-black">Need Assistance? <Link to="/support" className="text-blue-700">Contact Support</Link></p>
            </form>
           
            
        </div>
    );
}


export default SignUp;