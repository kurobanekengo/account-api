import * as express from "express";
import * as bodyParser from "body-parser";
import { routes, API_METHOD, Route } from "./routes";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { GET, POST, PUT, DELETE } = API_METHOD;
for (const route of routes) {
  switch (route.method) {
    case GET:
      app.get(route.path, (req, res) => route.run(req, res));
      break;
    case POST:
      app.post(route.path, (req, res) => route.run(req, res));
      break;
    case PUT:
      app.put(route.path, (req, res) => route.run(req, res));
      break;
    case DELETE:
      app.delete(route.path, (req, res) => route.run(req, res));
      break;
  }
}

export { app };
