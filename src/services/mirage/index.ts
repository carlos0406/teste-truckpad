import { faker } from '@faker-js/faker'
import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer
} from 'miragejs'
import { Driver } from '../../@types/Driver'

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer
    },
    models: {
      driver: Model.extend<Partial<Driver>>({}),
    },
    
    factories: {
      driver: Factory.extend({
        name(i) {
          return `User ${i + 1}`
        },
        
    phone(){
      return "(99)9 9999-9999"
    },
    cpf(){
      return "999.999.999-99"
    },
    birth_date(){
     
     return faker.date.birthdate()
    },
    birth_uf(){
      faker.locale = 'pt_BR';
      return faker.address.stateAbbr()
    },
    birth_city(){
      return faker.address.city()
    },
    cnh_number(){
      return "56856268758"
    },
    cnh_category(){
      return "A+B"
    },
    cnh_country(){
      return "BR"
    },
    cnh_expires_at(){
      return faker.date.future();
    },
    address_state(){
      return faker.address.stateAbbr()
    },
    address_city(){
      return faker.address.city()
    },
    address_street(){
      return faker.address.street()
    },
    address_number(){
      return faker.address.buildingNumber()
    },
    address_neighborhood(){
      return "centro"
    },
    address_postal_code(){
      return faker.address.zipCode()
    },
    address_complement(){
      return "Complemento"
    },
    ativo(){
      return true
    }
      })
    },
    seeds(server) {
      server.createList('driver', 7)
    },
    routes() {
      this.namespace = 'api'
      this.timing =750

      this.get('/drivers', function (schema, request) {
        const drivers = schema.all('driver')
        return new Response(200, {  }, drivers )
      })

      this.get('drivers/:id')
      this.post('/drivers')
      this.put('drivers/:id')
      this.namespace = ''
      this.passthrough()
  
    }
  })

  return server
}
