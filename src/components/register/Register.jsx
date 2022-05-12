import { Link } from "react-router-dom";

    /**
     * Register component renders a register form (front end demo only). 
     */

export default function Register() {
    return (
        <div className="form-login-background">

            <h1>Create an account</h1>

            <div className="form-login d-flex justify-content-center">

                <div className="col-md-6 col-xl-3">

                    <form>
                        <label htmlFor="name">Full name</label>
                        <input type="text" name="name" placeholder="Enter your name" required></input>

                        <label htmlFor="email">Email address</label>
                        <input type="text" name="email" placeholder="Enter your email" required></input>

                        <label htmlFor="new-password">New Password</label>
                        <input type="password" name="new-password" placeholder="Enter your password" required></input>

                        <div className="text-center m-5">
                            <button type="submit" className="btn-green">Signup</button>
                        </div>
                        <div className="text-center m-5">
                        <p>Already user? <Link to={'/'}>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
    </div>
    )
}