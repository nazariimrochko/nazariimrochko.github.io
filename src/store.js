const store = {
    nazarMrochko: {
        general: {
            fullName: 'Nazarii Mrochko',
            age: '25',
            live: 'Lviv Ukraine',
            profession: 'Trainee (intern) Frontend developer',
        },

        about: {
            text: 'Since May 2020, I have been studying programming independently and with a mentor. ' +
                'At the beginning, I studied HTML, CSS, SCSS, Git. After that, I moved on to learning JavaScript.' +
                'I have a few mini-projects on GitHub. I am eager to learn and to develop my skills in a friendly atmosphere.' +
                'I\'ll consider all types of professional opportunities be I am really enthusiastic about programming',
            title: 'About me',
        },
        work: {
            place: 'Dynar.com.ua',
            time: ' August 2018 — January 2020',
            position: 'Head of technological and production process',
            description: 'The company is engaged in various types of printing on fabric and not only ' +
                'with more than ten years of experience. My position is production manager.' +
                ' Working with people, as well as the production of goods and ' +
                'quality control is an interesting and creative process.',
            title: 'Work Experience',
        },
        education: {
            place: 'Lviv. Ukraine',
            time: ' September 2011 - May 2014',
            position: 'Computer operator',
            description: 'College of Computer Technology and Construction.',
            title: 'Work Experience',
        },
        project: {
            list: [
                {link: 'https://github.com/nazariimrochko/Creative.loc', title: 'Creative.loc_______[HTML_CSS_SCSS]'},
                {link: 'https://github.com/nazariimrochko/Stopwatch', title: 'Stopwatch________[HTML_CSS_JavaScript]'},
                {link: 'https://github.com/nazariimrochko/ToDo-List', title: 'ToDo-list__________[HTML_CSS_JavaScript]'},
                {link: 'https://github.com/nazariimrochko/Book-List', title: 'Book-list__________[React_JavaScript]'},
                {link: 'https://github.com/nazariimrochko/Picture_slider', title: 'Gallery-slider____[HTML_CSS_JavaScript]'},
                {link: 'https://github.com/nazariimrochko/Picture-gallery', title: 'Picture-gallery____[HTML_CSS_JavaScript]'},
                {link: 'https://github.com/nazariimrochko/Hover-board', title: 'Hover-board_____[HTML_CSS_JavaScript]'},

            ],
            title: 'Project in Git-Hub',
            type: 'lest',
        },
        contact: {
            phone: '(+380)-93-046-2229',
            email: 'nazik409@gmai.com',
            linkedIn: 'www.linkedin.com',
            title: 'Contact info',
        },

        languages: {
            UA: 'Ukrainian (native)',
            EN: '',
            title: ' Languages',
        },
        techSkills: {
            skills: [
                'HTML',
                'CSS',
                'SASS',
                'GIT',
                'JavaScript',
                'React ',
            ],
            title: 'Tech Skills',
        },
        personalSkills: {
            skills: [
                'Responsible',
                'Organized',
                'Creative',
                'Teamwork',
                'Motivated',
                'Communicable',
                'Friendly',
            ],
            title: 'Personal Skills',
        }

    }

}
export default store;
