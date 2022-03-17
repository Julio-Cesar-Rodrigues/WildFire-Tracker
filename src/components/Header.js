import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const Header = () => {
  return (
    <header className="header">
      <Icon icon={locationIcon} />
      <h1>WildFire Tracker (Power by Nasa)</h1>
    </header>
  )
}

export default Header
