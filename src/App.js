import React, { useMemo } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MessageProvider } from './hooks/message.hook'
import useRoutes from './routes'
import useAuth from './hooks/auth.hook'
import AuthContext from './context/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Alert from './components/Alert'

const App = () => {
  const { token, ready, login, logout } = useAuth()
  const authenticated = useMemo(() => {
    return token ? true : false
  }, [token])
  const route = useRoutes(authenticated)

  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{
      token, ready, login, logout
    }}>
      <MessageProvider>
        <Router>
          <div className="App">
            {authenticated && <Header />}
            <main className="main">
              <div className="container">
                <Alert />
                {route}
              </div>
            </main>
            {authenticated && <Footer />}
          </div>
        </Router>
      </MessageProvider>
    </AuthContext.Provider>
  );
}

export default App;
