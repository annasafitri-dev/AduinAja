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
