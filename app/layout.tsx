import "./globals.css";
import {titlefont} from '@/app/ui/fonts';
import {Background} from "@/components/Background";

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: "Next.js and Supabase Starter Kit",
    description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={titlefont.className}>
        <body className="bg-darkBackground text-white w-screen min-h-screen" style={{
            background: `
    radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.95) 10%, rgba(0, 0, 0, 0.82) 60%),
    radial-gradient(circle at 20% 50%, rgba(51, 129, 124, 0.2), rgba(59, 133, 71, 0.2)),
    radial-gradient(circle at 80% 50%, rgba(51, 129, 124, 0.2), rgba(59, 133, 71, 0.2)),
    linear-gradient(to right, #3B8547, #33817C)
  `,
        }}>
        <Background/>
        <main>{children}</main>
        </body>
        </html>
    );
}
