import { Box } from '@primer/components'

function Spacer ({ children, size }) {
  size = (
    size === 'big' ? 4 : (
      size === 'small' ? 2 : 3
    )
  )

  return (
    <Box my={size}>
      {children}
    </Box>
  )
}

export { Spacer as default }