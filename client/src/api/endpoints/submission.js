// * API
import api from '../../http'

const makeSubmission = async (s_parts, team_id) => {
  try {
    const t_id = '638bcf732c63139d604db787'
    const data = await api.post('/make-submission', { s_parts, team_id, t_id })
    return data
  } catch (err) {
    console.log(err)
    return err.message
  }
}

const submissionApi = Object.freeze({
  makeSubmission,
})

export default submissionApi
