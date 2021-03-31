let caseStudy = document.getElementsByClassName("case-study")[0];

let projectMap = new Map([
    ['calcifer', {
        header: "Calcifer",
        quote: "Many hours of studies and practice achievement is practically a given",
        author: "- Rodelo Dimaano",
        desc: `Calcifer is a productivity Discord bot that allows users to start pomodoro study timers. 
        It assists Discord communities by allowing users to work together. Calcifer seeks to transform 
        Discord Productivity Channels into a convenient, and empowering experience. `,
        role: "Software Designer/Developer",
        duration: "December - Present",
        technologies: "TypeScript",
        link: "https://github.com/andreidimaano/Calcifer",
        background: [`Like many, I experienced the roughest year of life in 2020. I went through personal 
        hardships and at many times felt lost. However, 2020 still had many highs! Around March 2020, I discovered
        <a href="https://www.youtube.com/channel/UCEDkO7wshcDZ7UZo17rPkzQ">Mayuko Inoue</a>, a content creator on YouTube who talks about
        tech, career, and life. After 2 weeks, I happened to find her on Twitch.tv. For the past year, I've been pretty active on her
        Twitch and Discord community where we have built a community of international coworkers. `,
        `in October 2020, Mayuko and her husband, Scott hosted a coding event called <a href="https://codewithfriends.io/">Code With Friends</a>.
        I participated in the event and created a <a href="https://github.com/andreidimaano/rodelo">bot</a> in honor of my data who had passed way due to Covid-19.
        During a random stream, twitch chat wanted a way to cowork with the same people when Mayuko was not streaming. I made a couple changes and created version 1
        of Calcifer.`,
        `Through this project, I sought to explore how I could empower those who find a mental block when trying to get work done. While
        we are living in disconnected times, Discord has provided a way to connect with others - people we have never met without Discord. I wanted to 
        help my fellow coworkers because they helped me get through some rough times.`
        ],
        iteration: [
            {
                title: "Version 1: Laying the Groundwork",
                description: [`Version 1 of Calcifer was very minimal. There was only one function avaliable: start a Pomodoro Timer. Users
                were able to type a command into Discord c: pomodoro 15. The bot would start a 15 minute timer then
                alert you when the timer was finished. The bot was not complicated to make, and there were almost no bugs because the code
                was so simple. However, there was only one bug that recurs up until today. Because I host my bot on Heroku, the bot will 
                randomly restart and all timers will be wiped out. Sadly, this is something that I could not control due to Heroku's settings. 
                So, at the time, I would occasionally get messages from my users that my bot was bugging out.`]
            }, 
            {
                title: "Version 2: Database",
                description: [`Version 2 of Calcifer integrates a database. When I first created the bot, I drew inspiration from the app, Forest.
                <a href="https://www.forestapp.cc/">Forest</a> is a productivity app where users are locked out of there phone while a timer is running.
                One of the features I really liked about Forest is the idea that the hours I put into studying grows trees on the app, and after a week of
                studying, I could see a multitude of trees (Hence the name, Forest) illustrating my progress in productivity. I wanted to create a database
                so that users could see how much they are studying - I also wanted to quantify my results on Resume ¯\\_(ツ)_/¯ .`,
                `When I first tried to create a database, I used Firebase. I was familiar with Firebase because I of my mobile dev experience. However,
                everytime I tried to push the bot into production, my bot would break. I had almost given up on a database until my mentor recommended 
                MongoDB. Since they are both managed databases, I had no issue converting my Firebase code into MongoDB code. To this day, many of my users
                check their studying time stats to flex on others in the server :)`
                ]
            },
            {
                title: "Version 3: Group Studying",
                description: [`Version 3 of Calcifer transforms pomodoro timers into a collaborative experience. In Mayuko's Discord server, users
                would routinely start pomodoros together. Many users wanted some sort of group pomodoro method where one person types a commmand
                and several users would be pinged when a pomodoro was finished. I tried to design this several times but every time I designed 
                something on a whiteboard, the design became more and more complex. In one example, I considered an OPT-IN object oriented design approach
                where each Pomodoro was an object that contained a string of the author and an array of members who were part of the pomodoro. This version
                was unreasonable because I would have to continuously check for users reacting to a message (OPTing IN to a pomodoro) and then handle any
                subsequent edge cases.`,
                `I kept thinking that if I wanted to implement group working, I would have to completely rewrite my code. While in some cases, 
                doing a whole rewrite may be beneficial to code, in this case, I felt that since the existing codebase was simple, I should 
                not resort to rewriting the entire system. In the end, I found the most useful information in the Discord.JS documentation - I am able
                to see if people are in a certain voice channel or not. I knew right then that group pomodoros could be implemented in a simple way - loop through 
                the array of members in a voice channel and update their relative productivity stats while also saving their names in order to ping them later on.
                Group Studying was simple but was not easy to design. Many considerations were taken into account in order to make this happen, but I'm really glad
                I stuck with it.`]
            },
        ],
        conclusion: {
            title: "Lessons Learned",
            description: `A lot of my projects have been tutorials I follow online or projects that have already been done. This is one of the first projects
            I worked on in which the answers are not online somewhere - I had to think abstractly to solve the problems I had and to integrate new features into the bot.
            On top of learning technical skills, I also learned how to interact with my users. The bot is open-source and I ask my users to fill out any issues they have 
            with the bot. I have responded to several issues over the past couple of months, and I can't thank my users enough for dealing with any bugs that occur. 
            There's still a little bit more work to do with this bot until I move on, but for the past couple of months, this project has been one of the most exciting
            experiences in my career. I can't wait to work on more projects that help out users :)`
        }
    }],
]);

let fillCaseStudy = (project) => {
    let info = projectMap.get(project.toLowerCase());
    let background = '';
    if(info.background) {
        info.background.forEach(p => {
            background = background + "<p>" + p + "</p>";
        })

        background = background.slice(0, background.length - 1);
    }

    let iteration = '';
    if(info.iteration) {
        info.iteration.forEach(i => {
            iteration += '<div class="iteration">';

            iteration += `<h3>${i.title}</h3>`;
            
            i.description.forEach(p => {
                iteration += `<p>${p}</p>`
            })

            iteration += '</div>';
        })
    }
    
    let html = `
    <div class="case-content">
        <div class="case-header"><h1>${(info.header) ? info.header : ''}</h1></div>
        <div class="case-quote">
            <p>${(info.quote) ? info.quote : ''}</p>
            <p class="author">${(info.author) ? info.author : ''}</p>
        </div>
        <div class="case-desc">
            <p>${(info.desc) ? info.desc : ''}</p>
            <div class="case-info">
                <div><p class="li-bold">Role: </p><p>${(info.role) ? info.role : ''}</p></div>
                <div><p class="li-bold">Duration: </p><p>${(info.duration) ? info.duration: ''}</p></div>
                <div><p class="li-bold">Technologies: </p><p>${(info.technologies) ? info.technologies : ''}</p></div>
                <a class="li-bold" href="${info.link}">Link</a>
            </div>
        </div>
        <h3>Background</h3>
        <div class="case-background">
            ${background}
        </div>
        <div class="case-iteration">
            ${iteration}
        </div>
        <div class="case-conc">
            <h3>${info.conclusion.title}</h3>
            <p>${info.conclusion.description}</p>                 
        </div>
    </div>
    `

    console.log(html);
    caseStudy.innerHTML += html;
}
