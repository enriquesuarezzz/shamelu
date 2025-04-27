'use client'

import { useState, useEffect } from 'react'
import { InterText } from '@/components/atoms/inter_text'
import Delete from '@/components/atoms/svg/delete'
import { useCart } from '@/components/molecules/cart_context/cart_context'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'

interface CartContentProps {
  translations: {
    title: string
    empty: string
    product: string
    quantity: string
    price: string
    remove: string
    subtotal: string
    shipping: string
    total: string
    checkout: string
  }
}

const CartContent = ({ translations }: CartContentProps) => {
  const locale = useLocale() // Use locale from next-intl
  const router = useRouter()

  // Ensure cartItems is available on client-side only
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart()
  const [clientCart, setClientCart] = useState<typeof cartItems>([])

  useEffect(() => {
    setClientCart(cartItems) // Sync cart data after mount
  }, [cartItems])

  const subtotal = clientCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )
  const shippingCost = 0
  const igic = subtotal * 0.07
  const total = subtotal + shippingCost + igic

  const handleCheckout = () => {
    // Use the locale dynamically in routing
    router.push(`/${locale}/checkout`)
  }

  return (
    <div className="mx-4 flex flex-col justify-between gap-4 pt-24 md:px-10 lg:mx-24 lg:flex-row lg:gap-20 lg:px-4 lg:pt-32">
      <div className="w-full p-1 md:p-6 lg:w-2/3">
        <InterText fontSize="28px" style="bold" className="pb-10">
          {translations.title}
        </InterText>

        {clientCart.length === 0 ? (
          <div className="mt-10 flex justify-center">
            <InterText fontSize="16px" style="bold">
              {translations.empty}
            </InterText>
          </div>
        ) : (
          <div className="w-full">
            <div className="grid grid-cols-12 border-b pb-2 text-center">
              <div className="col-span-6 text-left">
                <InterText fontSize="22px">{translations.product}</InterText>
              </div>
              <div className="col-span-4">
                <InterText fontSize="22px">{translations.quantity}</InterText>
              </div>
              <div className="col-span-2">
                <InterText fontSize="22px">{translations.price}</InterText>
              </div>
            </div>
            {clientCart.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 items-center border-b py-4"
              >
                <div className="col-span-6 flex items-center gap-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="max-h-[50px] rounded-md object-cover md:max-h-[100px]"
                  />
                  <InterText fontSize="19px">{item.name}</InterText>
                </div>
                <div className="col-span-4 flex flex-col items-center gap-1 md:gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      className="rounded bg-gray-300 px-2 py-1 text-black hover:bg-gray-400"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <InterText fontSize="16px">{item.quantity}</InterText>
                    <button
                      className="rounded bg-gray-300 px-2 py-1 text-black hover:bg-gray-400"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="flex items-center gap-1"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Delete />
                    <InterText fontSize="16px" className="text-red-500">
                      {translations.remove}
                    </InterText>
                  </button>
                </div>
                <div className="col-span-2 text-center">
                  <InterText fontSize="19px">
                    {item.price.toFixed(2)} €
                  </InterText>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {clientCart.length > 0 && (
        <div className="w-full rounded-lg bg-white p-2 pt-4 md:p-10 lg:w-1/3 lg:p-6 lg:pt-10">
          <InterText fontSize="22px" style="bold">
            {translations.total}
          </InterText>

          <div className="mt-4 flex justify-between">
            <InterText fontSize="16px">{translations.subtotal}</InterText>
            <InterText fontSize="16px">{subtotal.toFixed(2)} €</InterText>
          </div>

          <div className="mt-2 flex justify-between">
            <InterText fontSize="16px">{translations.shipping}</InterText>
            <InterText fontSize="16px">{shippingCost.toFixed(2)} €</InterText>
          </div>

          <div className="mt-2 flex justify-between">
            <InterText fontSize="16px">IGIC (7%)</InterText>
            <InterText fontSize="16px">{igic.toFixed(2)} €</InterText>
          </div>

          <div className="mt-4 flex justify-between border-t pt-4 font-bold">
            <InterText fontSize="16px">{translations.total}</InterText>
            <InterText fontSize="16px">{total.toFixed(2)} €</InterText>
          </div>

          <button
            className="mt-6 w-full rounded bg-gray-800 py-2 text-white hover:bg-gray-900"
            onClick={handleCheckout}
          >
            {translations.checkout}
          </button>
        </div>
      )}
    </div>
  )
}

export default CartContent
