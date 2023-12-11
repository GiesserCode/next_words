import "./globals.css";
import {titlefont} from '@/app/ui/fonts';

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
        <body className="bg-darkBackground text-white">
        <main>{children}</main>
        </body>
        </html>
    );
}
