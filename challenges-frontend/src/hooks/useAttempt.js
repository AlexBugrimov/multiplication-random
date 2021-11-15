import {useEffect, useState} from "react";
import axios from "axios";

const pathChallengesRandom = process.env.REACT_APP_PATH_ATTEMPTS

export function useAttempt(host) {
  const [challenge, setChallenge] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${host}${pathChallengesRandom}`)
      .then(response => setChallenge(response.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [host])
  return {challenge, isLoading, error}
}