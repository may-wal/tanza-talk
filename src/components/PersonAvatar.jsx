import { personPhotos } from "../data/content";
import Monogram from "./Monogram";

// ---------------------------------------------------------------------------
// PersonAvatar
//
// Every place on the site that shows a named person — talent grid, past
// guests, event lineup, episode art, the founder card — renders through
// this instead of calling Monogram directly. It looks the name up in
// data/content.js's `personPhotos` map: a real photo if one's on file,
// otherwise the Monogram initials tile.
//
// This means photos arrive one place at a time (add a file, add a line to
// `personPhotos`) and show up everywhere that person is already listed,
// rather than needing every call site touched as photos come in.
// ---------------------------------------------------------------------------
export default function PersonAvatar({ name, className = "", label }) {
  const photo = personPhotos[name];

  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        className={`object-cover ${className}`}
      />
    );
  }

  return <Monogram name={name} className={className} label={label} />;
}
