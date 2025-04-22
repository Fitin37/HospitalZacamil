import express from "express";
import quotesCon from "../controllers/quotesControllers.js";


const router= express.Router()

router
.route("/")
.get(quotesCon.getQuotes)
.post(quotesCon.postQuotes);

router
.route("/:id")
.delete(quotesCon.deleteQuotes)
.put(quotesCon.putQuotes);

export default router;