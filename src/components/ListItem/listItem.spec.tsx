import { render, screen } from '@testing-library/react'
import { ListItem } from './index'
import { useSizes } from '../../hooks/useSizes'
import { mocked } from 'jest-mock'
import { Table, Tbody } from '@chakra-ui/react'


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

jest.mock('../../hooks/useSizes')
describe('ListItem component ', () => {
  it('renders correctly in wide version', () => {
    const sizesMock = mocked(useSizes);
    sizesMock.mockReturnValueOnce({
      isSmallVersion: false,
      isWideVersion: true,
      isMdVersion: false
    } as any)

    render(
      (<Table colorScheme="whiteAlpha" width="100%">
        <Tbody>
          <ListItem driver={driver} />
        </Tbody>
      </Table >))
    expect(screen.getByText('User 1')).toBeInTheDocument()
  })
})
