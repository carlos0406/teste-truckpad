import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { Logo } from './Logo'
import { Profile } from './Profile'
import { useSideBarDrawer } from '../../contexts/SidebarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'
export function Header() {
  const { onOpen } = useSideBarDrawer()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Flex
      w="100%"
      h="20"
      mx="auto"
      px="6"
      align="center"
      justify="space-between"
      as="header"
      bg="yellow.400"
    >
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="un"
          onClick={onOpen}
          aria-label="Open Navigation"
          mr="2"
        />
      )}

      <Logo />
      <Profile />
    </Flex>
  );
}
