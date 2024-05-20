const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("error is there in a file", err);
    return;
  }
  const trimmedData = data
    .split(" ")
    .filter((word) => word !== "")
    .join(" ");
  fs.writeFile("a.txt", trimmedData, "utf-8", (err) => {
    if (err) {
      console.log("if err is there then", err);
      return;
    }
  });
});
