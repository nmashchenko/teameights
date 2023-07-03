import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const withRouter = (component) => () => {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">{component()}</Suspense>
    </BrowserRouter>
  )
}
