import getImage from "./images";

const {
    python, java, mysql, postgres, aws, css3, javascript, postman, powerbi, firebase, spring, springboot, nextjs, tensorflow,
    tailwindcss, figma, mongodb, react, git, expo, project1, project2, project3, project4, project5, project6,
    people1, people2, people3, people4, people5, people6
} = getImage();

// Function for Header Content
export function getGenericContent() {
    return {
        name: "Aryan Mane"
    }
}

// Function for Hero Page Content
export function getHeroContent() {
    return {
        tagline: "Building Scalable Apps with AI & Cloud Integration",
        workStatus: "Available to Work",
    };
}

// function for About Page Content
export function getAboutContent() {
    return {
        introduction: "Hi there! I'm Aryan Mane, a Full Stack Developer specializing in Java Stack Development, Data Science, and Analytics. Leveraging Artificial Intelligence and Cloud technologies, I architect end-to-end Java solutions that transform complex challenges into innovative, scalable software systems spanning robust backends to dynamic frontends.",
        projectsDone: 20,
        yrOfExp: 5
    }
}

// Function for Skills Page Content
export function getSkillContent() {

    return {
        skillTitle: "Essential Tools I Use",
        skillTagline: "Discover the powerful tools & technologies I use to create scalable, high-performing websites and applications.",
        skillItem: [
            {
                imgSrc: tailwindcss,
                label: 'TailwindCSS',
                desc: 'User Interface'
            },
            {
                imgSrc: java,
                label: 'Java',
                desc: 'Language'
            },
            {
                imgSrc: figma,
                label: 'Figma',
                desc: 'Design Tool'
            },
            {
                imgSrc: postgres,
                label: 'PostgreSQL',
                desc: 'Database'
            },
            {
                imgSrc: powerbi,
                label: 'Power BI',
                desc: 'Analysis Tool'
            },
            {
                imgSrc: css3,
                label: 'CSS',
                desc: 'User Interface'
            },
            {
                imgSrc: springboot,
                label: 'Spring Boot',
                desc: 'Framework'
            },
            {
                imgSrc: mongodb,
                label: 'MongoDB',
                desc: 'Database'
            },
            {
                imgSrc: nextjs,
                label: 'Next.js',
                desc: 'Framework'
            },
            {
                imgSrc: tensorflow,
                label: 'TensorFlow',
                desc: 'Framework'
            },
            {
                imgSrc: expo,
                label: 'Expo',
                desc: 'Mobile Dev.'
            },
            {
                imgSrc: mysql,
                label: 'MySQL',
                desc: 'Database'
            },
            {
                imgSrc: postman,
                label: 'Postman',
                desc: 'API Platform'
            },
            {
                imgSrc: git,
                label: 'Git/Github',
                desc: 'VCS'
            },
            {
                imgSrc: aws,
                label: 'AWS',
                desc: 'PaaS'
            },
            {
                imgSrc: spring,
                label: 'Spring',
                desc: 'Framework'
            },
            {
                imgSrc: javascript,
                label: 'JavaScript',
                desc: 'Language'
            },
            {
                imgSrc: firebase,
                label: 'Firebase',
                desc: 'SaaS'
            },
            {
                imgSrc: react,
                label: 'React',
                desc: 'Framework'
            },
            {
                imgSrc: python,
                label: 'Python',
                desc: 'Language'
            }
        ],
    }
}

// Function for Work Page Content
export function getWorkContent() {

    return {
        workTitle: "My Portfolio Highlights",
        works: [
            {
                imgSrc: project1,
                title: 'Wallpaper App',
                tags: ['React Native', 'Expo'],
                projectLink: 'https://github.com/m-aryan/mkbhdClone'
            },
            {
                imgSrc: project2,
                title: 'Welocity',
                tags: ['Java', 'AWT', 'Swing'],
                projectLink: 'https://github.com/m-aryan/Welocity'
            },
            {
                imgSrc: project3,
                title: 'Thrift',
                tags: ['Flutter', 'Firebase'],
                projectLink: 'https://github.com/m-aryan/ThriftApp'
            },
            {
                imgSrc: project4,
                title: 'Profit Dashboard',
                tags: ['PowerBI', 'Analytics'],
                projectLink: ''
            },
            {
                imgSrc: project5,
                title: 'Solana Faucet',
                tags: ['Solana', 'JavaScript'],
                projectLink: 'https://github.com/m-aryan/Airdrop-SOL-NFT'
            },
            {
                imgSrc: project6,
                title: 'Pulse United',
                tags: ['HTML', 'CSS'],
                projectLink: 'https://github.com/m-aryan/firstProjectEver'
            },
        ]
    }
}

// Function for Review Page Content
export function getReviewContent() {
    return {
        reviewTitle: 'What Our Clients Say',
        reviews: [
            {
                content: 'It was great to work with Aryan. Our conversation before deciding to work together gave me the confidence to finalize the deal with him and he delivered more than expected. Thanks Aryan!!!',
                name: 'Neha Kulkarni',
                imgSrc: people1,
                company: 'N.K. Academy'
            },
            {
                content: 'Thank you to Aryan for making this amazing inventory tracker for my medical shop. It has made our work much easier and saved a lot of time. Highly recommend his work!',
                name: 'Amol Chougule',
                imgSrc: people2,
                company: 'Mediplus Pharmacy Store'
            },
            {
                content: 'Excellent Job and Delivered quickly. Would recommend to others.',
                name: 'Manish Gupta',
                imgSrc: people3,
                company: "Gupta's Retail Mart"
            },
            {
                content: 'Top-notch Freelancer! Built a visualization dashboard for our company, improving data visualization and decision-making.',
                name: 'Vinod Naik',
                imgSrc: people4,
                company: 'Mindscapez Analytics'
            },
            {
                content: 'Creative solutions! Created an online ordering system for our restaurant. He also took the initiative of updating the look & feel of our existing software.',
                name: 'Simran Bhanushali',
                imgSrc: people5,
                company: 'Kesari Darbar'
            },
            {
                content: 'Exceptional research and development work! Built a simulation tool that enhanced the efficiency of our project on computational modeling. Truly impressive and innovative.',
                name: 'Dr. Avdhut Chitnis',
                imgSrc: people6,
                company: 'Research Mentor'
            }
        ]
    }
}

// Function for Conatact Page Content
export function getContactContent() {
    return {
        contactTitle: "Ready to Connect? Let’s Work Together!",
        contactMessage: "Reach out today to discuss your project needs and start collaborating on something amazing!!",
        githubURL: 'https://www.github.com/m-aryan',
        linkedinURL: 'https://www.linkedin.com/in/aryan-mane',
        mediumURL: 'https://medium.com/@aryan.dev',
        instagramURL: 'https://www.instagram.com/arym.dev',
        mailURL: 'https://mail.google.com/mail/?view=cm&fs=1&to=aryanmane.dev@gmail.com',
    }
}

// Default Export: Bundle All Functions
export default {
    getGenericContent,
    getHeroContent,
    getSkillContent,
    getWorkContent,
    getReviewContent,
    getContactContent,
};