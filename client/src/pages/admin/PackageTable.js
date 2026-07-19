const PackageTable = ({ packages, isEnglish }) => {

    return (

        <div className="card shadow-sm mb-4">

            <div className="card-header bg-dark text-white fw-bold">

                {

                    isEnglish

                        ? "Package Statistics"

                        : "إحصائيات الباقات"

                }

            </div>

            <div className="card-body p-0">

                <table className="table table-hover table-striped mb-0">

                    <thead className="table-dark">

                        <tr>

                            <th>

                                {

                                    isEnglish

                                        ? "Package"

                                        : "الباقة"

                                }

                            </th>

                            <th className="text-center">

                                {

                                    isEnglish

                                        ? "Bookings"

                                        : "عدد الحجوزات"

                                }

                            </th>

                        </tr>

                    </thead>
                    <tbody>

                        {

                            packages.map((pkg, index) => (

                                <tr key={pkg.id}>

                                    <td>{index + 1}</td>

                                    <td>

                                        {

                                            isEnglish

                                                ?

                                                pkg.name_en

                                                :

                                                pkg.name_ar

                                        }

                                    </td>

                                    <td>

                                        <span className="badge bg-primary">

                                            {pkg.bookings}

                                        </span>

                                    </td>

                                </tr>

                            ))

                        }

                        <tr className="table-light fw-bold">

                            <td></td>

                            <td>

                                {

                                    isEnglish

                                        ?

                                        "Total"

                                        :

                                        "الإجمالي"

                                }

                            </td>

                            <td>

                                {

                                    packages.reduce(

                                        (sum, pkg) => sum + pkg.bookings,

                                        0

                                    )

                                }

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default PackageTable;