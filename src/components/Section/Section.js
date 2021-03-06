import {
  Box,
  Flex,
  Heading,
  Pagehead,
} from '@primer/components'

function Section ({ children, ...props }) {
  return (
    <Flex flexDirection={'column'} {...props}>
      {children}
    </Flex>
  )
}

function SectionHeader ({children, ...props}) {
  return <Pagehead pt={0} pb={3} {...props}>
    <Flex alignItems={'center'}>
      {children}
    </Flex>
  </Pagehead>
}

function SectionTitle ({ children, ...props }) {
  return (
    <Heading fontSize={4} {...props}>
      {children}
    </Heading>
  )
}

function SectionIcon ({ icon, ...props }) {
  const Icon = icon
  return (
    <Box mr={3}>
      <Icon size={32} {...props} />
    </Box>
  )
}

Section.Header = SectionHeader
Section.Title = SectionTitle
Section.Icon = SectionIcon

export { Section as default }