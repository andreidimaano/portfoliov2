let caseStudy = document.getElementsByClassName("case-study")[0];

let projectMap = new Map([
    [
        'calcifer', 
        {
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
            hardships and at many times felt lost. Around March 2020, I discovered
            <a target="blank" href="https://www.youtube.com/channel/UCEDkO7wshcDZ7UZo17rPkzQ">Mayuko Inoue</a>, a content creator on YouTube who talks about
            tech, career, and life. Meeting Mayuko was the highlight of 2020 and gave me the confidence to pursue SWE.`,
            `In October 2020, Mayuko and Scott, hosted a coding event called <a target="blank" href="https://codewithfriends.io/">Code With Friends</a>.
            I participated in the event and created a <a target="blank" href="https://github.com/andreidimaano/rodelo">bot</a> in honor of my dad who had passed way due to Covid-19.
            During a random stream, twitch chat wanted a way to cowork with the same people when Mayuko was not streaming. I made a couple changes and created version 1
            of Calcifer.`,
            `Through this project, I sought to explore how I could empower those who find a mental block when trying to get work done. While
            we are living in disconnected times, Discord has provided a way to connect with others - people we have never met without Discord. I wanted to 
            help my fellow coworkers because they helped me get through some rough times.`
            ],
            iteration: [
                {
                    title: "Version 1: Laying the Groundwork",
                    description: [`Version 1 of Calcifer was very minimal. Users could start a Pomodoro Timer by typing 'c: pomodoro 15'. The bot would start a 15 minute timer then
                    alert you when the timer was finished. There was only one bug that occurs today. Because I host my bot on Heroku, the bot will 
                    randomly restart and all timers will be wiped out. Sadly, this is something that I could not control due to Heroku's settings.`]
                }, 
                {
                    title: "Version 2: Database",
                    description: [`Version 2 of Calcifer integrates a database. When I first created the bot, I drew inspiration from the app, Forest.
                    <a target="blank" href="https://www.forestapp.cc/">Forest</a> is a productivity app where users are locked out of there phone while a timer is running.
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
        }, 
    ],
    [
        'bts',
        {
            header: "BTS Facial Recognition",
            desc: 'BTS Facial Recognition is an  AI that tries to recognize the members of BTS in their music videos.',
            role: "Software Developer",
            duration: "June 2020, 3 days",
            technologies: "Python, Computer Vision, Machine Learning",
            link: "https://youtu.be/iXqRY_Q_oc4",
            background: [`In 2020 and 2021, I revisited my love for Korean culture. I began watching Kdramas and listening to Kpop.
            I wanted to create a project that combined my interests in KPOP and Computer Science. The result was a Google Chrome Extension 
            that changes the font color of strings that contain "IU" to a cascading rainbow color. When I posted the project on Github, I started looking
            at other Kpop Computer Science projects. I stumbled across 2 projects: 1. A guy trains an AI to compare the similarities of his dancing skills to Kpop dancers
            and 2. A guy trains an AI to recognize the members of a Kpop group in a music video. `,
            `Both projects sounded cool to me. However, I can't dance very well so I decided to recreate the 2nd project, and my friends also always tell me
            they can never differentiate the members of BTS in music videos. Futhermore, my sister is a huge BTS fan so I decided to create a project that recognizes the faces of BTS members.`,
            ],
            iteration: [
                {
                    title: "Version 1: Identifying One Face",
                    description: [`I used a facial recognition <a target="blank" href="https://pypi.org/project/face-recognition/" target="blank">library</a> for this project. 
                    Following this <a target="blank" href="https://github.com/ageitgey/face_recognition/blob/master/examples/facerec_from_webcam_faster.py">example, </a>I used a photo of IU
                    and Jungkook and tried to identify IU in her music video, Lilac.
                    <div class="case-study-video"><iframe width="560" height="315" src="https://www.youtube.com/embed/krwZenffnzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    As you can tell, the program is not very accurate - some of the dancers are identified as IU and Jungkook. These discrepancies come from 2 sources: 1. Bad input and 2. Bad data.
                    The video I used was low quality (less pixels) so there's a higher chance that the prediction made by the program is false. I also only trained the model with 
                    1 photo of IU and 1 photo of Jungkook. The data is extremely sparse so the predicitions made by the program are likely to be false as well.`]
                }, 
                {
                    title: "Version 2: Lots of Data",
                    description: [`I used this <a target="_blank" href="https://github.com/ageitgey/face_recognition/blob/master/examples/face_recognition_svm.py">example </a>
                    to create an SVM that helps classify the faces in the video. The Facial Recognition library helps identify faces and encodes their face for the SVM to make a prediction.
                    For the SVM, I used the <a target="_blank" href="https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html">scikit learn library</a>. I used the 
                    <a target="_blank" href="https://pypi.org/project/bing-image-downloader/">bing image downloader"</a> to download 10 pictures of each BTS member and 10 pictures of IU.
                    When I tried out the program with BTS's Butter Music Video, the results were not very accurate. Sometimes Jungkook would be identified as IU and Jimin would be identified as J-Hope.
                    I tried the program again using 300 images of each person but I was still running into the same accuracy issues. I ended up using 20,000 images of celebrities from the 
                    <a target="_blank" href="http://mmlab.ie.cuhk.edu.hk/projects/CelebA.html">CelebA</a> dataset, and when I retried the program I got pretty accurate results.  `
                    ]
                }
            ],
            conclusion: {
                title: "Conclusion",
                description: `I built an AI! ...or I at least used a library to help build an AI :). While I have no idea how machine learning works,
                it was extremely satisfying to run my code and see that I was able to identify the faces of BTS. I also relied purely on documentation and debugging 
                for this project. I'm someone who is very used to watching tutorials so it's nice to know I can learn in different ways. 
                </br></br>Here's the end result, I hope you like it! <div class="case-study-video"><iframe width="560" height="315" src="https://www.youtube.com/embed/iXqRY_Q_oc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
            }
        }
    ],
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
                <a class="prototype-link" target="_blank" href="${info.link}">SEE RESULT ➡️</a> 
                <div><h3 class="li-bold">Role </h3><p>${(info.role) ? info.role : ''}</p></div>
                <div><h3 class="li-bold">Duration </h3><p>${(info.duration) ? info.duration: ''}</p></div>
                <div><h3 class="li-bold">Technologies </h3><p>${(info.technologies) ? info.technologies : ''}</p></div>
            </div>
        </div>
        <div class="case-background">
            <h3>Background</h3>
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
