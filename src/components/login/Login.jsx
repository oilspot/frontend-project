export default function Login() {

    return (
        <>
            <h1>Sign in</h1>

            <div className="dflex col-md-6 col-xl-3 justify-content-center">
                <form>
                    <label htmlFor="email">Email address</label>
                    <input type="text" name="email" className="form-control" placeholder="Enter your email" required></input>

                    <label htmlFor="password">Password</label> Forgot?
                    <input type="password" name="password" className="form-control" placeholder="Enter your password" required></input>

                    <button type="submit" className="btn btn-success">Login</button>

                    <p>New here? Signup</p>
                </form>
            </div>
        </>
    );
}