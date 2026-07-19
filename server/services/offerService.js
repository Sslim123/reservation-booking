const offerRepository = require("../repositories/offerRepository");

/**
 * Calculate discounted price
 */
const calculateDiscountedPrice = (price, discountPercentage) => {

    if (!discountPercentage || discountPercentage <= 0) {
        return Number(price);
    }

    const discountedPrice =
        Number(price) -
        (Number(price) * Number(discountPercentage)) / 100;

    return Number(discountedPrice.toFixed(2));
};

/**
 * Add calculated fields to an offer
 */
const formatOffer = (offer) => {

    return {

        ...offer,

        discounted_price: calculateDiscountedPrice(
            offer.original_price,
            offer.discount_percentage
        )

    };

};

/**
 * Get all offers (Admin)
 */
const getAllOffers = async () => {

    const offers = await offerRepository.getAllOffers();

    return offers.map(formatOffer);

};

/**
 * Get active offers (Public)
 */
const getActiveOffers = async () => {

    const offers = await offerRepository.getActiveOffers();

    return offers.map(formatOffer);

};

/**
 * Get featured offers
 */
const getFeaturedOffers = async () => {

    const offers = await offerRepository.getFeaturedOffers();

    return offers.map(formatOffer);

};

/**
 * Get offer by ID
 */
const getOfferById = async (id) => {

    const offer = await offerRepository.getOfferById(id);

    if (!offer) {
        return null;
    }

    return formatOffer(offer);

};

/**
 * Create offer
 */
const createOffer = async (offerData) => {

    const offer = await offerRepository.createOffer(offerData);

    return formatOffer(offer);

};

/**
 * Update offer
 */
const updateOffer = async (id, offerData) => {

    const offer = await offerRepository.updateOffer(id, offerData);

    return formatOffer(offer);

};

/**
 * Delete offer
 */
const deleteOffer = async (id) => {

    return await offerRepository.deleteOffer(id);

};

module.exports = {

    getAllOffers,
    getActiveOffers,
    getFeaturedOffers,
    getOfferById,
    createOffer,
    updateOffer,
    deleteOffer

};