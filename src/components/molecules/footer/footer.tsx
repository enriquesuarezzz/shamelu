import { InterText } from '@/components/atoms/inter_text'
import { Link } from '@/i18n/routing'
import { getTranslations } from 'next-intl/server'
import Instagram from '@/components/atoms/svg/instagram'
import Phone from '@/components/atoms/svg/phone'
import Whatsapp from '@/components/atoms/svg/whatsapp'
import Image from 'next/image'

export default async function Footer() {
  const t = await getTranslations('footer')
  return (
    <footer className="bottom-0 mt-4 w-full items-center bg-white md:mt-12 lg:mt-20">
      <div className="mx-auto max-w-screen-xl items-center p-4 md:py-8">
        {/* Navigation Links */}
        <div className="flex flex-col items-center justify-center">
          <div className="mb-2 mt-2 grid w-full grid-cols-2 items-center justify-center justify-items-center gap-3 md:mt-0 md:flex md:gap-4 lg:gap-10">
            {/* Home Link */}
            <Link href="/">
              <InterText
                fontSize="16px"
                className="relative block w-fit pl-2 text-black transition-colors duration-300 hover:text-electric_blue"
              >
                {t('home')}
              </InterText>
            </Link>
            {/* About Us Link */}
            <Link href="/collections">
              <InterText
                fontSize="16px"
                className="relative block w-fit pl-2 text-black transition-colors duration-300 hover:text-electric_blue"
              >
                {t('collections')}
              </InterText>
            </Link>
            {/* Products Link */}
            <Link href="/shop">
              <InterText
                fontSize="16px"
                className="relative block w-fit pl-2 text-black transition-colors duration-300 hover:text-electric_blue"
              >
                {t('shop')}
              </InterText>
            </Link>
            {/* About Us Link */}
            <Link href="/about_us">
              <InterText
                fontSize="16px"
                className="relative block w-fit pl-2 text-black transition-colors duration-300 hover:text-electric_blue"
              >
                {t('about_us')}
              </InterText>
            </Link>
            {/* Cookies Link */}
            <Link href="/cookies_policy">
              <InterText
                fontSize="16px"
                className="relative block w-fit pl-2 text-black transition-colors duration-300 hover:text-electric_blue"
              >
                {t('cookies')}
              </InterText>
            </Link>
            {/* Privacy Policy Link */}
            <Link href="/privacy_policy">
              <InterText
                fontSize="16px"
                className="relative block w-fit pl-2 text-black transition-colors duration-300 hover:text-electric_blue"
              >
                {t('privacy')}
              </InterText>
            </Link>
            {/* Terms and conditions Link */}
            <Link href="/terms_and_conditions">
              <InterText
                fontSize="16px"
                className="relative block w-fit pl-2 text-black transition-colors duration-300 hover:text-electric_blue"
              >
                {t('terms_and_conditions')}
              </InterText>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-3 border-black lg:my-8" />
        {/* Social Media Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 md:gap-6 md:pt-4">
          {/* Phone Link */}
          <a
            href="tel:+34670082769"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 transition-all duration-300 hover:scale-105"
          >
            {/* Phone Icon */}
            <Phone className="my-auto h-5 w-5 transition-all duration-300 ease-in-out hover:scale-110" />
            {/* Phone Number */}
            <InterText
              fontSize="16px"
              className="relative block w-fit pl-2 text-black transition-colors duration-300 hover:text-electric_blue"
            >
              +34 670082769
            </InterText>
          </a>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/shameluu___/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 transition-all duration-300 hover:scale-105"
            aria-label="Shamelu Instagram"
          >
            {/* Instagram Icon */}
            <Instagram className="my-auto h-5 w-5 transition-all duration-300 ease-in-out hover:scale-110" />
          </a>
          {/* Whatsapp Link */}
          <a
            href="https://wa.me/670082769"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 transition-all duration-300 hover:scale-105"
          >
            {/* Whatsapp Icon */}
            <Whatsapp className="my-auto h-5 w-5 transition-all duration-300 ease-in-out hover:scale-110" />
            {/* Whatsapp Number */}
            <InterText
              fontSize="16px"
              className="relative block w-fit pl-2 text-black transition-colors duration-300 hover:text-electric_blue"
            >
              670082769
            </InterText>
          </a>
        </div>

        {/* Second Divider */}
        <div className="flex justify-center">
          <hr className="mt-4 w-32 border-black md:mt-8" />
        </div>

        <div className="flex items-center justify-center gap-6 pt-4">
          <InterText fontSize="16px" className="text-black">
            Shamelu © 2025
          </InterText>
          <div className="flex items-center gap-2">
            <InterText fontSize="16px" className="text-black">
              Created by{' '}
            </InterText>
            <a
              href="https://www.enriquesuarez.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/es_black.avif"
                alt="created by ES logo"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
