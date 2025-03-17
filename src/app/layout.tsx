import Providers from "@/components/providers";
import "./globals.css";
import { Rubik } from "next/font/google";
import { Navbar } from "@/components/ui/navebar/navbar";

const rubik = Rubik({
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={rubik.className}>
                <Providers>
                    <div className="flex ">
                        <div>
                            <Navbar />
                        </div>
                        <div className="w-full p-4">{children}</div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
