import React, { useState, useEffect } from "react";
import { MFooter } from "../components/MFooter";
import { Mheader } from "../components/Mheader";
import { Mnavbar } from "../components/Mnavbar";
import { Table, Container, Button, Col, Row } from "react-bootstrap";
import { ThBtn } from "../components/style"

const Projects = (): React.ReactNode => {
  return (
    <>
        <Mheader title="projects"/>
        <Mnavbar theme="light" page="projects"/>
        <div className="body-container">
            <div className="all-projects-container">
                <div className="proj-container">
                    <div className="proj-img-container">
                        <img src="/img/quizhack.png" className="proj-img" alt=""/>
                    </div>
                    <div className="proj-info-container">
                        <div className="proj-name">Quizhack</div>
                        <div className="proj-description">
                            A Quizlet scraper that combines and displays popular sets for any topic.
                            <br/><br/>Main Features:
                            <ul className="proj-features">
                                <li>Advanced Options</li>&gt; Users can sort, remove duplicates, and search for terms in the gathered cards.
                                <li>Huge Database</li>&gt; Having Quizlet as the database, users can find several sets on almost any topic.
                                <li>Time Saving</li>&gt; Users no longer have to jump from sets to sets and can have everything displayed on one screen.
                                <li>Intuitive UI</li>&gt; Easy to understand minimal interface for users.
                            </ul>
                        </div>
                        <div className="proj-links-container">
                            <a target="_blank" href="https://github.com/tatiaris/quizhack" className="proj-link github-link">Github</a>
                            <a target="_blank" href="https://quizhack.net" className="proj-link live-link">Live Demo</a>
                        </div>
                    </div>
                    <div className="proj-tags-container flex-center">
                        <div className="proj-tag-list">
                            <div className="proj-tag nodejs-tag">Node.js</div>
                            <div className="proj-tag nodejs-tag">React</div>
                            <div className="proj-tag nodejs-tag">Express</div>
                            <div className="proj-tag nodejs-tag">Socket.io</div>
                            <div className="proj-tag nodejs-tag">Material UI</div>
                            <div className="proj-tag nodejs-tag">Axios</div>
                            <div className="proj-tag nodejs-tag">Cheerio</div>
                        </div>
                    </div>
                </div>
                <div className="proj-container">
                    <div className="proj-img-container">
                        <img src="/img/moosic.png" className="proj-img" alt=""/>
                    </div>
                    <div className="proj-info-container">
                        <div className="proj-name">Moosic</div>
                        <div className="proj-description">
                            A website to download songs for free.
                            <br/><br/>Main Features:
                            <ul className="proj-features">
                                <li>Multiple songs + Spotify</li>&gt; The website can take multiple inputs at a time and fetch songs from a spotify playlist.
                                <li>Huge Database</li>&gt; The website converts videos from youtube, so if the song is on youtube, it can be downloaded.
                                <li>Minimal UI</li>&gt; The website has a very intuitive and easy to follow user interface.
                                <li>Speed</li>&gt; The process is extremely fast, and songs can be downloaded seconds upon input.
                                <li>Consistent format</li>&gt; All songs are directly fetched from youtube and converted into mp3 format.
                            </ul>
                        </div>
                        <div className="proj-links-container">
                            <a target="_blank" href="https://github.com/tatiaris/Moosic" className="proj-link github-link">Github</a>
                            <a target="_blank" href="https://moosic-bot.glitch.me/" className="proj-link live-link">Live Demo</a>
                        </div>
                    </div>
                    <div className="proj-tags-container flex-center">
                        <div className="proj-tag-list">
                            <div className="proj-tag nodejs-tag">Node.js</div>
                            <div className="proj-tag nodejs-tag">Socket.io</div>
                            <div className="proj-tag nodejs-tag">Express</div>
                            <div className="proj-tag nodejs-tag">Axios</div>
                            <div className="proj-tag nodejs-tag">Cheerio</div>
                            <div className="proj-tag nodejs-tag">Fs</div>
                            <div className="proj-tag nodejs-tag">ffmpeg</div>
                            <div className="proj-tag nodejs-tag">Archiver</div>
                        </div>
                    </div>
                </div>
                <div className="proj-container">
                    <div className="proj-img-container">
                        <img src="/img/apples-to-apples.png" className="proj-img" alt=""/>
                    </div>
                    <div className="proj-info-container">
                        <div className="proj-name">Apples-to-Apples</div>
                        <div className="proj-description">
                            An Apples-to-Apples card game simulator for people to play online.
                            <br/><br/>Main Features:
                            <ul className="proj-features">
                                <li>Custom Cards</li>&gt; Ability to add custom prompts and answers to the database for future use.
                                <li>Clean Design</li>&gt; A minimal and intuitive user interface for a great user experience.
                                <li>Game Log</li>&gt; Log of all events that have occured in the game so one does not miss anything.
                                <li>Leaderboard</li>&gt; Keeps track of each players score live.
                                <li>Custom Name</li>&gt; Players can customize their names for ease of recognition.
                            </ul>
                        </div>
                        <div className="proj-links-container">
                            <a target="_blank" href="https://github.com/tatiaris/apples-to-apples" className="proj-link github-link">Github</a>
                            <a target="_blank" href="https://cah-online.glitch.me/" className="proj-link live-link">Live Demo</a>
                        </div>
                    </div>
                    <div className="proj-tags-container flex-center">
                        <div className="proj-tag-list">
                            <div className="proj-tag nodejs-tag">Node.js</div>
                            <div className="proj-tag nodejs-tag">Socket.io</div>
                            <div className="proj-tag nodejs-tag">Express</div>
                            <div className="proj-tag nodejs-tag">Http</div>
                            <div className="proj-tag nodejs-tag">JQuery</div>
                        </div>
                    </div>
                </div>
                <div className="proj-container">
                    <div className="proj-img-container">
                        <img src="./img/zotak.png" className="proj-img" alt=""/>
                    </div>
                    <div className="proj-info-container">
                        <div className="proj-name">Zotak</div>
                        <div className="proj-description">
                            A multi-purpose Discord bot that performs a variety tasks based on user inputs.
                            <br/><br/>Main Features:
                            <ul className="proj-features">
                                <li>Text Predictor</li>&gt; Submit text and get AI generated follow up text for it (uses <a href="https://talktotransformer.com/" style={{ color: "blue" }} target="_blank">talktotransformer</a>).
                                <li>Meme Creator</li>&gt; Given an image and text, generates a meme/comic by using the two appropriately.
                                <li>Image Searcher</li>&gt; Performs an image search using the input and returns the first result.
                                <li>Comic Generator</li>&gt; Sends a random comic scraped from several different websites.
                                <li>Magic 8 Ball</li>&gt; If asked a question, answers with a magic 8 ball (and custom) answer.
                            </ul>
                        </div>
                        <div className="proj-links-container">
                            <a target="_blank" href="https://github.com/tatiaris/zotak" className="proj-link github-link">Github</a>
                            <a target="_blank" href="https://discordapp.com/oauth2/authorize?client_id=702314809357762591&permissions=0&scope=bot" className="proj-link live-link">Live Demo</a>
                        </div>
                    </div>
                    <div className="proj-tags-container flex-center">
                        <div className="proj-tag-list">
                            <div className="proj-tag nodejs-tag">Node.js</div>
                            <div className="proj-tag nodejs-tag">Discord.js</div>
                            <div className="proj-tag nodejs-tag">Fs</div>
                            <div className="proj-tag nodejs-tag">Puppeteer</div>
                            <div className="proj-tag nodejs-tag">JQuery</div>
                        </div>
                    </div>
                </div>
                <div className="proj-container">
                    <div className="proj-img-container">
                        <img src="./img/typo.png" className="proj-img" alt=""/>
                    </div>
                    <div className="proj-info-container">
                        <div className="proj-name">Typo</div>
                        <div className="proj-description">
                            A website that tracks user's typing speed and accuracy over time.
                            <br/><br/>Main Features:
                            <ul className="proj-features">
                                <li>Typos</li>&gt; Keeps track of most frequently missed characters when typing.
                                <li>Live Stats</li>&gt; Displays your current passage stats in real time.
                                <li>Passages</li>&gt; Creates a typing prompt using a large quotes and passages database.
                                <li>Speed Tracker</li>&gt; Displays speed over several attempts, updates live.
                                <li>Accuracy Tracker</li>&gt; Displays accuracy over several attempts, updates live.
                            </ul>
                        </div>
                        <div className="proj-links-container">
                            <a target="_blank" href="https://github.com/tatiaris/typo" className="proj-link github-link">Github</a>
                            <a target="_blank" href="/projects/typo" className="proj-link live-link">Live Demo</a>
                        </div>
                    </div>
                    <div className="proj-tags-container flex-center">
                        <div className="proj-tag-list">
                            <div className="proj-tag nodejs-tag">PHP</div>
                            <div className="proj-tag nodejs-tag">MySQL</div>
                            <div className="proj-tag nodejs-tag">JQuery</div>
                            <div className="proj-tag nodejs-tag">Chart.js</div>
                            <div className="proj-tag nodejs-tag">JS</div>
                        </div>
                    </div>
                </div>
                <div className="proj-container">
                    <div className="proj-img-container">
                        <img src="./img/sorting.svg" className="proj-img" alt=""/>
                    </div>
                    <div className="proj-info-container">
                        <div className="proj-name">Insertion Sort Visualizer</div>
                        <div className="proj-description">
                            A web app that visualizes how the isnertion sort algorithm functions.
                            <br/><br/>Main Features:
                            <ul className="proj-features">
                                <li>Live Sorting</li>&gt; Shows each step of the sort live, as it is happening.
                                <li>Intuitive UI</li>&gt; Easy to understand interface and visuals for users.
                                <li>Base Template</li>&gt; Code can be modified to change algorithm, sample size, canvas size, etc.
                            </ul>
                        </div>
                        <div className="proj-links-container">
                            <a target="_blank" href="https://github.com/tatiaris/sorting-algorithms-visualizer" className="proj-link github-link">Github</a>
                            <a target="_blank" href="/projects/sorting-algorithms-visualizer/" className="proj-link live-link">Live Demo</a>
                        </div>
                    </div>
                    <div className="proj-tags-container flex-center">
                        <div className="proj-tag-list">
                            <div className="proj-tag nodejs-tag">JS</div>
                            <div className="proj-tag nodejs-tag">CSS</div>
                            <div className="proj-tag nodejs-tag">HTML</div>
                        </div>
                    </div>
                </div>
                <div className="proj-container">
                    <div className="proj-img-container">
                        <img src="./img/sudoku.png" className="proj-img" alt=""/>
                    </div>
                    <div className="proj-info-container">
                        <div className="proj-name">Sudoku Solver (Beta)</div>
                        <div className="proj-description">
                            A self solving sudoku program.
                            <br/><br/>Main Features:
                            <ul className="proj-features">
                                <li>Step Solving</li>&gt; The program solves the sudoku phase by phase in a BFS manner.
                                <li>Auto Hinting</li>&gt; Updates hints on each square on each phase update.
                                <li>Intuitive UI</li>&gt; Easy to understand interface for users with just the puzzle and the solve button.
                            </ul>
                        </div>
                        <div className="proj-links-container">
                            <a target="_blank" href="https://github.com/tatiaris/sudoku" className="proj-link github-link">Github</a>
                            <a target="_blank" href="/projects/sudoku" className="proj-link live-link">Live Demo</a>
                        </div>
                    </div>
                    <div className="proj-tags-container flex-center">
                        <div className="proj-tag-list">
                            <div className="proj-tag nodejs-tag">PHP</div>
                            <div className="proj-tag nodejs-tag">JS</div>
                            <div className="proj-tag nodejs-tag">CSS</div>
                            <div className="proj-tag nodejs-tag">HTML</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Projects;
