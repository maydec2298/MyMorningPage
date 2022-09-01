import { create, router as _router, defaults, bodyParser } from "json-server";
import { resolve } from "path";

const server = create();
const router = _router(resolve(__dirname + "/db.json"));
const middlewares = defaults({
  static: resolve(__dirname + "/../build/"),
});

const port = process.env.PORT || 3000;

server.use(middlewares);

server.use(bodyParser);

server.use(router);
server.listen(port, () => {
  console.log("JSON Server is running");
});
