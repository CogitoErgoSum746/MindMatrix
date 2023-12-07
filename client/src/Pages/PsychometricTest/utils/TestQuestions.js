import React from 'react';
import { useParams } from 'react-router-dom';
import TestQuestionsPattern1 from '../testpattern/TestQuestionsPattern1';
import TestQuestionsPattern2 from '../testpattern/TestQuestionsPattern2';
import TestQuestionsPattern3 from '../testpattern/TestQuestionsPattern3';
import TestQuestionsPattern4 from '../testpattern/TestQuestionsPattern4';
import TestQuestionsPattern5 from '../testpattern/TestQuestionsPattern5';
import TestQuestionsPattern6 from '../testpattern/TestQuestionsPattern6';
import TestQuestionsPattern7 from '../testpattern/TestQuestionsPattern7';
import TestQuestionsPattern8 from '../testpattern/TestQuestionsPattern8';
import TestQuestionsPattern9 from '../testpattern/TestQuestionsPattern9';
import TestQuestionsPattern10 from '../testpattern/TestQuestionsPattern10';
import TestQuestionsPattern11 from '../testpattern/TestQuestionsPattern11';
import TestQuestionsPattern12 from '../testpattern/TestQuestionsPattern12';
import TestQuestionsPattern13 from '../testpattern/TestQuestionsPattern13';
import TestQuestionsPattern14 from '../testpattern/TestQuestionsPattern14';
import TestQuestionsPattern15 from '../testpattern/TestQuestionsPattern15';
import TestQuestionsPattern16 from '../testpattern/TestQuestionsPattern16';
import TestQuestionsPattern17 from '../testpattern/TestQuestionsPattern17';
import TestQuestionsPattern18 from '../testpattern/TestQuestionsPattern18';
import TestQuestionsPattern19 from '../testpattern/TestQuestionsPattern19';
import TestQuestionsPattern20 from '../testpattern/TestQuestionsPattern20';
function TestQuestions() {
  const { id, subtestId } = useParams();

  if (id === '1') {
    return <TestQuestionsPattern1 subtestId={subtestId} />;
  } else if (id === '2') {
    return <TestQuestionsPattern2 subtestId={subtestId} />;
  } 
  else if (id === '3') {
    return <TestQuestionsPattern3 subtestId={subtestId} />;
  }
  else if (id === '4') {
    return <TestQuestionsPattern4 subtestId={subtestId} />;
  }
  else if (id === '5') {
    return <TestQuestionsPattern5 subtestId={subtestId} />;
  }
  else if (id === '6') {
    return <TestQuestionsPattern6 subtestId={subtestId} />;
  }
  else if (id === '7') {
    return <TestQuestionsPattern7 subtestId={subtestId} />;
  }
  else if (id === '8') {
    return <TestQuestionsPattern8 subtestId={subtestId} />;
  }
  else if (id === '9') {
    return <TestQuestionsPattern9 subtestId={subtestId} />;
  }
  else if (id === '10') {
    return <TestQuestionsPattern10 subtestId={subtestId} />;
  }
  else if(id==='11')
  {
    return <TestQuestionsPattern11 subtestId={subtestId} />;
  }
  else if(id==='12')
  {
    return <TestQuestionsPattern12 subtestId={subtestId} />;
  }
  else if(id==='13')
  {
    return <TestQuestionsPattern13 subtestId={subtestId} />;
  }
  else if(id==='14')
  {
    return <TestQuestionsPattern14 subtestId={subtestId} />;
  }
  else if(id==='15')
  {
    return <TestQuestionsPattern15 subtestId={subtestId} />;
  }
  else if(id==='16')
  {
    return <TestQuestionsPattern16 subtestId={subtestId} />;
  }
  else if(id==='17')
  {
    return <TestQuestionsPattern17 subtestId={subtestId} />;
  }
  else if(id==='18')
  {
    return <TestQuestionsPattern18 subtestId={subtestId} />;
  }
  else if(id==='19')
  {
    return <TestQuestionsPattern19 subtestId={subtestId} />;
  }
  else if(id==='20')
  {
    return <TestQuestionsPattern20 subtestId={subtestId} />;
  }
  else {
    return <div>Test not found</div>;
  }
}

export default TestQuestions;
