import { InterText } from '@/components/atoms/inter_text'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const t = await getTranslations('cookies_policy_page')

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  }
}

export default async function CookiesPolicyPage() {
  const t = await getTranslations('cookies_policy_page')

  return (
    <div className="mx-4 flex flex-col justify-center gap-8 pt-24 md:mx-20">
      {/* title */}
      <InterText fontSize="56px" style="bold">
        {t('title')}
      </InterText>
      {/* description */}
      <InterText fontSize="14px">{t('description')}</InterText>
      {/* first table of cookies */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-max border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {' '}
                  {t('first_table.headers.0')}
                </InterText>
              </th>
              <th className="border border-gray-300 px-4 py-2"></th>
              <th className="border border-gray-300 px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.0.category')}
                </InterText>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.0.type')}
                </InterText>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.0.description')}
                </InterText>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.1.category')}
                </InterText>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.1.type')}
                </InterText>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.1.description')}
                </InterText>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.2.category')}
                </InterText>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.2.type')}
                </InterText>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.2.description')}
                </InterText>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.3.category')}
                </InterText>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.3.type')}
                </InterText>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.3.description')}
                </InterText>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.4.category')}
                </InterText>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.4.type')}
                </InterText>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.4.description')}
                </InterText>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.5.category')}
                </InterText>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.5.type')}
                </InterText>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.5.description')}
                </InterText>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.6.category')}
                </InterText>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.6.type')}
                </InterText>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.6.description')}
                </InterText>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.7.category')}
                </InterText>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.7.type')}
                </InterText>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.7.description')}
                </InterText>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.8.category')}
                </InterText>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.8.type')}
                </InterText>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <InterText fontSize="14px">
                  {t('first_table.rows.8.description')}
                </InterText>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* After table 1 */}
      <InterText fontSize="14px">{t('after_table_1')}</InterText>
      {/* Table cookies 2 */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-max border-collapse border border-gray-300 text-left">
          <tbody>
            <tr className="border border-black">
              <td
                colSpan={2}
                rowSpan={2}
                className="px-2 py-1 text-center"
              ></td>
              <td
                colSpan={4}
                className="border border-black px-2 py-1 text-center"
              >
                <InterText fontSize="14px">{t('second_table.title')}</InterText>
              </td>
            </tr>
            {/* Option 1 */}
            <tr className="border border-black">
              <td
                colSpan={1}
                className="border border-black px-2 py-1 text-center"
              >
                <InterText fontSize="14px">
                  {t('second_table.own_cookies')}
                </InterText>
              </td>
              <td
                colSpan={1}
                className="border border-black px-2 py-1 text-center"
              >
                <InterText fontSize="14px">
                  {t('second_table.third_party_cookies')}
                </InterText>
              </td>
              <td
                colSpan={1}
                className="border border-black px-2 py-1 text-center"
              >
                <InterText fontSize="14px">
                  {t('second_table.session_cookies')}
                </InterText>
              </td>
              <td
                colSpan={1}
                className="border border-black px-2 py-1 text-center"
              >
                <InterText fontSize="14px">
                  {t('second_table.session_cookies')}
                </InterText>
              </td>
            </tr>
            {/* Options */}
            <tr className="border border-black">
              <td
                colSpan={1}
                rowSpan={6}
                className="border border-black px-2 py-1 text-center"
              >
                <InterText fontSize="14px" className="">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t('second_table.subtitle'),
                    }}
                  />
                </InterText>
              </td>
            </tr>
            {/* First */}
            <tr className="border border-black">
              <td className="border border-black px-2 py-1 text-center">
                <InterText fontSize="14px">
                  {t('second_table.technical_cookies')}
                </InterText>
              </td>
              <td className="border border-black px-2 py-1 text-center">√</td>
              <td className="border border-black px-2 py-1 text-center"></td>
              <td className="border border-black px-2 py-1 text-center"></td>
              <td className="border border-black px-2 py-1 text-center"></td>
            </tr>
            {/* Second */}
            <tr className="border border-black">
              <td className="border border-black px-2 py-1 text-center">
                <InterText fontSize="14px">
                  {t('second_table.personalization_cookies')}
                </InterText>
              </td>
              <td className="border border-black px-2 py-1 text-center"></td>
              <td className="border border-black px-2 py-1 text-center"></td>
              <td className="border border-black px-2 py-1 text-center"></td>
              <td className="border border-black px-2 py-1 text-center"></td>
            </tr>
            {/* Third */}
            <tr className="border border-black">
              <td className="border border-black px-2 py-1 text-center">
                <InterText fontSize="14px">
                  {t('second_table.analysis_cookies')}
                </InterText>
              </td>
              <td className="border border-black px-2 py-1 text-center">√</td>
              <td className="border border-black px-2 py-1 text-center"></td>
              <td className="border border-black px-2 py-1 text-center"></td>
              <td className="border border-black px-2 py-1 text-center"></td>
            </tr>
            {/* Fourth */}
            <tr className="border border-black">
              <td className="border border-black px-2 py-1 text-center">
                <InterText fontSize="14px">
                  {t('second_table.advertising_cookies')}
                </InterText>
              </td>
              <td className="border border-black px-2 py-1 text-center"></td>
              <td className="border border-black px-2 py-1 text-center"></td>
              <td className="border border-black px-2 py-1 text-center"></td>
              <td className="border border-black px-2 py-1 text-center"></td>
            </tr>
            {/* Fifth */}
            <tr className="border border-black">
              <td className="border border-black px-2 py-1 text-center">
                <InterText fontSize="14px">
                  {t('second_table.behavioural_advertising_cookies')}
                </InterText>
              </td>
              <td className="border border-black px-2 py-1 text-center"></td>
              <td className="border border-black px-2 py-1 text-center"></td>
              <td className="border border-black px-2 py-1 text-center"></td>
              <td className="border border-black px-2 py-1 text-center"></td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* After table */}
      <InterText fontSize="14px">{t('after_table_2')}</InterText>
      {/* Links */}
      <InterText fontSize="14px">
        <a
          href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we"
          target="_blank"
          className="hover:text-hover_gold text-gray-600"
        >
          https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we
        </a>
        <br />
        <a
          href="https://support.google.com/chrome/bin/answer.py?hl=es&answer=95647"
          target="_blank"
          className="hover:text-hover_gold text-gray-600"
        >
          https://support.google.com/chrome/bin/answer.py?hl=es&answer=95647
        </a>
        <br />
        <a
          href="https://windows.microsoft.com/es-es/internet-explorer/delete-manage-cookies#ie=ie-10"
          target="_blank"
          className="hover:text-hover_gold text-gray-600"
        >
          https://windows.microsoft.com/es-es/internet-explorer/delete-manage-cookies#ie=ie-10
        </a>
        <br />
        <a
          href="https://support.apple.com/kb/ph5042"
          target="_blank"
          className="hover:text-hover_gold text-gray-600"
        >
          https://support.apple.com/kb/ph5042
        </a>
        <br />
        <a
          href="https://help.opera.com/Windows/11.50/es-ES/cookies.html"
          target="_blank"
          className="hover:text-hover_gold text-gray-600"
        >
          https://help.opera.com/Windows/11.50/es-ES/cookies.html
        </a>
      </InterText>
    </div>
  )
}
