const { express, mongoose} = require("./npm");
const { db, prod, routes, config } = require("./startup");
const app = express();
db(mongoose, 'mongodb+srv://RRR:<password>@cluster0.imykb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
prod(app);
routes(app);
config();

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`${port}-portni eshitishni boshladim...`);
});
module.exports = server;
