import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeModeScript } from 'flowbite-react';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
    <head>
      <ThemeModeScript />
    </head>
    <body>{children}</body>
  </html>
  )
}
