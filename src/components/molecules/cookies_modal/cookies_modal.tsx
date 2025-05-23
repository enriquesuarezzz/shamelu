'use client'
import { COOKIE_CONSENT, CookieClient } from '@/utils/cookie'
import { useState, useEffect } from 'react'
import { Open_Sans } from 'next/font/google'
import { InterText } from '@/components/atoms/inter_text'
import Cookies from '@/components/atoms/svg/cookies'

export const openSans = Open_Sans({ subsets: ['latin'] })

export interface CookiesModalProps {
  checked: boolean
  translations: {
    title: string
    message: string
    accept: string
    reject: string
  }
}

export default function CookiesModal({ translations }: CookiesModalProps) {
  const [showModal, setShowModal] = useState(false)

  // Check the cookie when the component mounts
  useEffect(() => {
    const cookieConsent = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${COOKIE_CONSENT}=`))

    // If cookie exists, set showModal to false
    if (cookieConsent) {
      setShowModal(false)
    } else {
      setShowModal(true) // Show the modal if cookie doesn't exist
    }
  }, [])

  const handleAcceptCookie = () => {
    CookieClient.setCookie(COOKIE_CONSENT, 'true', 365) // Set the cookie for 1 year
    setShowModal(false) // Hide the modal
  }

  const handleCancelCookie = () => {
    CookieClient.deleteCookie(COOKIE_CONSENT) // Delete the cookie if declined
    setShowModal(false) // Hide the modal
  }

  return (
    showModal && (
      <div className="fixed bottom-0 left-0 z-40 flex h-fit w-fit flex-col justify-between gap-6 rounded-t-3xl bg-gray-600/25 px-6 py-10 backdrop-blur-sm md:bottom-4 md:left-4 md:rounded-3xl">
        <div className="flex h-fit w-full max-w-[300px] flex-col gap-10">
          {/* Title + description */}
          <div className="flex h-fit w-full flex-col gap-5 text-center">
            <div className="flex items-center justify-center gap-4">
              {/* Title */}
              <InterText
                fontSize="32px"
                className="text-gold max-w-[500px] text-center"
              >
                {translations.title}
              </InterText>
              <Cookies />
            </div>
            {/* Description */}
            <div className="flex h-fit w-full flex-col gap-4">
              <InterText
                fontSize="14px"
                className="text-gold max-w-[500px] text-center"
              >
                {translations.message}
              </InterText>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex h-fit w-full flex-row justify-center gap-5">
            {/* Decline */}
            <button
              className="hover:bg-gold flex h-fit flex-col items-center justify-center border border-white px-3 py-2 text-white hover:bg-black md:px-9 md:py-3"
              onClick={handleCancelCookie}
            >
              <InterText fontSize="14px" className="max-w-[500px] text-center">
                {translations.reject}
              </InterText>
            </button>
            {/* Accept */}
            <button
              className="hover:bg-gold flex h-fit flex-col items-center justify-center border bg-black px-3 py-2 text-white hover:bg-transparent hover:text-black md:px-9 md:py-3"
              onClick={handleAcceptCookie}
            >
              <InterText fontSize="14px" className="max-w-[500px] text-center">
                {translations.accept}
              </InterText>
            </button>
          </div>
        </div>
      </div>
    )
  )
}
