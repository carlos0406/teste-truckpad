import {
  FormLabel,
  FormControl,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
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

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { inputName, label, error = null, requiredField = false, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={inputName}>{label}{requiredField ? '*' : ''}</FormLabel>}
      <ChakraInput
        id={inputName}
        {...rest}
        focusBorderColor="yellow.500"
        bgColor="gray.900"
        variant="flushed"
        _hover={{
          bgColor: 'gray.900'
        }}
        ref={ref}
        size="lg"
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
