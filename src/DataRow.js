/**
 * @param items
 * @returns {Object}
 * @constructor
 */
function DataRow(items) {

  // Internal map for fast by-name search
  const itemsMap = new Map(items.map( item => {
    return [item.key, item];
  }));

  return Object.freeze(Object.create(DataRow.prototype,{
    items : {
      value: items
    },
    item: {
      value : name => itemsMap.get(name)
      // TODO: Set should accept dwo parameters wit name and value and return new object with new item replaced
      //throw "Not implemented yet";
    }
  }));

}
DataRow.prototype = Object.freeze(Object.create(null));


export default DataRow;

