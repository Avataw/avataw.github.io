export default interface Segment {
  time: {
    from: string;
    to?: string;
  };
  title: string;
  description: string;
}