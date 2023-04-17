// * API
import http from '../../http'

const { api } = http

const createTeam = async (teamName, teamCountry, teamMembers) => {
  try {
    const data = await api.post('/teams/create-team', { teamName, teamCountry, teamMembers })

    return data
  } catch (err) {
    console.log(err)

    return err.message
  }
}

const getAllTeams = async () => {
  try {
    const data = await api.get('/teams/get-teams')

    return data
  } catch (err) {
    console.log(err)

    return err.message
  }
}

const getTeamById = async (id) => {
  try {
    // const data = await api.post('/get-team-byid', { teamId })
    const data = await api.get(`/teams/get-team/${id}`)

    return data
  } catch (err) {
    console.log(err)

    return err.message
  }
}

const getTeamMembers = async (teamMembers) => {
  try {
    const data = await api.post('/get-teammembers', { teamMembers })

    return data
  } catch (err) {
    console.log(err)

    return err.message
  }
}

const addUserToTeam = async (userId, teamId) => {
  // try {
  //   const data = await api.post('/add-to-team', { teamId, userId })
  //
  //   return data
  // } catch (err) {
  //   console.log(err)
  //
  //   return err.message
  // }
}

const inviteUserByEmail = async (email, teamId) => {
  try {
    const data = await api.post('/teams/invite', { email, teamId })

    return data
  } catch (err) {
    console.log(err)

    return err.message
  }
}

const teamsApi = Object.freeze({
  createTeam,
  getAllTeams,
  getTeamById,
  getTeamMembers,
  addUserToTeam,
  inviteUserByEmail,
})

export default teamsApi
