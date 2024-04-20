import express from "express";
import axios from "axios"
import request from "postman-request";
import dotenv from "dotenv"
import setArrayData from "./router/routeHref.js"
const app = express(),
  Path = process.env.PORT || 3002,
  sddigf = () => console.log(`App is listening at ${Path}`)

app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
dotenv.config();

setArrayData.map((data) => {
  app.get(data.link, (req, res) => res.status(200).render(data.file));
});

app.get("/lahore-weather", async (req, res) => {
  if (typeof window === "undefined" || window.navigator.onLine == true) {
    const ekjfbwevv = [
      process.env.SECRET_HASH,
      "en",
      "metric",
      "31.485722",
      "74.32648689999996",
    ];
    const url = `http://api.openweathermap.org/data/2.5/onecall?lat=${ekjfbwevv[3]}&lon=${ekjfbwevv[4]}&appid=${ekjfbwevv[0]}&units=${ekjfbwevv[2]}&lang=${ekjfbwevv[1]}`;
    const fetchData = await axios.get(url);
    const dataToSend = fetchData.data.current;
    const dataObject = {
      temperature: dataToSend.temp + " °C",
      cloudy: dataToSend.clouds + " %",
      humidity: dataToSend.humidity + " %",
      wind: dataToSend.wind_speed + " km/hr",
      city: "Lahore, PB, Pakistan",
    };
    res.status(200).render("lahore-weather.ejs", dataObject);
  } else {
    alert("Check connection!");
  }
});

app.post("/lahore-weather", async (req, res) => {
  const { Value } = req.body;
  const jhhc = await axios.get(
    `http://api.positionstack.com/v1/forward?access_key=${process.env.S3_BUCKET
    }&query=${Value.toLowerCase()}`
  );
  const { latitude, longitude } = jhhc.data.data[0];

  try {
    const ekj = [process.env.SECRET_HASH, "en", "metric", latitude, longitude];
    const url = `http://api.openweathermap.org/data/2.5/onecall?lat=${ekj[3]}&lon=${ekj[4]}&appid=${ekj[0]}&units=${ekj[2]}&lang=${ekj[1]}`;
    const ugd = await axios.get(url);
    const { temp, clouds, humidity, wind_speed } = ugd.data.hourly[0];
    const dataObject = {
      temperature: temp + " °C",
      cloudy: "Cloudy " + clouds + " %",
      humidity: "Humidity " + humidity + " %",
      wind: wind_speed + " km/hr",
      city: jhhc.data.data[0].label,
    };
    res.status(200).json(dataObject);
  } catch (error) {
    console.log(error);
  }
});

app.get("/quotes", async (req, res) => {
  if (typeof window === "undefined" || window.navigator.onLine == true) {
    var category = "happiness";
    await request.get(
      {
        url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
        headers: {
          "X-Api-Key": "pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3",
        },
      },
      function (error, response, body) {
        if (error) return console.error("Request failed:", error);
        else if (response.statusCode != 200)
          return console.error(
            "Error:",
            response.statusCode,
            body.toString("utf8")
          );
        else {
          const fg = JSON.parse(body);
          res.status(200).render("quotes.ejs", {
            quote: fg[0].quote,
            author: "Author: " + fg[0].author,
            category: fg[0].category.toUpperCase(),
          });
        }
      }
    );
  } else {
    alert("Check your Internet");
  }
});

app.get("/cat-intro", async (req, res) => {
  if (typeof window === "undefined" || window.navigator.onLine == true) {
    var name = "abyssinian";
    await request.get(
      {
        url: "https://api.api-ninjas.com/v1/cats?name=" + name,
        headers: {
          "X-Api-Key": "pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3",
        },
      },
      function (error, response, body) {
        if (error) return console.error("Request failed:", error);
        else if (response.statusCode != 200)
          return console.error(
            "Error:",
            response.statusCode,
            body.toString("utf8")
          );
        else {
          const dataSend = JSON.parse(body);
          const dataAPIs = {
            length: dataSend[0].length,
            origin: dataSend[0].origin,
            image: dataSend[0].image_link,
            familyFriendly: dataSend[0].family_friendly + " out of 5",
            shedding: dataSend[0].shedding + " out of 5",
            health: dataSend[0].general_health + " out of 5",
            playfullness: dataSend[0].playfulness + " out of 5",
            childFriendly: dataSend[0].children_friendly + " out of 5",
            grooming: dataSend[0].grooming + " out of 5",
            intelligent: dataSend[0].intelligence + " out of 5",
            otherPetFriendly: dataSend[0].other_pets_friendly + " out of 5",
            minWeight: dataSend[0].min_weight + " kg",
            maxWeight: dataSend[0].max_weight + " kg",
            minLifeExpectency: dataSend[0].min_life_expectancy + " years",
            maxLifeExpectancy: dataSend[0].max_life_expectancy + " years",
            name: dataSend[0].name,
          };
          res.status(200).render("cat-intro.ejs", dataAPIs);
        }
      }
    );
  } else {
    alert("check your Internet!");
  }
});

app.post("/whois", async (req, res) => {
  await request.get(
    {
      url: "https://api.api-ninjas.com/v1/whois?domain=" + req.body.username,
      headers: {
        "X-Api-Key": "pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3",
      },
    },
    function (error, response, body) {
      if (error) return console.error("Request failed:", error);
      else if (response.statusCode != 200)
        return console.error(
          "Error:",
          response.statusCode,
          body.toString("utf8")
        );
      else res.status(200).json(body);
    }
  );
});

app.get("/jokes", async (req, res) => {
  let limit = 1;
  await request(
    {
      url: "https://api.api-ninjas.com/v1/jokes?limit=" + limit,
      headers: {
        "X-Api-Key": "pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3",
      },
    },
    function (error, response, body) {
      if (error !== null) {
        res.status(501).render("jokes.ejs", { joke: "Error with APIs" });
      } else if (response && response.statusCode !== 200) {
        res
          .status(500)
          .render("jokes.ejs", { joke: "Check Internet Connection!" });
      } else {
        let bodyData = JSON.parse(body);
        const [c] = bodyData;
        const { joke } = c;
        res.status(200).render("jokes.ejs", { joke: joke });
      }
    }
  );
});

app.post("/currency-converter", async (req, res) => {
  (async () => {
    await request.get(
      {
        url: `https://api.api-ninjas.com/v1/convertcurrency?want=${req.body.Want}&have=${req.body.Have}&amount=${req.body.Amount}`,
        headers: {
          "X-Api-Key": "pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3",
        },
      },
      function (error, response, body) {
        if (error) return console.error("Request failed:", error);
        else if (response.statusCode != 200)
          return console.error(
            "Error:",
            response.statusCode,
            body.toString("utf8")
          );
        else {
          let dataSent = JSON.parse(body);
          res.send(dataSent);
        }
      }
    );
  })();
});

app.post("/language-detector", async (req, res) => {
  (async () => {
    await request.get(
      {
        url:
          "https://api.api-ninjas.com/v1/textlanguage?text=" +
          req.body.lang.toLowerCase(),
        headers: {
          "X-Api-Key": "pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3",
        },
      },
      function (error, response, body) {
        if (error) return console.error("Request failed:", error);
        else if (response.statusCode != 200)
          return console.error(
            "Error:",
            response.statusCode,
            body.toString("utf8")
          );
        else {
          let dataSent = JSON.parse(body);
          res.status(200).json(dataSent);
        }
      }
    );
  })();
});

app.get("/*", (req, res) => res.status(404).render("error.ejs"));
app.post("/*", (req, res) => res.json(""));
app.listen(Path, () => console.log(`Backened is listening at ${Path}`));

// Export the Express API
module.exports = app;