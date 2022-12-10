import { useState } from 'react';

import { TabView, TabPanel } from 'primereact/tabview';
import { Checkbox } from 'primereact/checkbox';
import { contributors } from '../../data/contributors';

const TabViewTech = ({ cols }) => {
  // **************
  // * CHECKBOXES *
  // **************
  const [fields, setFields] = useState([]);

  const onFieldChange = (e) => {
    let selectedFields = [...fields];
    if (e.checked) selectedFields.push(e.value);
    else selectedFields.splice(selectedFields.indexOf(e.value), 1);
    console.log('fields: ', fields);

    setFields(selectedFields);
  };
  // **** END *****

  return (
    <>
      <div className="overflow-hidden rounded-lg card">
        <TabView>
          <TabPanel header="Spring Boot">
            <div className="col-12 grid grid-cols-3 gap-4">
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
                      className="p-checkbox-label pl-2"
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
