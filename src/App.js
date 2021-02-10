import { BrowserRouter as Router } from 'react-router-dom'
import AuthContext from './context/AuthContext'
import useRoutes from './routes'
import useAuth from './hooks/auth.hook'
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from './components/Loader'

function App() {
  const { token, ready, login, logout } = useAuth()
  const Authenticated = !!token
  const route = useRoutes(Authenticated)

  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{
      token, ready, login, logout
    }}>
      <Router>
        <div className="App">
          {Authenticated && <Header />}
          <main className="main">
            <div className="container">

              {route}

            </div>
          </main>
          {Authenticated && <Footer />}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
