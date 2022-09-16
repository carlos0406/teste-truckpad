import {
  Box,
  Flex,
  VStack,
  Button,
  SimpleGrid,
  Text,
  Stack
} from '@chakra-ui/react'
import Link from 'next/link'
import { Input } from '../../components/form/Input'
import { Select } from '../../components/form/Select'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import estados from '../../services/estados.json'
import { api } from '../../services/api'
import { queryClient } from '../../services/queryClient'
import { useRouter } from 'next/router'
import { InputWithMask } from '../../components/form/InputMask'
import { useSizes } from '../../hooks/useSizes'
import { Driver } from '../../@types/Driver'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserFormSchema } from '../../utils/schemas'

type CreateDriverFormData = {
  name: string
  phone: string
  cpf: string
  birth_date: Date,
  birth_uf: string,
  birth_city: string,
  cnh_number: number,
  cnh_category: string,
  cnh_country: string,
  cnh_expires_at: Date,
  address_state: string,
  address_city: string,
  address_street: string,
  address_number: number,
  address_neighborhood: string,
  address_postal_code: string,
  address_complement: string
  ativo: boolean
}

interface FormProps {
  id?: number,
  driver?: Driver
}


export function Form({ driver }: FormProps) {
  const router = useRouter()
  const createDriver = useMutation(
    async (driverForm: CreateDriverFormData) => {
      await api.post('api/drivers', { driver: { ...driverForm, ativo: true } })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('drivers')

        toast.success('Motorista Cadastrado com sucesso', {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        })
        router.push('/')
      },
      onError: (error) => {
        console.log(error)
        router.push('/')
      }
    }
  )

  const updateDriver = useMutation(
    async (driverForm: CreateDriverFormData) => {
      await api.put(`api/drivers/${driver?.id}`, { driver: driverForm })
    },
    {
      onSuccess: () => {
        toast.success('Motorista Atualizado com sucesso', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        queryClient.invalidateQueries('drivers')
        router.push('/')
      },
      onError: (error) => {
        toast.error('Erro ao tentar enviar formulário, corrija os campos em vermelho', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        router.push('/')
      }
    }
  )

  const inativeDriver = useMutation(
    async () => {
      await api.put(`api/drivers/${driver?.id}`, { driver: { ...driver, ativo: false } })
    },
    {
      onSuccess: () => {
        toast.success('Motorista Inativado com sucesso', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        queryClient.invalidateQueries('drivers')
        router.push('/')
      },
      onError: () => {
        toast.error('Erro ao tentar enviar formulário, corrija os campos em vermelho', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        router.push('/')
      }
    }
  )
  const { register, handleSubmit, formState } = useForm<CreateDriverFormData>({
    defaultValues: driver ? driver : {},
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateDriverFormData> = async data => {
    if (driver) {
      await updateDriver.mutateAsync(data)
    } else {
      await createDriver.mutateAsync(data)
    }
  }

  function onError() {
    toast.error('Erro ao tentar enviar formulário, corrija os campos em vermelho', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  async function handleInativeUser() {
    await inativeDriver.mutateAsync()
  }

  const { isWideVersion } = useSizes()

  return (
    <Box>
      <Header />
      <Flex width="100%" my="6" px="6">
        <Sidebar />
        <Box
          as="form"
          flex="1"
          marginLeft="auto"
          borderRadius={8}
          bg="gray.800"
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser, onError)}
        >

          <VStack spacing="8">
            <Text w='100%' fontSize='20'>Dados Pessoais:</Text>
            <SimpleGrid minChildWidth={["200px", "320px"]} spacing={['6', '8']} w="100%">
              <Input
                inputName="name"
                type="text"
                label="Nome completo"
                {...register('name')}
                placeholder="Digite seu nome"
                error={formState.errors.name}
                requiredField
              />
              <InputWithMask
                inputName="telefone"
                type="text"
                mask="(99)9 9999-9999"
                label="Telefone"
                placeholder="Digite seu telefone"
                requiredField
                {...register('phone')}
                error={formState.errors.phone}
              />
              <Input
                inputName="birth_date"
                type="date"
                label="Data de Nascimento"
                {...register('birth_date')}
                requiredField
                error={formState.errors.birth_date}
                css={`
                ::-webkit-calendar-picker-indicator {
                    filter: invert(1);
                    cursor:pointer;
                }
            `} />

            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <InputWithMask

                inputName="cpf"
                type="tel"
                label="CPF"
                placeholder="Digite seu CPF "
                mask="999.999.999-99"
                {...register('cpf')}
                requiredField
                error={formState.errors.cpf}
              />
              <Select placeholder='Selecione o estado de nascimento'
                inputName="password_confirm"
                label="Estado de Nascimento"
                {...register('birth_uf')}
                error={formState.errors.birth_uf}
              >
                {estados.map(estado => (<option key={estado.id} value={estado.sigla} style={{ color: 'black' }}>{estado.nome}</option>))}
              </Select>
              <Input
                inputName="cidade_nascimento"
                type="text"
                placeholder="Digite sua cidade de nascimento "
                label="Cidade de Nascimento"
                {...register('birth_city')}
                error={formState.errors.birth_city}
              />
            </SimpleGrid>
            <Text w='100%' fontSize='20'>Dados do CNH:</Text>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                inputName="cnh"
                type="text"
                label="Numero"
                placeholder="Digite seu número de CNH"
                {...register('cnh_number')}
                error={formState.errors.cnh_number}
                requiredField
              />
              <Input
                inputName="categoria"
                type="text"
                label="Categoria"
                placeholder="Digite a categoria do CNH "
                {...register('cnh_category')}
                error={formState.errors.cnh_category}
                requiredField
              />
              <Input
                inputName="cnh_country"
                type="text"
                label="País"
                placeholder="Nacionalidade da CNH"
                {...register('cnh_country')}
                error={formState.errors.cnh_country}
              />
              <Input
                requiredField
                inputName="cnh_expires_at"
                type="date"
                label="Data de Vencimento"
                colorScheme="light"
                {...register('cnh_expires_at')}
                error={formState.errors.cnh_expires_at}
                css={`
                        ::-webkit-calendar-picker-indicator {
                            filter: invert(1);
                            cursor:pointer;
                        }
                    `}
              />
            </SimpleGrid>
            <Text w='100%' fontSize='20'>Endereço:</Text>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Select placeholder='Selecione o estado'
                inputName="password_confirm"
                requiredField
                label="Estado" {...register('address_state')} error={formState.errors.address_state}>
                {estados.map(estado => (<option key={estado.id} value={estado.sigla} style={{ color: 'black' }}>{estado.nome}</option>))}
              </Select>
              <Input
                inputName="city_address"
                type="text"
                label="Cidade"
                placeholder="Digite a cidade do seu endereço "
                {...register('address_city')}
                requiredField
                error={formState.errors.address_city}
              />
              <Input
                inputName="address_street"
                type="text"
                label="Rua"
                {...register('address_street')}
                placeholder="Digite a rua do seu endereço "
                requiredField
                error={formState.errors.address_street}
              />
              <Input
                inputName="adress_number"
                type="number"
                placeholder="Digite o Número do seu endereço "
                label="Numero da casa"
                {...register('address_number')}
                requiredField
                error={formState.errors.address_number}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                inputName="address_neighborhood"
                type="text"
                label="Bairro"
                {...register('address_neighborhood')}
                requiredField
                placeholder="Digite o seu Bairro"
                error={formState.errors.address_neighborhood}
              />
              <Input
                inputName="cidade_nascimento"
                type="text"
                label="CEP"
                placeholder="Digite o seu CEP"
                {...register('address_postal_code')}
                requiredField
                error={formState.errors.address_postal_code}
              />
              <Input
                inputName="cidade_nascimento"
                type="text"
                label="Complemento"
                {...register('address_complement')}
                placeholder="Digite o seu complemento"
                error={formState.errors.address_complement}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <Stack spacing="4" direction={!isWideVersion ? "column-reverse" : "row"} width="100%">
              <Link href="/">
                <Button colorScheme="whiteAlpha" w="100%">Cancelar</Button>
              </Link>
              {driver && <Button
                colorScheme="yellow"
                type="button"
                w="100%"
                textColor="whiteAlpha.900"
                onClick={() => { handleInativeUser() }}
              >
                Inativar Motorista
              </Button>}
              <Button
                colorScheme="green"
                type="submit"
                w="100%"
              >
                {driver ? "Editar" : "Salvar"}
              </Button>
            </Stack>
          </Flex>
        </Box>
      </Flex >
    </Box >
  )
}
