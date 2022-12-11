import { FC } from 'react';

import Page from '../../layouts/Page';

import CustomLink from '../../components/CustomLink';

const About: FC = () => {
  return (
    <Page>
      <div className="mx-auto ">
        <CustomLink
          href="https://github.com/artemshchirov/devrel-hack/blob/main/README.md"
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-300"
        >
          About
        </CustomLink>
      </div>
    </Page>
  );
};

export default About;
