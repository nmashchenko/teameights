// * Modules
import React, { useState, useEffect } from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import styled from 'styled-components'
import { BLACK } from '../../constants/colors'
import { useNavigate } from 'react-router-dom'

// * Redux
import { useSelector, useDispatch } from 'react-redux'
import authApi from '../../api/endpoints/auth'

// * Styles
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${BLACK.background};
`

const Loader = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuth, isLoading } = useSelector((state) => state.userReducer)

  // check if user is authenticated and update user(object) with data about him

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localStorage.getItem('token')) {
        dispatch(authApi.checkAuth())
      }
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoading && isAuth) {
        navigate('/platform')
      } else {
        navigate('/auth/login')
      }
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Container>
      <InfinitySpin width="200" color="#4fa94d" />
    </Container>
  )
}

export default Loader
