let sections = new Map([
    ['2021', [
        {
            title: 'Intersection',
            tags: ['Verilog', 'FSM', 'HLSM'],
            client: 'Logic Design Class Project',
            description: `Implementation and Design of a 4-way traffic intersection controller using Verilog. 
            This project is an amalgamation of all the concepts learned throughout my Logic Design Class. 
            The implementation accomodates pedestrians. Check the link for Design, Architecture, and Performance.`,
            link: 'https://bit.ly/3frnCvN'
        },
        {
            title: 'IU Chrome Extension',
            tags: ['JavaScript', 'API'],
            client: 'Side Project',
            description: `I'm a huge fan of IU. What better way to show my support than to create an extension (Although
            buying her merch would probably be better support). I created an extension that changes all images on a page
            to an image of IU. I used an IU image API to fetch random IU images.`,
            github: 'https://github.com/andreidimaano/IUChromeExtension'
        },
        {
            title: 'Bobaful',
            tags: ['React', 'Chakra UI', 'Nextjs', 'Graphql', 'mongoDB'],
            client: 'Bobaful',
            description: `Bobaful is a website I made for a local small business, Bobaful. It serves as an ordering interface
            for customers. It includes a database that stores user info: email, password, and shopping cart.
            This project is not production ready.`,
            link: 'https://www.instagram.com/bobaful_/',
            github: 'https://github.com/andreidimaano/Bobaful'
        },
    ]],
    ['2020', [
        {
            title: 'Bluedit',
            tags: ['React', 'Nextjs', 'Graphql', 'postgresql'],
            client: 'Side Project',
            description: `I followed a Ben Awad YouTube tutorial to implement a website that allows users to makes posts about
            any topic. Users can login and there information will be stored in a database. Yes, the website name is a play on words
            of blue and red :)`,
            github: 'https://github.com/andreidimaano/Bluedit'
        },
        {
            title: 'Calcifer',
            tags: ['TypeScript', 'mongoDB'],
            client: 'Mayuko Inoue',
            description: `Calcifer is a pomodoro discord bot. Check out my case study for the whole backstory!`,
            link: 'https://discord.com/oauth2/authorize?client_id=781277794826715176&scope=bot',
            github: 'https://github.com/andreidimaano/Calcifer'
        },
        {
            title: 'Isabelle',
            tags: ['TypeScript', 'Object Oriented Design', 'Jest'],
            client: 'Software Design Class Project',
            description: `Isabelle is a Discord Bot that implements the strategy, command, and singleton design patterns in Typescript.
            I used Jest to write a suite of mock tests.`,
            github: 'https://github.com/andreidimaano/Isabelle',
        },
        {
            title: 'Portfolio v1',
            tags: ['React', 'JavaScript', 'HTML', 'CSS'],
            client: 'Side Project',
            description: `I created my first portfolio based on a design made by Brittany Chiang. I originally created this portfolio 
            for my Riot Games Internship application.`,
            link: 'https://andreidimaano.github.io/portfoliov1/',
            github: 'https://github.com/andreidimaano/portfoliov1'
        },
        {
            title: 'Rodelo',
            tags: ['JavaScript'],
            client: 'My Dad :)',
            description: `Rodelo is a pomodoro discord bot. It is the inspiration behind Calcifer. I submitted this project to 
            Code With Friends, a month-long coding event. Check out the Github for the full story.`,
            github: 'https://github.com/andreidimaano/rodelo'
        },
        {
            title: 'Looking For Game',
            tags: ['React'],
            client: 'IvyHacks',
            description: `Inspired by Among Us, Looking For Game helps people find people parties to play games together.`,
            link: 'https://lookingforgroup-40a98.web.app/',
            github: 'https://github.com/alfredzhuang/looking-for-group'
        },
        {
            title: 'Trieuloo Twitter Tracker',
            tags: ['JavaScript', 'AWS EC2', 'API'],
            client: 'Silly Hacks',
            description: `Trieuloo Twitter Tracker is a twitter bot that tracks my Challenger friend's League of Legends Ranked Games.
            It won best use of AWS EC2 at Silly Hacks.`,
            link: 'https://twitter.com/TrieulooTracker',
            github: 'https://github.com/andreidimaano/TrieulooTwitterTracker'
        }, 
        {
            title: 'twiine',
            tags: ['Figma', 'Product Design'],
            client: 'twiine',
            description: `twiine was a hangout planner application that helped users plan out their hangouts (twiine has taken a new 
            direction since). I designed the B2B website and the mobile application.`,
            link: 'https://www.figma.com/file/SFcIYLcfU4kEVolmuCYSSK/Twiine-Web-2.0?node-id=992%3A0',
        },
        {
            title: 'Dragon Fist Fitness',
            tags: ['Flutter'],
            client: 'Side Project',
            description: `Dragon Fist Fitness is a workout mobile application that alerts users to move on to the next exercise.`,
            link: 'https://www.figma.com/file/krj45Tinz8FiiqlpYeliAu/Untitled?node-id=0%3A1',
            github: 'https://github.com/alfredzhuang/dragon-fist-fitness'
        }
    ]]
])

let works = document.getElementsByClassName('works')[0];

let fillWorks = () => {
    let html = '';

    html += createSection('2021');
    html += createSection('2020');

    works.innerHTML += html;
}

let createSection = (year) => {
    let iteration = 0;
    let section = sections.get(year);
    let html = `<div class="section">
        <div class="year">${year}</div>`;

    section.forEach(project => {
        let projectNumber = iteration.toString();
        let tags = '';
        if(project.tags) {
            project.tags.forEach(tag => {
                tags += `<p>${tag}</p>`
            })
        }
        let link = (project.link) ? `<a href="${project.link}">Link</a>`: '';
        let github = (project.github) ? `<a href="${project.github}">GitHub</a>`: '';

        html += `<div onclick="accordion('${year + projectNumber}')" class="project">
            <div class="title-tags">
                <div class="title">${project.title}</div>
                <div class="tags">${tags}</div>
            </div>
            <div class="client">${project.client}</div>
            <div id="${year + projectNumber}" class="description hide">
                <p>${project.description}</p>
                <div class="links">${link}${github}</div>
            </div>
        </div>
        `
        iteration++;
    })

    html += '</div>'
    console.log(html)
    return html;
}