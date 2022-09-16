import { fireEvent, render, screen } from "@testing-library/react"
import { mocked } from "jest-mock"
import { useSizes } from "../../hooks/useSizes"
import { useDrivers } from "../../hooks/useDrivers"
import ListPage from '../../pages'
jest.mock('../../hooks/useSizes')
jest.mock('../../hooks/useDrivers')

describe('List Page ', () => {
  it('should be renders correctly ', () => {
    const sizesMock = mocked(useSizes);
    sizesMock.mockReturnValue({
      isSmallVersion: false,
      isWideVersion: true,
      isMdVersion: false,
      isNotWideVersion: false
    })
    // render(<ListPage />)
  })
})