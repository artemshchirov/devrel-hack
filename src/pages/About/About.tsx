import { FC, useState, useEffect } from 'react';

import Page from '../../layouts/Page';

import ReactMarkdown from 'react-markdown';

const About: FC = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('../../../About.md')
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <Page>
      <div className="text-transparent text-white text-3xl bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400  dark:text m-auto">
        <ReactMarkdown children={content} />
      </div>
    </Page>
  );
};

export default About;
