import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function NotFound() {
  return <div className="container page-intro not-found"><p className="eyebrow">404 / A WRONG TURN</p><h1>This page took<br /><em>a different route.</em></h1><p className="page-description">The page you’re looking for isn’t here. There’s plenty to explore back at the portfolio.</p><Link className="button button-primary" href="/">Back to home<ArrowUpRight size={17} /></Link></div>;
}
