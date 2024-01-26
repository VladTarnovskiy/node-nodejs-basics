const parseEnv = () => {
  const envs = process.env;
  for (let key in envs) {
    if (key.match(/RSS_/)) {
      console.log(`${key}=${envs[key]}`);
    }
  }
};

parseEnv();
