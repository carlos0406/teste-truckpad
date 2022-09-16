import { render, screen } from "@testing-library/react"
import { Input } from "."

describe('Input component ', () => {
  it('should be renders correctly withot label and error', () => {
    render(<Input inputName="teste"
      type="text"
      placeholder="teste-placeholder"
      requiredField />)
    expect(screen.getByPlaceholderText("teste-placeholder")).toBeInTheDocument()
  })

  it('should be renders correctly with error', () => {
    render(<Input inputName="teste"
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
    render(<Input inputName="teste"
      type="text"
      placeholder="teste-placeholder"
      label="label-test" />)
    expect(screen.getByPlaceholderText("teste-placeholder")).toBeInTheDocument()
    expect(screen.getByText("label-test")).toBeInTheDocument();
  })

  it('should be renders correctly with label required from required field', () => {
    render(<Input inputName="teste"
      type="text"
      placeholder="teste-placeholder"
      requiredField
      label="label-test" />)
    expect(screen.getByPlaceholderText("teste-placeholder")).toBeInTheDocument()
    expect(screen.getByText("label-test" + "*")).toBeInTheDocument();
  })
})