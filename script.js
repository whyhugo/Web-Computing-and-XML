function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}


document.addEventListener('DOMContentLoaded', loadResume);

function loadResume() {
    const container = document.getElementById('resume-container');
    fetch('resume.xml')
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(xmlString, 'application/xml');
              
            const personalInfo = doc.querySelector('PersonalInformation');
            const education = doc.querySelector('Education');
            const experiences = doc.querySelectorAll('Experience > Position');
            const competitions = doc.querySelectorAll('Competitions > Competition');
            const projects = doc.querySelectorAll('Projects > Project');
            const lectures = doc.querySelectorAll('LectureExperience > Lecture');

            container.innerHTML = `
                <h2>Personal Information</h2>
                <p>Name: ${personalInfo.querySelector('Name').textContent}</p>
                <p>Email: ${personalInfo.querySelector('Email').textContent}</p>
                <p>GitHub: <a href="${personalInfo.querySelector('GitHub').textContent}">${personalInfo.querySelector('GitHub').textContent}</a></p>
                <p>Website: <a href="${personalInfo.querySelector('Website').textContent}">${personalInfo.querySelector('Website').textContent}</a></p>
                <p>Summary: ${personalInfo.querySelector('Summary').textContent}</p>

                <h2>Education</h2>
                <p>Degree: ${education.querySelector('Degree').textContent}</p>
                <p>School: ${education.querySelector('School').textContent}</p>
                <p>Graduation Date: ${education.querySelector('GraduationDate').textContent}</p>
                <p>GPA: ${education.querySelector('GPA').textContent}</p>

                <h2>Experience</h2>
                ${Array.from(experiences).map(exp => `
                  <div>
                    <p>Title: ${exp.querySelector('Title').textContent}</p>
                    <p>Organization: ${exp.querySelector('Organization').textContent}</p>
                    <p>Dates: ${exp.querySelector('Dates').textContent}</p>
                    <p>Responsibilities:</p>
                    <ul>
                      ${Array.from(exp.querySelectorAll('Task')).map(task => `<li>${task.textContent}</li>`).join('')}
                    </ul>
                  </div>
                `).join('')}

                <h2>Competitions</h2>
                ${Array.from(competitions).map(comp => `
                  <div>
                    <p>Name: ${comp.querySelector('Name').textContent}</p>
                    <p>Award: ${comp.querySelector('Award').textContent}</p>
                    <p>Year: ${comp.querySelector('Year').textContent}</p>
                    <p>Details: ${comp.querySelector('Details').textContent}</p>
                  </div>
                `).join('')}

                <h2>Projects</h2>
                ${Array.from(projects).map(proj => `
                  <div>
                    <p>Name: ${proj.querySelector('Name').textContent}</p>
                    <p>Contributions:</p>
                    <ul>
                      ${Array.from(proj.querySelectorAll('Task')).map(task => `<li>${task.textContent}</li>`).join('')}
                    </ul>
                  </div>
                `).join('')}

                <h2>Lecture Experience</h2>
                ${Array.from(lectures).map(lec => `
                  <div>
                    <p>Event: ${lec.querySelector('Event').textContent}</p>
                    <p>Topic: ${lec.querySelector('Topic').textContent}</p>
                    <p>Details: ${lec.querySelector('Details').textContent}</p>
                  </div>
                `).join('')}
            `;
        })
        .catch(error => {
            console.error('Error loading resume:', error);
        });
}

// Highlight the current page button
//document.addEventListener("DOMContentLoaded", () => {
//    const navLinks = document.querySelectorAll(".topnav a");
//    const currentPage = window.location.pathname;
//  
//    navLinks.forEach(link => {
//      if (link.href.includes(currentPage)) {
//        link.classList.add("active");
//      } else {
//        link.classList.remove("active");
//      }
//    });
//  });
  