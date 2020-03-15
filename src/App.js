import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './Assets/scss/app.scss'

import { Provider, initialState, getReducer } from './Contexts/App'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Routes from './Routes'

const App = () => (
  <Provider initialState={initialState} reducer={getReducer}>
    <Router>
      <main>
        <Header />
        <section className="container-fluid">
          <Routes />
        </section>
        <Footer />
      </main>
    </Router>
  </Provider>
)

export default App
