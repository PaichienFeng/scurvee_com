
// function to format a timestamp, accepts the timestamp and an `options` object as parameters
module.exports = (
  timestamp
) => {

  const dateObj = new Date(timestamp);
  const formattedMonth = (dateObj.getMonth()+1).toString().padStart(2, '0');

  const date = dateObj.getDate().toString().padStart(2,'0');

  const year = dateObj.getFullYear();



  const formattedTimeStamp = `${year}-${formattedMonth}-${date}`;

  return formattedTimeStamp;
};
