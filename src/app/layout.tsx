import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navigation/Navbar";
import { Footer3D } from "@/components/Navigation/Footer3D";
import { TabProvider } from "@/context/TabContext";

export const metadata: Metadata = {
  title: "HarGi Agro Products — Premium Agro Products Exporter from India",
  description:
    "HarGi Agro Products Private Limited is an India-based premier agro products company sourcing and exporting quality coconut derivatives, traditional jaggery, authentic spices, single-origin coffee, and superfoods to international buyers.",
  keywords: [
    "HarGi Agro",
    "HarGi Agro Products Private Limited",
    "hagitechsol.com",
    "Coconut Products Exporter India",
    "Virgin Coconut Oil",
    "Traditional Jaggery Exporter",
    "Indian Spices Exporter",
    "Tellicherry Black Pepper",
    "Alleppey Green Cardamom",
    "Single Origin Coffee India",
    "APEDA Certified Agro Exporter",
    "Agro Products South India",
    "Bulk Agro Importer",
  ],
  authors: [{ name: "HarGi Agro Products Private Limited" }],
  creator: "HarGi Agro Products Private Limited",
  openGraph: {
    title: "HarGi Agro Products — Premium Agro Products Exporter from India",
    description:
      "Natural Agro Products, Sourced with Care. Quality coconut products, traditional jaggery, authentic Indian spices, and single-origin coffee exported worldwide.",
    url: "https://hagitechsol.com/",
    siteName: "HarGi Agro Products",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f5132",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#f4f8f4] text-[#212529] antialiased min-h-screen">
        <TabProvider>
          <Navbar />
          <main className="relative min-h-[calc(100vh-80px)]">{children}</main>
          <Footer3D />
        </TabProvider>
      </body>
    </html>
  );
}
