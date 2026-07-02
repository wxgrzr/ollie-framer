import React from "react";
import ContentPage from "../components/ContentPage";

const offerings = [
  { title: "One team", description: "Founders on every engagement" },
  { title: "One brief", description: "We shape the scope with you" },
  { title: "One voice", description: "No account manager telephone" },
  { title: "One outcome", description: "Systems your team can run" },
];

const Why = () => (
  <ContentPage
    eyebrow="05 — REASONS"
    lede="Because a brand should be a compass, not a coat of paint. Here's what working with us actually feels like."
    marqueeTitle="values"
    offerings={offerings}
  />
);

export default Why;
