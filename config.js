
module.exports = {
  pathPrefix: '/',
  siteUrl: 'https://venshare.com',
  siteTitle: 'Anton Whalley',
  siteDescription: 'A log of tech doodles',
  author: 'anton',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: 'https://venshare.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    about: 'about',
    tag: 'tag',
    archive: 'archive'
  },
  social: {
    github: 'https://github.com/no9',
    linkedin: 'https://ie.linkedin.com/in/antonwhalley',
    rss: '/rss.xml'
  },
  tags: {
    javascript: {
      name: 'JavaScript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.'
    },
    gitops: {
      name: 'GitOps',
      description: 'GitOps is a set of practices to manage infrastructure and application configurations using Git'
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.'
    },
    vuejs: {
      name: 'Vue.js',
      description: 'Vue.js is a JavaScript framework for building interactive web applications.'
    },
    chromeapp: {
      name: 'Chrome App',
      description: 'Chrome Apps is a web application that runs on the Google Chrome web browser.'
    },
    rust: {
      name: 'Rust',
      description: 'Rust is a multi-paradigm programming language focused on performance and safety, especially safe concurrency.'
    }, 
    java:{
      name: 'Java',
      description: 'Java is a high-level programming language developed by Sun Microsystems.'
    }, 
    openshift: {
      name: 'Open Shift',
      description: 'OpenShift is a family of containerization software developed by Red Hat.'
    }, 
    appsody: {
      name: 'Appsody',
      description: 'Appsody provides everything you need to iteratively develop applications, ready for deployment to Kubernetes environments. '
    }, 
    tide: {
      name: 'Tide',
      description: 'Tide is Fast, friendly, asynchronous HTTP in Rust'
    }
  }
}