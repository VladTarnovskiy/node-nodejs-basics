const parseEnv = () => {
  try {
    const envs = process.env;
    for (let key in envs) {
      if (key.match(/RSS_/)) {
        console.log(`${key}=${envs[key]}`);
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

parseEnv();
