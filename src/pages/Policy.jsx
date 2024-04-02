import React from 'react'
import PrivacyPolicy from '../components/privacyPolicy/PrivacyPolicy'
import CookiePolicy from '../components/cookiePolicy/CookiePolicy'

const Policy = () => {
  return (
    <div>
        <PrivacyPolicy/>
        <CookiePolicy/>
    </div>
  )
}

export default Policy