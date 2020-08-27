const QuizData = [
    {
      id: 1,
      question: "Identify which organization this logo belongs to",
      logo:
        "https://cdn.vox-cdn.com/thumbor/mMfc8GntP-YH3RlxUrcKz6D_ye8=/39x0:3111x2048/920x613/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png",
      options: ["Netfix", "Nvidia", "Norton", "New York ShipBuilding"],
      answerId: 0
    },
    {
      id: 2,
      question: "Identify which organization this logo belongs to",
      logo:
        "https://venturebeat.com/wp-content/uploads/2014/07/airbnb-logo-red.jpg?fit=800%2C450&strip=all",
      options: ["Ebay", "Adobe", "AirBnb", "ACC Ltd."],
      answerId: 2
    },
    {
      id: 3,
      question: "Identify which organization this logo belongs to",
      logo:
        "https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2020/01/31142253/Banner-image-26.jpg",
      options: ["White Owl Pvt Ltd", "Trip Advisor", "Norton", "Hooters"],
      answerId: 1
    },
    {
      id: 4,
      question: "Identify which organization this logo belongs to",
      logo:
        "https://static.dezeen.com/uploads/2020/07/toyota-rebrand-logo-design_dezeen_2364_sq_1.jpg",
      options: ["Peugeot", "Mazda", "Fiat", "Toyota"],
      answerId: 3
    },
    {
      id: 5,
      question: "Identify which organization this logo belongs to",
      logo:
        "https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1481913057/idpaksg5l65vvdiunlvt.png",
      options: ["AirBnB", "Big Basket", "Big Bazar", "Pinterest"],
      answerId: 1
    },
    {
      id: 6,
      question: "Identify which organization this logo belongs to",
      logo: "https://www.clipartmax.com/png/middle/252-2523398_rolex-logo-png-clipart-logo-rolex-png.png",
      options: ["Shopify", "Shell Global", "Rolex", "New York ShipBuilding"],
      answerId: 2
    },
    {
      id: 7,
      question: "Identify which organization this logo belongs to",
      logo:
        "https://i.pinimg.com/originals/ba/56/01/ba5601f528f46b95198abd190b76659a.jpg",
      options: ["Mackenzie", "McDonald's", "Marvel", "Shell Global"],
      answerId: 1
    },
    {
      id: 8,
      question: "Identify which organization this logo belongs to",
      logo:
        "https://image.shutterstock.com/image-photo/11-april-2018-white-tesla-260nw-1074713426.jpg",
      options: ["MAZZANTI", "Marvel", "Mazda", "Tesla"],
      answerId: 3
    },
    {
      id: 9,
      question: "Identify which organization this logo belongs to",
      logo:
        "data:image/png;base64,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",
      options: ["Future Group", "NBC", "Twitter", "Lufthansa"],
      answerId: 2
    },
    {
      id: 10,
      question: "Identify which organization this logo belongs to",
      logo: "https://getdrawings.com/free-icon/coursera-icon-58.png",
      options: ["Starbucks", "John Jacobs", "Lenskart", "Coursera"],
      answerId: 3
    },
  {
      id: 11,
      question: "Identify which organization this logo belongs to",
      logo: "https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg",
      options: ["Swift", "Biometrics", "Lenskart", "React"],
      answerId: 3
    },
    {
        id: 12,
            question: "Identify which organization this logo belongs to",
        logo: "https://lh3.googleusercontent.com/proxy/7gS4BCWfqcV3PammaXI_H0Pg0MGlzd42j5LErAUz8aaABFgUICiOjHEfqF-lCu0LiWlFtjsSpZnL3yLM3sgESKLORE8rVQp4IkM6YPHxR7fT",
        options: ["Singapore Airlines", "Luftsana", "Biman Bangladesh", "Hurricane Airlines"],
        answerId: 1
    }
  ];
  
  export default QuizData;