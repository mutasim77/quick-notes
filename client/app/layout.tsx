import './css/style.css'

import { Inter } from 'next/font/google';
import Header from '@/components/ui/Header';
import { cookies } from 'next/headers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'QuickNotes - Organize Your Thoughts',
  description: 'QuickNotes is your ultimate tool for organizing and managing your thoughts, ideas, and tasks effortlessly. Get started for free today!',
  keywords: ['QuickNotes', 'notes app', 'organization', 'productivity'],
  author: 'Mutasim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // TODO: Write actual logic here 👇 (preferably in middleware).
  const isAuth = !!(cookies().get('jwt')?.value);
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header isAuth={isAuth} />
          {children}
        </div>
      </body>
    </html>
  )
}
