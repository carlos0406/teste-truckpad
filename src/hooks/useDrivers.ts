import { useQuery, UseQueryResult } from 'react-query'
import { Driver } from '../@types/Driver'
import { api } from '../services/api'

interface DriverWithId extends Driver{
id:number
}

export function useDrivers() {
  return useQuery(['drivers'], () => getUsers(), {
    staleTime: 1000 * 60 * 10
  }) as UseQueryResult<DriverWithId[], unknown>
}
export async function getUsers(): Promise<Driver[]> {
  const { data } = await api.get('api/drivers')
  return data.drivers
}
