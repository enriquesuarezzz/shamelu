import { getTranslations } from 'next-intl/server'
import { InterText } from '@/components/atoms/inter_text'
export async function generateMetadata() {
  const t = await getTranslations('terms_and_conditions_page')

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  }
}
export default async function TermsAndConditionsPage() {
  const t = await getTranslations('terms_and_conditions_page')

  return (
    <div className="mx-6 flex flex-col justify-center gap-4 pt-24 md:mx-20">
      {/* Title */}
      <InterText fontSize="56px" style="bold">
        {t('title')}
      </InterText>
      {/* First Paragraph */}
      <InterText fontSize="16px" className="">
        <span
          dangerouslySetInnerHTML={{
            __html: t('first_paragraph'),
          }}
        />
      </InterText>
      {/* First List */}
      <ul className="list-inside list-disc">
        <li>
          <InterText fontSize="14px" className="inline">
            {t('list_1.li_1')}
          </InterText>
        </li>
        <li>
          <InterText fontSize="14px" className="inline">
            {t('list_1.li_2')}
          </InterText>
        </li>
      </ul>
      <InterText fontSize="16px">{t('after_list')}</InterText>
      {/* Second List */}
      <ul className="list-inside list-disc">
        <li>
          <InterText fontSize="14px" className="inline">
            {t('list_2.li_1')}
          </InterText>
        </li>
        <li>
          <InterText fontSize="14px" className="inline">
            {t('list_2.li_2')}
          </InterText>
        </li>
        <li>
          <InterText fontSize="14px" className="inline">
            {t('list_2.li_3')}
          </InterText>
        </li>
      </ul>
      {/* Last Paragraph */}
      <InterText fontSize="16px" className="">
        <span
          dangerouslySetInnerHTML={{
            __html: t('last_paragraph'),
          }}
        />
      </InterText>
    </div>
  )
}
