import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    
      <div>
        
      </div>
      <img
          class="picture"
          src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift%2C_Taylor_%282007%29_cropped_2.JPG"
          alt="Singer" />
      <div className="details-container">
        
      <h3>Taylor Swifts Albums</h3>
        <details>
        <summary>Taylor Swift</summary>
        
          <ol>
            <li>Tim McGraw</li>
            <li>Picture to Burn</li>
            <li>Teardrops on My Guitar</li>
          </ol>

        </details>

        <details>
        <summary>Fearless</summary>
        
          <ol>
            <li>Fearless</li>
            <li>Fifteen</li>
            <li>Love Story</li>
          </ol>

        </details>

        <details>
        <summary>Speak Now</summary>

          <ol>
            <li>Mine</li>
            <li>Sparks Fly</li>
            <li>Back to December</li>
          </ol>

        </details>

      </div>
      
    </>
  )
}

export default App
