import type { Metadata, Viewport } from 'next'
import { Inter, Covered_By_Your_Grace } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const coveredByYourGrace = Covered_By_Your_Grace({ 
  weight: "400",
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HELENTÄ | Built After Midnight',
  description: 'Underground luxury streetwear. Oversized silhouettes. Chrome graphics. Late-night energy.',
  keywords: ['streetwear', 'fashion', 'underground', 'luxury', 'cyberpunk', 'clothing'],
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${coveredByYourGrace.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
