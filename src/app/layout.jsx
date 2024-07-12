import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portifolio",
  description: "Created by Caio Rezende",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
