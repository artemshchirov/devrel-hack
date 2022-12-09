import { FC, useState } from 'react';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

import Page from '../../layouts/Page';

const Home: FC = () => {
  const [dialogIsOpened, setDialogIsOpened] = useState<boolean>(false);
  return (
    <Page>
      <h1 className="mb-10 text-lg break-words text-cyan-200 md:text-3xl">
        Vite + React + TypeScript + Tailwind + Primereact
      </h1>

      <Dialog
        visible={dialogIsOpened}
        onHide={() => setDialogIsOpened((prev) => !prev)}
      >
        Hello World!
      </Dialog>

      <Button
        label="Start"
        onClick={() => setDialogIsOpened((prev) => !prev)}
      />
    </Page>
  );
};

export default Home;
