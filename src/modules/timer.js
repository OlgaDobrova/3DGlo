const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime(); //дата дедлайна в миллисекундах
    let dateNow = new Date().getTime(); //текущая дата  в миллисекундах
    //разница - кол-во миллисекунд до дедлайна
    //1сек = 1000 миллисекунд
    let timeRemaining = (dateStop - dateNow) / 1000; //кол-во секунд
    let second = Math.floor(timeRemaining % 60); //отбросили остаток от /1000 и вычислили только секунды, без учета минут - это остаток от /60
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let hours = Math.floor(timeRemaining / 60 / 60);

    return { timeRemaining, hours, minutes, second };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    if (getTime.timeRemaining > 0) {
      // setTimeout(updateClock, 1000);
      timerHours.textContent = getTime.hours.toString().padStart(2, "0");
      timerMinutes.textContent = getTime.minutes.toString().padStart(2, "0");
      timerSeconds.textContent = getTime.second.toString().padStart(2, "0");
    }
  };
  setInterval(updateClock, 1000);
};
export default timer;
