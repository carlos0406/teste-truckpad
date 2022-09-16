import { render, screen } from "@testing-library/react"
import { useMutation } from "react-query"
import { Form } from "."
import { mocked } from 'jest-mock'
import { useSizes } from '../../hooks/useSizes'

jest.mock('../../hooks/useSizes')
jest.mock('react-query')
jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})


const driver = {
  address_city: "undefined Fábio do Descoberto",
  address_complement: "Complemento",
  address_neighborhood: "centro",
  address_number: 55666,
  address_postal_code: "27537-571",
  address_state: "CE",
  address_street: "Santos Travessa",
  ativo: true,
  birth_city: "Ricardo de Nossa Senhora",
  birth_date: new Date("2004-09-27T18:06:38.798Z"),
  birth_uf: "TO",
  cnh_category: "A+B",
  cnh_country: "BR",
  cnh_expires_at: new Date("2023-05-11T14:00:31.970Z"),
  cnh_number: 56856268758,
  cpf: "999.999.999-99",
  id: 1,
  name: "User 1",
  phone: "(99)9 9999-9999",
}

describe('Form component ', () => {

  it('renders correctly without Driver', () => {
    const useMutationMocker = mocked(useMutation)
    useMutationMocker.mockReturnValueOnce({
      mutateAsync: jest.fn()
    } as any)

    const sizesMock = mocked(useSizes);
    sizesMock.mockReturnValue({
      isSmallVersion: false,
      isWideVersion: true,
      isMdVersion: false,
      isNotWideVersion: false
    })

    render(<Form />)
    expect(screen.getByText('Salvar')).toBeInTheDocument()
  })

  it('renders correctly with Driver', () => {

    const useMutationMocker = mocked(useMutation)
    useMutationMocker.mockReturnValueOnce({
      mutateAsync: jest.fn()
    } as any)

    const sizesMock = mocked(useSizes);
    sizesMock.mockReturnValue({
      isSmallVersion: false,
      isWideVersion: true,
      isMdVersion: false,
      isNotWideVersion: false
    })

    render(<Form driver={driver} />)
    expect(screen.getByText('Editar')).toBeInTheDocument()
    expect(screen.getByText('Inativar Motorista')).toBeInTheDocument()
  })

})