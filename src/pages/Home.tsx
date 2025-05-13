import { useState } from 'react'
import { popularDestinationsMock } from '../constants'
import { Link } from 'react-router'

function Home() {
  const [destination, setDestination] = useState('')
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')

  const popularDestinations = popularDestinationsMock

  const popularTours = [
    {
      id: 1,
      title: 'Guided Tour of Athens Historic Center',
      location: 'Athens, Greece',
      duration: '4 hours',
      rating: 4.8,
      reviews: 128,
      price: 65,
      image: '/images/athens.jpg'
    },
    {
      id: 2,
      title: 'Snorkeling Trip to Blue Lagoon',
      location: 'Bali, Indonesia',
      duration: '6 hours',
      rating: 4.7,
      reviews: 186,
      price: 89,
      image: '/images/bali.jpg'
    },
    {
      id: 3,
      title: 'Adventure Hiking Tour to Machu Picchu',
      location: 'Cusco, Peru',
      duration: '2 days',
      rating: 4.9,
      reviews: 214,
      price: 199,
      image: '/images/machupicchu.jpg'
    },
    {
      id: 4,
      title: 'Full-Day Grand Canyon National Park Tour',
      location: 'Las Vegas, USA',
      duration: '12 hours',
      rating: 4.6,
      reviews: 310,
      price: 149,
      image: '/images/grandcanyon.jpg'
    },
    {
      id: 5,
      title: 'Cherry Blossom Guided Walk',
      location: 'Kyoto, Japan',
      duration: '3 hours',
      rating: 4.8,
      reviews: 95,
      price: 55,
      image: '/images/kyoto.jpg'
    },
    {
      id: 6,
      title: 'Zipline Adventure in the Jungle',
      location: 'Chiang Mai, Thailand',
      duration: '4 hours',
      rating: 4.7,
      reviews: 167,
      price: 79,
      image: '/images/chiangmai.jpg'
    },
    {
      id: 7,
      title: 'Wine Tasting Tour in Tuscany',
      location: 'Florence, Italy',
      duration: '8 hours',
      rating: 4.9,
      reviews: 142,
      price: 120,
      image: '/images/tuscany.jpg'
    },
    {
      id: 8,
      title: 'Northern Lights Photography Tour',
      location: 'Reykjavik, Iceland',
      duration: '5 hours',
      rating: 4.8,
      reviews: 89,
      price: 110,
      image: '/images/iceland.jpg'
    }
  ]

  const popularThingsToDo = [
    { id: 1, image: '/images/beaches.jpg', title: 'Beautiful Beaches' },
    { id: 2, image: '/images/mountains.jpg', title: 'Mountain Climbing' },
    { id: 3, image: '/images/islands.jpg', title: 'Islands Exploring' },
    { id: 4, image: '/images/hiking.jpg', title: 'Hiking Trails' },
    { id: 5, image: '/images/city.jpg', title: 'City Tours' },
    { id: 6, image: '/images/diving.jpg', title: 'Scuba Diving' }
  ]

  const customerReviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      image: '/images/reviewer1.jpg',
      rating: 5,
      content: 'I had an amazing experience with these guys! The tour was well organized and our guide was knowledgeable and super friendly. Highly recommend!'
    },
    {
      id: 2,
      name: 'Michael Brown',
      image: '/images/reviewer2.jpg',
      rating: 5,
      content: 'One of the best travel experiences I\'ve had. Everything was seamless from booking to the actual tour. Will definitely book with them again!'
    }
  ]

  const travelArticles = [
    {
      id: 1,
      title: 'Discover the Hidden Gems of Bali',
      image: '/images/bali-article.jpg',
      date: 'May 10, 2023',
      author: 'Travel Expert'
    },
    {
      id: 2,
      title: 'European City Hopping: A Guide for Beginners',
      image: '/images/europe-article.jpg',
      date: 'Apr 22, 2023',
      author: 'Travel Expert'
    },
    {
      id: 3,
      title: 'Top 10 Best Destinations for Summer Vacation',
      image: '/images/summer-article.jpg',
      date: 'Mar 15, 2023',
      author: 'Travel Expert'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[500px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://easygds.s3.ap-southeast-1.amazonaws.com/production/trip-images/143902/HPSH_sri-lanka_sigiriya_group-pax_scenic-point.jpg)' }}>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Your world of joy</h1>
            <p className="text-xl mb-8 text-center">Explore top destinations and experiences</p>

            {/* Search Form */}
            <div className="w-full max-w-4xl bg-white rounded-lg p-4 shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    style={{ borderColor: '#5555', color: 'black' }}
                    type="text"
                    placeholder="Where to?"
                    className="w-full p-3 border rounded"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <input
                    style={{ borderColor: '#5555', color: 'black' }}
                    type="date"
                    placeholder="Check in"
                    className="w-full p-3 border rounded"
                    value={checkin}
                    onChange={(e) => setCheckin(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <input
                    style={{ borderColor: '#5555', color: 'black' }}
                    type="date"
                    placeholder="Check out"
                    className="w-full p-3 border rounded"
                    value={checkout}
                    onChange={(e) => setCheckout(e.target.value)}
                  />
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12">Why choose Tour?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-orange-100 p-4 mb-4">
              <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Quality Time</h3>
            <p className="text-gray-600">We help you find and book things to do that you'll remember for a lifetime.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-orange-100 p-4 mb-4">
              <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Verified authentic reviews</h3>
            <p className="text-gray-600">Real reviews from real travelers who have experienced our services.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-orange-100 p-4 mb-4">
              <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Safe & secure payments</h3>
            <p className="text-gray-600">Secure payment options and 24/7 support for worry-free booking.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-orange-100 p-4 mb-4">
              <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant confirmation</h3>
            <p className="text-gray-600">Receive immediate confirmation for most bookings and activities.</p>
          </div>
        </div>
      </div>

      {/* Trending Destinations */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Trending destinations</h2>
          <button className="text-blue-600 hover:underline">See all</button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {popularDestinations.map((destination) => (
            <Link prefetch='intent' to="/about" key={destination.destination._id}>
              <div key={destination.destination._id} className="group relative cursor-pointer">
                <div className="w-full h-32 rounded-lg overflow-hidden">
                  <img
                    src={destination.destination.image}
                    alt={destination.destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-2 text-sm font-medium">{destination.destination.name}</h3>
                <p className="text-xs text-gray-500">{destination.tours} tours</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Tours */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Find Popular Tours</h2>
          <button className="text-blue-600 hover:underline">See all</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularTours.slice(0, 8).map((tour) => (
            <div key={tour.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full p-1.5">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1 line-clamp-1">{tour.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{tour.location}</p>
                <div className="flex items-center mb-3">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span className="text-sm font-medium">{tour.rating}</span>
                  <span className="text-sm text-gray-500 ml-1">({tour.reviews} reviews)</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-500 text-sm">From</span>
                    <p className="text-lg font-semibold">${tour.price}</p>
                  </div>
                  <span className="text-sm text-gray-500">{tour.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promo Banner */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFF8F0] rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">Grab up to <span className="text-orange-500">30% off</span></h2>
              <h3 className="text-xl font-bold mb-4">on your favorite Destination</h3>
              <p className="text-gray-600 mb-6">Limited time offer - Book now and save!</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md">
                Learn more
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/promo-hot-air.jpg"
                alt="Hot air balloons"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Popular Things to Do */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Popular Things to do</h2>
          <button className="text-blue-600 hover:underline">See all</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularThingsToDo.map((item) => (
            <div key={item.id} className="relative rounded-lg overflow-hidden cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-white font-semibold text-xl">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Top Trending Tours */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Top Trending</h2>
          <button className="text-blue-600 hover:underline">See all</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularTours.slice(0, 4).map((tour) => (
            <div key={tour.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full p-1.5">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1 line-clamp-1">{tour.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{tour.location}</p>
                <div className="flex items-center mb-3">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span className="text-sm font-medium">{tour.rating}</span>
                  <span className="text-sm text-gray-500 ml-1">({tour.reviews} reviews)</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-500 text-sm">From</span>
                    <p className="text-lg font-semibold">${tour.price}</p>
                  </div>
                  <span className="text-sm text-gray-500">{tour.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12">Customer Reviews</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {customerReviews.map((review) => (
            <div key={review.id} className="max-w-md text-center">
              <div className="flex justify-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{review.content}"</p>
              <p className="font-semibold">{review.name}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-indigo-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get 5% off your 1st app booking</h2>
              <p className="text-indigo-200 mb-6">Subscribe for exclusive offers and updates</p>
              <div className="flex">
                <input
                  style={{ borderColor: '#5555', color: 'black' }}
                  type="email"
                  placeholder="Enter your email address"
                  className="px-4 py-3 rounded-l-md w-full focus:outline-none"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="md:w-1/3">
              <img
                src="/images/mobile-app.png"
                alt="Mobile App"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Travel Articles */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Travel Articles</h2>
          <button className="text-blue-600 hover:underline">See all</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {travelArticles.map((article) => (
            <div key={article.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-3">{article.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <p className="text-gray-600 mb-4">We're on a mission to help people discover the real value of travel — to inspire, to give more reasons, to make it easy — for you to go.</p>
              <p className="text-gray-600">Our company was founded back in 2005.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Features</a></li>
                <li><a href="#" className="hover:text-blue-600">Integrations</a></li>
                <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-600">Changelog</a></li>
                <li><a href="#" className="hover:text-blue-600">Docs</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600">Newsletter</a></li>
                <li><a href="#" className="hover:text-blue-600">Events</a></li>
                <li><a href="#" className="hover:text-blue-600">Help center</a></li>
                <li><a href="#" className="hover:text-blue-600">Tutorials</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">About us</a></li>
                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600">Press</a></li>
                <li><a href="#" className="hover:text-blue-600">News</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8">
            <p className="text-center text-gray-500 text-sm">
              © 2023 Travel Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home