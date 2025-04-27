import { useEffect, useState } from "react";

type Health = { status: string; version: string };

export default function Home() {
  const [health, setHealth] = useState<Health | null>(null);

  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.json())
      .then(setHealth)
      .catch(() => setHealth({ status: "error", version: "n/a" }));
  }, []);

  return (
    <section>
      <h2>Service Health</h2>
      {health ? (
        <pre>{JSON.stringify(health, null, 2)}</pre>
      ) : (
        <p>Loading…</p>
      )}
    </section>
  );
}
