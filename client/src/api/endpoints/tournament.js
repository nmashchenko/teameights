// * API
import api from '../../http'

const addTeamToTournament = async (team_id, frontend_id, backend_id) => {
  try {
    const t_id = '638b8f6eabdd02252040a5ba'
    const data = await api.post('/add-to-tournament', { t_id, team_id, frontend_id, backend_id })
    return data
  } catch (err) {
    console.log(err)
    return err.message
  }
}

const tournamentApi = Object.freeze({
  addTeamToTournament,
})

export default tournamentApi
