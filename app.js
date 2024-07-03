/*
<div id="parent">
    <div id="child1">
        <h1>This is from h1 tag of child 1</h1>
        <h2>This is from h2 tag of child 1</h2>
    </div>
    
    <div id="child2">
        <h1>This is from h1 tag of child 2</h1>
        <h2>This is from h2 tag of child 2</h2>
    </div>
    
</div>

 */

// const heading = React.createElement("h1",{id:"heading"},"Hellow world from the react js1!");\

 const heading = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},[React.createElement("h1",{id:"heading"},"This is from h1 tag of child 1"), React.createElement("h2",{id:"heading"},"This is from h2 tag of child 1")]), React.createElement("div",{id:"child2"},[React.createElement("h1",{id:"heading"},"This is from h1 tag of child 2"), React.createElement("h2",{id:"heading"},"This is from h1 tag of child 2")])]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);