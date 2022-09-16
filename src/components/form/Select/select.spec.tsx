import { render, screen } from "@testing-library/react"
import { Select } from "."

describe('Select component ', () => {
  it('should be renders correctly withot label and error', () => {
    render((
      <Select inputName="teste" requiredField placeholder="select-placeholder">

      </Select >))
    expect(screen.getByTestId("select")).toBeInTheDocument()
  })

  it('should be renders correctly with error', () => {
    render(<Select inputName="teste"
      requiredField
      placeholder="select-placeholder"
      error={{
        type: "required",
        message: "teste-error"
      }} />)
    expect(screen.getByTestId("select")).toBeInTheDocument()
    expect(screen.getByText("teste-error")).toBeInTheDocument()

  })

  it('should be renders correctly with label', () => {
    render(<Select inputName="teste" placeholder="select-placeholder"
      label="label-test" />)
    expect(screen.getByTestId("select")).toBeInTheDocument()
    expect(screen.getByText("label-test")).toBeInTheDocument();
  })

  it('should be renders correctly with label required from required field', () => {
    render(<Select inputName="teste"
      placeholder="select-placeholder"
      requiredField
      label="label-test" />)
    expect(screen.getByTestId("select")).toBeInTheDocument()
    expect(screen.getByText("label-test" + "*")).toBeInTheDocument();
  })
})