export const ACTIONS = {
  GET_NEWS_CONTENT: "GET_NEWS_CONTENT",
  DELETE_NEWS_CONTENT: "DELETE_NEWS_CONTENT",
  SET_NEWS_ITEMS: "SET_NEWS_ITEMS",
  SET_NEWS_ITEM: "SET_NEWS_ITEM",
  ERROR_FETCHING_DATA: "ERROR_FETCHING_DATA",
  SET_LOADING_NEWS_ITEMS: "SET_LOADING_NEWS_ITEMS",
  SET_ERROR_LOADING_NEWS_ITEMS: "SET_ERROR_LOADING_NEWS_ITEMS"
};

export const INITIAL_NEWS_DATA = {
  1100: {
    displayType: 1,
    isCompletlyFetched: false,
    newsID: "1100",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=40",
    tags: [
      {
        tagName: "MEDICAL"
      }
    ],
    views: "2M",
    headline: "The Quite, Yet Powerful Healthcare Revolution"
  },

  1101: {
    displayType: 0,
    isCompletlyFetched: false,
    newsID: "1101",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1542367787-4baf35f3037d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=30",
    // "https://images.unsplash.com/photo-1494832944834-a08818c634b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80",
    // "https://images.unsplash.com/photo-1574637428550-018f1f368d03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=3334&q=80",
    tags: [
      {
        tagName: "US"
      }
    ],
    views: "1M",
    headline: "Poverty To Empoverment In Chicago"
  },

  1102: {
    displayType: 0,
    isCompletlyFetched: false,
    newsID: "1102",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1577447073438-c6b887157c24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=30",
    tags: [
      {
        tagName: "Dogs"
      }
    ],
    views: "5M",
    headline: "Dogs Cost More Than Cancer Treatment"
  },

  1103: {
    displayType: 0,
    isCompletlyFetched: false,
    newsID: "1103",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=30",
    tags: [
      {
        tagName: "Valentains"
      }
    ],
    views: "10M",
    headline: "Companies To Launch Plans for this Valentains Day"
  },

  1104: {
    displayType: 0,
    isCompletlyFetched: false,
    newsID: "1104",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1515715709530-858f7bfa1b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=30",
    tags: [
      {
        tagName: "Wedding"
      }
    ],
    views: "7M",
    headline: "Event Planners are in Search of New Methods"
  },

  1105: {
    displayType: 2,
    isCompletlyFetched: false,
    newsID: "1105",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1549417229-7686ac5595fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=40",
    newsImages: [
      "https://images.unsplash.com/photo-1549417229-7686ac5595fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=40",
      "https://images.unsplash.com/photo-1513725673171-537abba17912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=40"
    ],
    tags: [
      {
        tagName: "Wedding"
      }
    ],
    views: "7M",
    headline: "Event Planners are in Search of New Methods"
  },

  1106: {
    displayType: 0,
    isCompletlyFetched: false,
    newsID: "1106",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1498452572341-c087c3ee25fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=30",
    tags: [
      {
        tagName: "SPACE"
      }
    ],
    views: "5M",
    headline: "scientists in Search of Life in Deep Space!"
  },

  1107: {
    displayType: 0,
    isCompletlyFetched: false,
    newsID: "1107",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1544650039-22886fbb4323?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=30",
    newsImages: [],
    tags: [
      {
        tagName: "FASHION"
      }
    ],
    views: "5M",
    headline: "Michelle Obama to start new Fashion Trend!"
  },

  1108: {
    displayType: 0,
    isCompletlyFetched: false,
    newsID: "1108",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=30",
    newsImages: [],
    tags: [
      {
        tagName: "JOBS"
      }
    ],
    views: "5M",
    headline: "More Engineering are Rushing for IT Jobs in Inida"
  },

  1109: {
    displayType: 0,
    isCompletlyFetched: false,
    newsID: "1109",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1467019972079-a273e1bc9173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=30",
    newsImages: [],
    tags: [
      {
        tagName: "FOOD"
      }
    ],
    views: "100",
    headline: "Oninon Prices in Inida to touch Sky..."
  },

  1110: {
    displayType: 3,
    isCompletlyFetched: false,
    newsID: "1110",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1489731300081-a03b0ce82303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    newsImages: [
      "https://images.unsplash.com/photo-1489731300081-a03b0ce82303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=40",
      "https://images.unsplash.com/photo-1553786815-138920395604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=40",
      "https://images.unsplash.com/photo-1520483937043-ff3d8ce309b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=40"
    ],
    tags: [
      {
        tagName: "ATV"
      }
    ],
    views: "23M",
    headline: "ATV Racing Traks can be Seen in India Thar"
  }
};

export const NEWS_ITEMS_SKELETON = {
  newsItems: {},
  isLoadingNewsItems: true,
  isErrorLoadingNewsItems: true,
  errorMessage: ""
};

export const NEWS_DATA_SKELETON = {
  displayType: 1,
  isCompletlyFetched: true,
  newsID: "",
  newsPrimeImageURL: "",
  newsImages: [],
  tags: [],
  views: "",
  headline: "",
  subText: "",
  likes: 0,
  disLikes: 0,
  paragraphs: [],
  commnets: {
    commentsID: "",
    count: 0,
    data: {}
  },
  author: {
    authorID: "",
    name: "",
    imageURL: ""
  },
  relatedArticals: []
};

export const NEWS_ITEMS_DATA = {
  1100: {
    displayType: 1,
    isCompletlyFetched: true,
    newsID: "1100",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=40",
    tags: [
      {
        tagName: "MEDICAL"
      },
      {
        tagName: "HEALTH"
      },
      {
        tagName: "TECHNOLOGY"
      },
      {
        tagName: "ENGINEERING"
      },
      {
        tagName: "DOCTORS"
      }
    ],
    views: "2M",
    headline: "The Quite, Yet Powerful Healthcare Revolution",
    subText:
      "How one woman is transfroming the lives of underprivilegred children in innercity",
    likes: 234,
    disLikes: 234,
    body: [
      {
        type: "text",
        text:
          "Other researchers have tried different avenues to restore movement. By sending electrical impulses into leg muscles, it's possible to get people standing or walking again. But the effect is strictly mechanical and not particularly effective. Mushahwar's research has focused on restoring lower-body function after severe injuries using a tiny spinal implant. Hair-like electrical wires plunge deep into the spinal grey matter, sending electrical signals to trigger the networks that already know how to do the hard work."
      },
      {
        type: "image",
        imageURL: "https://newsfeedtemplate.netlify.com/img/photo01.jpg",
        imageCaption: "Photo: Anadolu Agency/Getty Images"
      },
      {
        type: "text",
        text:
          "The implications of moving to a human clinical setting would be massive, but must follow further work that needs to be done in animals. Being able to control standing and walking would improve bone health, improve bowel and bladder function, and reduce pressure ulcers. It could help treat cardiovascular disease -- the main cause of death for spinal cord patients -- while bolstering mental health and quality of life. For those with less severe spinal injuries, an implant could be therapeutic, removing the need for months of gruelling physical therapy regimes that have limited success."
      }
    ],
    commnets: {
      commentsID: "1234",
      count: 23,
      data: {}
    },
    author: {
      authorID: "1234",
      name: "Naveen Pantra",
      imageURL: "https://newsfeedtemplate.netlify.com/img/user01.jpg"
    },
    relatedArticals: []
  },

  1101: {
    displayType: 0,
    isCompletlyFetched: true,
    newsID: "1101",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1542367787-4baf35f3037d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=30",
    // "https://images.unsplash.com/photo-1494832944834-a08818c634b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80",
    // "https://images.unsplash.com/photo-1574637428550-018f1f368d03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=3334&q=80",
    tags: [
      {
        tagName: "US"
      },
      {
        tagName: "POVERTY"
      }
    ],
    views: "1M",
    headline: "Poverty To Empoverment In Chicago",
    subText:
      "How one woman is transfroming the lives of underprivilegred children in innercity",
    likes: 234,
    disLikes: 234,
    paragraphs: [],
    commnets: {
      commentsID: "1234",
      count: 23,
      data: {}
    },
    autor: {
      authorID: "1234",
      name: "Naveen Pantra",
      imageURL: ""
    },
    relatedArticals: []
  },

  1102: {
    displayType: 0,
    isCompletlyFetched: true,
    newsID: "1102",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1577447073438-c6b887157c24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=30",
    // "https://images.unsplash.com/photo-1494832944834-a08818c634b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80",
    // "https://images.unsplash.com/photo-1574637428550-018f1f368d03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=3334&q=80",
    tags: [
      {
        tagName: "Dogs"
      },
      {
        tagName: "Price"
      }
    ],
    views: "5M",
    headline: "Dogs Cost More Than Cancer Treatment",
    subText:
      "How one woman is transfroming the lives of underprivilegred children in innercity",
    likes: 234,
    disLikes: 234,
    paragraphs: [],
    commnets: {
      commentsID: "1234",
      count: 23,
      data: {}
    },
    autor: {
      authorID: "1234",
      name: "Naveen Pantra",
      imageURL: ""
    },
    relatedArticals: []
  },

  1103: {
    displayType: 0,
    isCompletlyFetched: true,
    newsID: "1103",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=30",
    // "https://images.unsplash.com/photo-1494832944834-a08818c634b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80",
    // "https://images.unsplash.com/photo-1574637428550-018f1f368d03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=3334&q=80",
    tags: [
      {
        tagName: "Valentains"
      },
      {
        tagName: "Love"
      }
    ],
    views: "10M",
    headline: "Companies To Launch Plans for this Valentains Day",
    subText:
      "How one woman is transfroming the lives of underprivilegred children in innercity",
    likes: 234,
    disLikes: 234,
    paragraphs: [],
    commnets: {
      commentsID: "1234",
      count: 23,
      data: {}
    },
    autor: {
      authorID: "1234",
      name: "Naveen Pantra",
      imageURL: ""
    },
    relatedArticals: []
  },

  1104: {
    displayType: 0,
    isCompletlyFetched: true,
    newsID: "1104",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1515715709530-858f7bfa1b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=30",
    // "https://images.unsplash.com/photo-1494832944834-a08818c634b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80",
    // "https://images.unsplash.com/photo-1574637428550-018f1f368d03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=3334&q=80",
    tags: [
      {
        tagName: "Wedding"
      },
      {
        tagName: "EventPlanning"
      }
    ],
    views: "7M",
    headline: "Event Planners are in Search of New Methods",
    subText:
      "How one woman is transfroming the lives of underprivilegred children in innercity",
    likes: 234,
    disLikes: 234,
    paragraphs: [],
    commnets: {
      commentsID: "1234",
      count: 23,
      data: {}
    },
    autor: {
      authorID: "1234",
      name: "Naveen Pantra",
      imageURL: ""
    },
    relatedArticals: []
  },

  1105: {
    displayType: 2,
    isCompletlyFetched: true,
    newsID: "1105",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1549417229-7686ac5595fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=40",
    // "https://images.unsplash.com/photo-1494832944834-a08818c634b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80",
    // "https://images.unsplash.com/photo-1574637428550-018f1f368d03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=3334&q=80",
    newsImages: [
      "https://images.unsplash.com/photo-1549417229-7686ac5595fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=40",
      "https://images.unsplash.com/photo-1513725673171-537abba17912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=40"
    ],
    tags: [
      {
        tagName: "Wedding"
      },
      {
        tagName: "EventPlanning"
      }
    ],
    views: "7M",
    headline: "Event Planners are in Search of New Methods",
    subText:
      "How one woman is transfroming the lives of underprivilegred children in innercity",
    likes: 234,
    disLikes: 234,
    paragraphs: [],
    commnets: {
      commentsID: "1234",
      count: 23,
      data: {}
    },
    autor: {
      authorID: "1234",
      name: "Naveen Pantra",
      imageURL: ""
    },
    relatedArticals: []
  },

  1106: {
    displayType: 0,
    isCompletlyFetched: true,
    newsID: "1106",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1498452572341-c087c3ee25fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=30",
    // "https://images.unsplash.com/photo-1494832944834-a08818c634b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80",
    // "https://images.unsplash.com/photo-1574637428550-018f1f368d03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=3334&q=80",
    tags: [
      {
        tagName: "SPACE"
      },
      {
        tagName: "LIFE"
      }
    ],
    views: "5M",
    headline: "scientists in Search of Life in Deep Space!",
    subText:
      "How one woman is transfroming the lives of underprivilegred children in innercity",
    likes: 234,
    disLikes: 234,
    paragraphs: [],
    commnets: {
      commentsID: "1234",
      count: 23,
      data: {}
    },
    autor: {
      authorID: "1234",
      name: "Naveen Pantra",
      imageURL: ""
    },
    relatedArticals: []
  },

  1107: {
    displayType: 0,
    isCompletlyFetched: true,
    newsID: "1107",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1544650039-22886fbb4323?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=30",
    newsImages: [],
    tags: [
      {
        tagName: "FASHION"
      },
      {
        tagName: "MICHELLEOBAMA"
      }
    ],
    views: "5M",
    headline: "Michelle Obama to start new Fashion Trend!",
    subText:
      "How one woman is transfroming the lives of underprivilegred children in innercity",
    likes: 234,
    disLikes: 234,
    paragraphs: [],
    commnets: {
      commentsID: "1234",
      count: 23,
      data: {}
    },
    autor: {
      authorID: "1234",
      name: "Naveen Pantra",
      imageURL: ""
    },
    relatedArticals: []
  },

  1108: {
    displayType: 0,
    isCompletlyFetched: true,
    newsID: "1108",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=30",
    newsImages: [],
    tags: [
      {
        tagName: "JOBS"
      },
      {
        tagName: "STUDENT"
      }
    ],
    views: "5M",
    headline: "More Engineering are Rushing for IT Jobs in Inida",
    subText:
      "How one woman is transfroming the lives of underprivilegred children in innercity",
    likes: 234,
    disLikes: 234,
    paragraphs: [],
    commnets: {
      commentsID: "1234",
      count: 23,
      data: {}
    },
    autor: {
      authorID: "1234",
      name: "Naveen Pantra",
      imageURL: ""
    },
    relatedArticals: []
  },

  1109: {
    displayType: 0,
    isCompletlyFetched: true,
    newsID: "1109",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1467019972079-a273e1bc9173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=30",
    newsImages: [],
    tags: [
      {
        tagName: "FOOD"
      },
      {
        tagName: "ONIONS"
      }
    ],
    views: "100",
    headline: "Oninon Prices in Inida to touch Sky...",
    subText:
      "How one woman is transfroming the lives of underprivilegred children in innercity",
    likes: 234,
    disLikes: 234,
    paragraphs: [],
    commnets: {
      commentsID: "1234",
      count: 23,
      data: {}
    },
    autor: {
      authorID: "1234",
      name: "Naveen Pantra",
      imageURL: ""
    },
    relatedArticals: []
  },

  1110: {
    displayType: 3,
    isCompletlyFetched: true,
    newsID: "1110",
    newsPrimeImageURL:
      "https://images.unsplash.com/photo-1489731300081-a03b0ce82303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    newsImages: [
      "https://images.unsplash.com/photo-1489731300081-a03b0ce82303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=40",
      "https://images.unsplash.com/photo-1553786815-138920395604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=40",
      "https://images.unsplash.com/photo-1520483937043-ff3d8ce309b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=40"
    ],
    tags: [
      {
        tagName: "ATV"
      },
      {
        tagName: "RACING"
      }
    ],
    views: "23M",
    headline: "ATV Racing Traks can be Seen in India Thar",
    subText:
      "How one woman is transfroming the lives of underprivilegred children in innercity",
    likes: 234,
    disLikes: 234,
    paragraphs: [],
    commnets: {
      commentsID: "1234",
      count: 23,
      data: {}
    },
    autor: {
      authorID: "1234",
      name: "Naveen Pantra",
      imageURL: ""
    },
    relatedArticals: []
  }
};

// dogs
// https://images.unsplash.com/photo-1577447073438-c6b887157c24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80
// feb 14
// https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80
// wedding
// https://images.unsplash.com/photo-1549417229-7686ac5595fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80
// https://images.unsplash.com/photo-1513725673171-537abba17912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80
// ATV
// https://images.unsplash.com/photo-1489731300081-a03b0ce82303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80
// https://images.unsplash.com/photo-1553786815-138920395604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3290&q=80
// https://images.unsplash.com/photo-1520483937043-ff3d8ce309b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80
// stars
// https://images.unsplash.com/photo-1498452572341-c087c3ee25fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80
