export default function DataTable({
    columns,
    data,
    renderActions,
}) {
    return (
        <div className="table-responsive">

            <table className="table table-hover align-middle mb-0">

                <thead className="table-light">

                    <tr>

                        {columns.map((column) => (
                           <th
                                key={column.key}
                                style={{ width: column.width }}
                            >
                                {column.label}
                            </th>
                        ))}

                        {renderActions && (
                            <th width="150">
                                Actions
                            </th>
                        )}

                    </tr>

                </thead>

                <tbody>

                    {data.length === 0 ? (

                        <tr>

                            <td
                                colSpan={
                                    columns.length +
                                    (renderActions ? 1 : 0)
                                }
                                className="text-center py-5"
                            >
                                No records found.
                            </td>

                        </tr>

                    ) : (

                        data.map((row) => (

                            <tr key={row.id}>

                                {columns.map((column) => (

                                    <td key={column.key}>

                                        {column.render
                                            ? column.render(row)
                                            : row[column.key]}

                                    </td>

                                ))}

                                {renderActions && (

                                    <td>

                                        {renderActions(row)}

                                    </td>

                                )}

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>
    );
}