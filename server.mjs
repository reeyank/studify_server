import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";
import appInfo from "./routes/app.mjs";
import rewardInfo from "./routes/reward.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", records);
app.use("/api/app", appInfo);
app.use("/api/reward", rewardInfo);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});