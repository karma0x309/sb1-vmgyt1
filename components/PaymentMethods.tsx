import Image from 'next/image';

const paymentMethods = [
  { name: 'Klarna', icon: '/icons/klarna.svg' },
  { name: 'PayPal', icon: '/icons/paypal.svg' },
  { name: 'Apple Pay', icon: '/icons/apple-pay.svg' },
  { name: 'Visa', icon: '/icons/visa.svg' },
  { name: 'Mastercard', icon: '/icons/mastercard.svg' },
];

export default function PaymentMethods() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
      <div className="flex flex-wrap gap-4">
        {paymentMethods.map((method) => (
          <div key={method.name} className="flex items-center">
            <Image
              src={method.icon}
              alt={`${method.name} icon`}
              width={40}
              height={24}
              className="mr-2"
            />
            <span className="text-sm text-gray-600 dark:text-gray-300">{method.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}