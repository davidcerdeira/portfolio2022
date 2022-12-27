import React from 'react'

import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full h-8 bg-background flex justify-center items-center'>
        <div className='mb-10'>{t('Footer.content')}</div>
    </div>
  )
}

export default Footer
