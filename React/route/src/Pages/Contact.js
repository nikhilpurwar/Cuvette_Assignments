import React from 'react'

export const Contact = () => {
  return (
    <div className="container">
      <h1>Contact</h1>
      <form action="">
        <input type="text" placeholder='Subject'/>
        <label for="description">Description:</label>
        <textarea id="description" name="description" rows="4" cols="50" placeholder="Enter your description here..."></textarea>
      </form>
    </div>
  )
}
