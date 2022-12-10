// TODO: .tsx
import { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';

import { contributors } from '../../data/contributors.ts';

export const DataTableExport = ({ cols, handleLineClick }) => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const dt = useRef(null);

  // const cols = [
  //   { field: 'login', header: 'Login' },
  //   { field: 'contributions', header: 'Contributions' },
  //   { field: 'account_url', header: 'Account' },
  //   { field: 'repos_url', header: 'Repositories' },
  // ];

  const exportColumns = cols.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));

  useEffect(() => {
    setProducts(contributors);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const exportCSV = (selectionOnly) => {
    dt.current.exportCSV({ selectionOnly });
  };

  const exportPdf = () => {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then(() => {
        const doc = new jsPDF.default(0, 0);
        doc.autoTable(exportColumns, products);
        doc.save('products.pdf');
      });
    });
  };

  const exportExcel = () => {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(products);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      saveAsExcelFile(excelBuffer, 'products');
    });
  };

  const saveAsExcelFile = (buffer, fileName) => {
    import('file-saver').then((module) => {
      if (module && module.default) {
        let EXCEL_TYPE =
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data = new Blob([buffer], {
          type: EXCEL_TYPE,
        });

        module.default.saveAs(
          data,
          fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION,
        );
      }
    });
  };

  function fetchUserRepositories(login) {
    return fetch(`https://api.github.com/users/${login}/repos`, {
      headers: {
        Authorization: 'token ' + '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',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
  }

  const onSelectionChange = async (e) => {
    const selectedLine = e.value[0];
    const newSelectedProducts = selectedProducts.slice();
    newSelectedProducts.push(selectedLine);
    setSelectedProducts(newSelectedProducts);

    const userRepositories = await fetchUserRepositories(selectedLine.login);
    handleLineClick(userRepositories);
  };

  const header = (
    <div className="flex align-items-center export-buttons">
      <Button
        type="button"
        icon="pi pi-file"
        onClick={() => exportCSV(false)}
        className="mr-2 p-button-info"
        data-pr-tooltip="CSV"
      />
      <Button
        type="button"
        icon="pi pi-file-excel"
        onClick={exportExcel}
        className="mr-2 p-button-success"
        data-pr-tooltip="XLS"
      />
      <Button
        type="button"
        icon="pi pi-file-pdf"
        onClick={exportPdf}
        className="mr-2 p-button-warning"
        data-pr-tooltip="PDF"
      />
      <Button
        type="button"
        icon="pi pi-filter"
        onClick={() => exportCSV(true)}
        className="ml-auto p-button-info"
        data-pr-tooltip="Selection Only"
      />
    </div>
  );

  return (
    <div className="mt-3 overflow-hidden rounded-lg card">
      <Tooltip target=".export-buttons>button" position="bottom" />
      <DataTable
        paginator
        rows={10}
        ref={dt}
        value={products}
        header={header}
        dataKey="id"
        responsiveLayout="scroll"
        selectionMode="multiple"
        selection={selectedProducts}
        onSelectionChange={onSelectionChange}
      >
        {cols.map((col, index) => (
          <Column key={index} field={col.field} header={col.header} />
        ))}
      </DataTable>
    </div>
  );
};

export default DataTableExport;
