import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Side Project Accountability Tracker",
  description: "Accountability system for quarantine side projects. Track progress, set milestones, and stay on track with peer accountability."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2a5d156c-1241-40d4-a34f-170f5bd46f02"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
