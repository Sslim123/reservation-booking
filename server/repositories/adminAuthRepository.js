// repositories/adminAuthRepository.js

const  supabase  = require("../config/supabase");

const findStaffByEmail = async (email) => {

    const { data, error } = await supabase

        .from("staff")

        .select("*")

        .eq("email", email)

        .eq("active", true)

        .single();

    if (error) return null;

    return data;

};

module.exports = {

    findStaffByEmail

};