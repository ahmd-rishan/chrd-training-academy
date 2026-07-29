import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CHRD Training Academy Admin Panel',
  description: 'Custom CMS & Content Management System for CHRD Training Academy, Malappuram.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" class="dark">
      <body class="bg-[#0B1120] text-[#F8FAFC] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
