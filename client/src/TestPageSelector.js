import React from 'react';
import { useParams } from 'react-router-dom';
import Spsatest from './Pages/test/Spsatest';
import Mltest from './Pages/test/MItest'
import TestPage from './Pages/TestPage';
import LRbdtest from './Pages/test/LRbdtest';
import Personalitytest from './Pages/test/Personalitytest';
import EItest from './Pages/test/EItest';
import LStest from './Pages/test/LStest';
import Leadership from './Pages/test/Leadership';
import LeadershipStyle from './Pages/test/LeadershipStyle';
import CDtest from './Pages/test/CDtest';
import CSAtest from './Pages/test/CSAtest';
import SWLtest from './Pages/test/SWLtest';
import Aptitest from './Pages/test/Aptitest';
import PSAtest from './Pages/test/PSAtest';
import ParentingStyle from './Pages/test/ParentingStyle';
import WLBtest from './Pages/test/WLBtest';
import WOLtest from './Pages/test/WOLtest';
import Integrity from './Pages/test/Integrity';
import EStest from './Pages/test/EStest';
import ESAtest from './Pages/test/ESAtest';
import Professional from './Pages/test/Professional';
function TestPageSelector() {
  const { id } = useParams();



  const testPageComponents = {
    '1': Spsatest,
    '2': Mltest,
    '3': LRbdtest,
    '4': Personalitytest,
    '5': EItest,
    '6': LStest,
    '7': Leadership,
    '8': LeadershipStyle,
    '9': CDtest,
    '10':CSAtest,
    '11': SWLtest,
    '12': Aptitest,
    '13': PSAtest,
    '14': ParentingStyle,
    '15': WLBtest,
    '16': WOLtest,
    '17': Integrity,
    '18': EStest,
    '19': ESAtest,
    '20': Professional
  };

  const SelectedComponent = testPageComponents[id.toString()] || TestPage;


  return <SelectedComponent id={id}/>;
}

export default TestPageSelector;
