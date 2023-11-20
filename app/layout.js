import { Inter } from 'next/font/google'
import { bai_jamjure } from './ui/fonts.js'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bai_jamjure.className}`}>{children}</body>
    </html>
  )
}
