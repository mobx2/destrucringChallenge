const log = console.log;
let chosen = 2;

document.body.style.backgroundColor = "black";

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
function mainDestructingFun([one, two, three] = myFriends) {
  // Switch chosen fro, number to var name
  switch (chosen) {
    case 1:
      [chosen, one] = [one, chosen];
      break;
    case 2:
      [chosen, two] = [two, chosen];
      break;
    case 3:
      [chosen, three] = [three, chosen];
      break;
  }
  let {
    title: t,
    age: a,
    available: av,
    skills: [, last],
  } = chosen;
  // Check availability
  function checkAv() {
    if (av === true) {
      return `Available`;
    } else {
      return `Not available`;
    }
  }
  // checkAv();
  return `Hello ${t}, Your age is ${a}, Your are ${checkAv()} for work, Your last skill is ${last}`;
}

log(mainDestructingFun());
