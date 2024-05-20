
import Segment from "../types/Segment";
import formatDate from "./formatDate";

export default function createSegment (time: {from: Date,  to?: Date | "now"}, title: string, description: string,) : Segment {

  return ({
    time: {
      from: formatDate(time.from),
      to: time.to ? formatDate(time.to) : undefined
    },
    title,
    description
  })
}
