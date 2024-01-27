import express from "express";
import {
//   getAllTravels,
//   createTravels,
//   updateTravels,
//   deleteTravels,
//   getTravelsLimit,
//   getOrderAndLimitTravels,
//   travelsWithPagination,
//   filterTravels,
getJoyasWithHateoas,
//   getTravelById,
} from "../../src_api_v1/controllers/joyasControllers.js";
const router = express.Router();

// router.get("/travels", getAllTravels);
// router.post("/travels", createTravels);
// router.put("/travels/:id", updateTravels);
// router.delete("/travels/:id", deleteTravels);
// router.get("/travels_with_limit", getTravelsLimit);
// router.get("/travels_with_limit_and_order", getOrderAndLimitTravels);
// router.get("/travels_with_pagination", travelsWithPagination);
// router.get("/filter_travels", filterTravels);
router.get("/joyas", getJoyasWithHateoas);
// router.get("/travels/:id", getTravelById);

export default router;