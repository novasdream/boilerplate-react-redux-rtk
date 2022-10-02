
import { PDFDownloadLink } from '@react-pdf/renderer'
import React from 'react'
import { useTranslation } from 'react-i18next'

import 'App.css'
import MagicaPDF from 'components/MagicaPDF/MagicaPDF'
import { PostContainer } from 'features/posts'
import TitleTypography from 'libs/ui/components/TitleTypography'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <>
      <TitleTypography title={t('home.title')} />
      <PostContainer />
      <PDFDownloadLink document={<MagicaPDF />} fileName="somename.pdf">
        {({ loading }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
      
    </>
  )
}

export default HomePage
