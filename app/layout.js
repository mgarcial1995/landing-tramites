import { Inter } from 'next/font/google'
import { bai_jamjure } from './ui/fonts.js'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Trámites a Perú',
  description: 'Divorcios, certificados, antecedentes, entre otros, de peruanos en el extranjero o extranjeros en Perú.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bai_jamjure.className}`}>
        {children}
      </body>
    </html>
  )
}
