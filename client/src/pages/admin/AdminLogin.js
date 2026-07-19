import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const submit = async (e) => {
        e.preventDefault();
        setError("");
        const response = await fetch(
            `${process.env.REACT_APP_LOCAL_HOST}/api/admin/login`,
            {
                method: "POST", headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            }
        );
        const result = await response.json();
        if (!result.success) {
            setError(result.message);
            return;
        }
        localStorage.setItem("adminToken", result.token);
        localStorage.setItem("staff", JSON.stringify(result.staff));
        navigate("/admin");
    };
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h3>                               Admin Login                          </h3>
                            <form onSubmit={submit}>
                                <input
                                    className="form-control mb-3"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    className="form-control mb-3"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {error && <div className="alert alert-danger">                                      {error}                                 </div>}
                                <button className="btn btn-dark w-100"                              >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;