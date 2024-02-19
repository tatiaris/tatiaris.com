import { useEffect, useState } from 'react';
import Head from 'next/head';
import Copyright from '../../components/Copyright';
import { Page, Breadcrumbs, useToasts, Button } from '@geist-ui/react';
import cookieCutter, { set } from 'cookie-cutter'
import board from './board';

const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const hypePhrases = [
  'YUUUUUHHHHHHHHHH!',
  'YOU GOT THIS!',
  'YOU\'RE KILLING IT!',
  'YOU\'RE A GENIUS!',
  'YOU\'RE A GOD!',
  'I SEE YOUUUUU!',
  'POP OFFFFF!'
];

const wrongPhrases = [
  'Oof, try again!',
  'Oof, keep going!',
  'You can do better!',
  'Seriously?',
  'Bruh',
  'Unh Uh',
  'Yaaawwwwnnn',
];

const Connections = () => {
  const [toasts, setToast] = useToasts();
  const launchToast = (msg) => setToast({ text: msg, type: 'warning', delay: 5000 });
  const [solvedCategories, setSolvedCategories] = useState([]); // [easy, medium, hard, tricky]
  const [unsolvedList, setUnsolvedList] = useState([]);
  const [selectedWords, setSelectedWords] = useState(new Set());
  const [unsolvedComponent, setUnsolvedComponent] = useState(<></>);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  useEffect(() => {
    let solvedCategories = cookieCutter.get('solvedCategories');
    let wrongGuesses = cookieCutter.get('wrongGuesses');

    let solvedCategoriesArr = solvedCategories ? solvedCategories.split(',') : [];
    setSolvedCategories(solvedCategoriesArr);
    setWrongGuesses(wrongGuesses ? parseInt(wrongGuesses) : 0);

    let unsolvedWords = [];
    unsolvedWords = unsolvedWords.concat(solvedCategoriesArr.includes('easy') ? [] : board.easy.words);
    unsolvedWords = unsolvedWords.concat(solvedCategoriesArr.includes('medium') ? [] : board.medium.words);
    unsolvedWords = unsolvedWords.concat(solvedCategoriesArr.includes('hard') ? [] : board.hard.words);
    unsolvedWords = unsolvedWords.concat(solvedCategoriesArr.includes('tricky') ? [] : board.tricky.words);
    setUnsolvedList(shuffle(unsolvedWords));
  }, [board]);

  useEffect(() => {
    let unsolvedComp = unsolvedList.length > 0 && (
      <div id='unsolved-words-container' style={{ display: 'flex', flexWrap: 'wrap' }}>
        {unsolvedList.map((word, index) => (
          <div key={index} style={{ width: '25%', padding: '5px', aspectRatio: '1/1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='word-container' style={{ backgroundColor: selectedWords.has(word) ? '#ddd' : '' }}
              onClick={() => handleWordClick(word)}>
              <span>{word}</span>
            </div>
          </div>
        ))}
      </div>
    )
    setUnsolvedComponent(unsolvedComp);
  }, [selectedWords, unsolvedList]);
  
  const handleWordClick = (word) => {
    let selectedWordsCopy = new Set(selectedWords);
    if (selectedWordsCopy.has(word)) {
      selectedWordsCopy.delete(word);
    } else {
      if (selectedWordsCopy.size < 4) {
        selectedWordsCopy.add(word);
      }
    }
    setSelectedWords(selectedWordsCopy);
  }

  const handleShuffle = () => {
    let unsolvedListCopy = unsolvedList.slice();
    setUnsolvedList(shuffle(unsolvedListCopy));
  }

  const getSameCategoryCount = (difficulty) => {
    let correctConnections = 0;
    selectedWords.forEach((word) => {
      if (board[difficulty].words.includes(word)) {
        correctConnections++;
      }
    });
    if (correctConnections === 4) {
      setSolvedCategories([...solvedCategories, difficulty]);
      cookieCutter.set('solvedCategories', [...solvedCategories, difficulty].join(','));
      let unsolvedListCopy = unsolvedList.slice();
      selectedWords.forEach((word) => {
        unsolvedListCopy = unsolvedListCopy.filter((unsolvedWord) => unsolvedWord !== word);
      });
      setUnsolvedList(unsolvedListCopy);
      setSelectedWords(new Set());
    }
    else {
    }
    return correctConnections;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const maxConnectionCount = Math.max(getSameCategoryCount('easy'), getSameCategoryCount('medium'), getSameCategoryCount('hard'), getSameCategoryCount('tricky'));

    if (maxConnectionCount === 4) {
      launchToast(hypePhrases[Math.floor(Math.random() * hypePhrases.length)]);
    }
    else {
      launchToast(maxConnectionCount === 3 ? 'Oof, one away!' : wrongPhrases[Math.floor(Math.random() * wrongPhrases.length)]);
      setWrongGuesses(wrongGuesses + 1);
      cookieCutter.set('wrongGuesses', wrongGuesses + 1);
    }
  }

  return (
    <Page id="connections-page-container" style={{ margin: 0, width: '100%' }}>
      <Head>
        <title>Rishabh Tatia | Connections</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Connections" />
        <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width" />
        <meta property="og:title" content={`Rishabh Tatia | Connections`} />
        <meta property="og:site_name" content="Rishabh Tatia | Connections" />
        <meta property="og:url" content="tatiaris.com/connections" />
        <meta property="og:description" content="Connections" />
        <meta property="og:type" content="profile" />
        <meta httpEquiv="content-language" content="en" />
      </Head>
      <Breadcrumbs>
        <Breadcrumbs.Item href="/">tatiaris</Breadcrumbs.Item>
        <Breadcrumbs.Item>connections</Breadcrumbs.Item>
      </Breadcrumbs>
      <br />
      <div id='connections-container' style={{ textTransform: 'uppercase' }}>
      <div id='solved-words-container'>
        {solvedCategories.map((difficulty, index) => (
          <div key={index} style={{ padding: 5 }}>
            <div className='solved-connection-container' style={{ backgroundColor: board[difficulty].color, width: '100%', aspectRatio: '4/1', padding: 30, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ fontWeight: 'bold', textAlign: 'center' }}>{board[difficulty].title}</div>
              <div>{board[difficulty].words.join(', ')}</div>
            </div>
          </div>
        ))}
      </div>
        {unsolvedComponent}
      </div>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', padding: 5, width: '100%' }}>
        <div>WRONG GUESSES: {wrongGuesses}</div>
      </div>
      <br />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: 5, width: '100%' }}>
        <Button width="30%" onClick={handleShuffle}>Shuffle</Button>
        {selectedWords.size === 4 && <Button width="30%" type='secondary-light' onClick={handleSubmit}>Submit</Button>}
      </div>
      <br />
      <Copyright theme="light" />
    </Page>
  );
};

export default Connections;
