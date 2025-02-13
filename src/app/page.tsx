import Link from "next/link";

export default function Home() {
  const message = process.env["MESSAGE"] || "Hello!";
  return (
    <div>
      Hello World!
    </div>
  );
}
