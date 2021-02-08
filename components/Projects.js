import React, { useState, useEffect } from 'react';
import { Modal, Tag, Row, Card, Col, Image, Link, Button, Collapse, useModal } from '@geist-ui/react';
import { ExternalLink, Code, X, ArrowLeft, ArrowRight } from '@geist-ui/react-icons';

const projectList = [
  {
    id: 15,
    name: 'Album Cover Screenshot',
    img: 'album_cover_ss.jpg',
    description: 'Create your own album cover screenshot with this filter tool.',
    features: [
      {
        name: '',
        description: 'Visualize your own music album cover.'
      },
      {
        name: '',
        description: 'Customize all elements of a phone screen for an ideal screenshot.'
      },
      {
        name: '',
        description: 'No photoshop skills required, super easy to use.'
      }
    ],
    tools: ['React', 'Geist UI'],
    demo_link: '/p/album_cover',
    github_link: 'https://github.com/tatiaris/tatiaris.com/tree/master/pages/p/album_cover.js',
    status: 'completed'
  },
  {
    id: 14,
    name: 'Wealth Tracker',
    img: 'wealth_tracker.png',
    description: 'Estimate your wealth over the years.',
    features: [
      {
        name: '',
        description: 'Calculate your wealth based on investments over time.'
      },
      {
        name: '',
        description: 'Manipulate parameters such as initial deposit, deposit rate/frequency, and growth rate/frequency to see how they impact your wealth over time.'
      },
      {
        name: '',
        description: 'Featurefull chart to visualize investment growth over time.'
      }
    ],
    tools: ['React', 'CanvasJS', 'Geist UI', 'JS', 'HTML', 'CSS'],
    demo_link: '/p/wealth_tracker',
    github_link: 'https://github.com/tatiaris/tatiaris.com/tree/master/pages/p/about_you.js',
    status: 'completed'
  },
  {
    id: 13,
    name: 'About You',
    img: 'about_you.png',
    description: 'The information every website knows about you.',
    features: [
      {
        name: '',
        description: 'Learn about the data accessible and stored by almost every website you visit.'
      },
      {
        name: '',
        description: 'Learn about how you can avoid giving away the information.'
      },
      {
        name: '',
        description: 'More features to come'
      }
    ],
    tools: ['React', 'JS', 'Geist UI', 'HTML'],
    demo_link: '/p/about_you',
    github_link: 'https://github.com/tatiaris/tatiaris.com/tree/master/pages/p/about_you.js',
    status: 'completed'
  },
  {
    id: 12,
    name: 'Resubae',
    img: 'resubae.png',
    description: 'Easy to use Resume Builder with custom templates',
    features: [
      {
        name: '',
        description: 'Collection of several unique and custom templates created, tried, and tested by professionals.'
      },
      {
        name: '',
        description: 'Ability for users to design a custom template and add to the database.'
      },
      {
        name: '',
        description: 'Option to create a profile and save the data for future use.'
      },
      {
        name: '',
        description: 'Intuitive UI for users to easily update their informationa and use templates.'
      }
    ],
    tools: ['Next.js', 'Node.js', 'React', 'MongoDB', 'Auth0', 'Bootstrap'],
    demo_link: 'https://resubae.net',
    github_link: 'https://github.com/tatiaris/resubae',
    status: 'ongoing'
  },
  {
    id: 11,
    name: 'TAMU Degree Planner',
    img: 'tamudp.png',
    description: 'Web-app that makes degree planning convenient for aggies',
    features: [
      {
        name: 'Collective Info',
        description: 'All the information a student might need to plan their degree is available on a single page.'
      },
      {
        name: 'Degree Evaluation',
        description: 'Users can check their degree progression live on the right side-bar.'
      },
      {
        name: 'Guidance',
        description: 'Users can view popular courses, check for meeting pre-requisites, and have the option to load sample plans.'
      }
    ],
    tools: ['Next.js', 'Node.js', 'React', 'MongoDB', 'Cheerio', 'Bootstrap'],
    demo_link: 'https://tamudp.vercel.app',
    github_link: 'https://github.com/tatiaris/degreeplanner',
    status: 'ongoing'
  },
  {
    id: 10,
    name: 'S&P 500 Analysis',
    img: 'spanalysis.png',
    description: 'Tool that provides unique stats for S&P 500 stocks',
    features: [
      {
        name: 'Sorting',
        description: 'Users can sort the data based on any column in any order.'
      },
      {
        name: 'Intuitive UI',
        description: 'The data is easy to read and interpret throughout the page.'
      },
      {
        name: 'Export',
        description: 'Users can easily export the data by copy pasting the page onto a spreadsheet.'
      }
    ],
    tools: ['Next.js', 'Node.js', 'React', 'MongoDB', 'Alpaca', 'Cheerio', 'Bootstrap'],
    demo_link: 'https://spanalysis.vercel.app',
    github_link: 'https://github.com/tatiaris/spanalysis',
    status: 'completed'
  },
  {
    id: 9,
    name: 'WIEAT',
    img: 'wieat.png',
    description: 'Web-based Interactive Episode Analysis Tool for researchers',
    features: [
      {
        name: 'Entry',
        description: 'Users can enter new interaction data.'
      },
      {
        name: 'Update',
        description: 'Users can update older interaction data.'
      },
      {
        name: 'Visualization',
        description: 'Users can generate and download posters for each respective episode.'
      },
      {
        name: 'Analysis',
        description: 'Users can analyze features such as SIIL, I-I Ratio, and Diversity Index.'
      }
    ],
    tools: ['Next.js', 'Node.js', 'React', 'MongoDB', 'React-Vis', 'Bootstrap'],
    demo_link: 'https://wieat.vercel.app',
    github_link: 'https://github.com/tatiaris/wieat',
    status: 'ongoing'
  },
  {
    id: 8,
    name: 'Game of Life',
    img: 'game_of_life.png',
    description: "John Conway's Game of Life, the zero player game",
    features: [
      {
        name: 'Variable Speed',
        description: "Users can adjust the speed of game's progress."
      },
      {
        name: 'Several Controls',
        description: 'Users can control and choose whether to play, pause, single step, or reset the game.'
      },
      {
        name: 'Info Section',
        description: 'Players new to the game can learn the rules in the information section.'
      },
      {
        name: 'Intuitive UI',
        description: 'Easy to use minimal interface for users.'
      }
    ],
    tools: ['React', 'JSX', 'HTML', 'CSS'],
    demo_link: '/p/game_of_life',
    github_link: 'https://github.com/tatiaris/tatiaris.com/tree/master/pages/p/game_of_life.js',
    status: 'completed'
  },
  {
    id: 7,
    name: 'Pathfinder',
    img: 'pathfinder.png',
    description: 'Easy to use path finding algorithm visualizer',
    features: [
      {
        name: 'Movable Checkpoints',
        description: 'Users can move start and end positions to any location.'
      },
      {
        name: 'Obstacle creation',
        description: 'Users can create and remove unpenetrable walls on the map to challenge the bot.'
      },
      {
        name: 'Animation',
        description: 'When the algorithm runs, the path finding process is animated for ease of understanding.'
      },
      {
        name: 'Intuitive UI',
        description: 'Easy to understand minimal interface for users.'
      }
    ],
    tools: ['P5.js', 'JS', 'HTML', 'CSS'],
    demo_link: 'https://tatiaris.github.io/pathfinder',
    github_link: 'https://github.com/tatiaris/pathfinder',
    status: 'completed'
  },
  {
    id: 6,
    name: 'Quizhack',
    img: 'quizhack.png',
    description: 'Quizlet scraper that combines popular sets for any topic',
    features: [
      {
        name: 'Advanced Options',
        description: 'Users can sort, remove duplicates, and search for terms in the gathered cards.'
      },
      {
        name: 'Huge Database',
        description: 'Having Quizlet as the database, users can find several sets on almost any topic.'
      },
      {
        name: 'Time Saving',
        description: 'Users no longer have to jump from sets to sets and can have everything displayed on one screen.'
      }
    ],
    tools: ['Node.js', 'React', 'Express', 'Socket-io', 'Material UI', 'Axios', 'Cheerio'],
    demo_link: 'https://quizhack.net',
    github_link: 'https://github.com/tatiaris/quizhack',
    status: 'unmaintained'
  },
  {
    id: 5,
    name: 'Moosic',
    img: 'moosic.png',
    description: 'A website to download songs from youtube for free',
    features: [
      {
        name: 'Multiple songs + Spotify',
        description: 'The website can take multiple inputs at a time and fetch songs from a spotify playlist.'
      },
      {
        name: 'Huge Database',
        description: 'The website converts videos from youtube, so if the song is on youtube, it can be downloaded.'
      },
      {
        name: 'Speed',
        description: 'The process is extremely fast, and songs can be downloaded seconds upon input.'
      }
    ],
    tools: ['Node.js', 'Express', 'Socket-io', 'ffmpeg', 'Axios', 'Cheerio', 'Archiver'],
    demo_link: 'https://moosic-bot.glitch.me/',
    github_link: 'https://github.com/tatiaris/Moosic',
    status: 'unmaintained'
  },
  {
    id: 4,
    name: 'Apples-to-Apples',
    img: 'apples-to-apples.png',
    description: 'An Apples-to-Apples simulator for people to play online',
    features: [
      {
        name: 'Custom Cards',
        description: 'Ability to add custom prompts and answers to the database for future use.'
      },
      {
        name: 'Clean Design',
        description: 'A minimal and intuitive user interface for a great user experience.'
      },
      {
        name: 'Game Log',
        description: "Log of all events that have occured in the game so players don't miss anything."
      }
    ],
    tools: ['Node.js', 'Express', 'Socket-io', 'JQuery'],
    demo_link: 'https://cah-online.glitch.me/',
    github_link: 'https://github.com/tatiaris/apples-to-apples',
    status: 'completed'
  },
  {
    id: 3,
    name: 'Zotak',
    img: 'zotak.png',
    description: 'A multi-purpose Discord bot that performs a variety of tasks',
    features: [
      {
        name: 'Text Predictor',
        description: 'Submit text and get AI generated follow up text for it (uses talktotransformer).'
      },
      {
        name: 'Meme Creator',
        description: 'Given an image and text, generates a meme/comic by using the two appropriately.'
      },
      {
        name: 'Image Searcher',
        description: 'Users can perform image searches.'
      },
      {
        name: 'Comic Generator',
        description: 'Sends a random comic scraped from different websites.'
      }
    ],
    tools: ['Node.js', 'Discord.js', 'Fs', 'Puppeteer', 'JQuery'],
    demo_link: 'https://discordapp.com/oauth2/authorize?client_id=702314809357762591&permissions=0&scope=bot',
    github_link: 'https://github.com/tatiaris/zotak',
    status: 'completed'
  },
  {
    id: 2,
    name: 'Typo',
    img: 'typo.png',
    description: "A website that tracks user's typing stats over time",
    features: [
      {
        name: 'Typos',
        description: 'Keeps track of most frequently missed characters when typing.'
      },
      {
        name: 'Live Stats',
        description: 'Displays your current passage stats in real time.'
      },
      {
        name: 'Abundant Passages',
        description: 'Creates a typing prompt using a large quotes and passages database.'
      },
      {
        name: 'Accuracy Tracker',
        description: 'Displays live updating accuracy over attempts.'
      }
    ],
    tools: ['PHP', 'MySQL', 'JQuery', 'Chart.js'],
    demo_link: 'https://tatiaris.github.io/typo',
    github_link: 'https://github.com/tatiaris/typo',
    status: 'unmaintained'
  },
  {
    id: 1,
    name: 'Sort Visualizer',
    img: 'sorting.svg',
    description: 'Visualizes how different sort algorithms function',
    features: [
      {
        name: 'Live Sorting',
        description: 'Shows each step of the sort live, as it is happening.'
      },
      {
        name: 'Intuitive UI',
        description: 'Easy to understand interface and visuals for users.'
      },
      {
        name: 'Base Template',
        description: 'Code can be modified to change algorithm, sample size, canvas size, etc.'
      }
    ],
    tools: ['HTML', 'JS', 'CSS'],
    demo_link: 'https://tatiaris.github.io/sorting-algorithms-visualizer',
    github_link: 'https://github.com/tatiaris/sorting-algorithms-visualizer',
    status: 'completed'
  },
  {
    id: 0,
    name: 'Sudoku Solver',
    img: 'sudoku.png',
    description: 'A step by step sudoku solving program',
    features: [
      {
        name: 'Step Solving',
        description: 'The program solves the sudoku phase by phase in a BFS manner.'
      },
      {
        name: 'Auto Hinting',
        description: 'Updates hints on each square on each phase update.'
      },
      {
        name: 'Intuitive UI',
        description: 'Easy to understand interface for users with just the puzzle and the solve button.'
      }
    ],
    tools: ['PHP', 'HTML', 'JS', 'CSS'],
    demo_link: 'https://tatiaris.github.io/sudoku',
    github_link: 'https://github.com/tatiaris/sudoku',
    status: 'completed'
  }
];

/**
 * Projects component
 */
const Projects = (props) => {
  const currentProjectList = projectList.filter((p) => p.status == 'ongoing');
  const completedProjectList = projectList.filter((p) => p.status == 'completed');
  const unmaintainedProjectList = projectList.filter((p) => p.status == 'unmaintained');
  const [chosenProject, setChosenProject] = useState(projectList[0]);
  const { visible, setVisible, bindings } = useModal();

  const displayMoreInfo = (pid) => {
    const tempProject = projectList.filter((p) => p.id == pid);
    setChosenProject(tempProject[0]);
    setVisible(true);
  };
  const changeChosenProject = (i) => {
    if (chosenProject.id == projectList.length - 1 && i == 1) {
      setChosenProject(projectList[projectList.length - 1]);
    } else if (chosenProject.id == 0 && i == -1) {
      setChosenProject(projectList[0]);
    } else {
      setChosenProject(projectList.filter((p) => p.id == chosenProject.id + i)[0]);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key == 'ArrowRight' && visible) {
      changeChosenProject(-1);
    } else if (event.key == 'ArrowLeft' && visible) {
      changeChosenProject(1);
    } else if (event.key == 'Escape' && visible) {
      setVisible(false);
    }
  };

  if (document) document.onkeydown = handleKeyPress;

  return (
    <>
      <div className="content-wrapper">
        <Collapse.Group style={{ padding: '0', marginTop: '1em' }}>
          <Collapse title="Ongoing" initialVisible className={`${props.theme}`} style={{ borderTop: '0' }}>
            <Row className="projects-container">
              {currentProjectList.map((project, i) => (
                <Card key={`project-card-${i}`} hoverable className={`project-card ${props.theme}`}>
                  <div className="project-card-content">
                    <Image src={`/img/${project.img}`} height="150" width="150" style={{ objectFit: 'cover' }} alt={`project-img-${i}`} />
                    <div style={{ padding: '0.75em' }}>
                      <h4>{project.name}</h4>
                      {project.description} <br />
                      <Button onClick={(e) => displayMoreInfo(project.id)} size="mini" auto style={{ marginTop: '0.5rem' }}>
                        Learn more&nbsp;
                        <ArrowRight size="15" />
                      </Button>
                    </div>
                  </div>
                  <Card.Footer className="card-link-container">
                    <Link color target="_blank" rel="noreferrer" href={project.github_link} className="misc-link-r" block>
                      <span style={{ marginRight: '5px' }}>Source</span>
                      <Code />
                    </Link>
                    <Link color target="_blank" rel="noreferrer" href={project.demo_link} className="misc-link-r" block>
                      <span style={{ marginRight: '5px' }}>Demo</span>
                      <ExternalLink />
                    </Link>
                  </Card.Footer>
                </Card>
              ))}
            </Row>
          </Collapse>
          <Collapse title="Completed" className={`${props.theme}`} style={{ borderTop: '0' }}>
            <Row className="projects-container">
              {completedProjectList.map((project, i) => (
                <Card key={`project-card-${i}`} hoverable className={`project-card ${props.theme}`}>
                  <div className="project-card-content">
                    <Image src={`/img/${project.img}`} height="150" width="150" style={{ objectFit: 'cover' }} alt={`project-img-${i}`} />
                    <div style={{ padding: '0.75em' }}>
                      <h4>{project.name}</h4>
                      {project.description} <br />
                      <Button onClick={(e) => displayMoreInfo(project.id)} size="mini" auto style={{ marginTop: '0.5rem' }}>
                        Learn more&nbsp;
                        <ArrowRight size="15" />
                      </Button>
                    </div>
                  </div>
                  <Card.Footer className="card-link-container">
                    <Link color target="_blank" rel="noreferrer" href={project.github_link} className="misc-link-r" block>
                      <span style={{ marginRight: '5px' }}>Source</span>
                      <Code />
                    </Link>
                    <Link color target="_blank" rel="noreferrer" href={project.demo_link} className="misc-link-r" block>
                      <span style={{ marginRight: '5px' }}>Demo</span>
                      <ExternalLink />
                    </Link>
                  </Card.Footer>
                </Card>
              ))}
            </Row>
          </Collapse>
          <Collapse title="Not maintained" className={`last-collapse ${props.theme}`}>
            <Row className="projects-container">
              {unmaintainedProjectList.map((project, i) => (
                <Card key={`project-card-${i}`} hoverable className={`project-card ${props.theme}`}>
                  <div className="project-card-content">
                    <Image src={`/img/${project.img}`} height="150" width="150" style={{ objectFit: 'cover' }} alt={`project-img-${i}`} />
                    <div style={{ padding: '0.75em' }}>
                      <h4>{project.name}</h4>
                      {project.description} <br />
                      <Button onClick={(e) => displayMoreInfo(project.id)} size="mini" auto style={{ marginTop: '0.5rem' }}>
                        Learn more&nbsp;
                        <ArrowRight size="15" />
                      </Button>
                    </div>
                  </div>
                  <Card.Footer className="card-link-container">
                    <Link color target="_blank" rel="noreferrer" href={project.github_link} className="misc-link-r" block>
                      <span style={{ marginRight: '5px' }}>Source</span>
                      <Code />
                    </Link>
                    <Link color target="_blank" rel="noreferrer" href={project.demo_link} className="misc-link-r" block>
                      <span style={{ marginRight: '5px' }}>Demo</span>
                      <ExternalLink />
                    </Link>
                  </Card.Footer>
                </Card>
              ))}
            </Row>
          </Collapse>
        </Collapse.Group>
        <Modal {...bindings} width="60rem" className={`modal-${props.theme}`} style={{ minWidth: '30rem', width: 'max-content' }}>
          <Modal.Title style={{ justifyContent: 'left' }}>{chosenProject.name}</Modal.Title>
          <Modal.Subtitle style={{ textAlign: 'left' }}>{chosenProject.description}</Modal.Subtitle>
          <Modal.Content>
            <Row style={{ flexWrap: 'wrap' }}>
              <Col className="modal-section-img">
                <Image src={`/img/${chosenProject.img}`} height="250" width="250" style={{ objectFit: 'cover' }} alt={`chosen-project-img`} />
              </Col>
              <Col className="modal-section">
                <ul>
                  {chosenProject.features.map((f, i) => (
                    <li key={`project-bullet-${i}`}>{f.description}</li>
                  ))}
                </ul>
                <Row style={{ flexWrap: 'wrap', marginLeft: '20px' }}>
                  {chosenProject.tools.map((t, i) => (
                    <Tag key={`project-tag-${i}`} className={`modal-tag ${props.theme}`}>
                      {t}
                    </Tag>
                  ))}
                </Row>
              </Col>
            </Row>
          </Modal.Content>
          <Modal.Action passive onClick={(e) => changeChosenProject(1)}>
            <ArrowLeft />
          </Modal.Action>
          <Modal.Action passive>
            <Link target="_blank" rel="noreferrer" href={chosenProject.github_link} className="misc-link-r">
              <Code />
            </Link>
          </Modal.Action>
          <Modal.Action passive>
            <Link target="_blank" rel="noreferrer" href={chosenProject.demo_link} className="misc-link-r">
              <ExternalLink />
            </Link>
          </Modal.Action>
          <Modal.Action passive onClick={() => setVisible(false)} className="misc-link-r">
            <X />
          </Modal.Action>
          <Modal.Action passive onClick={(e) => changeChosenProject(-1)}>
            <ArrowRight />
          </Modal.Action>
        </Modal>
      </div>
    </>
  );
};

export default Projects;
