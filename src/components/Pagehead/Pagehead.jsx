import { Flex, Box, Heading } from '@primer/components'

function Pagehead ({ title, description, icon, children }) {
  return (
    <Flex>
      <Box p={4} pl={0}>
        <Flex>
          <Box pl={0} py={2} pr={4}>
            {icon}
          </Box>
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
