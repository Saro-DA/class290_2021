

const obj1 = {
    first_name: "Saro",
    last_name: "Deravanesian",

    job_info: {
        title: "SSE",
        experience: 14
    }
}

console.log(obj1 && obj1.first_name);

console.log(obj1 && obj1.job_info && obj1.job_info.title);

console.log(obj1 && obj1['first_name']);

const userInput = 'last_name';

console.log(obj1[userInput]); // ==> obj1['last_name']