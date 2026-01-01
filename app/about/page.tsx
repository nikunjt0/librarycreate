"use client";

import Navigation from "../../components/Navigation";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-0">
      <Navigation />
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
        {/* Image at the top, centered */}
        <div className="w-full mb-12 flex justify-center">
          <div className="relative w-full max-w-4xl aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/gallery/0d570046-7769-45a9-8adc-ee016b5b47e0.JPG"
              alt="Students studying in library"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="space-y-6 text-lg text-black leading-relaxed" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
          <p>
            A few years ago, when we were visiting rural India, we went to a local government high school. It was during the summertime and there were no students, so we were able to get a nice tour and look around. In the entire school, there wasn't a single book, and we wondered how any child could enjoy school without fiction and creative literature.
          </p>
          
          <p>
            In the US, libraries are found in every city and school. We're used to taking this for granted. As children, when going to the library every single day to explore new stories and meet new characters, we never thought that fellow students around the world weren't getting these opportunities. The same goes for technical resources with accessible computers in our school.
          </p>
          
          <p>
            So, we made it a personal mission to spread our love of reading to the world. After running small fundraising gigs in high school, we were able to gather enough donations to build our first library. With the help of advisors and local schoolteachers, we got the library built, and students still spend hours in there, exploring a whole new side of education.
          </p>
          
          <p>
            Join libraryCreate and revolutionize libraries. Our mission is to make sure all children across the world have access to books and technology, and with your help, we can achieve it.
          </p>
        </div>
      </div>
    </div>
  );
}

