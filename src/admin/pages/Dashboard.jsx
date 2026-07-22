import PageHeader from "../components/PageHeader";

export default function Dashboard(){

    return(

        <>

        <PageHeader
            title="Dashboard"
            subtitle="Welcome back!"
        />

            <div className="row g-4">

                <div className="col-lg-3 col-md-6">

                    <div className="card shadow-sm">

                        <div className="card-body">

                            <h5>Total Artworks</h5>

                            <h2>12</h2>

                        </div>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6">

                    <div className="card shadow-sm">

                        <div className="card-body">

                            <h5>Categories</h5>

                            <h2>4</h2>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}