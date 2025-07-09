"use client";
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react';

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <p>Fingerprint CSE demo page</p>
      <br />
      <button id="reload-fp" className="bg-blue-500 text-white p-2 rounded-md" style={{ marginBottom: 16 }}>
        Reload Fingerprint
      </button>
      <div id="visitor-id" style={{ marginTop: 16 }}></div>
      <script dangerouslySetInnerHTML={{ __html: `
        let fpPromise;
        function loadFP() {
          fpPromise = import('https://fpjscdn.net/v3/A5dUKxfbZOeQQ4vEU4AA')
            .then(FingerprintJS => FingerprintJS.load());
        }
        function getVisitorId() {
          fpPromise
            .then(fp => fp.get())
            .then(result => {
              const visitorId = result.visitorId;
              document.getElementById('visitor-id').textContent = 'VisitorId: ' + visitorId;
              console.log(visitorId);
            });
        }
        window.addEventListener('DOMContentLoaded', () => {
          loadFP();
          document.getElementById('reload-fp').addEventListener('click', () => {
            loadFP();
            setTimeout(getVisitorId, 500); // Wait for agent to load
          });
          setTimeout(getVisitorId, 1000); // Initial load
        });
      ` }} />
    </div>
  );
}