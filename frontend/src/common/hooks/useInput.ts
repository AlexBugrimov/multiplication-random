import React, {useState} from "react";

export const useInput = (defaultValue: string | number, required: boolean) => {
  const [value, setValue] = useState<string | number>(defaultValue)
  const [error, setError] = useState<string | null>(null)
  return {
    value,
    error,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value),
    onBlur: (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.currentTarget.value && required) setError("Обязательное поле")
      else setError(null)
    }
  }
}