// TODO: .tsx
import { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
// import { ProductService } from '../service/ProductService';

export const DataTableExport = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const dt = useRef(null);
  // const productService = new ProductService();

  const cols = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' },
  ];

  const exportColumns = cols.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));

  // useEffect(() => {
  //   console.log('selectedProducts: ', JSON.stringify(selectedProducts));
  //   console.log('selectedProducts length: ', selectedProducts.length);
  // }, [selectedProducts]);

  useEffect(() => {
    const testData = [
      { code: 'test Name', name: 'das', category: 'dsa', quantity: 'dsadsa' },
      { code: 'test Name2', name: 'das', category: 'dsa', quantity: 'dsadsa' },
      { code: 'test Name3', name: 'das', category: 'dsa', quantity: 'dsadsa' },
      { code: 'test Name4', name: 'das', category: 'dsa', quantity: 'dsadsa' },
      { code: 'test Name5', name: 'das', category: 'dsa', quantity: 'dsadsa' },
      { code: 'test Name6', name: 'das', category: 'dsa', quantity: 'dsadsa' },
      { code: 'test Name7', name: 'das', category: 'dsa', quantity: 'dsadsa' },
      { code: 'test Name8', name: 'das', category: 'dsa', quantity: 'dsadsa' },
      { code: 'test Name9', name: 'das', category: 'dsa', quantity: 'dsadsa' },
      { code: 'test Name10', name: 'das', category: 'dsa', quantity: 'dsadsa' },
      { code: 'test Name11', name: 'das', category: 'dsa', quantity: 'dsadsa' },
      { code: 'test Name12', name: 'das', category: 'dsa', quantity: 'dsadsa' },
      { code: 'test Name13', name: 'das', category: 'dsa', quantity: 'dsadsa' },
      { code: 'test Name14', name: 'das', category: 'dsa', quantity: 'dsadsa' },
    ];

    setProducts(testData);
    // productService.getProductsSmall().then((data) => setProducts(data));
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

  const onSelectionChange = (e) => {
    const selectedLine = e.value[0];
    const newSelectedProducts = selectedProducts.slice();
    newSelectedProducts.push(selectedLine);
    setSelectedProducts(newSelectedProducts);
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
