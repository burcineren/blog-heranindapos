import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginService } from "../services/authService";
import { AuthContext } from "../context/AuthContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const user = await loginService(email, password);
      login(user);
      navigate("/posts");
    } catch (err) {
      setError("Kullanıcı bulunamadı. Lütfen doğru e-posta girin.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="container my-4">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-Posta
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="ornek@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Şifre
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Şifrenizi girin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">
          Giriş Yap
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
