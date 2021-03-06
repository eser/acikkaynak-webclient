import { Flash, StyledOcticon } from '@primer/components'
import { XCircleFillIcon } from '@primer/octicons-react'

function Error ({ children }) {
  return (
    <Flash variant="danger">
      <StyledOcticon icon={XCircleFillIcon}/>
      {children}
    </Flash>
  )
}

export { Error as default }