function DataItem(key, value) {

  return Object.freeze(Object.create(DataItem.prototype,{

    key: { value: key},
    value :  { value : value }

  }));

}
DataItem.prototype = Object.freeze(Object.create(null));

export default DataItem;
