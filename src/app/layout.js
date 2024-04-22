import Footer from './Components/Footer'
import { Navbar } from './Components/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'BIIN',
  description: 'Bangladesh ICT & Innovation Network',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
