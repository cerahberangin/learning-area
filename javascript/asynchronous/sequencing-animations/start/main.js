const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// // Promise callback implementation
// const alice1Promise = alice1.animate(aliceTumbling, aliceTiming).finished;
// alice1Promise.then(() => {
//   const alice2Promise = alice2.animate(aliceTumbling, aliceTiming).finished;
//   alice2Promise.then(() => {
//     const alice3Promise = alice3.animate(aliceTumbling, aliceTiming).finished;
//   })
// })



// Promise chain implementation
// alice1.animate(aliceTumbling, aliceTiming).finished
//   .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
//   .then(() => alice3.animate(aliceTumbling, aliceTiming).finished);

// async and await implementation
async function animateAlice() {
  try {
    await alice1.animate(aliceTumbling, aliceTiming).finished;
    await alice2.animate(aliceTumbling, aliceTiming).finished;
    await alice3.animate(aliceTumbling, aliceTiming).finished;
  } catch (error) {
    console.error(`Could not animate alice: ${error}`);
  }
}

animateAlice();