import Link from "next/link";

const Page404 = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
  >
    <h1
      style={{
        fontSize: "5rem",
        letterSpacing: "0.2rem",
        marginBottom: "0",
      }}
    >
      404
    </h1>
    <p>This page does not exist.</p>
    <Link href="/">Go back to the home page</Link>
  </div>
);

export default Page404;
