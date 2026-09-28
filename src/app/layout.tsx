import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ModeProvider } from "@/context/ModeContext";
import { SoundProvider } from "@/components/UI/SoundManager";
import { Navbar } from "@/components/Navigation/Navbar";
import { CustomCursor } from "@/components/Navigation/CustomCursor";
import { SmoothScrollProvider } from "@/components/UI/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "NAREN KG — AI / ML Developer & Automation Engineer",
  description:
    "Official Portfolio of NAREN KG. AI/ML Developer & Automation Engineer specializing in Deep Learning, Agentic AI, Computer Vision, and Autonomous Workflows. Proven expertise with 5+ production-ready AI agents deployed on Hugging Face Spaces.",
  keywords: [
    "NAREN KG",
    "AI ML Developer",
    "Automation Engineer",
    "Deep Learning",
    "Agentic AI",
    "LangChain",
    "LangGraph",
    "PyTorch",
    "TensorFlow",
    "Computer Vision",
    "Hugging Face Spaces",
    "Python",
    "FastAPI",
    "Angular",
    "PostgreSQL",
    "Chroma DB",
    "n8n",
  ],
  authors: [{ name: "NAREN KG" }],
  creator: "NAREN KG",
  openGraph: {
    title: "NAREN KG — AI / ML Developer & Automation Engineer",
    description:
      "Autonomous Intelligence. Scalable Systems. Limitless Innovation. Interactive portfolio showcasing Deep Learning models, 5+ Hugging Face AI Agents, and Computer Vision pipelines.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050505] text-[#f5f5f5] antialiased selection:bg-brand-orange selection:text-white">
        <SmoothScrollProvider>
          <ModeProvider>
            <SoundProvider>
              <CustomCursor />
              <Navbar />
              <main className="relative">{children}</main>
            </SoundProvider>
          </ModeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
