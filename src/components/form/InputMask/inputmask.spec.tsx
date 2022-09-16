import { render, screen, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { InputWithMask } from "."

describe('Input Mask component ', () => {
  it('should be renders correctly withot label and error', () => {
    render(<InputWithMask mask="999.999.999" inputName="teste"
      type="text"
      placeholder="teste-placeholder"
      requiredField />)
    expect(screen.getByPlaceholderText("teste-placeholder")).toBeInTheDocument()
  })

  it('should be renders correctly with error', () => {
    render(<InputWithMask mask="999.999.999" inputName="teste"
      type="text"
      placeholder="teste-placeholder"
      requiredField
      error={{
        type: "required",
        message: "teste-error"
      }} />)
    expect(screen.getByPlaceholderText("teste-placeholder")).toBeInTheDocument()
    expect(screen.getByText("teste-error")).toBeInTheDocument()

  })

  it('should be renders correctly with label', () => {
    render(<InputWithMask mask="999.999.999" inputName="teste"
      type="text"
      placeholder="teste-placeholder"
      label="label-test" />)
    expect(screen.getByPlaceholderText("teste-placeholder")).toBeInTheDocument()
    expect(screen.getByText("label-test")).toBeInTheDocument();
  })

  it('should be renders correctly with label required from required field', () => {
    render(<InputWithMask mask="999.999.999" inputName="teste"
      type="text"
      placeholder="teste-placeholder"
      requiredField
      label="label-test" />)
    expect(screen.getByPlaceholderText("teste-placeholder")).toBeInTheDocument()
    expect(screen.getByText("label-test" + "*")).toBeInTheDocument();
  })
  it('should be renders correctly after typing', async () => {
    render(<InputWithMask mask="999.999.999" inputName="teste"
      type="text"
      placeholder="teste-placeholder"
      requiredField />)
    const inputWithMask = screen.getByPlaceholderText("teste-placeholder")
    userEvent.type(inputWithMask, '000000000')
    await waitFor(() => expect(inputWithMask).toHaveValue('000.000.000'))
  })
})