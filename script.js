function loadResume() {
    const container = document.getElementById('resume-container');
    const xml = `
      <resume>
        <experience>
          <job>
            <title>Teaching Assistant</title>
            <company>NTNU</company>
            <year>2024</year>
          </job>
        </experience>
      </resume>
    `;
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, 'application/xml');
    const job = doc.querySelector('job');
    container.innerHTML = `
      <p>${job.querySelector('title').textContent} at ${job.querySelector('company').textContent} (${job.querySelector('year').textContent})</p>
    `;
  }
  