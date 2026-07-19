const PaymentInformation = ({
    bookingData,
    setBookingData,
    isEnglish
}) => {

    const handleChange = (e) => {

        const { name, value } = e.target;

        setBookingData(prev => ({

            ...prev,

            [name]: value

        }));

    };

    return (

        <div className="card mt-4 shadow-sm">

            <div className="card-header bg-dark text-white">

                <strong>

                    {

                        isEnglish

                            ? "Payment Information"

                            : "معلومات الدفع"

                    }

                </strong>

            </div>

            <div className="card-body">

                {/* Payment Method */}

                <div className="mb-4">

                    <label className="form-label fw-bold">

                        {

                            isEnglish

                                ? "Payment Method"

                                : "طريقة الدفع"

                        }

                    </label>

                    <select

                        className="form-select"

                        name="payment_method"

                        value={bookingData?.payment_method || "PAY_AT_HOTEL"}

                        onChange={handleChange}

                    >

                        <option value="PAY_AT_HOTEL">

                            {

                                isEnglish

                                    ? "Pay at Hotel"

                                    : "الدفع عند الفندق"

                            }

                        </option>

                        <option value="BANK_TRANSFER">

                            {

                                isEnglish

                                    ? "Bank Transfer"

                                    : "تحويل بنكي"

                            }

                        </option>

                        <option value="CARD">

                            {

                                isEnglish

                                    ? "Card at Reception"

                                    : "بطاقة عند الاستقبال"

                            }

                        </option>

                        <option value="MOBILE_MONEY">

                            {

                                isEnglish

                                    ? "Mobile Money"

                                    : "الدفع عبر الهاتف"

                            }

                        </option>

                        <option value="OTHER">

                            {

                                isEnglish

                                    ? "Other"

                                    : "أخرى"

                            }

                        </option>

                    </select>

                </div>

                {/* Reference */}

                <div className="mb-4">

                    <label className="form-label">

                        {

                            isEnglish

                                ? "Reference Number (Optional)"

                                : "رقم المرجع (اختياري)"

                        }

                    </label>

                    <input

                        type="text"

                        className="form-control"

                        name="reference_number"

                        value={bookingData?.reference_number || ""}

                        onChange={handleChange}

                        placeholder={

                            isEnglish

                                ? "Bank transfer / Mobile money reference"

                                : "رقم التحويل أو العملية"

                        }

                    />

                </div>

                {/* Payment Notes */}

                <div className="mb-4">

                    <label className="form-label">

                        {

                            isEnglish

                                ? "Payment Notes (Optional)"

                                : "ملاحظات الدفع (اختياري)"

                        }

                    </label>

                    <textarea

                        rows="3"

                        className="form-control"

                        name="payment_notes"

                        value={bookingData?.payment_notes || ""}

                        onChange={handleChange}

                        placeholder={

                            isEnglish

                                ? "Additional payment information..."

                                : "أي معلومات إضافية..."

                        }

                    />

                </div>

                {/* Information Alert */}

                <div className="alert alert-info mb-0">

                    {

                        isEnglish

                            ? "Payment is not collected online. Your selected payment method will be recorded with your reservation. Reception staff will complete the payment process during check-in."

                            : "لن يتم تحصيل أي مبلغ عبر الموقع. سيتم حفظ طريقة الدفع المختارة مع الحجز، وسيقوم موظف الاستقبال بإتمام عملية الدفع عند تسجيل الوصول."

                    }

                </div>

            </div>

        </div>

    );

};

export default PaymentInformation;