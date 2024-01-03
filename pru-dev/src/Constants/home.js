import devBoy from '../Assets/dev-boy.png';
import Admin from '../Assets/Alternet/Admin.png';
import Feed from '../Assets/Alternet/Feed.png';
import Home from '../Assets/Alternet/Home.png';
import SignIn from '../Assets/Alternet/SignIn.png';
import SystemDesign from '../Assets/Alternet/SystemDesign.jpg';
import Innerscore from '../Assets/Innerscore/Innerscore.webp';
import Samvidha from '../Assets/UIUX/Samvidha.png';
import Inovact from '../Assets/UIUX/Inovact.png';
import Cover from '../Assets/UIUX/cover.png';
import Insta from '../Assets/UIUX/Instagram.png';
const cards = [
    {
        name: 'Alternet',
        description: 'This project attempts to research the possibility of cryptocurrency mining being the next big thing in web monetization by utilizing the untapped idle computer resources of the users and implementing this technique on a content-based educational website where mining of cryptocurrency happens by virtually utilising a minimal amount of users’ idle computer resources',
        image: Feed,
        github: 'https://ieeexplore.ieee.org/document/10031966',
        key: 1,
        projectCode: 'ALTNT' 
    },
    {
        name: 'Innerscore - The Co School',
        description: "Innerscore is an Ed Tech Client I am currently working for in my company. As an SDE, I analyze client requirements and develop the UI for key features of various products of Innerscore. I work with GraphQL to query data from DB and integrate these queries in the frontend. I implement end-to-end workflows to migrate data across Postgres, MongoDb and Elasticsearch .I perform realtime analysis and search operations on user events by using the ELK stack.I also write test scripts in CucumberJS for the features I have developed.",
        image: Innerscore, 
        github: 'https://www.coschool.ai/',
        key: 2,
        projectCode: 'INS'
    },
    {
        name: 'UI/UX Design Projects',
        description: " I have worked on multiple freelance projects as a UI UX designer, namely, Inovact, Samvidha foods and CoviSafe . I mainly focus on user research,user interviews, empathy mapping, wireframing and UI design. I am well versed with tools like Figma, Adobe XD and Illustrator.",
        image: Insta, 
        github: 'https://www.behance.net/pruthvipshiva',
        key: 3,
        projectCode: 'UIUX'   
    }
];

const ProjectImages = {
    ALTNT: [Home, SystemDesign, Feed, Admin,  SignIn],
    INS: [Innerscore],
    UIUX: [Inovact, Samvidha]
}

export {cards, ProjectImages};