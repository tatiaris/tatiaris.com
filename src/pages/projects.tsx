import React from "react";
import { Mheader } from "../components/Mheader";
import { Mnavbar } from "../components/Mnavbar";
import { Project } from "../components/Project";

const Projects = (): React.ReactNode => {
  const projectList = [
    {
      "id": 11,
      "name": "TAMU Degree Planner",
      "img": "tamudp.png",
      "description": "A web-app which makes degree planning more convenient @TAMU.",
      "features": [
        {
          "name": "Collective Info",
          "description": "All the information a student might need to plan their degree is available on a single page."
        },
        {
          "name": "Degree Evaluation",
          "description": "Users can check their degree progression live on the right side-bar."
        },
        {
          "name": "Guidance",
          "description": "Users can view popular courses, check for meeting pre-requisites, and have the option to load sample plans."
        },
        {
          "name": "Intuitive UI",
          "description": "Courses are grouped by requirements and are easy to move around and plan."
        }
      ],
      "tools": ["Next.js", "Node.js", "React", "MongoDB", "Cheerio", "Bootstrap"],
      "demo_link": "https://tamudp.vercel.app",
      "github_link": "https://github.com/tatiaris/degreeplanner"
    },
    {
      "id": 10,
      "name": "S&P 500 Analysis",
      "img": "spanalysis.png",
      "description": "A table which provides an overview of the S&P 500 companies.",
      "features": [
        {
          "name": "Sorting",
          "description": "Users can sort the data based on any column in any order."
        },
        {
          "name": "Intuitive UI",
          "description": "The data is easy to read and interpret throughout the page."
        },
        {
          "name": "Export",
          "description": "Users can easily export the data by copy pasting the page onto a spreadsheet."
        }
      ],
      "tools": ["Next.js", "Node.js", "React", "MongoDB", "Alpaca", "Cheerio", "Bootstrap"],
      "demo_link": "https://spanalysis.vercel.app",
      "github_link": "https://github.com/tatiaris/spanalysis"
    },
    {
      "id": 9,
      "name": "WIEAT",
      "img": "acelab.png",
      "description": "Web-based Interactive Episode Analysis Tool for researchers.",
      "features": [
        {
          "name": "Entry",
          "description": "Users can enter interaction data to be stored in a Mongo DB."
        },
        {
          "name": "Update",
          "description": "Users can update older interaction data."
        },
        {
          "name": "Visualization",
          "description": "Users can generate and download posters for each respective episode."
        },
        {
          "name": "Analysis",
          "description": "Users can analyze features such as SIIL, I-I Ratio, and Diversity Index."
        }
      ],
      "tools": ["Next.js", "Node.js", "React", "MongoDB", "React-Vis", "Bootstrap"],
      "demo_link": "https://wieat.vercel.app",
      "github_link": "https://github.com/tatiaris/wieat"
    },
    {
      id: 8,
      name: "Pathfinder",
      img: "pathfinder.png",
      description: "A path finding algorithm visualizer.",
      features: [
        {
          name: "Movable Checkpoints",
          description: "Users can move start and end positions to any location."
        },
        {
          name: "Obstacle creation",
          description: "Users can create and remove unpenetrable walls on the map to challenge the bot."
        },
        {
          name: "Animation",
          description: "When the algorithm runs, the path finding process is animated for ease of understanding."
        },
        {
          name: "Intuitive UI",
          description: "Easy to understand minimal interface for users."
        }
      ],
      tools: ["P5.js", "JS", "HTML", "CSS"],
      demo_link: "https://tatiaris.github.io/pathfinder",
      github_link: "https://github.com/tatiaris/pathfinder"
    },
    {
      id: 7,
      name: "Quizhack",
      img: "quizhack.png",
      description: "A Quizlet scraper that combines and displays popular sets for any topic.",
      features: [
        {
          name: "Advanced Options",
          description: "Users can sort, remove duplicates, and search for terms in the gathered cards."
        },
        {
          name: "Huge Database",
          description: "Having Quizlet as the database, users can find several sets on almost any topic."
        },
        {
          name: "Time Saving",
          description: "Users no longer have to jump from sets to sets and can have everything displayed on one screen."
        },
        {
          name: "Intuitive UI",
          description: "Easy to understand minimal interface for users."
        }
      ],
      tools: ['Node.js', 'React', 'Express', 'Socket-io', 'Material UI', 'Axios', 'Cheerio'],
      demo_link: "https://quizhack.net",
      github_link: "https://github.com/tatiaris/quizhack"
    },
    {
      "id": 6,
      "name": "Moosic",
      "img": "moosic.png",
      "description": "A website to download songs from youtube for free.",
      "features": [
        {
          "name": "Multiple songs + Spotify",
          "description": "The website can take multiple inputs at a time and fetch songs from a spotify playlist."
        },
        {
          "name": "Huge Database",
          "description": "The website converts videos from youtube, so if the song is on youtube, it can be downloaded."
        },
        {
          "name": "Minimal UI",
          "description": "The website has a very intuitive and easy to follow user interface."
        },
        {
          "name": "Speed",
          "description": "The process is extremely fast, and songs can be downloaded seconds upon input."
        },
        {
          "name": "Consistent format",
          "description": "All songs are directly fetched from youtube and converted into mp3 format."
        }
      ],
      "tools": ["Node.js", "Express", "Socket-io", "ffmpeg", "Axios", "Cheerio", "Archiver"],
      "demo_link": "https://moosic-bot.glitch.me/",
      "github_link": "https://github.com/tatiaris/Moosic"
    },
    {
      "id": 5,
      "name": "Apples-to-Apples",
      "img": "apples-to-apples.png",
      "description": "An Apples-to-Apples card game simulator for people to play online.",
      "features": [
        {
          "name": "Custom Cards",
          "description": "Ability to add custom prompts and answers to the database for future use."
        },
        {
          "name": "Clean Design",
          "description": "A minimal and intuitive user interface for a great user experience."
        },
        {
          "name": "Game Log",
          "description": "Log of all events that have occured in the game so players don't miss anything."
        },
        {
          "name": "Leaderboard",
          "description": "Keeps track of each players score live."
        },
        {
          "name": "Custom Names",
          "description": "Players can customize their names for ease of recognition."
        }
      ],
      "tools": ["Node.js", "Express", "Socket-io", "JQuery"],
      "demo_link": "https://cah-online.glitch.me/",
      "github_link": "https://github.com/tatiaris/apples-to-apples"
    },
    {
      "id": 4,
      "name": "Zotak",
      "img": "zotak.png",
      "description": "A multi-purpose Discord bot that performs a variety tasks based on user inputs.",
      "features": [
        {
          "name": "Text Predictor",
          "description": "Submit text and get AI generated follow up text for it (uses talktotransformer)."
        },
        {
          "name": "Meme Creator",
          "description": "Given an image and text, generates a meme/comic by using the two appropriately."
        },
        {
          "name": "Image Searcher",
          "description": "Performs an image search using the input and returns the first result."
        },
        {
          "name": "Comic Generator",
          "description": "Sends a random comic scraped from several different websites."
        },
        {
          "name": "Magic 8 Ball",
          "description": "If asked a question, answers with a magic 8 ball (and custom) answer."
        }
      ],
      "tools": ["Node.js", "Discord.js", "Fs", "Puppeteer", "JQuery"],
      "demo_link": "https://discordapp.com/oauth2/authorize?client_id=702314809357762591&permissions=0&scope=bot",
      "github_link": "https://github.com/tatiaris/zotak"
    },
    {
      "id": 3,
      "name": "Typo",
      "img": "typo.png",
      "description": "A website that tracks user's typing speed and accuracy over time.",
      "features": [
        {
          "name": "Typos",
          "description": "Keeps track of most frequently missed characters when typing."
        },
        {
          "name": "Live Stats",
          "description": "Displays your current passage stats in real time."
        },
        {
          "name": "Abundant Passages",
          "description": "Creates a typing prompt using a large quotes and passages database."
        },
        {
          "name": "Speed Tracker",
          "description": "Displays speed over several attempts, updates live."
        },
        {
          "name": "Accuracy Tracker",
          "description": "Displays accuracy over several attempts, updates live."
        }
      ],
      "tools": ["PHP", "MySQL", "JQuery", "Chart.js"],
      "demo_link": "https://tatiaris.github.io/typo",
      "github_link": "https://github.com/tatiaris/typo"
    },
    {
      "id": 2,
      "name": "Insertion Sort Visualizer",
      "img": "sorting.svg",
      "description": "A web app that visualizes how the insertion sort algorithm functions.",
      "features": [
        {
          "name": "Live Sorting",
          "description": "Shows each step of the sort live, as it is happening."
        },
        {
          "name": "Intuitive UI",
          "description": "Easy to understand interface and visuals for users."
        },
        {
          "name": "Base Template",
          "description": "Code can be modified to change algorithm, sample size, canvas size, etc."
        }
      ],
      "tools": ["HTML", "JS", "CSS"],
      "demo_link": "https://tatiaris.github.io/sorting-algorithms-visualizer",
      "github_link": "https://github.com/tatiaris/sorting-algorithms-visualizer"
    },
    {
      "id": 1,
      "name": "Sudoku Solver (BETA)",
      "img": "sudoku.png",
      "description": "A step by step sudoku solving program.",
      "features": [
        {
          "name": "Step Solving",
          "description": "The program solves the sudoku phase by phase in a BFS manner."
        },
        {
          "name": "Auto Hinting",
          "description": "Updates hints on each square on each phase update."
        },
        {
          "name": "Intuitive UI",
          "description": "Easy to understand interface for users with just the puzzle and the solve button."
        }
      ],
      "tools": ["PHP", "HTML", "JS", "CSS"],
      "demo_link": "https://tatiaris.github.io/sudoku",
      "github_link": "https://github.com/tatiaris/sudoku"
    }
  ]
  return (
    <>
        <Mheader title="projects"/>
        <Mnavbar theme="light" page="projects"/>
        <div className="body-container">
            <div className="all-projects-container">
                {projectList.map((p, i) => <Project key={`project-${i}`} info={p}/>)}
            </div>
        </div>
    </>
  );
};

export default Projects;
