const parseArgs = () => {
  try {
    const argvList = process.argv;
    argvList.forEach((arg, index) => {
      if (arg.includes("--")) {
        console.log(`${arg.slice(2)} is ${argvList[index + 1]}`);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

parseArgs();
