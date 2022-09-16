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
import { useSizes } from '../../hooks/useSizes'
import { SideBarNav } from './SidebarNav'

export function Sidebar() {
  const { isOpen, onClose } = useSideBarDrawer()
  const { isNotWideVersion } = useSizes();
  if (isNotWideVersion) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" padding="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SideBarNav data-testid="drawer-sidebar" />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  return (
    <Box as="aside" w="32" mr="8" data-testid="sidebar">
      <SideBarNav />
    </Box>
  )
}
