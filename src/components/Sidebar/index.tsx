import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue
} from '@chakra-ui/react'
import { useSideBarDrawer } from '../../contexts/SidebarDrawerContext'
import { SideBarNav } from './SidebarNav'

export function Sidebar() {
  const { isOpen, onClose } = useSideBarDrawer()
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })
  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" padding="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  return (
    <Box as="aside" w="32" mr="8">
      <SideBarNav />
    </Box>
  )
}
