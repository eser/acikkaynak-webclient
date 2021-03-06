import { BorderBox, Box, Flex, Heading, Text } from '@primer/components'

function Card ({ children, ...props }) {
  return (
    <BorderBox p={3} {...props}>
      <Flex flexDirection={'column'}>
        {children}
      </Flex>
    </BorderBox>
  )
}

function CardIcon ({ icon, ...props }) {
  const Icon = icon
  return (
    <Box mb={1}>
      <Icon size={32} {...props} />
    </Box>
  )
}

function CardHeader ({ children, ...props }) {
  return (
    <Flex {...props}>
      {children}
    </Flex>
  )
}

function CardTitle ({ children, props }) {
  return (
    <Heading fontSize={3} {...props}>
      {children}
    </Heading>
  )
}

function CardBody ({ children, ...props }) {
  return (
    <Box mt={1} mb={2}>
      <Flex flexDirection={'column'} {...props}>
        {children}
      </Flex>
    </Box>
  )
}

function CardFooter ({ children }) {
  return (children)
}

Card.Icon = CardIcon
Card.Header = CardHeader
Card.Title = CardTitle
Card.Body = CardBody
Card.Footer = CardFooter

export { Card as default }