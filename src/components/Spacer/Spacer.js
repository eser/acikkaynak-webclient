import { Box } from '@primer/components'

function Spacer ({ children, size }) {
  size = (
    size === 'big' ? 8 : (
      size === 'small' ? 4 : 6
    )
  )

  return (
    <Box my={size}>
      {children}
    </Box>
  )
}

export { Spacer as default }