import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import { Archivo_Narrow, Julius_Sans_One } from "next/font/google";

const archivo_narrow = Archivo_Narrow({ subsets: ["latin"] });
const julius_sans_one = Julius_Sans_One({ subsets: ["latin"], weight:'400' });

export const metadata: Metadata = {
  title: "Kevin Chan",
  description: "Home of the great developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Kevin Chan</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <meta name="description" content="Home of the great" />
        <meta name="author" content="Kevin Chan" />

        <meta property="og:title" content="Kevin Chan" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kevinwochan.com/" />
        <meta property="og:site_name" content="Kevin Chan" />
        <link rel="icon" href="../images/kevin.jpeg" />
     </Head>
      <body>{children}</body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=UA-96773019-2" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'UA-96773019-2');
        `}
      </Script>
    </html>
  );
}
