export default function Register() {
    return (
        <>
        <h1>Create an account</h1>

        <div className="dflex col-md-3">
            <form>
                <label htmlFor="name">Full name</label>
                <input type="text" name="name" className="form-control" placeholder="Enter your name" required></input>

                <label htmlFor="email">Email address</label>
                <input type="text" name="email" className="form-control" placeholder="Enter your email" required></input>

                <label htmlFor="new-password">New Password</label>
                <input type="password" name="new-password" className="form-control" placeholder="Enter your password" required></input>

                <button type="submit" className="btn btn-success">Signup</button>

                <p>Already user? Login</p>
            </form>
        </div>
    </>
    )
}