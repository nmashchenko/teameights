import { Toaster } from 'react-hot-toast'

export const withToaster = (component) => () =>
  (
    <>
      <Toaster />
      {component()}
    </>
  )
