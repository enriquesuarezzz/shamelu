'use client'
import { InterText } from '@/components/atoms/inter_text'
import { Link } from '@/i18n/routing'
import LocaleSwitcher from '../locale_switcher/locale_switcher'
import Cart from '@/components/atoms/svg/cart'
import SearchBar from '../search_bar/search_bar'
import { useCart } from '@/components/molecules/cart_context/cart_context'
import { MobileMenu } from './mobile_navbar'
import { useState, useEffect } from 'react'
import Delete from '@/components/atoms/svg/delete'
import Image from 'next/image'

interface NavBarProps {
  translations: {
    home: string
    collections: string
    shop: string
    about_us: string
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
}

export default function NavBar({ translations }: NavBarProps) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cartItems, removeFromCart } = useCart()
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const calculatedTotal = cartItems.reduce((total, item) => {
      const price = Number(item.price) || 0
      const quantity = Number(item.quantity) || 1
      return total + price * quantity
    }, 0)
    setTotalPrice(calculatedTotal)
  }, [cartItems])

  const formattedTotalPrice = totalPrice.toFixed(2)

  return (
    <div className="fixed left-0 top-0 z-50 flex w-full flex-row items-center justify-between border-b border-neutral-200 bg-white px-6 py-8 text-white md:px-20">
      <div className="flex w-full items-center justify-between">
        {/* Left Section: Logo + Nav Links */}
        <div className="flex items-center gap-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.avif" alt="Logo" width={100} height={60} />
          </Link>
          <div className="hidden items-center gap-16 md:flex">
            <Link href="/">
              <InterText
                tag="h1"
                fontSize="16px"
                className="text-black transition-colors duration-300 hover:text-[#1bdddd]"
              >
                {translations.home}
              </InterText>
            </Link>
            <Link href="/collections">
              <InterText
                tag="h1"
                fontSize="16px"
                className="text-black transition-colors duration-300 hover:text-[#1bdddd]"
              >
                {translations.collections}
              </InterText>
            </Link>
            <Link href="/shop">
              <InterText
                tag="h1"
                fontSize="16px"
                className="text-black transition-colors duration-300 hover:text-[#1bdddd]"
              >
                {translations.shop}
              </InterText>
            </Link>
            <Link href="/about_us">
              <InterText
                tag="h1"
                fontSize="16px"
                className="text-black transition-colors duration-300 hover:text-[#1bdddd]"
              >
                {translations.about_us}
              </InterText>
            </Link>
          </div>
        </div>

        {/* Right Section: Search, Cart, Locale */}
        <div className="hidden items-center gap-6 md:flex">
          <SearchBar
            searchPlaceholder={translations.search_bar.search_placeholder}
            noResults={translations.search_bar.no_results}
          />
          <button aria-label="Add to Cart" onClick={() => setIsCartOpen(true)}>
            <Cart />
          </button>
          <LocaleSwitcher />
        </div>
      </div>

      {/* Mobile Menu still goes here if needed */}
      <MobileMenu
        translations={{
          home: translations.home,
          about_us: translations.about_us,
          collections: translations.collections,
          shop: translations.shop,
          select_language: translations.select_language,
          search_placeholder: translations.search_bar.search_placeholder,
          no_results: translations.search_bar.no_results,
          title: translations.cart.title,
          empty: translations.cart.empty,
          remove: translations.cart.remove,
          quantity: translations.cart.quantity,
          subtotal: translations.cart.subtotal,
        }}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />

      {/* Cart Summary */}
      {isCartOpen && (
        <div className="fixed right-0 top-0 z-50 h-full w-full max-w-[500px] bg-white text-black shadow-lg transition-transform">
          <button
            aria-label="Close Cart"
            onClick={() => setIsCartOpen(false)}
            className="absolute right-4 top-4 mt-2 text-lg"
          >
            ✖
          </button>
          <div className="flex h-full flex-col p-4">
            <InterText
              tag="h1"
              fontSize="19px"
              className="mx-auto mt-2 w-fit text-black"
            >
              {translations.cart.title}
            </InterText>
            <hr className="my-3 border-gray-300 lg:my-4" />
            {cartItems.length === 0 ? (
              <InterText tag="h1" fontSize="16px" style="bold">
                {translations.cart.empty}
              </InterText>
            ) : (
              <ul className="flex-1 overflow-y-auto">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between border-b p-2"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      width={25}
                      height={25}
                      className="mr-4 rounded-md"
                    />
                    <div className="flex flex-col items-center justify-center gap-4">
                      <InterText
                        tag="h1"
                        fontSize="16px"
                        className="text-center"
                      >
                        {item.name}
                      </InterText>
                      <InterText tag="h1" fontSize="16px">
                        {translations.cart.quantity} {item.quantity}
                      </InterText>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                      <InterText tag="h1" fontSize="16px">
                        {item.price} €
                      </InterText>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove from Cart"
                        className="flex items-center justify-center space-x-2"
                      >
                        <Delete />
                        <InterText
                          tag="h1"
                          fontSize="16px"
                          className="text-red-500"
                        >
                          {translations.cart.remove}
                        </InterText>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="mb-6 mt-4 border-t pt-4">
              <div className="flex justify-between">
                <InterText tag="h1" fontSize="16px" className="font-bold">
                  {translations.cart.subtotal}
                </InterText>
                <InterText tag="h1" fontSize="16px" className="font-bold">
                  {formattedTotalPrice} €
                </InterText>
              </div>
              <Link href="/cart">
                <button
                  className="mt-4 w-full rounded-md bg-gray-800 px-4 py-2 hover:bg-gray-900"
                  onClick={() => setIsCartOpen(false)}
                  aria-label="Continue to Cart"
                >
                  <InterText tag="h1" fontSize="16px" className="text-white">
                    {translations.cart.title}
                  </InterText>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
