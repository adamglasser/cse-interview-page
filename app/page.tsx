"use client";
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react';

export default function Home() {
  const { getData } = useVisitorData(
    { extendedResult: true },
    { immediate: true }
  );

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <p>Fingerprint CSE demo page</p>
      <br></br>
      <button onClick={() => getData({ ignoreCache: true })} className="bg-blue-500 text-white p-2 rounded-md" style={{ marginBottom: 16 }}>
        Reload Fingerprint
      </button>
    </div>
  );
}