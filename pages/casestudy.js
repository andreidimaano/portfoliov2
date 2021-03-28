let caseStudy = document.getElementsByClassName("case-study")[0];

let projectMap = new Map([
    ['calcifer', {
        header: "Calcifer",
        quote: "Many hours of studies and practice achievement is practically a given",
        author: "- Rodelo Dimaano",
        desc: "Calcifer is a productivity Discord bot that allows users to start pomodoro study timers. It assists Discord communities by allowing users to work together. Calcifer seeks to transform Discord Productivity Channels into a convenient, and empowering experience. ",
        role: "Software Designer/Developer",
        duration: "December - Present",
        technologies: "TypeScript",
        
    }],
]);

let fillCaseStudy = (project) => {
    let info = projectMap.get(project.toLowerCase());
    
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
            </div>
        </div>
        <div class="case-iteration">
            <p>iteration title here</p>
            <p>iteration here</p>
            <p>iteration here</p>
        </div>
        <div class="case-conc">
            <p>conclusion title here</p>
            <p>description here</p>
            <p>description here</p>  
            <p>description here</p>                    
        </div>
    </div>
    `

    console.log(html);
    caseStudy.innerHTML += html;
}
