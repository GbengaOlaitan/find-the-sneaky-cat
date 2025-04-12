function pickCatMove() {
  const catMove = Math.random();
  // console.log(catMove)
  let move;
  if(catMove > 0 && catMove < 1/5) {
    move = 1;
    // console.log(move);
  } else if (catMove > 1/5 && catMove < 2/5) {
    move = 2;
    // console.log(move);
  } else if (catMove > 2/5 && catMove < 3/5) {
    move = 3;
    // console.log(move);
  } else if (catMove > 3/5 && catMove < 4/5) {
    move = 4;
    // console.log(move);
  } else if (catMove > 4/5 && catMove < 1) {
    move =5;
    // console.log(move);
  }

  return move
} 

const catMessage = document.querySelector('.js-cat-message');

  function yourMove(housePicked) {
    let result;
    const catMovehouse = pickCatMove();
    if(catMovehouse === housePicked) {
      result = 'You found the cat 🐈‍⬛';
      catMessage.innerHTML = result;
    } else if (housePicked < catMovehouse) {
      result = 'Too Low! 📉';
      catMessage.innerHTML = result;
    } else if (housePicked > catMovehouse) {
      result = 'Too high 📈';
      catMessage.innerHTML = result;
    }
  
    
  }

  let trialsLeft =3;
  let yourMoveButton = document.querySelectorAll('.js-yourmove-button');
  const trialMessage = document.querySelector('.js-tries-left');


  function yourMove(housePicked) {
    let result;
    //Display the trial left in the Dom

    const catMessage = document.querySelector('.js-cat-message');
  
    const catMovehouse = pickCatMove();
    if(catMovehouse === housePicked) {
      result = 'You found the cat 🐈‍⬛';
      trialsLeft = 3
      trialMessage.innerHTML = 3
      catMessage.innerHTML = result;
    } else if (housePicked < catMovehouse) {
      result = 'Too Low! 📉';
      let newtrials = trialsLeft -1
      trialsLeft = newtrials
      catMessage.innerHTML = result;
      trialMessage.innerHTML = trialsLeft;
    } else if (housePicked > catMovehouse) {
      result = 'Too high 📈';
      let newtrials = trialsLeft -1
      trialsLeft = newtrials
      trialMessage.innerHTML = trialsLeft;
      catMessage.innerHTML = result;
    }


    yourMoveButton.forEach(button => {
      if (trialsLeft < 1) {
        button.setAttribute('disabled', 'disabled');
        catMessage.innerHTML = '😭';
        trialMessage.innerHTML = 'Out of Trial ❌';
      }
    })


  }

  function playAgain() {
    // catMessage.innerHTML = '';
    // trialsLeft = 3
    // trialMessage.innerHTML = 3;

    // yourMoveButton.forEach(button => {
    //   if (trialsLeft < 1) {
    //     catMessage.innerHTML = '';
    //     trialMessage.innerHTML = 3
    //     trialsLeft =3;
    //    button.removeAttribute('disabled', 'disabled')
    //   }
    // })

    if(trialsLeft < 1) {
      yourMoveButton.forEach(button => {
        button.removeAttribute('disabled');
        catMessage.innerHTML = '';
        trialMessage.innerHTML = 3
      })
    } else {
      catMessage.innerHTML = '';
      trialMessage.innerHTML = 3
    }

    trialsLeft =3;
  }





/*


*/


