import { Image, useBreakpointValue } from '@chakra-ui/react'
export function Logo() {
  return (
    <Image
      boxSize={['100px', "150px", '200px']}
      alt="logo"
      src="https://www.truckpad.com.br/wp-content/uploads/2020/02/646db7f2-truckpad-logo-negativo.svg"
    />
  )
}
