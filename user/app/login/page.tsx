"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  function handleLogin() {
    router.push("/");
  }

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}