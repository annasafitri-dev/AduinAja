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

        