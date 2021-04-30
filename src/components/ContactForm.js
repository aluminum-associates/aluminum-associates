import React from "react"
import { useForm } from "react-hook-form"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Heading,
  Textarea,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

// Regex for email address
const re = /\S+@\S+\.\S+/

// Form styles
const controlStyles = {
  pb: "0.75rem",
}

const labelStyles = {
  color: "gray.700",
  fontSize: "lg",
}

const inputStyles = {
  borderColor: "gray.500",
  _hover: {
    borderColor: "primary.500",
  },
}

//Form Component
const ContactForm = (props) => {
  const { register, handleSubmit, errors, reset } = useForm()
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Validation rules
  const validateName = value => {
    if (!value) {
      return "Name field cannot be left blank."
    }

    return true
  }
  const validateAddress = value => {
    if (!value) {
      return "Address field cannot be left blank."
    }

    return true
  }
  const validateEmail = value => {
    if (!value) {
      return "Email field cannot be left blank."
    } else if (!re.test(value)) {
      return "Please enter a valid email address."
    }

    return true
  }
  const validatePhone = value => {
    if (!value) {
      return "Phone number field cannot be left blank."
    }

    return true
  }
  const validateMessage = value => {
    if (!value) {
      return "Your message cannot be left blank."
    }

    return true
  }

  // Form submit handler
  const onSubmit = data => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(res => {
        reset()
        onOpen()
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Box flex={1} maxW="50ch" {...props}>
        <Heading as="h2" pb="1rem">
          {props.title}
        </Heading>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <FormControl isInvalid={errors.name} {...controlStyles}>
            <FormLabel htmlFor="name" {...labelStyles}>
              Name
            </FormLabel>
            <Input
              name="name"
              placeholder="Jane Doe"
              ref={register({ validate: validateName })}
              {...inputStyles}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.address} {...controlStyles}>
            <FormLabel htmlFor="address" {...labelStyles}>
              Address
            </FormLabel>
            <Input
              name="address"
              placeholder="1801 Trafalgar St. East"
              ref={register({ validate: validateAddress })}
              {...inputStyles}
            />
            <FormErrorMessage>
              {errors.address && errors.address.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email} {...controlStyles}>
            <FormLabel htmlFor="email" {...labelStyles}>
              Email
            </FormLabel>
            <Input
              name="email"
              placeholder="jane.d@email.com"
              ref={register({ validate: validateEmail })}
              {...inputStyles}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.phone} {...controlStyles}>
            <FormLabel htmlFor="phone" {...labelStyles}>
              Phone Number
            </FormLabel>
            <Input
              name="phone"
              placeholder="519-123-4567"
              ref={register({ validate: validatePhone })}
              {...inputStyles}
            />
            <FormErrorMessage>
              {errors.phone && errors.phone.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.message} {...controlStyles}>
            <FormLabel htmlFor="message" {...labelStyles}>
              Message
            </FormLabel>
            <Textarea
              name="message"
              placeholder="Hello!"
              rows={10}
              ref={register({ validate: validateMessage })}
              {...inputStyles}
            />
            <FormErrorMessage>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>
          <Button type="submit" colorScheme="primary">
            Submit
          </Button>
        </form>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thank You!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            We've recieved your email and will get back to you as soon as
            possible.
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ContactForm
