import React from "react";
import { Helmet } from "react-helmet-async";
import configs from "../configs";

interface TitleProps {
    children: React.ReactNode
}

const PageTitle: React.FC<TitleProps> = ( {children} ) => {
    return (
        <Helmet>
            <title>{children} {configs.siteDelimiter} {configs.siteTitle}</title>
        </Helmet>
    )
}

export default PageTitle;