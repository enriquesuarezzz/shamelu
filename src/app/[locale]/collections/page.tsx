import { InterText } from '@/components/atoms/inter_text'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const t = await getTranslations('collections_page')

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  }
}

export default async function CookiesPolicyPage() {
  const t = await getTranslations('collections_page')

  return (
    <div className="flex">
      {/* title */}
      <InterText fontSize="56px" style="bold">
        {t('title')}
      </InterText>
    </div>
  )
}
