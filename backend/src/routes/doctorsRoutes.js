import exprees from "express"
import docCon from "../controllers/doctorsControllers.js";

const router= exprees.Router();

router
.route("/")
.post(docCon.postDoc)
.get(docCon.getDoc);

router
.route("/:id")
.delete(docCon.deleteDoc)
.put(docCon.putDoc);


export default router;



