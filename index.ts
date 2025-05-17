function main(): void {
  const projectName = "support.ai";
  welcome(projectName);
}

function welcome(name: string) {
  return "Hello, " + name.toLowerCase();
}

main();
