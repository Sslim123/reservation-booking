const router = require("express").Router();

const offerController = require("../controller/offerController");


router.get("/offers", offerController.getActiveOffers);

router.get("/offers/featured", offerController.getFeaturedOffers);

router.get("/offers/:id", offerController.getOfferById);

// Admin Routes

router.get("/admin/offers", offerController.getAllOffers);

router.post("/admin/offers", offerController.createOffer);

router.put("/admin/offers/:id", offerController.updateOffer);

router.delete("/admin/offers/:id", offerController.deleteOffer);

module.exports = router;