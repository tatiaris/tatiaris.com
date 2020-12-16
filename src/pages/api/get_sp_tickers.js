import nextConnect from "next-connect";
import middleware from "../../../middleware/database";
import cheerio from "cheerio";

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
  let doc = {}

  const response = await fetch(`https://www.slickcharts.com/sp500`)
  const htmlString = await response.text()
  const $ = cheerio.load(htmlString)

  $('tr').map((i, e) => {
    let ticker_details = $(e).text().trim().split('\n');
    if (ticker_details[1].trim() != 'Company') doc[ticker_details[2].trim()] = ticker_details[1].trim()
  })
  res.json(doc);
});

handler.post(async (req, res) => {
  let data = req.body;
  data = JSON.parse(data);
  let doc = await req.db.collection("courses").insertOne(data);
  console.log("inserted data", data);
  res.json({
    message: "success",
    data: data
  });
});

export default handler; 