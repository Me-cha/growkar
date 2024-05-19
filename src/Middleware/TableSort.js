export function extractFieldsAndData(jsonData) {
  if (jsonData.length > 0) {
    const fields = [...Object.keys(jsonData[0])];

    const data = jsonData.map((item, index) => {
      return { id: index, ...item };
    });

    return { fields, data };
  }

  return { fields: [], data: [] };
}
