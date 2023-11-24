const star = (floor) => {
  for (let i = 0; i < floor; i++) {
    document.write("&nbsp".repeat(floor - i + 1));
    document.write("*".repeat(i * 2 + 1));
    document.write("<br>");
  }
};

star(20);
