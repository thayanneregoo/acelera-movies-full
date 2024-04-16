import React = require("react");

export default function Page({ params }: { params: { id: string } }) {
    return(
        <>
        <p>
            Movie: {params.id}
        </p>
        </>
    )
}