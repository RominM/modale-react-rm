import React, { useState } from 'react';
import { storiesOf} from '@storybook/react';

import { Modale } from '../components/Modale';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
  const [isOpen, setIsOpen] = useState(true);

  const text = 'My simple modale component';

  return (<Modale content={text} trigger={isOpen} setTrigger={setIsOpen}/>)
})