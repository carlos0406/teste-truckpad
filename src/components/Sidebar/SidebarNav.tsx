import { Stack } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiAddLine
} from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function SideBarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Motoristas">
        <NavLink text="Listar" icon={RiContactsLine} href="/" shouldMatchExacthref />
        <NavLink text="Criar" icon={RiAddLine} href="/create" />
      </NavSection>
    </Stack>
  )
}
