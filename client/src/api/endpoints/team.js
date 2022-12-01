// * API
import api from '../../http'

const createTeam = async (teamName, teamCountry, teamMembers) => {
  try {
    const data = await api.post('/create-team', { teamName, teamCountry, teamMembers })
    return data
  } catch (err) {
    console.log(err)
    return err.message
  }
}

const getAllTeams = async () => {
  try {
    const data = await api.get('/get-teams')
    return data
  } catch (err) {
    console.log(err)
    return err.message
  }
}

const getTeamById = async (teamId) => {
  try {
    const data = await api.post('/get-team-byid', { teamId })
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
  try {
    const data = await api.post('/add-to-team', { teamId, userId })
    return data
  } catch (err) {
    console.log(err)
    return err.message
  }
}

const inviteUserByEmail = async (email, teamId) => {
  try {
    const data = await api.post('/invite-to-team', { email, teamId })
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
