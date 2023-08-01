import './App.css';
import React from 'react';
import { useState, useRef } from 'react';
// Hi everyone, thank you for the interest in joining Supafaya.

// To give you a brief background about Supafaya:
// Supafaya is an exchange for alternative assets. We allow users to buy, sell, and invest in physical things like sneakers, collectibles, watches, apparel, and more.
// Supafaya comes from the words 'Super' and 'Fire'.
// Right now, we're building the company in stealth but are eager to launch very soon. We've raised a significant amount from investors and are now looking to hire jr devs to beef up the team.
// We're incorporated in Singapore but are in the process of incorporating in the Philippines.

// About the position:
// The role/s we're hiring for is for Junior Web Developers. Our budget for the role is 19-25k/month + benefits + stock options. There will be no over time at any point during your employment in Supafaya. If ever there will be, it would be optional and paid.
// Supafaya aims to be a $1Billion company in a few years and we would not be able to reach that if we don't do things differently. That said, we're implementing a strict Work From Home set up. 
// We're also doing something different in terms of work. Our work schedule is from 8AM - 5PM, 12-1PM lunch break. You'd be required to work on the features we have in the company for the first 6 hours, but from 3PM - 5PM you may work on any form of innovative feature you want (as long as it's related to the company). We want you to enjoy what you're doing and be curious. Work shouldn't be as draining as it is right now. It should be challenging and exciting.
// As it is now, we're financially stable and have the capacity to run for two years without additional funding. However, we're looking to do a bigger raise in a few months. That said, we'd probably have a bigger teamm by then. We don't plan to hire Sr. Devs. Instead, we'll train you to become Sr. Devs. and have Jr. Devs. under you.

// A message from me
// Hi, I'm Owen! I'm the CEO and founder of Supafaya. I'm 24 years old. I'm a fullstack Software Engineer with background in Venture Capital, Finance, Data Science, and Law.
// I would first like to thank you for the interest. If you're still here reading, then I've caught your interest. Thank you and I appreciate the time.
// Second, I'd like to apologize since I won't be able to guide you for your whole stay here in Supafaya. I'd be here most of the time since I usually work 20hrs a day, but I can't promise to be there all the time since I would have to tend to other areas of the business.
// That said, this role would really require a lot of self-learning and independent work. Every Tuesday and Thursday, 10am-11:30am, we'd hold our catch up meetings so that we could re-align on the timeline, the progress, and any roadblocks that you're facing. Other than that, I don't plan to breathe down your neck and check up on you all the time (unless its urgent). 
// You would have complete freedom of the way you'd like to work, all I ask is that you attend our required meetings during Tuesdays and Thursdays, and deliver the work.
// You guys would be our first hires. We don't have any Sr Devs nor do we have a CTO, and we don't plan to have any in the future. Our plan is to get a CTO and Sr. Devs. from this pool of applicants. The opportunity for growth here is absolutely unreal and I would love to have you guys in the company.
// That said, good luck! And I'm looking forward to meet all of you.

// About this test
// So this is a test of backend skills, mainly JavaScript and React.
// This is a test not of your current skills but your ability to learn and persevere in an independent environment.
// You may answer this any way you can. As long as it works! The only rule is to use ReactJS and Javascript.
// These challenges are not in any way hard. ALL, and I mean /ALL/, the answers are on the internet. Use these to your advantage.
// No need to decorate and add styles to the CSS, just make it work.
// You may refer to this page as reference: https://supafaya-hiring-test.vercel.app/
// For those who don't know React, this is an in-depth tutorial of the library: https://www.youtube.com/watch?v=bMknfKXIFA8&t=9463s
// I'm confident that once you watch this video, you'd be able to answer the questions below.

// Instructions
// There's FOUR (4) parts to the test

// PART 1. Vanish
// - The goal here is to make the h1 text '1. Make this Vanish' disappear once you click the button.

// PART 2. Create a basic timer
// - The goal here is to create a timer.
// - Upon 'Start' button click, the timer should start counting
// - Upon 'Stop' button click, the timer should pause counting
// - Upon 'Reset' button click, the timer should reset counting

// PART 3. Add to a list
// - The goal here is to add the input to a list below
// - Upon input and click of the 'add' button, the input should be reflected and added below the row

// PART 4. Submit a form
// - The goal here is to replicate submitting a form.
// - Input username, fullname, age then upon 'Submit' button click, the input fields should be reflected below.

function HiringTest () {
  // Challenge 1: Make the paragraph button vanish on click
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleButtonClick = () => {
    setIsButtonVisible(false);
  };


  const [timer, setTimer] = useState({
    mins: 0,
    secs: 0,
    counting: false,
  });


  const prevTimer = useRef(timer);
  const timerInterval = useRef(null);

  // Challenge 2: Make this timer work
  const handleStart = () => {
    if (!timer.counting) {
      setTimer((prevTimer) => ({
        ...prevTimer,
        counting: true,
      }));

      timerInterval.current = setInterval(() => {
        setTimer((prevTimer) => {
          const nextSeconds = prevTimer.secs + 1;
          const nextMinutes = prevTimer.mins + Math.floor(nextSeconds / 60);
          return {
            ...prevTimer,
            mins: nextMinutes,
            secs: nextSeconds % 60,
          };
        });
      }, 1000);
    }
  };

  const handleStop = () => {
    clearInterval(timerInterval.current);
    setTimer((prevTimer) => ({
      ...prevTimer,
      counting: false,
    }));
  };

  const handleReset = () => {
  clearInterval(timerInterval.current);
  setTimer({
    mins: 0,
    secs: 0,
    counting: false,
  });
  };


  // Challenge 3: Todo App
  const [tasks, setTasks] = useState([]); 
  const [taskInput, setTaskInput] = useState(''); 

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, taskInput]);
      setTaskInput('');
    }
  };

  // Challenge 4: Submit a form

  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    //alert(`UserName: ${userName} FullName: ${fullName} Age: ${age}`);
  };
  

  return (
    <div className="App">
      <header className="App-header">

        {/* Challenge 1: Make the paragraph button vanish on click */}
        <div>
          {isButtonVisible && (
            <div>
            <h1>1. Make this vanish</h1>
            <button onClick={handleButtonClick}>Click me!</button>
            </div>
          )}
        </div>
        {/* Challenge 2: Make this timer work */}
        <div>
          <h1>2. Create a Basic Timer</h1>
          <span> {timer.mins} mins </span>
          <span> {timer.secs} secs</span>
          <div className='button2'>
            <button className='button green' onClick={handleStart}>Start</button>
            <button className='button red' onClick={handleStop}>Stop</button>
            <button className='button yellow' onClick={handleReset}>Reset</button>
          </div>
        </div>

        {/* Challenge 3: Todo App */}
        <div>
          <h1>3. Add to a list</h1>
          <input value={taskInput} onChange={handleInputChange}/>
          <button onClick={handleAddTask}>Add Task</button>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
        
        {/* Challenge 4: Submit a form */}
        <div>
          <h1>4. Submit a form</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="userName">
                Username:
                <input type="text" value={userName} onChange={handleUserNameChange} />
              </label>
            </div>
            <br />
            <div>
              <label htmlFor="fullName">
                FullName:
                <input type="text" value={fullName} onChange={handleFullNameChange}/>
              </label>
            </div>
            <br />
            <div>
              <label htmlFor="age">
                Age:
                <input type="text" value={age} onChange={handleAgeChange}/>
              </label>
            </div>
            <br />
            <button type="submit">Submit</button>
            </form>
              <h4>Request Sent to DB with below request data</h4>
              <ul>
                <li>UserName: {isSubmitted && userName}</li> 
                <li>FullName: {isSubmitted && fullName}</li> 
                <li>Age: {isSubmitted && age}</li>
              </ul>
        </div>
      </header>
    </div>
  );
}

export default HiringTest;
