

const first_name = "Saro";

const last_name = "Deravanesian";


const obj = {
    first_name,
    last_name
}

console.log(obj);

console.log(createPerson('Saro', 'Deravanesian', 'SSE'));

function createPerson(first_name, last_name, job_title) {
    return {
        first_name,
        last_name,
        job_title,
    }

}