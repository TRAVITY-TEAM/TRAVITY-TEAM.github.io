module.exports = {
  title: `WAGGLE Team 기술 블로그`,
  description: `WAGGLE 프로젝트의 전반적인 개발 과정을 기록합니다.`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://waggle-team.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `WAGGLE-TEAM/WAGGLE-TEAM.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `WAGGLE`,
    bio: {
      role: `Team`,
      description: ['당신의 여행 친구'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: ``, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: ``, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'WAGGLE Backend',
        description: 'WAGGLE 서버 프로젝트 Repository 입니다.',
        techStack: ['Spring Boot', 'Java', 'Docker', 'GitHub Actions'],
        thumbnailUrl: '',
        links: {
          post: '',
          github: 'https://github.com/WAGGLE-TEAM/WAGGLE_BACKEND',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
    ],
  },
};