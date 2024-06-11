import type { Metadata } from "next";
import Script from "next/script";
import "./style/style.scss";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Kids Website",
  description: "Kids Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.6.0/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        />
        s
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lily+Script+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poller+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Suspense>
          <>{children}</>
        </Suspense>
      </body>
    </html>
  );
}
