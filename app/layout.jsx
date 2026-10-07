import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Plainsight Studio | Brand, UI/UX and Web Design Agency",
    template: "%s | Plainsight Studio",
  },
  description:
    "Plainsight Studio is a design agency creating brand identities, interfaces and fast, responsive websites for businesses that want to be noticed.",
  keywords: ["design agency", "UI/UX design", "web development", "branding", "digital marketing"],
  openGraph: {
    title: "Plainsight Studio",
    description: "We design brands and build websites that are hard to overlook.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${figtree.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
