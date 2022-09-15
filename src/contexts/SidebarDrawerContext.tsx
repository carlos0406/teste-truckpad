import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { createContext, ReactNode, useContext, useEffect } from 'react'
type SideBarDrawerContextData = UseDisclosureReturn
const SidebarDrawerContext = createContext({} as SideBarDrawerContextData)
interface SidebarDrawerProviderProps {
  children: ReactNode
}

export function SidebarDrawerProvider({
  children
}: SidebarDrawerProviderProps) {
  const router = useRouter()
  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])
  const disclosure = useDisclosure()
  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSideBarDrawer = () => useContext(SidebarDrawerContext)
