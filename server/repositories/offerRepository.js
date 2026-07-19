const supabase = require("../config/supabase");

/**
 * Get all offers (Admin)
 */
const getAllOffers = async () => {

    const { data, error } = await supabase
        .from("offers")
        .select("*")
        .order("display_order", { ascending: true })
        .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
};

/**
 * Get active offers (Public Website)
 */
const getActiveOffers = async () => {

    const today = new Date().toISOString().split("T")[0];

    const { data, error } = await supabase
        .from("offers")
        .select("*")
        .eq("is_active", true)
        .lte("valid_from", today)
        .gte("valid_until", today)
        .order("is_featured", { ascending: false })
        .order("display_order", { ascending: true });

    if (error) throw error;

    return data;
};

/**
 * Get featured offers
 */
const getFeaturedOffers = async () => {

    const today = new Date().toISOString().split("T")[0];

    const { data, error } = await supabase
        .from("offers")
        .select("*")
        .eq("is_active", true)
        .eq("is_featured", true)
        .lte("valid_from", today)
        .gte("valid_until", today)
        .order("display_order", { ascending: true });

    if (error) throw error;

    return data;
};

/**
 * Get offer by ID
 */
const getOfferById = async (id) => {

    const { data, error } = await supabase
        .from("offers")
        .select("*")
        .eq("id", id)
        .single();

    if (error) return null;

    return data;
};

/**
 * Create offer
 */
const createOffer = async (offerData) => {

    const { data, error } = await supabase
        .from("offers")
        .insert([offerData])
        .select()
        .single();

    if (error) throw error;

    return data;
};

/**
 * Update offer
 */
const updateOffer = async (id, offerData) => {

    const { data, error } = await supabase
        .from("offers")
        .update(offerData)
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;

    return data;
};

/**
 * Delete offer
 */
const deleteOffer = async (id) => {

    const { data, error } = await supabase
        .from("offers")
        .delete()
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;

    return data;
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