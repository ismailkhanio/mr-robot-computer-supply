import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    // replace fragment with Router
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome to Mr. Robot eCommerce Supply</h1>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>

      <Footer />
    </Router>
  )
}

export default App
