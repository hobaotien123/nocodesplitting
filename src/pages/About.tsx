import React, {Suspense} from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import ImageCarousel from '../components/Carousel';

import { popularDestinationsMock } from '../constants';

function TourDetail() {
  const { id } = useParams<{ id: string }>();
  const [adultCount, setAdultCount] = useState(2);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [addPickup, setAddPickup] = useState(false);
  const [addLunch, setAddLunch] = useState(false);
  
  // Mock data for this tour
  const tour = {
    id: id,
    title: 'Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour',
    rating: 4.5,
    reviews: 1284,
    location: 'Phuket, Thailand',
    duration: '8 hours',
    groupSize: '15 people',
    ageRange: '0-99 yrs',
    languages: ['English', 'Thai'],
    basePrice: 85.00,
    images: [
      popularDestinationsMock?.[25]?.destination?.image,
      popularDestinationsMock?.[11]?.destination?.image,
      popularDestinationsMock?.[12]?.destination?.image,
      popularDestinationsMock?.[30]?.destination?.image,
    ],
    overview: 'The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip makes it easier by taking you to the islands in just one day. Swim over the reef at Maya Bay, made famous by the movie "The Beach," have lunch at Phi Phi Don, snorkel at Monkey Beach, and visit Khai Island. Boat transfers, snorkeling equipment, lunch, snacks, and pickup and dropoff at select hotels included.',
    highlights: [
      'Experience beautiful sceneries in the stunning Phi Phi islands',
      'Phi Phi Islands day trip by speedboat from Phuket',
      'Enjoy snorkeling and swim with tons of colorful tropical fish',
      'Have the comfort of a tour limited to 15 passengers',
      'Catch a glimpse of the wild monkeys around Monkey Beach'
    ],
    included: [
      'Round-trip hotel transfers (Phuket area)',
      'Buffet lunch',
      'Air-conditioned vehicle',
      'Hotel pickup and drop-off at selected hotels',
      'Snorkel equipment',
      'Professional tour guide',
      'Soft drinks',
      'Tour Guide'
    ]
  };

  // Calculate prices
  const adultUnitPrice = 85.00;
  const childUnitPrice = 65.00;
  const infantUnitPrice = 25.00;
  const pickupPrice = 8.00;
  const lunchPrice = 15.00;

  const adultTotal = adultCount * adultUnitPrice;
  const childTotal = childCount * childUnitPrice;
  const infantTotal = infantCount * infantUnitPrice;
  const extrasTotal = (addPickup ? pickupPrice : 0) + (addLunch ? lunchPrice : 0);
  
  const totalPrice = adultTotal + childTotal + infantTotal + extrasTotal;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header and Navigation */}
      <header className="mb-6">
        <div className="flex items-center mb-4">
          <img src="/images/viatours-logo.svg" alt="Viatours Logo" className="h-8" />
          <div className="ml-auto space-x-4">
            <a href="#" className="text-gray-600 hover:text-orange-500">Destinations</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Activities</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">USD</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Sign in</a>
            <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded-md">Help</a>
          </div>
        </div>
        
        <nav className="flex text-sm text-gray-500 mb-2">
          <a href="/" className="hover:text-orange-500">Home</a>
          <span className="mx-2">&gt;</span>
          <a href="/tours" className="hover:text-orange-500">Tours</a>
          <span className="mx-2">&gt;</span>
          <a href="/tours/phuket" className="hover:text-orange-500">Phuket</a>
        </nav>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-orange-500">OUTDOOR ACTIVITIES</span>
            <span className="mx-2">•</span>
            <span>TOUR LASTS ABOUT 8 HOURS</span>
          </div>
          <div>
            <span className="text-xs">FREE CANCELLATION</span>
            <span className="mx-2">•</span>
            <span className="text-xs">MOBILE TICKET</span>
            <span className="mx-2">•</span>
            <span className="text-xs">DURATION: 8h</span>
          </div>
        </div>
      </header>
      
      {/* Tour Title */}
      <h1 className="text-3xl font-bold mb-6">{tour.title}</h1>
      
      {/* Rating and Location */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center">
          <span className="bg-blue-600 text-white py-1 px-2 rounded-md font-semibold text-sm">{tour.rating}</span>
          <span className="text-sm text-gray-500 ml-2">({tour.reviews})</span>
        </div>
        <div className="text-sm">
          <span>{tour.location}</span>
          <span className="mx-2">•</span>
          <span>{tour.duration}</span>
        </div>
        
        <div className="ml-auto">
          <button className="mr-4">Share</button>
          <button>Wishlist</button>
        </div>
      </div>
      
      {/* Image Gallery */}
      <div className="grid grid-cols-3 gap-2 mb-8">
        <div className="col-span-2 row-span-2">
          <img 
            src={tour.images[0]} 
            alt="Tour main" 
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div>
          <img 
            src={tour.images[1]} 
            alt="Tour image" 
            className="w-full h-full object-cover rounded-tr-lg"
          />
        </div>
        {/* <div className="relative">
          <img 
            src={tour.images[2]} 
            alt="Tour image" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white bg-opacity-70 flex items-center justify-center">
              <span className="text-xl">🔍</span>
            </div>
          </div>
        </div> */}
        <div className="relative">
          <img 
            src={tour.images[3]} 
            alt="Tour image" 
            className="w-full h-full object-cover rounded-br-lg"
          />
          <div  className="absolute px-5 py-5 inset-0 bg-opacity-40 flex items-end justify-end">
            <button onClick={() => setIsOpen(true)} className="bg-white text-gray-800 py-1 px-3 rounded text-sm">
              See all photos
            </button>
            {isOpen ? 
            <ImageCarousel isOpen={isOpen} onClose={() => setIsOpen(false)} images={popularDestinationsMock.slice(0, 10)?.map((i) => i.destination?.image)} />
           : null}
          </div>
        </div>
      </div>
      
      {/* Tour Info Grid */}
      <div className="grid grid-cols-3 gap-8">
        {/* Left Side - Tour Information */}
        <div className="col-span-2">
          {/* Tour Features */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div>
              <p className="text-gray-500 text-sm">Duration</p>
              <p className="font-semibold">{tour.duration}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Group Size</p>
              <p className="font-semibold">{tour.groupSize}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Ages</p>
              <p className="font-semibold">{tour.ageRange}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Languages</p>
              <p className="font-semibold">{tour.languages.join(', ')}</p>
            </div>
          </div>
          
          {/* Tour Overview */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Tour Overview</h2>
            <p className="text-gray-700 mb-4">{tour.overview}</p>
          </section>
          
          {/* Tour Highlights */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Tour Highlights</h2>
            <ul className="space-y-2">
              {tour.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
          
          {/* What's Included */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">What's included</h2>
            <div className="grid grid-cols-2 gap-4">
              {tour.included.map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
        
        {/* Right Side - Booking Form */}
        <div className="border rounded-lg p-6 shadow-sm h-fit">
          <p className="text-gray-500">From</p>
          <p className="text-2xl font-bold mb-4">${tour.basePrice.toFixed(2)}</p>
          
          <div className="border-t pt-4 mb-4">
            <p className="font-semibold mb-2">Date</p>
            <div className="border rounded p-2">
              <p className="text-sm">October 15 - March 14</p>
            </div>
          </div>
          
          <div className="border-t pt-4 mb-4">
            <p className="font-semibold mb-2">Time</p>
            <div className="border rounded p-2">
              <p className="text-sm">7:30am - 5:30pm</p>
            </div>
          </div>
          
          <div className="border-t pt-4 mb-6">
            <p className="font-semibold mb-4">Tickets</p>
            
            <div className="flex justify-between items-center mb-2">
              <div>
                <p>Adult (13+ years)</p>
                <p className="text-sm text-gray-500">${adultUnitPrice.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <button 
                  onClick={() => setAdultCount(Math.max(0, adultCount - 1))}
                  className="w-8 h-8 border rounded-full flex items-center justify-center"
                  disabled={adultCount === 0}
                >-</button>
                <span className="mx-3">{adultCount}</span>
                <button 
                  onClick={() => setAdultCount(adultCount + 1)}
                  className="w-8 h-8 border rounded-full flex items-center justify-center"
                >+</button>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-2">
              <div>
                <p>Youth (3-12 years)</p>
                <p className="text-sm text-gray-500">${childUnitPrice.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <button 
                  onClick={() => setChildCount(Math.max(0, childCount - 1))}
                  className="w-8 h-8 border rounded-full flex items-center justify-center"
                  disabled={childCount === 0}
                >-</button>
                <span className="mx-3">{childCount}</span>
                <button 
                  onClick={() => setChildCount(childCount + 1)}
                  className="w-8 h-8 border rounded-full flex items-center justify-center"
                >+</button>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p>Infant (0-2 years)</p>
                <p className="text-sm text-gray-500">${infantUnitPrice.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <button 
                  onClick={() => setInfantCount(Math.max(0, infantCount - 1))}
                  className="w-8 h-8 border rounded-full flex items-center justify-center"
                  disabled={infantCount === 0}
                >-</button>
                <span className="mx-3">{infantCount}</span>
                <button 
                  onClick={() => setInfantCount(infantCount + 1)}
                  className="w-8 h-8 border rounded-full flex items-center justify-center"
                >+</button>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-4 mb-6">
            <p className="font-semibold mb-4">Add Extras</p>
            
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="pickup" 
                  checked={addPickup}
                  onChange={() => setAddPickup(!addPickup)}
                  className="mr-2"
                />
                <label htmlFor="pickup">Add Round-trip hotel pickup</label>
              </div>
              <p>${pickupPrice.toFixed(2)}</p>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="lunch" 
                  checked={addLunch}
                  onChange={() => setAddLunch(!addLunch)}
                  className="mr-2"
                />
                <label htmlFor="lunch">Add Seafood premium lunch</label>
              </div>
              <p>${lunchPrice.toFixed(2)}</p>
            </div>
          </div>
          
          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between mb-2">
              <p className="font-semibold">Total</p>
              <p className="font-semibold">${totalPrice.toFixed(2)}</p>
            </div>
          </div>
          
          <button className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}

export default TourDetail;