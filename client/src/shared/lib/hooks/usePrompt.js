import { useCallback } from 'react'

import { useLogoutUser } from '../../api/hooks/auth/useLogoutUser'

import { useBlocker } from './useBlocker'

export function usePrompt(message, when = true, shouldLogoutAfter = false) {
  const { mutate: logoutUser, isLoading: isUserLoggingOut } = useLogoutUser()

  const blocker = useCallback(
    (tx) => {
      if (window.confirm(message)) {
        if (shouldLogoutAfter) {
          logoutUser()
        }
        tx.retry()
      }
    },
    [message],
  )

  useBlocker(blocker, when)
}
