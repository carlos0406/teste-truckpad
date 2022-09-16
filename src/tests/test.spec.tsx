import { fireEvent, render, screen } from "@testing-library/react"
import { Header } from "../components/Header"
import { mocked } from 'jest-mock'
import { useSizes } from '../hooks/useSizes'
import { useSideBarDrawer } from '../contexts/SidebarDrawerContext'
jest.mock('../contexts/SidebarDrawerContext')
jest.mock('../hooks/useSizes')
describe('Header component ', () => {
  it('should be renders correctly in wide version', () => {
    const sizesMock = mocked(useSizes);
    const sideBarDrawerMock = mocked(useSideBarDrawer);
    sizesMock.mockReturnValueOnce({
      isWideVersion: true,
    } as any)
    sideBarDrawerMock.mockReturnValueOnce({
      onOpen: jest.fn()
    } as any)

    render(<Header />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })
  it('renders correctly in lower sizes', () => {
    const sizesMock = mocked(useSizes);
    const sideBarDrawerMock = mocked(useSideBarDrawer);
    sizesMock.mockReturnValueOnce({
      isWideVersion: false,
    } as any)
    sideBarDrawerMock.mockReturnValueOnce({
      onOpen: jest.fn()
    } as any)
    render(<Header />)
    expect(screen.getByTestId('iconbutton')).toBeInTheDocument()
  })

  it('should be call onOpen function ', () => {

    const sizesMock = mocked(useSizes);
    const sideBarDrawerMock = mocked(useSideBarDrawer);
    const onOpenFunction = jest.fn()
    sizesMock.mockReturnValueOnce({
      isWideVersion: false,
    } as any)

    sideBarDrawerMock.mockReturnValueOnce({
      onOpen: onOpenFunction
    } as any)

    render(<Header />)
    const iconButton = screen.getByTestId('iconbutton');
    fireEvent.click(iconButton)
    expect(onOpenFunction).toHaveBeenCalled()
  })

})