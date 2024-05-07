export default {
  calculateYearsOld(birth) {
    const splittedDate = birth.split("/");
    const day = parseInt(splittedDate[0]);
    const month = parseInt(splittedDate[1]) - 1;
    const year = parseInt(splittedDate[2]);

    const currentDate = new Date();
    const birthdate = new Date(year, month, day);

    let yearsOld = currentDate.getFullYear() - birthdate.getFullYear();
    const currentMonth = currentDate.getMonth();
    if (
      currentMonth < month ||
      (currentDate === month && currentDate.getDate() < day)
    ) {
      yearsOld--;
    }
    return yearsOld;
  },
  calculateTime(timestamp) {
    const date = new Date(timestamp);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedHours = hours < 10 ? "0" + hours : hours;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  },
  calculateDate(timestamp) {
    const date = new Date(timestamp);

    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    const formattedDay = day < 10 ? "0" + day : day;
    const formattedMonth = month < 10 ? "0" + month : month;

    return `${formattedDay}/${formattedMonth}/${year}`;
  },
};
