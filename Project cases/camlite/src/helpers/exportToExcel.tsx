import exportFromJSON from 'export-from-json';

export default function exportToExcel(
  items: any,
  rowOrder: any,
  fileName: string,
  e: Event
) {
  const exportType = exportFromJSON.types.csv;
  e.preventDefault();
  const data = items.map(
    (item: { [s: string]: unknown } | ArrayLike<unknown>) => {
      let temp: any = {};
      for (const [key, value] of Object.entries(item)) {
        if (rowOrder.includes(key)) temp[key] = value;
      }
      return temp;
    }
  );
  exportFromJSON({ data, fileName, exportType });
}
