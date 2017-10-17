const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand')

    function setDate(){
      const now = new Date();

      // seconds
      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds/60)*360)+90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
      console.log("seconds", seconds);

      // minutes
      const minutes = now.getMinutes();
      const minutesDegrees = ((minutes/60)*360)+ ((seconds/60)*6) +90;
      minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
      console.log("minutes", minutes);

      // Hour
      const hours = now.getHours();
      let h = hours;
      
      if (h >= 12){
        h = hours - 12;
      } if (h==0){
        h = 12;
      }
      console.log("hours", h);
      const hoursDegrees = ((h /12) * 360) + ((minutes/60)*30) +90;
      hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
      console.log("hoursDegres", hoursDegrees);


    }

    setInterval(setDate,1000);
    setDate();
