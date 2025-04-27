import Header from '@/components/molecules/header/header'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const t = await getTranslations('home_page')

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  }
}

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[1520px] flex-col">
      <Header />
    </main>
  )
}
