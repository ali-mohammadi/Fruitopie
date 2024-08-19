import React from "react";
import PageTitle from "../../hocs/PageTitle";

const Notfound: React.FC = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <PageTitle>Page Not Found</PageTitle>
            <div>Page not found!</div>
        </div>
    );
}

export default Notfound;