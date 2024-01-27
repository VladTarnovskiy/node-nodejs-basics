import { stdout, stdin } from "node:process";
import { Transform } from "stream";

const transform = async () => {
  const textReverse = new Transform({
    transform(chunk, encoding, callback) {
      const data = chunk.toString().split("").reverse().join("");
      callback(null, data);
    },
  });

  stdin.pipe(textReverse).pipe(stdout);
};

await transform();
