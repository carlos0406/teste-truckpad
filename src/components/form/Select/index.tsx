import {
  FormLabel,
  FormControl,
  Select as ChakraSelect,
  SelectProps as ChakraInputProps,
  FormErrorMessage
} from '@chakra-ui/react'

import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  inputName: string
  label?: string
  error?: FieldError,
  requiredField?: boolean
}

const InputBase: ForwardRefRenderFunction<HTMLSelectElement, InputProps> = (
  { inputName, label, error = null, children, requiredField = false, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={inputName}>{label}{requiredField ? '*' : ''}</FormLabel>}
      <ChakraSelect
        id={inputName}
        {...rest}
        focusBorderColor="yellow.500"
        bgColor="gray.900"
        variant="flushed"
        ref={ref}
        size="lg"
        data-testid="select"
      >{children}
      </ChakraSelect >

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl >
  )
}

export const Select = forwardRef(InputBase)
