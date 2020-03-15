import { useState, useLayoutEffect } from 'react'

const useLocalStorage = (key, defaultValue = null, prefix = 'store') => {
  const storeKey = `${prefix}-${key}`

  const [value, setValue] = useState(() => {
    const data = localStorage.getItem(storeKey)
    return data === null ? defaultValue : JSON.parse(data)
  })

  const updateValue = newValue => {
    setValue(() => {
      localStorage.setItem(storeKey, JSON.stringify(newValue))
      return newValue
    })
  }

  useLayoutEffect(() => {
    const storageListener = e => {
      if (e.storageArea === localStorage && e.key === storeKey) {
        setValue(e.newValue === null ? defaultValue : JSON.parse(e.newValue))
      }
    }
    window.addEventListener('storage', storageListener)
    return () => window.removeEventListener('storage', storageListener)
  })

  return [value, updateValue]
}

export default useLocalStorage
