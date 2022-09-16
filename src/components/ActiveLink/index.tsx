import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import { ReactElement, cloneElement } from 'react'
interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  shouldMatchExacthref?: boolean
}
export function ActiveLink({
  children,
  shouldMatchExacthref = false,
  ...rest
}: ActiveLinkProps) {
  let isActive = false
  const { asPath } = useRouter()
  if (shouldMatchExacthref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  } else if (
    (!shouldMatchExacthref && asPath.startsWith(String(rest.href))) ||
    asPath.startsWith(String(rest.as))
  ) {
    isActive = true
  }
  return (
    <Link {...rest}>
      {cloneElement(children, { color: isActive ? 'yellow.400' : 'gray.50' })}
    </Link>
  )
}
