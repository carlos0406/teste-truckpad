import { render, screen } from '@testing-library/react'
import { RiContactsLine } from 'react-icons/ri'
import { SideBarNav } from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('SideBarNav component ', () => {
  it('renders correctly', () => {
    render(<SideBarNav />)
    expect(screen.getByText('Motoristas')).toBeInTheDocument();
    expect(screen.getByText('Criar')).toBeInTheDocument();
    expect(screen.getByText('Listar')).toBeInTheDocument();
  })
})
