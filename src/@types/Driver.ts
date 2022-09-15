export type Driver = {
  id?:number
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
  address_complement: string,
  ativo: boolean
}