import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './common/layout/Header'
import Footer from './common/layout/Footer'
import ThemeProviders from './common/layout/Providers'
import SessionProviders from './common/session/Providers'

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
    <html lang="ko">
      <body className={`text-black body-font dark:text-white transition-colors duration-300 ${inter.className}`}>
        <SessionProviders>
          <ThemeProviders>
            <Header />
            <main className='h-full min-h-screen mt-10'>
              <section className="text-black body-font dark:text-gray-300">
                <div className="w-full md:max-w-[768px] lg:max-w-[1024px] p-12 mx-auto min-h-screen">
                  {children}
                </div>
              </section>
            </main>
            <Footer />
          </ThemeProviders>
        </SessionProviders>
      </body>
    </html>
  )
}
