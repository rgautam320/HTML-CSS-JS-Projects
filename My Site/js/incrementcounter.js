const counters = document.querySelectorAll(".count-project");

counters.forEach((counter) => {
   counter.innerHTML = 0;

   const updateCounter = () => {
      const myTarget = +counter.getAttribute("data-target");

      const startCount = Number(counter.innerHTML);

      const incr = myTarget / 1000;

      if (startCount < myTarget) {
         counter.innerHTML = `${Math.round(startCount + incr)}`;
         setInterval(updateCounter, 100);
      } else {
         counter.innerHTML = `${myTarget}`;
      }
   };

   updateCounter();
});
