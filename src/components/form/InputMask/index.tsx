import {
  FormLabel,
  FormControl,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormErrorMessage
} from '@chakra-ui/react'
import InputMask from "react-input-mask";
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  inputName: string
  label?: string
  error?: FieldError,
  mask: String,
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
        as={InputMask}
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

export const InputWithMask = forwardRef(InputBase)