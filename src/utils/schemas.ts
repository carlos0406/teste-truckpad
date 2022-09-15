import * as yup from 'yup'
import { validateCPF, validatePastDate, validatePhoneFormat } from './ValidationUtils'
export const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome Obrigatório'),
  birth_date: yup.string().required('Data de Nascimento Obrigatória')
    .test("birth_date-futere-date", "A data de Nascimento deve ser menor que a data atual", birth_date => validatePastDate(new Date(birth_date))),
  phone: yup.string().required("Telefone Obrigatório").test('phone-lenght', "Formato do telefone invalido", phone => validatePhoneFormat(phone)),
  cpf: yup.string().required("CPF Obrigatorio").test('test-invalid-cpf',
    'CPF inválido',
    cpf => validateCPF(cpf)),
  cnh_number: yup.string().required("Número da CNH Obrigatório"),
  cnh_category: yup.string().required("Categoria da CNH Obrigatório"),
  cnh_expires_at: yup.string().required('Data de Vencimento da CNH Obrigatório'),
  address_state: yup.string().required('Estado do Endereço Obrigatorio'),
  address_city: yup.string().required('Cidade do Endereço Obrigatorio'),
  address_street: yup.string().required('Rua do Endereço Obrigatorio'),
  address_number: yup.string().required('Número do Endereço Obrigatorio'),
  address_neighborhood: yup.string().required('Barrio do Endereço Obrigatorio'),
  address_postal_code: yup.string().required('CEP do Endereço Obrigatorio'),

})