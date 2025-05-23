import { Locale, routing } from '@/i18n/routing'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import './globals.css'
import Navbar from '@/components/molecules/navbar/navbar'
import { Barlow, Geist_Mono } from 'next/font/google'

import { CartProvider } from '@/components/molecules/cart_context/cart_context'
import CookiesPopup from '@/components/molecules/cookies_pop_up/cookies_pop_up'
import Footer from '@/components/molecules/footer/footer'

const BarlowText = Barlow({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-barlow',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { locale: Locale }
}>) {
  const { locale } = await params
  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  // Get all translations (messages)
  const messages = await getMessages()

  // Fetch translations for the navbar specifically
  const navbarTranslations = messages.navbar as {
    home: string
    about_us: string
    collections: string
    shop: string
    select_language: string
    search_bar: {
      search_placeholder: string
      no_results: string
    }
    cart: {
      title: string
      empty: string
      remove: string
      quantity: string
      subtotal: string
    }
  }

  const cookiesTranslations = messages.cookies_popup as {
    title: string
    message: string
    accept: string
    reject: string
  }

  return (
    <html lang={locale}>
      <body className={`${BarlowText.variable} ${geistMono.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <CartProvider>
            <Navbar translations={navbarTranslations} />
            <main className="flex-1">{children}</main>
          </CartProvider>
          <CookiesPopup translations={cookiesTranslations} />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
