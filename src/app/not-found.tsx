import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#000000",
        color: "#ffffff",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "72px", marginBottom: "20px" }}>404</h1>
      <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Página no encontrada
      </h2>
      <p style={{ fontSize: "18px", marginBottom: "40px", maxWidth: "500px" }}>
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        style={{
          backgroundColor: "#E91E63",
          color: "#ffffff",
          padding: "15px 30px",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "background-color 0.3s",
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}
