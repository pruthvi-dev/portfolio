import devBoy from '../Assets/dev-boy.png';

const cards = [
    {
        name: 'Alternet',
        description: 'This project attempts to research the possibility of cryptocurrency mining being the next big thing in web monetization by utilizing the untapped idle computer resources of the users and implementing this technique on a content-based educational website where mining of cryptocurrency happens by virtually utilising a minimal amount of users’ idle computer resources',
        image: 'blah',
        github: 'https://ieeexplore.ieee.org/document/10031966',
        key: 1,
        projectCode: 'ALTNT' 
    },
    {
        name: 'Movie Recommendation System',
        description: 'This project is a web app for movie websites like Netflix where a user is allowed to create an account and watch movies. This web app has mainly focused on the quality of recommendations we make to the user. From the various forms of recommendations we have used some of the most appropriate ones. The user can view the already watched and rated movies in the dashboard.',
        image: 'blah', 
        github: 'https://github.com/Pruthvi-Shivappa/Movie_Recommendation_System',
        key: 2,
        projectCode: 'MRS'
    },
    {
        name: 'Health Insurance System',
        description: 'A website that helps insurance holders to view the details about their insurance and also claim them',
        image: 'blah' ,
        github: 'https://github.com/Pruthvi-Shivappa/HealthInsurance',
        key: 3,
        projectCode: 'HIS'
    },

];

const ProjectImages = {
    ALTNT: [devBoy],
    MRS: [devBoy, devBoy],
    HIS: [devBoy,devBoy,devBoy]
}

export {cards, ProjectImages};