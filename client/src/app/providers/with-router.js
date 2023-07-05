import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from 'app/providers/router'

export const withRouter = (component) => () => {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <AppRouter />
        {component()}
      </Suspense>
    </BrowserRouter>
  )
}
