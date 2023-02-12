// TODO: .tsx
import { useState } from "react";

import { TabView, TabPanel } from "primereact/tabview";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

const TabViewTech = ({ cols, handleCheckboxClick, defaultCheckboxes }) => {
  // **************
  // * CHECKBOXES *
  // **************
  const [fields, setFields] = useState(cols.map((col) => col.field));

  const onFieldChange = (e) => {
    let selectedFields = [...fields];
    if (e.checked) selectedFields.push(e.value);
    else selectedFields.splice(selectedFields.indexOf(e.value), 1);
    setFields(selectedFields);
  };

  const handleClick = () => {
    handleCheckboxClick(fields);
  };

  return (
    <div className="w-full mx-auto overflow-hidden rounded-md">
      <TabView>
        <TabPanel header="Spring Boot">
          <div className="grid grid-cols-2 mx-auto mt-2 mr-auto col-12 xl:grid-cols-4 gap-y-4 xl2:gap-x-64 md:gap-x-52 sm:gap-x-4 w-max">
            {defaultCheckboxes.map((col) => {
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
                    className="pl-3 p-checkbox-label"
                  >
                    {col.header}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="flex items-center w-full mt-4">
            <Button
              label="Submit"
              onClick={handleClick}
              loading={false}
              loadingIcon="pi pi-spin pi-sun"
              className="w-6/12 md:w-1/6 mx-auto mt-3 overflow-hidden rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            />
          </div>
        </TabPanel>
        <TabPanel header="React.js" disabled></TabPanel>
      </TabView>
    </div>
  );
};

export default TabViewTech;
