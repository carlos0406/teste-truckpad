import { Flex, HStack, Icon } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'
export function NotificationNav() {
  return (
    <Flex align="center" ml="auto">
      <HStack
        mx="8"
        spacing="8"
        pr="8"
        py="1"
        color="gray.300"
        borderRightWidth="1px"
        borderColor="gray.800"
      >
        <Icon as={RiNotificationLine} fontSize="20" />
        <Icon as={RiUserAddLine} fontSize="20" />
      </HStack>
    </Flex>
  )
}
