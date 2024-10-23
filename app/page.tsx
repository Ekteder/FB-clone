import { headers } from 'next/headers'
import DesktopLoginPage from './DesktopLoginPage'
import MobileLoginPage from './MobileLoginPage'

export default async function Home() {
  const userAgent = (await headers()).get('user-agent') || ''
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)

  return isMobile ? <MobileLoginPage /> : <DesktopLoginPage />
}