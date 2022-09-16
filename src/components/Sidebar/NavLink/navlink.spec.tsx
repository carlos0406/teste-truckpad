import { render, screen } from '@testing-library/react'
import { useSizes } from '../../../hooks/useSizes'
import { mocked } from 'jest-mock'
import { NavLink } from '.'
import { RiContactsLine } from 'react-icons/ri'

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

    render(<NavLink href='/' icon={RiContactsLine} text="link" />)
    expect(screen.getByText('link')).toBeInTheDocument()
  })
})
