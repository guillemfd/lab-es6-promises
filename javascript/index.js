// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));



// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    obtainInstruction('steak', 1)
    .then( (step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
      obtainInstruction('steak', 2)
      .then( (step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
        obtainInstruction('steak', 3)
        .then( (step3) => {
          document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
          obtainInstruction('steak', 4)
          .then( (step4) => {
            document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
            obtainInstruction('steak', 5)
            .then( (step5) => {
              document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
              obtainInstruction('steak', 6)
              .then( (step6) => {
                document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
                obtainInstruction('steak', 7)
                .then( (step7) => {
                  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
                  document.querySelector("#mashedPotatoes").innerHTML += `<li>Steak ready!</li>`;
                  document.querySelector("#steakImg").removeAttribute("hidden")
                })
              })
          })
        })
      })
    })
  })
})



// Iteration 3 using async/await
makeBroccoli = async ()=> {
  let step = await obtainInstruction('broccoli', 0)
  document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
      step = await obtainInstruction('broccoli', 1)
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
      step = await obtainInstruction('broccoli', 2)
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
      step = await obtainInstruction('broccoli', 3)
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
      step = await obtainInstruction('broccoli', 4)
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
      step = await obtainInstruction('broccoli', 5)
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
      step = await obtainInstruction('broccoli', 6)
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
      document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
      document.querySelector("#broccoliImg").removeAttribute("hidden")
}
makeBroccoli()


// Bonus 1 - When the specific food is ready to be served (all steps are listed), remove the hidden attribute from the <img /> element that represents the food, so that the image gets displayed
//-----------------esto está realizado en cada ITERATION---------------------------


// Bonus 2 - Promise all
async function makeBrusselsSprouts() {
  const promises = [];
  for (let i = 0; i < 8; i++) {
    promises.push(obtainInstruction("brusselsSprouts", i));
  }
  const steps = await Promise.all(promises);
  steps.forEach(
    (step) =>
      (document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${step}</li>`)
  );
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
}
makeBrusselsSprouts();