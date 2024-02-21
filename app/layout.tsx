import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Optimal App',
  description: 'Best optimization practices',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "og:url": "https://optimal-e5zlwy8am-lepifani.vercel.app/",
    "og:image": 'https://ibb.co/cJ7bHYt',
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-black font-poppins'>{children}</body>
    </html>
  )
}
