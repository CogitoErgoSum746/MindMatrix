import React from 'react';
import { useParams } from 'react-router-dom';
import NeuroLinguistic from '../Certificate/NeuroLinguistic';
import NlpMaster from '../Certificate/NlpMaster';
import Emotional from '../Certificate/Emotional';
import Counselling from '../Certificate/Counselling';
import Gestalt from '../Certificate/Gestalt';
import Cognitive from '../Certificate/Cognitive';
import Rebt from '../Certificate/Rebt';
import Transactional from '../Certificate/Transactional';
import Developmental from '../Certificate/Developmental';

function CertificateContent() {
  const { id } = useParams();



  const certificateComponents = {
    '1': NeuroLinguistic,
    '2': NlpMaster,
    '3': Emotional,
    '4': Counselling,
    '5': Gestalt,
    '6': Cognitive,
    '7': Rebt,
    '8': Transactional,
    '9': Developmental
  };

  const SelectedComponent = certificateComponents[id.toString()] ;


  return <SelectedComponent />;
}

export default CertificateContent;
