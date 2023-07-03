import compose from 'compose-function'

import { withGoogle } from './with-google'
import { withQuery } from './with-query'
import { withRouter } from './with-router'
import { withStore } from './with-store'
import { withTheme } from './with-theme'
import { withToaster } from './with-toaster'

export const withProviders = compose(
  withToaster,
  withGoogle,
  withTheme,
  withQuery,
  withStore,
  withRouter,
)
