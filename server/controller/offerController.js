const offerService = require("../services/offerService");

/**
 * Get all offers (Admin)
 */
const getAllOffers = async (req, res) => {

    try {

        const offers = await offerService.getAllOffers();

        res.status(200).json({
            success: true,
            data: offers
        });

    } catch (error) {

        console.error("Error fetching offers:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch offers."
        });

    }

};

/**
 * Get active offers (Public)
 */
const getActiveOffers = async (req, res) => {

    try {

        const offers = await offerService.getActiveOffers();

        res.status(200).json({
            success: true,
            data: offers
        });

    } catch (error) {

        console.error("Error fetching active offers:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch active offers."
        });

    }

};

/**
 * Get featured offers
 */
const getFeaturedOffers = async (req, res) => {

    try {

        const offers = await offerService.getFeaturedOffers();

        res.status(200).json({
            success: true,
            data: offers
        });

    } catch (error) {

        console.error("Error fetching featured offers:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch featured offers."
        });

    }

};

/**
 * Get offer by ID
 */
const getOfferById = async (req, res) => {

    try {

        const { id } = req.params;

        const offer = await offerService.getOfferById(id);

        if (!offer) {

            return res.status(404).json({
                success: false,
                message: "Offer not found."
            });

        }

        res.status(200).json({
            success: true,
            data: offer
        });

    } catch (error) {

        console.error("Error fetching offer:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch offer."
        });

    }

};

/**
 * Create offer
 */
const createOffer = async (req, res) => {

    try {

        const offer = await offerService.createOffer(req.body);

        res.status(201).json({
            success: true,
            message: "Offer created successfully.",
            data: offer
        });

    } catch (error) {

        console.error("Error creating offer:", error);

        res.status(500).json({
            success: false,
            message: "Failed to create offer."
        });

    }

};

/**
 * Update offer
 */
const updateOffer = async (req, res) => {

    try {

        const { id } = req.params;

        const offer = await offerService.updateOffer(id, req.body);

        res.status(200).json({
            success: true,
            message: "Offer updated successfully.",
            data: offer
        });

    } catch (error) {

        console.error("Error updating offer:", error);

        res.status(500).json({
            success: false,
            message: "Failed to update offer."
        });

    }

};

/**
 * Delete offer
 */
const deleteOffer = async (req, res) => {

    try {

        const { id } = req.params;

        const deletedOffer = await offerService.deleteOffer(id);

        if (!deletedOffer) {

            return res.status(404).json({
                success: false,
                message: "Offer not found."
            });

        }

        res.status(200).json({
            success: true,
            message: "Offer deleted successfully."
        });

    } catch (error) {

        console.error("Error deleting offer:", error);

        res.status(500).json({
            success: false,
            message: "Failed to delete offer."
        });

    }

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