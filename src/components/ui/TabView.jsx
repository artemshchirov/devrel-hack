import { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { SplitButton } from 'primereact/splitbutton';
import { Avatar } from 'primereact/avatar';

const TabViewDemo = () => {
  const [activeIndex1, setActiveIndex1] = useState(1);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const scrollableTabs = Array.from({ length: 50 }, (_, i) => ({
    title: `Tab ${i + 1}`,
    content: `Tab ${i + 1} Content`,
  }));

  const tabHeaderITemplate = (options) => {
    return (
      <button
        type="button"
        onClick={options.onClick}
        className={options.className}
      >
        <i className="mr-2 pi pi-prime" />
        {options.titleElement}
      </button>
    );
  };

  const tabHeaderIIITemplate = (options) => {
    const items = [
      { label: 'Update', icon: 'pi pi-refresh' },
      { label: 'Delete', icon: 'pi pi-times' },
      { label: 'Upload', icon: 'pi pi-upload' },
    ];

    return (
      <SplitButton
        label="Header III"
        icon="pi pi-plus"
        onClick={options.onClick}
        className="px-2"
        model={items}
      ></SplitButton>
    );
  };

  const tabHeaderIITemplate = (options) => {
    return (
      <div
        className="flex px-3 align-items-center"
        style={{ cursor: 'pointer' }}
        onClick={options.onClick}
      >
        <Avatar
          image="images/avatar/amyelsner.png"
          onImageError={(e) =>
            (e.target.src =
              'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
          }
          shape="circle"
          className="mx-2"
        />
        Amy Elsner
      </div>
    );
  };

  return (
    <>
      <div className="overflow-hidden rounded-lg card">
        <TabView>
          <TabPanel header="Spring Boot"></TabPanel>
          <TabPanel header="React.js" disabled></TabPanel>
        </TabView>
      </div>
    </>
  );
};

export default TabViewDemo;
