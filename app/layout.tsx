import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'affwell — Trusted Wellness & Supplement Reviews',
  description: 'affwell provides honest, research-backed supplement reviews and wellness guides.'
}

export default function RootLayout({ children }: { children: ReactNode }){
  return (
    <html lang="en">
      <body>
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
