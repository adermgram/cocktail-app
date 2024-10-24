import express from "express";;
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", async(req,res)=>{
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    res.json(result.data.drinks[0]);
})

app.listen(3000, (req,res)=>{
    console.log("running");
})