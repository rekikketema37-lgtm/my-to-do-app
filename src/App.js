import React from 'react';
import TaskCard from "./components/TaskCard";
function App(){ return(
<div className="App">
  <h1>Tasks</h1>
<TaskCard 
title="Exercise coding"
dueDate="2027-04-06"
description="complete frontend"
priority=" mandatory"/>
<TaskCard 
title="Physical training"
dueDate="2027-04-06"
description="every morning"
priority=" Twice a day"/></div>);}
export default App;