import React from 'react'
import { CiBookmark } from "react-icons/ci";
function App() {
  return (
    <div>
      <div className="parent">
        <div className="card">
          <div>
            <div className="top">
              <img src="https://imgs.search.brave.com/iwBe45YsJyRCNYYEFU5FSar68xdZVsQOCcmludDKOK4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS8z/ZC1mbHVlbmN5LzEy/MDAvYW1hem9uLmpw/Zw" alt="" />
              <button>Save <CiBookmark size={15} /></button>
            </div>
            <div className="center">
              <h3>Amazon <span>5 days ago</span></h3>
              <h2>Senior UI/UX Designer</h2>
              <div className='tag'>
                <h4>Part Time</h4>
                <h4>Senior Level</h4>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>

            </div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
