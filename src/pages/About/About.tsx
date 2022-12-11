import { FC, useState, useEffect } from 'react';

import Page from '../../layouts/Page';

import CustomLink from '../../components/CustomLink';

const About: FC = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('../../../About.md')
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <Page>
      <div className="mx-auto ">
        <CustomLink
          href="https://github.com/artemshchirov/devrel-hack/blob/main/README.md"
          className="text-4xl text-transparent underline bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-300 font-bold"
        >
          About
        </CustomLink>
      </div>
    </Page>
  );
};

export default About;
