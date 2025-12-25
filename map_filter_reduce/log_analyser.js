const logs = 
[
  { level: "INFO", message: "Server started" },
  { level: "ERROR", message: "DB connection failed" },
  { level: "INFO", message: "User logged in" },
  { level: "WARN", message: "Memory usage high" },
  { level: "ERROR", message: "Timeout occurred" },
  { level: "INFO", message: "Request processed" },
  { level: "ERROR", message: "Disk not found" }
];

//Task01. Frequency by log level
let level_type = logs.reduce((acc, curr) =>
{
    let category = curr.level;
    if (acc[category] === undefined)
    {
        acc[category] = 0;
    }
    acc[category]++;
    return acc;
}, {});

//Task02. Most frequent log.
let freq_array = Object.entries(level_type);
let most_freq_log = freq_array.reduce((max,curr) => max[1]>curr[1]?max:curr ,["", 0]);

//Task03. Only error messages.
let only_error = logs.filter(element => element.level === "ERROR");
console.log("\nError messages:");
for (let idx in only_error)
    console.log(only_error[idx].message);

//Task04: Summary
const summary = {
  totalLogs: logs.length,
  frequencyByLevel: level_type,
  topLevel: most_freq_log[0]
};

console.log(summary);