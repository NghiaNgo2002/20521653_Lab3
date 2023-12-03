import React from 'react';
import './Profile.css'; // Import your CSS file
import myImage2 from "../img/download.png";
import myImage from "../img/nghiango.jpg";

function Profile() {
  // Functions for handling menu options (these can be modified as needed)
  function handleProfile() {
    // Logic for handling Profile option
    // Example: document.getElementsByClassName("title_name");
  }

  function handleExperiences() {
    // Logic for handling Experiences option
    // Example: document.getElementsByClassName("title_name");
  }

  function handleAbilities() {
    // Logic for handling Abilities option
    // Example: document.getElementsByClassName("title_name");
  }

  function handleProject() {
    // Logic for handling Project option
    // Example: document.getElementsByClassName("flex-space");
  }

  function handleContact() {
    // Logic for handling Contact option
    // Example: document.getElementsByClassName("title_name");
  }

  return (
    <div className="card">
    <img src={myImage} alt="Image Description" />
    <div style={{ width: '20%', float: 'right' }}>
      <div id="menu">
        <ul>
          <li><a onClick={handleProfile}>Profile</a></li>
          <li><a onClick={handleExperiences}>Experiences</a></li>
          <li><a onClick={handleAbilities}>Abilities</a></li>
          <li><a onClick={handleProject}>Project</a></li>
          <li><a onClick={handleContact}>Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="card-content right">
      <h1>Nghia Ngo</h1>
      <h2>University of Information Technology</h2>
      <p className="bold">I am the fourth Student of Information Technology University</p>
      <p className="bold">With the 25th batch student in year 2019-2020 <a href="https://uit.edu.vn">Uit.edu.vn</a></p>
      <p>Nghia.Ngo, <a href="mylink-url">Information Technology University</a>, 2002</p>

      <div class="folder">
                <img src={myImage2} alt="Folder icon"/>
                <span><a class = "bold" href="url">Papers</a></span>
            </div>
            <div class="folder">
                <img src={myImage2} alt="Folder icon"/>
                <span><a class = "bold" href="url">Documents</a></span>
            </div>
            <div class="folder">
                <img src={myImage2} alt="Folder icon"/>
                <span><a class = "bold" href="url">Folders</a></span>
            </div>
            <div class="folder">
                <img src={myImage2} alt="Folder icon"/>
                <span><a  class = "bold" href="url">Files</a></span>
            </div>

      <div className="Subject">
        <h1>Subject and Learning</h1>
        <ul>
          <li>Web application development</li>
          <li>Introduction to database</li>
          {/* Add more subjects or learning topics as needed */}
        </ul>
      </div>

      <div className="Experience">
        <h1>Working Experience</h1>
        <ul>
          <div className="row">
            <div className="column">
              <h3>Dates</h3>
              <h3>2019-2022</h3>
              <h3>06/2021</h3>
            </div>
            <div className="column">
              <h3>Work</h3>
              <h3>Student at UIT</h3>
              <h3>Internship at Facebook</h3>
            </div>
          </div>
          {/* Add more working experience details if needed */}
        </ul>
      </div>

      <div className="Skills">
        <h1>Skills</h1>
        <ul>
          <div className="soft-skill">
            <span className="skill-name">HTML/CSS</span>
            <div class="rating">
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                        </div>
          </div>
          <div className="soft-skill">
            <span className="skill-name">React</span>
            <div class="rating">
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                        </div>
          </div>
          <div className="soft-skill">
            <span className="skill-name">NodeJs</span>
            <div class="rating">
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                        </div>
          </div>
          <div className="soft-skill">
            <span className="skill-name">SQL</span>
            <div class="rating">
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                        </div>
          </div>
          {/* Add more skills and their ratings as needed */}
        </ul>
      </div>
      {/* Add more content sections as required */}
    </div>
  </div>
 
  );
}

export default Profile;
