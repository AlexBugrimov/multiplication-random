import {useEffect, useState} from "react";

export const useFetch = (url) => {
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const signal = {signal: controller.signal}

    async function getData() {
      setIsLoading(true)
      try {
        const response = await fetch(url, signal)
        const data = await response.json()
        setResult(data)
      } catch (err) {
        console.error("Error from fetch: ", err)
        setError(err.message)
      }
      setIsLoading(false)
    };

    getData()
    return () => controller.abort()
  }, [])
  return [
    result,
    error,
    isLoading
  ]
}