import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import { Page, Breadcrumbs, Button, Slider, Spacer, Row, Tooltip, Col, Modal, useModal, Text } from '@geist-ui/react'
import { ChevronRight, RefreshCcw, Play, Pause, Info } from '@geist-ui/react-icons'

const Project = () => {
  const [grid, setGrid] = useState([[false]])
  const [cellsToCheck, setCellsToCheck] = useState(new Set())
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(450);
  const { visible, setVisible, bindings } = useModal()

  const togglePlayPause = () => {
    setIsRunning(!isRunning)
  }
  const handleKeyPress = (event) => {
    if (event.key == "Escape" && visible) setVisible(false)
  }
  if (typeof document != "undefined") document.onkeydown = handleKeyPress;

  const resetGrid = () => {
    const pageWidth = document.getElementById('project-container').clientWidth
    const pageHeight = document.getElementById('project-container').clientHeight
    const numCellsW = Math.floor(pageWidth / 27)
    const numCellsH = Math.floor(pageHeight * 2 / 81)
    setIsRunning(false)
    setCellsToCheck(new Set())
    setGrid(Array(numCellsH).fill(Array(numCellsW).fill(false)))
    setGrid(Array(numCellsH).fill(Array(numCellsW).fill(false)))
  }

  const handleResetGrid = () => {
    resetGrid()
    setTimeout(resetGrid, 10);
  }

  const updateGrid = (i, j, state) => {
    let gridCopy = grid.map(row => row.slice());
    let cellsToCheckCopy = new Set(cellsToCheck);

    (state) ? cellsToCheckCopy.add(`${i}-${j}`) : cellsToCheckCopy.delete(`${i}-${j}`)
    gridCopy[i][j] = state;

    setCellsToCheck(cellsToCheckCopy)
    setGrid(gridCopy)
  }

  const toggleCellState = (i, j) => {
    (!grid[i][j]) ? updateGrid(i, j, true) : updateGrid(i, j, false)
  }

  const getNextState = (i, j, matrix) => {
    let c = 0;
    for (let y = -1; y < 2; y++) {
      for (let x = -1; x < 2; x++) {
        if (y != 0 || x != 0) {
          if (i + y > -1 && i + y < grid.length && j + x > -1 && j + x < grid[0].length && matrix[i + y][j + x]) {
            c++;
          }
        }
      }
    }
    if (matrix[i][j]) { return (c < 2 || c > 3) ? false : true }
    else { return (c == 3) ? true : false }
  }

  const nextStep = () => {
    const cellsToCheckCopy = new Set(cellsToCheck)
    const cellsToCheckArr = Array.from(cellsToCheck)
    let gridCopy = grid.map(row => row.slice());

    for (let n = 0; n < cellsToCheckArr.length; n++) {
      const cell = cellsToCheckArr[n].split('-');
      const i = parseInt(cell[0]);
      const j = parseInt(cell[1]);
      for (let y = -1; y < 2; y++) {
        for (let x = -1; x < 2; x++) {
          if (i + y > -1 && i + y < grid.length && j + x > -1 && j + x < grid[0].length) {
            const nextState = getNextState(i + y, j + x, grid);
            (nextState) ? cellsToCheckCopy.add(`${i + y}-${j + x}`) : cellsToCheckCopy.delete(`${i + y}-${j + x}`);
            gridCopy[i + y][j + x] = nextState;
          }
        }
      }
    }
    setCellsToCheck(cellsToCheckCopy)
    setGrid(gridCopy)
  }

  useEffect(() => {
    if (isRunning) {
      const programState = setTimeout(nextStep, speed);
      return () => clearTimeout(programState);
    }
  }, [grid])

  useEffect(() => {
    if (isRunning) nextStep();
  }, [isRunning]);

  const board = grid.map((row, i) => {
    return (
      <div key={`row-${i}`} className="board-row">
        { row.map((c, j) => (!grid[i][j])
          ? <button onClick={e => toggleCellState(i, j)} key={`cell-${i}-${j}`} className="cell"></button>
          : <button onClick={e => toggleCellState(i, j)} key={`cell-${i}-${j}`} className="cell alive"></button>)}
      </div>
    )
  })

  useEffect(() => { if (document) resetGrid() }, [])

  return (
    <Page id="project-container">
      <Head>
        <title>Rishabh Tatia | Game of Life</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Rishabh Tatia's personal website. Welcome to my portfolio page, here you can get to know me and my projects." />
        <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width" />
        <meta property="og:title" content={`Rishabh Tatia | Game of Life`} />
        <meta property="og:site_name" content="Rishabh Tatia" />
        <meta property="og:url" content="tatiaris.com" />
        <meta property="og:description" content="Rishabh Tatia's personal website. Welcome to my portfolio page, here you can get to know me and my projects." />
        <meta property="og:type" content="profile" />
        <meta httpEquiv="content-language" content="en" />
      </Head>
      <Breadcrumbs>
        <Breadcrumbs.Item href="/">tatiaris</Breadcrumbs.Item>
        <Breadcrumbs.Item>projects</Breadcrumbs.Item>
        <Breadcrumbs.Item>game_of_life</Breadcrumbs.Item>
      </Breadcrumbs>
      <Row style={{ flexWrap: "wrap" }}>
        <Col style={{ marginTop: "1.5em", width: "100px" }}>Delay (ms):</Col>
        <Col style={{ display: "flex", alignItems: "center", marginTop: "1.5em", maxWidth: "100%", width: "850px" }}>
          <Slider step={50} showMarkers min={0} max={1000} value={speed} onChange={val => setSpeed(val)} />
        </Col>
      </Row>
      <Row style={{ flexWrap: "wrap" }} justify="center">
        <Tooltip text={isRunning ? `Stop` : `Start`} placement="bottom" type="dark" enterDelay="1000">
          <Button className="control-btn" size="small" onClick={togglePlayPause}>{isRunning ? <Pause /> : <Play />}</Button>
        </Tooltip>
        <Spacer x={1} />
        <Tooltip text={'Next Generation'} placement="bottom" type="dark" enterDelay="1000">
          <Button className="control-btn" size="small" onClick={nextStep}><ChevronRight /></Button>
        </Tooltip>
        <Spacer x={1} />
        <Tooltip text={'Reset'} placement="bottom" type="dark" enterDelay="1000">
          <Button className="control-btn" size="small" onClick={handleResetGrid}><RefreshCcw /></Button>
        </Tooltip>
        <Spacer x={1} />
        <Tooltip text={'About'} placement="bottom" type="dark" enterDelay="1000">
          <Button className="control-btn" size="small" onClick={e => setVisible(true)}><Info /></Button>
        </Tooltip>
      </Row>
      <br />
      {board}
      <br />
      <Row justify="center">Created by &nbsp;<a href="/" className="about-link bg-yellow">Rishabh Tatia</a></Row>
      <Modal {...bindings} width="60rem" style={{ minWidth: "30rem", width: "max-content" }}>
        <Modal.Title style={{ justifyContent: "left" }}>Game Of Life</Modal.Title>
        <Modal.Subtitle style={{ textAlign: "left" }}>John Conway's Game of Life, the zero player game</Modal.Subtitle>
        <Modal.Content>
          <Text>
            The Game of Life is not your typical computer game. It is a cellular automaton, and was invented by Cambridge mathematician John Conway.
            This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.
          </Text>
          <h4>Rules:</h4>
          <b>For a space that is populated:</b>
          <ul>
            <li>Each cell with one or no neighbors dies, as if by solitude.</li>
            <li>Each cell with four or more neighbors dies, as if by overpopulation.</li>
            <li>Each cell with two or three neighbors survives.</li>
          </ul>
          <b>For a space that is empty or unpopulated</b>
          <ul>
            <li>Each cell with three neighbors becomes populated.</li>
          </ul>
        </Modal.Content>
        <Modal.Action passive onClick={() => setVisible(false)} className="misc-link-r">Close</Modal.Action>
      </Modal>
    </Page>
  )
}

export default Project;