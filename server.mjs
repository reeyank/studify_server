import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import userInfo from "./routes/userInfo.mjs";
import rewardInfo from "./routes/rewardInfo.mjs"
import boosterInfo from "./routes/boosterInfo.mjs"
import hoursInfo from "./routes/hoursInfo.mjs"

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userInfo);
app.use("/api/reward", rewardInfo);
app.use("/api/booster", boosterInfo);
app.use("/api/hours", hoursInfo);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});