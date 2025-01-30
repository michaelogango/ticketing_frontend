import { useState } from 'react'
import HeroSection from '../components/Hero'
import Navigation from '../components/Nav'
import Footer from '../components/Footer'
import { ChevronRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import StepCard from '../components/StepCard';
import ActionButton from '../components/ActionButton';



function App() {
  const [count, setCount] = useState(0)
// for the ticket steps
  const steps = [
    {
      number: 1,
      title: "Browse Events and Select Tickets",
      description: "Explore a wide variety of events tailored to your interests.",
      imageSrc: "../../public/Images/searching.jpg"
    },
    {
      number: 2,
      title: "Secure Your Purchase with Ease",
      description: "Complete your transaction quickly with our secure payment options.",
      imageSrc: "../../public/Images/purchase.jpg"
    },
    {
      number: 3,
      title: "Manage Your Tickets Anytime",
      description: "Access your tickets easily, allowing for updates and cancellations.",
      imageSrc: "../../public/Images/ticketmanagement.jpg"
    }
  ];

  return (
    <>
    <div className="App">
      <Navigation />
      <HeroSection />
      <main className="w-full">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-2 gap-8">
        <div className="pr-8">
          <h1 className="text-4xl font-bold mb-6">
            Discover the Ultimate Event Ticketing Solution for Seamless Experiences
          </h1>
          <p className="text-gray-600 mb-8">
            Our event ticketing system empowers you to effortlessly purchase tickets for 
            a variety of events. With user-friendly features, you can also manage your 
            events by uploading, updating, or deleting them with ease.
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg">
          <img 
            src="../../public/Images/ticket.jpg" 
            alt="Event Management Platform" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16">
            Explore Our Comprehensive Event Ticketing Solutions for Every Occasion
          </h2>
          
          <div className="grid grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">
                Seamless Ticket Purchasing Experience for Attendees and Organizers
              </h3>
              <p className="text-gray-600">
                Our platform simplifies the ticket buying process, ensuring a hassle-free experience.
              </p>
              <a href="#" className="inline-flex items-center text-black hover:opacity-80">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">
                User-Friendly Event Management Tools for Organizers and Hosts
              </h3>
              <p className="text-gray-600">
                Easily upload, update, and manage your events with just a few clicks.
              </p>
              <a href="#" className="inline-flex items-center text-black hover:opacity-80">
                Sign Up
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">
                Real-Time Analytics to Enhance Your Event's Performance and Reach
              </h3>
              <p className="text-gray-600">
                Gain insights into ticket sales and audience engagement to optimize future events.
              </p>
              <a href="#" className="inline-flex items-center text-black hover:opacity-80">
                Discover
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>


    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          label="Tickets"
          title="Easily Purchase and Manage Your Tickets"
          description="Our platform simplifies the ticketing process, making it easy for you to buy and manage tickets for your favorite events. Enjoy a seamless experience from start to finish."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <ActionButton>
            Learn More
          </ActionButton>
          <ActionButton variant="primary">
            Sign Up
            <ChevronRight size={16} />
          </ActionButton>
        </div>
      </div>
    </section>
      <Footer />

      
  
    </div>
    </>
  )
}

export default App
