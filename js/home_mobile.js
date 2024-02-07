let isMobile = false;
function isMobileDevice() {
    return window.innerWidth < window.innerHeight;
}
function adjustLayout() {
    const bodyElement = document.body;
    const heroContainer = document.getElementById('hero_container');
    const mainText = document.getElementById('main_text');
    const projectsGrid = document.getElementById('projects_grid');
    const projectsGridH1 = document.querySelector('#projects_grid h1');
    const projectsImg = document.getElementById('projects');
    const h1Element = mainText.querySelector('h1');
    const h2Element = mainText.querySelector('h2');
    const pElement = mainText.querySelector('p');
    const viewProjectsButton = document.getElementById('viewProjectsButton');
    const projectButtonContainer = document.getElementById('project_button_container');

    if (isMobileDevice()) {
        bodyElement.style.maxHeight = '100svh';
        heroContainer.style.display = 'block';
        projectsGrid.style.width = '100%';
        mainText.style.width = '100%';
        mainText.style.marginLeft = 'auto';
        mainText.style.marginRight = 'auto';
        h1Element.style.textAlign = 'center';
        h2Element.style.textAlign = 'center';
        pElement.style.textAlign = 'center';
        h1Element.style.marginTop = '7svh';
        h1Element.style.marginLeft = 'auto';
        h1Element.style.marginRight = 'auto';
        h2Element.style.marginLeft = 'auto';
        h2Element.style.marginRight = 'auto';
        pElement.style.marginLeft = 'auto';
        pElement.style.marginRight = 'auto';
        projectsGridH1.style.marginRight = '0';
        projectsImg.style.display = 'block';
        projectsImg.style.marginLeft = 'auto';
        projectsImg.style.marginRight = 'auto';
        projectsImg.style.width = '80svw';
        projectButtonContainer.style.textAlign = 'center';
        projectButtonContainer.style.marginTop = '2svh';
        projectButtonContainer.style.marginLeft = 'auto';
        viewProjectsButton.style.display = 'inline-block';
        viewProjectsButton.style.marginLeft = 'auto';
        viewProjectsButton.style.marginRight = 'auto';
        isMobile = true;
    } else {
        heroContainer.style.display = 'flex';
        projectsGrid.style.width = '50%';
        mainText.style.width = '50%';
        mainText.style.marginLeft = '0';
        h1Element.style.textAlign = 'left';
        h2Element.style.textAlign = 'left';
        pElement.style.textAlign = 'justify';
        h1Element.style.marginTop = '20svh';
        h1Element.style.marginLeft = '10svw';
        h2Element.style.marginLeft = '10svw';
        pElement.style.marginLeft = '10svw';
        projectsGridH1.style.marginRight = '0';
        projectsImg.style.display = 'flex';
        projectsImg.style.marginLeft = 'auto';
        projectsImg.style.marginRight = 'auto';
        projectsImg.style.width = '43vw';
        projectButtonContainer.style.textAlign = 'left';
        projectButtonContainer.style.marginTop = '4vh';
        projectButtonContainer.style.marginLeft = '9svw';
        if(isMobile = true){
            viewProjectsButton.style.marginLeft = '20px';
        }
    }
}
window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);