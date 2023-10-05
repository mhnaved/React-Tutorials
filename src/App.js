import React from "react";
import './App.css';
// import './index.css';
import ReactEvents from "./Componets/ReactEvents";
// import InterviewQues from "./InterviewQues";

import Parag from "./Componets/Parag";

import HooksState from "./Componets/HooksState";
import HooksEffect from "./Componets/HooksEffects";
import HooksuseRef from "./Componets/HooksuseRef";
import Parent from "./Componets/Parent";
import HooksuseMemo from "./Componets/HooksuseMemo";
import NoteState from "./context/NoteState";
import Hero from "./ErrorBoundry/Hero";
import ErrorBoundry from "./ErrorBoundry/ErrorBoundry";
import Counter from "./Componets/Counter";
import FormValidation from "./Componets/FormValidation";
import Para from "./context/Para";
import Lists from "./Componets/Lists";
import ReactState from "./Componets/ReactState";
import PureComp from "./Componets/PureComp";
import ControlledComp from "./Componets/ControlledComp";
import UncontrolledComp from "./Componets/UncontrolledComp";
import Para2 from "./context/Para2";
import ReactFragments from './Componets/ReactFragments'
import ReactProps from "./Componets/ReactProps";


// import Heading from './Heading';
// import Parag from './Parag';
// import List from './List';



function App(){
    return (
        <>
    
        {/* <NoteState>    

        <Para />  
        <Parag />
        <Para2/>

        </NoteState>   */}

  
 

     {/* <InterviewQues/>  */}
      {/* <ReactEvents/> */}
    
   

   {/* <HooksState/> */}
    {/* <HooksEffect/>  */}

   {/* <HooksuseRef/>  */}

   {/* <Parent/> */}
   
    {/* <HooksuseMemo/>  */}

   <ErrorBoundry> 
    <Hero heroName="Batman" />
    </ErrorBoundry>
    <ErrorBoundry> 
    <Hero heroName="Superman" />
    </ErrorBoundry>
    <ErrorBoundry> 
    <Hero heroName="SRK" />
    </ErrorBoundry> 

    {/* <Counter/>
    <FormValidation/> 
    <Lists/> */}
    {/* <ReactState/> */}
    {/* <PureComp/> */}
    {/* <ControlledComp/> */}
    {/* <UncontrolledComp/> */}

    <ReactFragments/>

    <ReactProps name="Naved"/>
 
      

        </>
    );
}
export default App;