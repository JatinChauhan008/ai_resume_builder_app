
import "./globals.css";


export const metadata = {
  title: "AI Resume Builder",
  description: "Create professional resumes using AI",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
