import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
import routes from "../shared/routes";
import configureStore from "../shared/configureStore";
import App from "../shared/App";
import "source-map-support/register";

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("/api/news", (req, res) => {
  res.json([
    {
      id: 1,
      share: 130,
      title: "Nationwide Dale Jr. Moment of the Week: Phoenix",
      author: "RubeusH",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 2,
      share: 126,
      title: "Tony Romo is delusional to think he’ll win starting QB job back | SPEAK FOR YOURSELF",
      author: "BathBabb",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 3,
      share: 114,
      title: "Ezekiel Elliott shouldn’t be favorite to top Tom Brady as NFL MVP | SPEAK FOR YOURSELF",
      author: "Falco",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 4,
      share: 97,
      title: "Untransfiguration classes to become compulsory at Hogwarts",
      author: "Baddock",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 5,
      share: 85,
      title: "Tony Romo is delusional to think he’ll win starting QB job backr ",
      author: "Hetty",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 6,
      share: 74,
      title: "Conserving waterplants cheatsheet.",
      author: "Otto",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 7,
      share: 66,
      title: "The Pragmatic Dragon Feeder",
      author: "Baruffio",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 8,
      share: 50,
      title: "The complete quidditch statistics",
      author: "Hbeery",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 9,
      share: 34,
      title: "Cracking the Aurologist Interview ",
      author: "Marcusb",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 10,
      share: 16,
      title: "Show WN: Wand-Extinguishing Protection",
      author: "Humphrey22",
      date: new Date("2017-04-14T15:30:00.000Z")
    }
  ]);
});

app.get("*", (req, res, next) => {
  const store = configureStore();

  const promises = routes.reduce((acc, route) => {
    if (matchPath(req.url, route) && route.component && route.component.initialAction) {
      acc.push(Promise.resolve(store.dispatch(route.component.initialAction())));
    }
    return acc;
  }, []);

  Promise.all(promises)
    .then(() => {
      const context = {};
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      );

      const initialData = store.getState();
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Home - Sports News, Scores, Schedules, and Videos | FOX Sports</title>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=EDGE"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
            <meta name="apple-mobile-web-app-capable" content="yes">
            <meta name="apple-mobile-web-app-status-bar-style" content="black">
            <meta name="description" content="Find live scores, player &amp; team news, videos, rumors, stats, standings, schedules &amp; fantasy games on FOX Sports."/>
            <link rel="stylesheet" href="/css/main.css">
            <script src="/bundle.js" defer></script>
            <script>window.__initialData__ = ${serialize(initialData)}</script>
          </head>

          <body>
            <section id="root" class="body-section">${markup}</section>
          </body>
        </html>
      `);
    })
    .catch(next);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening at localhost 3000");
});
