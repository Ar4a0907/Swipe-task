import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import TextInput from './components/TextInput/TextInput';
import TextBlock from './components/TextBlock/TextBlock';
import TimeViewer from './components/TimeViewer/TimeViewer';
import ReactSwipe from 'react-swipe';

function App() {

    const [texts, setTexts] = useState([]);

    const Callback = (data) => {
        if(data === '') {
            alert('Input something first!');
        } else {
            setTexts([...texts, data])
        }
    }

  return (
      <div className='AppContainer'>
          <ReactSwipe
              swipeOptions={{ continuous: false }}
              childCount={2}
          >
              <div className='block__TextInput'>
                  <TextInput callbackFun={Callback}/>
                  <TransitionGroup>
                      {texts.map((text, idx) => (
                          <CSSTransition key={idx} timeout={300} classNames="text">
                              <TextBlock>
                                  {text}
                              </TextBlock>
                          </CSSTransition>
                      ))}
                  </TransitionGroup>
              </div>
              <div className='block__TimeViewer'>
                  <TimeViewer/>
              </div>
          </ReactSwipe>
      </div>
  );
}

export default App;
