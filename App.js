// const heading = React.createElement("h1", {id:"heading"}, "Hello World");

const parent = React.createElement("div", {id:"parent"},
React.createElement("div", {id:"child"},
React.createElement("h1", {},"i'm an h1 tag")
));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
console.log(parent);
console.log(root);