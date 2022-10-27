// export function so that is can be used elsewhere
module.exports.getDate = function() {
  // find out today's date and day
  let date = new Date();

  // this object is a parameter for the method 'toLocaleDateString', which formats the date how we want it
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return date.toLocaleDateString("en-US", options);
}

module.exports.getDay = function() {
  // find out today's date and day
  let date = new Date();

  // this object is a parameter for the method 'toLocaleDateString', which formats the date how we want it
  const options = {
    weekday: "long",
  };

  return date.toLocaleDateString("en-US", options);
}
