import '@/app/ui/global.css';
import { extraBoldManrope } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${extraBoldManrope.className} antialiased`}>{children}</body>
    </html>
  );
}