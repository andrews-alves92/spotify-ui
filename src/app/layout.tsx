
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./globals.scss";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import usePlayer from "./context-providers/PlayerContextProvider/usePlayer";
import { useUserStore } from "./stores/useUserStore";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spotify Design",
  description: "Spotify Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { currentPlayingSong, elapsed } = usePlayer();
  // const savePlayingSong = useUserStore((state) => state.savePlayingSong);
  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     if (currentPlayingSong) {
  //       savePlayingSong({ ...currentPlayingSong, elapsed });
  //     }
  //   };
  //   window.addEventListener("beforeunload", handleBeforeUnload);
  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  return (
    <html lang="en">
      <body data-bs-theme="dark" className={inter.className}>
        <div className="container-fluid h-100 d-flex flex-column">
          <div className="row">
            <div className="col-12">
              <Navbar />
            </div>
          </div>

          <div className="row flex-grow-1">
            <div style={{ width: 270 }}>
              <Sidebar />
            </div>

            <div className="col d-flex flex-column px-3 pb-2">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
