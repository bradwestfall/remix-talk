import { createContext, useContext, useState } from 'react'
const AppContext = createContext()

export function AppProvider({ children }) {
  const [prefetch, setPrefetch] = useState('none')
  const context = { prefetch, setPrefetch }
  return <AppContext.Provider value={context} children={children} />
}

export function usePrefetch() {
  const { prefetch, setPrefetch } = useContext(AppContext) || {}
  return { prefetch, setPrefetch }
}
