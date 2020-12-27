/**
 * Create a ready to use class list based on array parameters.
 *
 * This is especially helpful when a classlist for an
 * html element consists of some static classes but also
 * some dynamic ones that depend on other variabes, for example.
 *
 * @param {string[]} defaultClasses
 *   The classes that will definitely be used.
 * @param {array} dynamicClass
 *   The classes that should also be added but have dynamic values.
 *
 * @return {string}
 *   The class list ready to insert into an html element.s
 */
export const composeClasses = (defaultClasses, dynamicClass) => {
  const mergedArray = defaultClasses.concat(dynamicClass);
  return mergedArray.join(' ');
};
