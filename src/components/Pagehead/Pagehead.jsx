import { Flex, Box, Heading } from '@primer/components'

function Pagehead ({ title, description, icon, children }) {
  const Icon = icon

  return (
    <Flex>
      <Box py={6}>
        <Flex alignItems={'center'}>
          {Icon && <Box pr={4}>
            <Icon size={64} />
          </Box>}
          <Box>
            <Heading>
              {title}
            </Heading>
            {description && <span>
          {description}
        </span>}
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export { Pagehead as default }
