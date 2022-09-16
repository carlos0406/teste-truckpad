import { render, screen } from '@testing-library/react'
import { RiContactsLine } from 'react-icons/ri'
import { NavSection } from '.'
import { NavLink } from '../NavLink'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('ListItem component ', () => {
  it('renders correctly in wide version', () => {

    render(<NavSection title="Motoristas">
      <NavLink text="Listar" icon={RiContactsLine} href="/" shouldMatchExacthref />
      <NavLink text="Criar" icon={RiContactsLine} href="/create" />
    </NavSection>)
    expect(screen.getByText('Motoristas')).toBeInTheDocument()
    expect(screen.getByText('Criar')).toBeInTheDocument()
    expect(screen.getByText('Listar')).toBeInTheDocument()
  })
})
