import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }
    login({ email, senha });
    navigate("/");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "#1e1e2e",
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#2a2a3e",
          padding: "40px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "320px",
          color: "#fff",
        }}
      >
        <h2 style={{ margin: 0, textAlign: "center" }}>Login</h2>

        {erro && <p style={{ color: "#f88", margin: 0 }}>{erro}</p>}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #444",
            background: "#1e1e2e",
            color: "#fff",
          }}
        />

        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #444",
            background: "#1e1e2e",
            color: "#fff",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            background: "#7c3aed",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
