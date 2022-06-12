
import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Personal from './Forms/Personal';
import Business from './Forms/Business';
import Loan from './Forms/Loan';



function ControlledTabsExample() {
  const [key, setKey] = useState('personal');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="personal" title="Personal Details">
        <Personal/>
      </Tab>
      <Tab eventKey="business" title="Business Details">
        <Business/>
      </Tab>
      <Tab eventKey="loan" title="Loan Details" >
        <Loan/>
      </Tab>
    </Tabs>
  );
}

export default ControlledTabsExample;