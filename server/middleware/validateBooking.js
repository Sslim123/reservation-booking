const { z } = require("zod");

const bookingSchema = z.object({
  first_name: z.string().min(2, "First name is required"),
  last_name: z.string().min(2, "Last name is required"),

  email: z.string().email(),

  phone: z.string().min(8),

  adults: z.number().int().min(1),

  children: z.number().int().min(0),

  rooms_requested: z.number().int().min(1),

  check_in: z.string(),

  check_out: z.string(),

  package_id: z.number().int().positive(),

room_id: z.number().int().positive(),

  special_requests: z.string().optional()
});

module.exports = (req, res, next) => {

  const result = bookingSchema.safeParse(req.body);

  if (!result.success) {

    return res.status(400).json({

      success: false,

      errors: result.error.issues

    });

  }

  next();

};