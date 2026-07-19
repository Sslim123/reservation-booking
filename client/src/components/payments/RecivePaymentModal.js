// import { useState } from "react";

// const ReceivePaymentModal = ({

//     reservation,

//     show,

//     onClose,

//     onSuccess,

//     isEnglish

// }) => {

//     const [amount, setAmount] = useState(0);
//     const [paymentMethod, setPaymentMethod] = useState("Cash");
//     const [referenceNumber, setReferenceNumber] = useState("");
//     const [notes, setNotes] = useState("");
//     const [saving, setSaving] = useState(false);

//     if (!show) return null;
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             setSaving(true);
//             const token = localStorage.getItem("token");
//             const response = await fetch(
//                 "http://localhost:5000/api/payments",

//                 {

//                     method: "POST",

//                     headers: {

//                         "Content-Type": "application/json",

//                         Authorization: `Bearer ${token}`

//                     },


//                     body: JSON.stringify({

//                         booking_id: reservation.id,

//                         amount: Number(amount),

//                         payment_method: paymentMethod,

//                         reference_number: referenceNumber,

//                         notes

//                     })

//                 }

//             );

//             const data = await response.json();

//             if (!data.success) {
//                 throw new Error(data.message);
//             }

//             alert(
//                 isEnglish ? "Payment recorded successfully." : "تم تسجيل الدفعة بنجاح.");

//             onSuccess();
//             onClose();
//         }
//         catch (error) {
//             alert(error.message);
//         }
//         finally { setSaving(false); }

//     };
//     useEffect(() => {

//         if (reservation) {

//             setAmount(reservation.total_amount || 0);

//         }

//     }, [reservation]);
//     return (

//         <div className="modal d-block">

//             <div className="modal-dialog modal-lg">

//                 <div className="modal-content">

//                     <div className="modal-header bg-success text-white">

//                         <h5 className="modal-title">

//                             {

//                                 isEnglish

//                                     ? "Receive Payment"

//                                     : "استلام دفعة"

//                             }

//                         </h5>

//                         <button

//                             className="btn-close btn-close-white"

//                             onClick={onClose}

//                         />

//                     </div>

//                     <form onSubmit={handleSubmit}>

//                         <div className="modal-body">

//                             {/* Booking Information */}

//                             <div className="row mb-3">

//                                 <div className="col-md-6">

//                                     <strong>

//                                         {

//                                             isEnglish

//                                                 ? "Booking"

//                                                 : "رقم الحجز"

//                                         }

//                                     </strong>

//                                     <div>

//                                         {reservation.booking_reference}

//                                     </div>

//                                 </div>

//                                 <div className="col-md-6">

//                                     <strong>

//                                         {

//                                             isEnglish

//                                                 ? "Guest"

//                                                 : "النزيل"

//                                         }

//                                     </strong>

//                                     <div>

//                                         {reservation.first_name}{" "}

//                                         {reservation.last_name}

//                                     </div>

//                                 </div>

//                             </div>

//                             <div className="row mb-3">

//                                 <div className="col-md-6">

//                                     <strong>

//                                         {

//                                             isEnglish

//                                                 ? "Total Amount"

//                                                 : "إجمالي المبلغ"

//                                         }

//                                     </strong>

//                                     <div>

//                                         £{reservation.total_amount}

//                                     </div>

//                                 </div>

//                             </div>

//                             <hr />

//                             <div className="mb-3">

//                                 <label className="form-label">

//                                     {

//                                         isEnglish

//                                             ? "Amount Received"

//                                             : "المبلغ المستلم"

//                                     }

//                                 </label>

//                                 <input

//                                     type="number"

//                                     className="form-control"

//                                     value={amount}

//                                     onChange={(e) =>

//                                         setAmount(e.target.value)

//                                     }

//                                     required

//                                 />

//                             </div>

//                             <div className="mb-3">

//                                 <label className="form-label">

//                                     {

//                                         isEnglish

//                                             ? "Payment Method"

//                                             : "طريقة الدفع"

//                                     }

//                                 </label>

//                                 <select

//                                     className="form-select"

//                                     value={paymentMethod}

//                                     onChange={(e) =>

//                                         setPaymentMethod(e.target.value)

//                                     }

//                                 >

//                                     <option>Cash</option>

//                                     <option>Card</option>

//                                     <option>Bank Transfer</option>

//                                     <option>Mobile Money</option>

//                                     <option>Other</option>

//                                 </select>

//                             </div>

//                             <div className="mb-3">

//                                 <label className="form-label">

//                                     {

//                                         isEnglish

//                                             ? "Reference Number"

//                                             : "رقم المرجع"

//                                     }

//                                 </label>

//                                 <input

//                                     className="form-control"

//                                     value={referenceNumber}

//                                     onChange={(e) =>

//                                         setReferenceNumber(e.target.value)

//                                     }

//                                 />

//                             </div>

//                             <div className="mb-3">

//                                 <label className="form-label">

//                                     {

//                                         isEnglish

//                                             ? "Notes"

//                                             : "ملاحظات"

//                                     }

//                                 </label>

//                                 <textarea

//                                     rows="3"

//                                     className="form-control"

//                                     value={notes}

//                                     onChange={(e) =>

//                                         setNotes(e.target.value)

//                                     }

//                                 />

//                             </div>

//                         </div>

//                         <div className="modal-footer">
//                             <button
//                                 className="btn btn-secondary"
//                                 type="button"
//                                 onClick={onClose}
//                             >
//                                 {

//                                     isEnglish ? "Cancel" : "إلغاء"
//                                 }
//                             </button>

//                             <button
//                                 className="btn btn-success"
//                                 disabled={saving}
//                             >
//                                 {

//                                     saving ? (isEnglish ? "Saving..." : "جاري الحفظ...") : (isEnglish ? "Save Payment" : "حفظ الدفعة")
//                                 }

//                             </button>

//                         </div>

//                     </form>

//                 </div>

//             </div>

//         </div>

//     );

// };

// export default ReceivePaymentModal;