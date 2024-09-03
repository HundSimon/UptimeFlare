import { Container, Group, Text } from '@mantine/core'
import classes from '@/styles/Header.module.css'
import { pageConfig } from '@/uptime.config'

export default function Header() {
  const linkToElement = (link: { label: string; link: string; highlight?: boolean }) => {
    return (
      <a
        key={link.label}
        href={link.link}
        target="_blank"
        className={classes.link}
        data-active={link.highlight}
      >
        {link.label}
      </a>
    )
  }
  
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <div>
            <Text size="xl">
              Server Uptime
            </Text>
        </div>
      </Container>
    </header>
  )
}
