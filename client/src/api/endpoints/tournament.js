// * API
import http from '../../http'

const { api } = http

const addTeamToTournament = async (team_id, frontend_id, backend_id) => {
  try {
    const t_id = '638bcf732c63139d604db787'
    const data = await api.post('/add-to-tournament', { t_id, team_id, frontend_id, backend_id })
    return data
  } catch (err) {
    console.log(err)
    return err.message
  }
}

const checkUserSignedUp = async (userId) => {
  try {
    const data = await api.post('/check-user-exists-tournament', { userId })
    return data
  } catch (err) {
    console.log(err)
    return err.message
  }
}

const tournamentApi = Object.freeze({
  addTeamToTournament,
  checkUserSignedUp,
})

export default tournamentApi
