/**
 * Data table
 * @param p Properties object
 * @param {String} [p.idprop=undefined] Name of id (key) property
 * @param {Array.<DataColumn>} [p.cols=[]] Initial cols
 * @param {Array.<DataRow>} [p.rows=[]] Initial rows
 * @constructor
 */
function DataTable(p) {

  const idprop = typeof p.idprop === "string" ? p.idprop : undefined;
  const rows = Array.isArray(p.rows) ? p.rows : [];
  const cols = Array.isArray(p.cols) ? p.cols : [];

  return Object.freeze(Object.create(DataTable.prototype,{

    idprop: {
      value : idprop
    },
    rows : {
      value: rows
    },
    cols : {
      value: cols
    },
    setRows: {
     value: (rows) =>
        DataTable({
          idprop,
          rows,
          cols
        })
      }
    }
  ));

}
DataTable.prototype = Object.freeze(Object.create(null));


export default DataTable;
