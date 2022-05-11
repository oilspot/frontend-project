import './login.css';
import { Link } from 'react-router-dom';

export default function Login() {

    return (
        <div className="form-login-background">
            
            <h1>Sign in</h1>
                
            <div className="form-login d-flex justify-content-center">

                <div className="col-md-6 col-xl-3">

                    <form>
                        <label htmlFor="email">Email address</label>
                        <input type="text" name="email" placeholder="Enter your email" required></input>

                        <div classname="justify-content-between">
                            <label htmlFor="password">Password</label> <span>Forgot?</span>
                        </div>
                        <input type="password" name="password" placeholder="Enter your password" required></input>
    
                        <div className="text-center m-5">
                            <Link to={"/create"}><button type="submit" className="btn-green">Login</button></Link>
                        </div>
                        <div className="text-center m-5">
                            <p>New here? <Link to={"/register"}>Signup</Link></p>
                        </div>

                    </form>
                </div>
            </div>
                
            
        </div>
    );
}