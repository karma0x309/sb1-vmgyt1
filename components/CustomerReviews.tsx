import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Alice Johnson",
    avatar: "AJ",
    review: "Great selection of iPhone accessories. The case I bought is perfect!",
    rating: 5,
  },
  {
    name: "Bob Smith",
    avatar: "BS",
    review: "Fast shipping and excellent customer service. Will buy again!",
    rating: 4,
  },
  {
    name: "Carol White",
    avatar: "CW",
    review: "The screen protector was easy to apply and works great.",
    rating: 5,
  },
]

export default function CustomerReviews() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Customer Reviews</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${review.avatar}`} />
                  <AvatarFallback>{review.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{review.review}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}