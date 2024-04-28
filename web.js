// script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fetch and display job listings (dummy data for demonstration)
const jobListings = [
    { title: 'Software Engineer', company: 'TechCo', location: 'Tokyo', deadline: 'April 30, 2024' },
    { title: 'Marketing Specialist', company: 'AdAgency', location: 'Osaka', deadline: 'May 10, 2024' },
    { title: 'English Teacher', company: 'Language School', location: 'Kyoto', deadline: 'May 15, 2024' }
];

const jobsContainer = document.querySelector('.jobs');
const jobsHTML = jobListings.map(job => `
    <div class="job">
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Deadline:</strong> ${job.deadline}</p>
    </div>
`).join('');

jobsContainer.innerHTML = jobsHTML;
