import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TreeView from "./components/TreeView";

const TreeViewData = [
  {
    key: "0",
    label: "Phones",
    title: "Phones",
    children: [
      {
        key: "0-0",
        label: "Apple",
        title: "Apple",
        children: [
          {
            key: "0-1-1",
            label: "iphone 6",
            title: "iphone 6",
            children: [
              {
                key: "0-1-1-1",
                label: "128GB",
                title: "128GB",
                quantity: "200+ devices",
              },
              {
                key: "0-1-1-2",
                label: "256GB",
                title: "256GB",
                quantity: "100+ devices",
              },
              {
                key: "0-1-1-3",
                label: "512GB",
                title: "512GB",
                quantity: "50+ devices",
              },
            ],
          },
          {
            key: "0-1-2",
            label: "iphone 7",
            title: "iphone 7",
            quantity: "200+ devices",
            children: [
              {
                key: "0-1-2-1",
                label: "128GB",
                title: "128GB",
              },
              {
                key: "0-1-2-2",
                label: "256GB",
                title: "256GB",
              },
              {
                key: "0-1-2-3",
                label: "512GB",
                title: "512GB",
              },
            ],
          },
          {
            key: "0-1-3",
            label: "iphone 8",
            title: "iphone 8",
            children: [
              {
                key: "0-1-3-1",
                label: "128GB",
                title: "128GB",
              },
              {
                key: "0-1-3-2",
                label: "256GB",
                title: "256GB",
              },
              {
                key: "0-1-3-3",
                label: "512GB",
                title: "512GB",
              },
            ],
          },
          {
            key: "0-1-4",
            label: "iphone X",
            title: "iphone X",
            children: [
              {
                key: "0-1-4-1",
                label: "128GB",
                title: "128GB",
              },
              {
                key: "0-1-4-2",
                label: "256GB",
                title: "256GB",
              },
              {
                key: "0-1-4-3",
                label: "512GB",
                title: "512GB",
              },
            ],
          },
        ],
      },
      {
        key: "0-1",
        label: "Samsung",
        title: "Samsung",
        quantity: "500+ Galaxy S21 and 2.5k+ other models",
        children: [],
      },
    ],
  },
  {
    key: "1",
    label: "Computers",
    title: "Computers",
    quantity: "200+ mac books, 500+ PCs..",
    children: [],
  },
  {
    key: "2",
    label: "Watches",
    title: "Watches",
    quantity: "150+ apple watches, 200+ Samsung watches",
    children: [],
  },
  {
    key: "3",
    label: "TVs",
    title: "TVs",
    quantity: "20+ Samsung TVs, 50+ Apple TVs",
    children: [],
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TreeView data={TreeViewData} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
