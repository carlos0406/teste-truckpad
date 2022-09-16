import { useBreakpointValue } from "@chakra-ui/react"

export function useSizes(){
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const isNotWideVersion = useBreakpointValue({
    base: true,
    lg: false
  })

  const isMdVersion = useBreakpointValue({
    base: false,
    md: true
  })
  const isSmallVersion = useBreakpointValue({
    base: true,
    sm: false
  })
  return {
    isWideVersion,isMdVersion,isSmallVersion,isNotWideVersion
  }
}