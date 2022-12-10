// TODO: .tsx
import { useState } from 'react';

import { TabView, TabPanel } from 'primereact/tabview';
import { Checkbox } from 'primereact/checkbox';
import { contributors } from '../../../data/contributors';

const TabViewTech = ({ cols }) => {
  // **************
  // * CHECKBOXES *
  // **************
  const [fields, setFields] = useState([]);

  const onFieldChange = (e) => {
    let selectedFields = [...fields];
    if (e.checked) selectedFields.push(e.value);
    else selectedFields.splice(selectedFields.indexOf(e.value), 1);
    setFields(selectedFields);
  };
  // **** END *****

  return (
    <>
      <div className="overflow-hidden rounded-lg card">
        <TabView>
          <TabPanel header="Spring Boot">
            <div className="grid grid-cols-2 mr-auto col-12 md:grid-cols-3 gap-y-4 xl:gap-x-72 md:gap-x-36 sm:gap-x-4 w-max ">
              {cols.map((col) => {
                return (
                  <div key={col.id}>
                    <Checkbox
                      inputId={`cb${col.id}`}
                      value={col.field}
                      onChange={onFieldChange}
                      checked={fields.includes(col.field)}
                    ></Checkbox>
                    <label
                      htmlFor={`cb${col.id}`}
                      className="pl-2 p-checkbox-label"
                    >
                      {col.header}
                    </label>
                  </div>
                );
              })}
            </div>
          </TabPanel>
          <TabPanel header="React.js" disabled></TabPanel>
        </TabView>
      </div>
    </>
  );
};

export default TabViewTech;
