import { Box } from '@primer/components'

function Spacer ({ children, size }) {
  size = (
    size === 'big' ? 6 : (
      size === 'small' ? 2 : 4
    )
  )

  return (
    <Box my={size}>
      {children}
    </Box>
  )
}

export { Spacer as default }