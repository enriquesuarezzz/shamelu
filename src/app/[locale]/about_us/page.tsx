import { InterText } from '@/components/atoms/inter_text'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const t = await getTranslations('about_us_page')

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  }
}
export default async function AboutUs() {
  const t = await getTranslations('about_us_page')
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-8 pb-16 pt-24 md:pt-36 lg:flex-row">
        <InterText fontSize="56px" style="bold" className="max-w-[500px]">
          {t('title')}
        </InterText>
      </div>
    </section>
  )
}
