    import React from "react";
    import ReactDOM from "react-dom/client";
    const head = React.createElement("div",{id: "title" }
    ,"nargis uth jao kam chor!!!");

    const heading2 = React.createElement("h2",{
        id:"title"
    },"heading2 for parcel");

    const container=React.createElement ("div",{
        id:"container"
    }, [head,heading2])

    console.log(head);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(container);
