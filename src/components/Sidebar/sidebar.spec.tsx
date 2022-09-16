import { render, screen } from '@testing-library/react'
import { mocked } from 'jest-mock'
import { Sidebar } from '.'
import { useSizes } from '../../hooks/useSizes'
import { useSideBarDrawer } from '../../contexts/SidebarDrawerContext'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})
jest.mock('../../hooks/useSizes')
jest.mock('../../contexts/SidebarDrawerContext')
describe('Sidebar component ', () => {
  it('renders correctly in wide version', () => {
    const sizesMock = mocked(useSizes);
    const sideBarDrawerMock = mocked(useSideBarDrawer)
    sizesMock.mockReturnValueOnce({
      isNotWideVersion: false
    } as any)

    sideBarDrawerMock.mockReturnValueOnce({
      isOpen: true,
      onClose: jest.fn()
    } as any)

    render(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  it('renders correctly in lower sizes ', () => {
    const sizesMock = mocked(useSizes);
    const sideBarDrawerMock = mocked(useSideBarDrawer)

    sizesMock.mockReturnValueOnce({
      isNotWideVersion: false
    } as any)

    sideBarDrawerMock.mockReturnValueOnce({
      isOpen: true,
      onClose: jest.fn()
    } as any)

    render(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
})
