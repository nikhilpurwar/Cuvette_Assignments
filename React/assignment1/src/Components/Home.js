import React from 'react'

const Home = ({title, message}) => {
  const heroStyle = {
    height: "400px",
    backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    borderRadius: "8px",
  }
  return (
    <>
      <div className="hero" style={heroStyle}>
        <h1>{title}</h1>
        <p >{message}</p>
      </div>
      
    </>
  )
}

export default Home