import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Raena Cohen',
  description: 'Explore the Electronic Press Kit (EPK) of  Raena Cohen featuring their bio, music, achievements, and more.">',
  content:"Singer, Music, EPK, Electronic Press Kit, Artist",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={inter.className}>{children}</body>
    </html>
  )
}
