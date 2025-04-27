import React, { ReactNode } from "react";
import Head from "next/head";

type Props = { children: ReactNode; title?: string };
export default function Layout({ children, title }: Props) {
  const modelName = process.env.NEXT_PUBLIC_MODEL_NAME || "PersistenceProtocol";
  return (
    <>
      <Head>
        <title>{title ? `${title} – ${modelName}` : modelName}</title>
        <meta name="description" content={`${modelName} frontend`} />
      </Head>
      <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <h1>{modelName} Dashboard</h1>
      </header>
      <main style={{ padding: "2rem" }}>{children}</main>
      <footer style={{ padding: "1rem", borderTop: "1px solid #ccc" }}>
        <small>© {new Date().getFullYear()} Universal-Basic-Compute</small>
      </footer>
    </>
  );
}
