import React from 'react';
import { useParams } from 'react-router-dom';
import Spsatest from '../subtestList/Spsatest';
import Mltest from '../subtestList/MItest'
import TestPage from './TestPage';
import LRbdtest from '../subtestList/LRbdtest';
import Personalitytest from '../subtestList/Personalitytest';
import EItest from '../subtestList/EItest';
import LStest from '../subtestList/LStest';
import Leadership from '../subtestList/Leadership';
import LeadershipStyle from '../subtestList/LeadershipStyle';
import CDtest from '../subtestList/CDtest';
import CSAtest from '../subtestList/CSAtest';
import SWLtest from '../subtestList/SWLtest';
import Aptitest from '../subtestList/Aptitest';
import PSAtest from '../subtestList/PSAtest';
import ParentingStyle from '../subtestList/ParentingStyle';
import WLBtest from '../subtestList/WLBtest';
import WOLtest from '../subtestList/WOLtest';
import Integrity from '../subtestList/Integrity';
import EStest from '../subtestList/EStest';
import ESAtest from '../subtestList/ESAtest';
import Professional from '../subtestList/Professional';
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
