document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.transform = 'scale(1.05)';
        });

        project.addEventListener('mouseleave', () => {
            project.style.transform = 'scale(1)';
        });
    });
});
