"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      email === "annasafitri@gmail.com" &&
      password === "123456"
    ) {
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("nama", "Anna Safitri");
      localStorage.setItem("email", email);
      localStorage.setItem("telepon", "081234567890");

      router.push("/");
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f172a,#2563eb)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          width: "350px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2563eb",
          }}
        >
          Login AduinAja!
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}