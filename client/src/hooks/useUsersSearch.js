import { useEffect, useState } from "react";

// * API
import usersApi from "../api/endpoints/users";

export default function useUsersSearch (pageNumber) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('');
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
        setLoading(true);
        setError(false);
        usersApi.getUsers(pageNumber)
        .then(res => {
          setUsers(prevUsers => {
            return [...prevUsers, ...res.data]
          });
          setHasMore(res.data.length > 0);
        })
        setTimeout(function () {
          setLoading(false);
        }, 2000);
  }, [pageNumber])

  return {error, hasMore, loading, users}
}

/**
 * 
 * This hook is currently not used, will be used after refactoring.
 * 
 */