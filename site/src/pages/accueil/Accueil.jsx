import React from 'react'
import { useNavigate } from 'react-router-dom'

function Accueil () {
  const navigate = useNavigate()
  
  // Redirection automatique vers la page d'accueil
  React.useEffect(() => {
    navigate('/', { replace: true })
  }, [navigate])

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '50vh' 
    }}>
      <p>Redirection vers la page d'accueil...</p>
    </div>
  )
}
export default Accueil