
export default () => {

  const dateObj = new Date();
  const formattedMonth = (dateObj.getMonth()+1).toString().padStart(2, '0');

  const date = dateObj.getDate().toString().padStart(2,'0');

  const year = dateObj.getFullYear();



  const formattedTimeStamp = `${year}-${formattedMonth}-${date}`;

  return formattedTimeStamp;
};
