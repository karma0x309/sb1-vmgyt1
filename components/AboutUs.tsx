import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Shield, Truck, HeadphonesIcon } from "lucide-react"

export default function AboutUs() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="ios-card hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-primary rounded-full p-3 mr-4">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              At iPhone Accessories Store, we're dedicated to enhancing your iPhone experience with cutting-edge, 
              high-quality accessories. Our curated selection combines style, functionality, and durability to 
              perfectly complement your device.
            </p>
          </CardContent>
        </Card>
        <Card className="ios-card hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-primary rounded-full p-3 mr-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Quality Assurance</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              We stand behind every product we offer. Our rigorous testing process and partnerships with trusted 
              manufacturers ensure that each accessory meets our high standards for performance and reliability.
            </p>
          </CardContent>
        </Card>
        <Card className="ios-card hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-primary rounded-full p-3 mr-4">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Swift Delivery</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              We know you're eager to receive your new iPhone accessories. That's why we offer fast, reliable 
              shipping options. Most orders are processed and shipped within 24 hours for quick delivery to your doorstep.
            </p>
          </CardContent>
        </Card>
        <Card className="ios-card hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-primary rounded-full p-3 mr-4">
                <HeadphonesIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Expert Support</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Our dedicated support team is here to assist you every step of the way. Whether you need help choosing 
              the perfect accessory or have questions about your order, we're committed to providing exceptional service.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}