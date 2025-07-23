// src/Dashboard.js (veya src/components/Dashboard.js)
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Çıkış (Logout) işlemi
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // localStorage'dan token'ı sil
    navigate("/login"); // Kullanıcıyı giriş sayfasına geri yönlendir
  };

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        backgroundColor: "whitesmoke",
        borderRadius: "10px",
        maxWidth: "600px",
        margin: "50px auto",
      }}
    >
      <h1>Dashboard'a Hoş Geldiniz!</h1>
      <p>Başarılı bir şekilde giriş yaptınız.</p>
      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          backgroundColor: "midnightblue",
          color: "white",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
          fontSize: "1em",
          fontWeight: "bold",
        }}
      >
        Çıkış Yap
      </button>
    </div>
  );
};

export default Dashboard;
