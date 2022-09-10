let jokes = ["What do you call a boomerang that wont come back ? <br> A stick.",

"What does a cloud wear under his raincoat ? <br> Thunderwear.",

"Two pickles fell out of a jar onto the floor. What did one say to the other ? <br> Dill with it.",

"What time is it when the clock strikes 13 ? <br> Time to get a new clock.",

"How does a cucumber become a pickle ? <br> It goes through a jarring experience.",

"What do you think of that new diner on the moon ? <br> Food was good, but there really wasnt much atmosphere.",

"Why did the dinosaur cross the road ? <br> Because the chicken wasnt born yet.",
]

let funny = jokes[Math.floor(Math.random() * jokes.length)];
console.log(funny)

document.getElementById("lamo").innerHTML = funny;
