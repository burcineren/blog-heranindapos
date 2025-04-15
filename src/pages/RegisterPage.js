import React, { useState } from "react";
import { register as registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const data = await registerUser(name, email, password);
      console.log("Kayıt başarılı:", data);
      setSuccess(true);
      setTimeout(() => navigate("/posts"), 500);
    } catch (err) {
      setError("Kayıt işlemi başarısız oldu. Bilgilerinizi kontrol edin.");
      console.error("Register error:", err);
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Kayıt Ol</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            İsim
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ad Soyad"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-Posta
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="ornek@email.com"
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
            className="form-control"
            id="password"
            placeholder="Şifreniz"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">Kayıt başarılı!</div>}

        <button type="submit" className="btn btn-primary">
          Kayıt Ol
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
