export default function PageHeader({
    title,
    subtitle,
    buttonText,
    onButtonClick
}) {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">

            <div>
                <h2 className="mb-1">{title}</h2>

                {subtitle && (
                    <p className="text-muted mb-0">
                        {subtitle}
                    </p>
                )}
            </div>

            {buttonText && (
                <button
                    className="btn btn-primary"
                    onClick={onButtonClick}
                >
                    {buttonText}
                </button>
            )}
        </div>
    );
}