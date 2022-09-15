import { useDrivers } from "../hooks/useDrivers"
import {
  Box,
  Flex,
  Heading,
  Table,
  Tr,
  Th,
  Tbody,
  Thead,
  Spinner,
  Divider
} from '@chakra-ui/react'
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { ListItem } from "../components/ListItem"
import { useSizes } from "../hooks/useSizes"
import { BiEdit, BiX } from "react-icons/bi"

export default function UsersList() {
  const { data, isLoading, error, isFetching } = useDrivers()
  const { isSmallVersion, isWideVersion } = useSizes()
  return (
    <Box>
      <Header />
      <Flex width="100%" my="6" px="6">
        <Sidebar />
        <Box flex="1"
          borderRadius={8}
          bg="gray.800">
          <Flex mb="8" justify="space-between" align="center" p={['6', '8']} flexDirection="column">
            <Heading size="lg" fontWeight="normal">
              Motoristas
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4" />
              )}
            </Heading>
          </Flex>
          <Flex justify="center" align="center" px="6" flexDirection="row" backgroundColor="gray.800">
            <BiEdit size={!isSmallVersion ? 25 : 20} /> : Editar Motorista
          </Flex >
          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">Falha ao obter dados dos usuários</Flex>
          ) : (
            <>
              <>
                <Table colorScheme="whiteAlpha" width="100%">
                  <Thead>
                    <Tr>
                      <Th>Nome</Th>
                      <Th width={200}>CPF</Th>
                      {isWideVersion && <Th width={200}>Telefone</Th>}
                      {isWideVersion && <Th width={200}>Data de Nascimento</Th>}
                      {!isSmallVersion && <Th >CNH</Th>}
                      <Th w="8"></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data?.map(driver => (
                      <ListItem driver={driver} key={driver.id} />
                    ))}
                  </Tbody>
                </Table>
              </>
            </>
          )}
        </Box>
      </Flex >
    </Box >
  )
}