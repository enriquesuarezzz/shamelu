import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { InterText } from '@/components/atoms/inter_text'

export default async function Header() {
  const t = await getTranslations('home_page')

  const images = [
    {
      src: '/images/header/header_image1.avif',
      alt: 'Model in black dress',
      captionKey: 'header.image1_title',
      offset: 'translate-y-10',
    },
    {
      src: '/images/header/header_image2.avif',
      alt: 'Model in white outfit',
      captionKey: 'header.image2_title',
      offset: '-translate-y-12',
    },
    {
      src: '/images/header/header_image3.avif',
      alt: 'Model in urban setting',
      captionKey: 'header.image3_title',
      offset: 'translate-y-16',
    },
    {
      src: '/images/header/header_image4.avif',
      alt: 'Studio portrait',
      captionKey: 'header.image4_title',
      offset: '-translate-y-20',
    },
  ]

  return (
    <>
      <div className="mt-44 box-border grid h-full w-full grid-cols-2 gap-10 px-6 py-2 md:mt-64 md:grid-cols-4 md:gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative transform ${image.offset} flex flex-col items-center transition duration-500`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={800}
              className="h-[60vh] w-full rounded-md object-cover transition-transform duration-500 hover:rotate-1 hover:scale-110 hover:shadow-2xl"
            />
            <InterText tag="h1" fontSize="16px" className="pt-4 text-black">
              {t(image.captionKey)}
            </InterText>
          </div>
        ))}
      </div>
      <div className="flex items-end justify-center pt-20">
        <InterText
          tag="h1"
          fontSize="192px"
          className="text-black"
          style="bold"
        >
          <span className="inline">SHAME</span>
          <span className="inline text-gray-400">LU</span>
        </InterText>
      </div>
    </>
  )
}
