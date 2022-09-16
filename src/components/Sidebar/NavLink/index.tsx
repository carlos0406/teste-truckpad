import { Icon, Link as ChakraLink, Text, LinkProps } from '@chakra-ui/react'
import { ElementType } from 'react'
import { ActiveLink } from '../../ActiveLink/'

interface NavLinkProps extends LinkProps {
  icon: ElementType
  text: string
  href: string,
  shouldMatchExacthref?: boolean
}
export function NavLink({ icon, text, href, shouldMatchExacthref, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref shouldMatchExacthref={shouldMatchExacthref}>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {text}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
