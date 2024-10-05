const boxContents = [
  "MagSafe Induction Battery: A fast and wireless charge, ideal for everyday use without complications.",
  "Headphones (2nd Generation): Enjoy superior sound quality thanks to active noise cancellation.",
  "Transparent MagSafe Case: Elegant and robust protection, suitable for wireless charging.",
  "USB-C 12 W Charger: Powerful and compact, ideal for fast charging.",
  "Lightning Cable: Connect and sync your devices easily.",
  "MagSafe Induction Charging Cable: Convenient and wireless charging, always ready to use."
];

export default function WhatsInTheBox() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">What's in the Box?</h3>
      <ul className="list-disc pl-5 space-y-2">
        {boxContents.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}