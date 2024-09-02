const time = document.getElementById('time');
const date = document.getElementById('date');

const montHNames = ["january", "february", "march",
                    "april", "may", "june", "july",
                    "august", "september", "october",
                    "november", "december"];

const interval = setInterval(() => {

    const local = new Date();
    let day = local.getDate(),
    month = local.getMonth(),
    year = local.getFullYear();

    time.innerHTML = local.toLocaleTimeString();
}, 100);