import React from 'react'
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>
const About = () => <h1>About Page</h1>

const Contact = () => {
    const {name} = useParams()
    return <h1 data-testid='contact-name'>{name}</h1>

}
const TestRouter = () => {
    const name = 'John Doe';
  return (
    <>
        <BrowserRouter>
        <nav data-testid="navbar">
            <Link data-testid="home-link" to="/">Home</Link>
            <Link data-testid="about-link" to="/about">About</Link>
            <Link data-testid="contact-link" to={`/contact/${name}`}>Contact</Link>
        </nav>
    
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact/:name" element={<Contact />} />                
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default TestRouter