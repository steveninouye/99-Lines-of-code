const friends = ["Shaun", "Ian", "Jenna", "Koshin", "Jesse"];

const linesOfCode = name => {
  console.log(`${name}:`);
  for (let line = 99; line >= 2; line--) {
    console.log(
      `${line} lines of code in the file, ${line} lines of code; ${name} strikes one out, clears it all out, ${line -
        1} lines of code in the file`
    );
  }
  console.log(
    `2 lines of code in the file, 2 lines of code; ${name} strikes one out, clears it all out, 1 line of code in the file`
  );
  console.log(
    `1 line of code in the file, 1 line of code; ${name} strikes one out, clears it all out, no more lines of code in the file`
  );
};

friends.forEach(friend => linesOfCode(friend));
