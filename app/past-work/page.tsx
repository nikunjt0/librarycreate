"use client";

import Navigation from "../../components/Navigation";
import AwardsCarousel from "../../components/AwardsCarousel";
import Image from "next/image";

export default function PastWork() {
  const awards = [
    {
      title: "Mayor's Award of Excellence",
      organization: "City of Aurora",
      presenter: "Mayor Richard Irvin",
      year: "2023",
      description:
        "Recognized for our outstanding work with the Sewa Diwali Food Drive, bringing together communities and supporting those in need.",
      images: ["/images/past-work/librarycreateMayorAward.webp"],
      imageAlts: ["Mayor's Award of Excellence from City of Aurora"],
    },
    {
      title: "Illinois State Senate Certificate of Recognition",
      organization: "State of Illinois",
      presenter: "Senator Karina Villa",
      year: "2021",
      description:
        "Recognized for building our first library in India after 2 years of fundraising in COVID through tennis camps and book clubs.",
      images: [
        "/images/past-work/libraryCreateSenateAwardFront.webp",
        "/images/past-work/libraryCreateSenateAwardBack.webp",
      ],
      imageAlts: [
        "Illinois State Senate Recognition - Front",
        "Illinois State Senate Recognition - Back",
      ],
    },
  ];

  const fmscImages = [
    "/images/gallery/Screenshot%202025-01-16%20at%206.01.04%E2%80%AFPM.png",
    "/images/gallery/Screenshot%202025-01-16%20at%206.01.16%E2%80%AFPM.png",
  ];

  const foodDriveImages = [
    "/images/gallery/Screenshot%202024-02-23%20at%208.56.51%20PM.png",
    "/images/gallery/Screenshot%202024-02-23%20at%209.06.47%20PM.png",
  ];

  const library2Images = [
    "/images/past-work/library2/school2pic1.webp",
    "/images/past-work/library2/school2pic2.webp",
    "/images/past-work/library2/school2pic3.webp",
    "/images/past-work/library2/school2pic4.webp",
    "/images/past-work/library2/school2pic5.webp",
  ];

  const library1Images = [
    "/images/past-work/library1/f062b46a-32c0-4e79-a528-f9f8cfec5715.JPG",
    "/images/past-work/library1/310969e5-03f9-4b13-9fc5-7d8137fc300d.JPG",
    "/images/past-work/library1/5605d356-4ce7-4792-8724-366187e31789.JPG",
    "/images/past-work/library1/2dfb0cd2-19a2-4655-9a94-1220749b0a04.JPG",
    "/images/past-work/library1/Chachaji%20School%20Kids.jpg"
  ];

  const covidFoodDriveImages = [
    "/images/past-work/covid-food-drive/all_food_ground.webp",
    "/images/past-work/covid-food-drive/food_trunk_garage.webp",
    "/images/past-work/covid-food-drive/food_with_pantry_worker.webp",
  ];

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-0">
      <Navigation />
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
        <h1
          className="text-5xl font-semibold text-black mb-12 text-center"
          style={{ fontFamily: "var(--font-garamond), Garamond, serif" }}
        >
          Past Work
        </h1>

        {/* 2024 Feed My Starving Children Night Section */}
        <section className="mb-20">
          <div className="bg-gray-50 rounded-lg p-8 lg:p-12">
            <div className="mb-8">
              <h2
                className="text-4xl font-semibold text-black mb-4"
                style={{ fontFamily: "var(--font-garamond), Garamond, serif" }}
              >
                2024 Feed My Starving Children Night
              </h2>
            </div>

            {/* Image Collage */}
            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {fmscImages.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative w-full aspect-[16/9] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`2024 Feed My Starving Children - Image ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Event Information */}
            <div className="space-y-6">
              <div>
                <h3
                  className="text-2xl font-semibold text-black mb-4"
                  style={{
                    fontFamily: "var(--font-garamond), Garamond, serif",
                  }}
                >
                  Community Impact
                </h3>
                <p
                  className="text-lg text-gray-700 mb-4"
                  style={{
                    fontFamily:
                      '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  }}
                >
                  <strong className="text-black">25 of our volunteers</strong>{" "}
                  went to Feed My Starving Children and helped pack{" "}
                  <strong className="text-[#DC143C]">33,480 meals</strong> which
                  will feed <strong className="text-[#DC143C]">92 kids</strong>{" "}
                  for a year in countries all around the world! It was a fun
                  event where we came together as a community to do good for the
                  world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2023 Food Drive Section */}
        <section className="mb-20">
          <div className="bg-gray-50 rounded-lg p-8 lg:p-12">
            <div className="mb-8">
              <h2
                className="text-4xl font-semibold text-black mb-4"
                style={{ fontFamily: "var(--font-garamond), Garamond, serif" }}
              >
                2023 Food Drive
              </h2>
            </div>

            {/* Image Collage */}
            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {foodDriveImages.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative w-full aspect-[16/9] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`2023 Food Drive - Image ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Food Drive Information */}
            <div className="space-y-6">
              <div>
                <h3
                  className="text-2xl font-semibold text-black mb-4"
                  style={{
                    fontFamily: "var(--font-garamond), Garamond, serif",
                  }}
                >
                  Our Biggest Food Drive
                </h3>
                <p
                  className="text-lg text-gray-700 mb-4"
                  style={{
                    fontFamily:
                      '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  }}
                >
                  We ran our biggest food drive in October 2023! The Aurora
                  libraryCreate community came together to donate{" "}
                  <strong className="text-black">800 pounds</strong> of canned
                  food, nonperishables, and hygienic products to our partner,
                  the Aurora Interfaith Food Pantry. Aurora's Alderman At-Large
                  (now Mayor), John Laesch, came to show support and talk to the
                  community. It was a great community building event that
                  greatly helped the homeless population of Aurora! Big thanks to our other partner, 
                  A3N Media, for video coverage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Library 2 Section */}
        <section className="mb-20">
          <div className="bg-gray-50 rounded-lg p-8 lg:p-12">
            <div className="mb-8">
              <h2
                className="text-4xl font-semibold text-black mb-4"
                style={{ fontFamily: "var(--font-garamond), Garamond, serif" }}
              >
                Library #2 in 2022
              </h2>
            </div>

            {/* Image Collage */}
            <div className="mb-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {library2Images.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative w-full aspect-[4/3] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`Library 2 - Image ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Library Information */}
            <div className="space-y-6">
              <div>
                <h3
                  className="text-2xl font-semibold text-black mb-4"
                  style={{
                    fontFamily: "var(--font-garamond), Garamond, serif",
                  }}
                >
                  Our Second Library
                </h3>
                <p
                  className="text-lg text-gray-700 mb-4"
                  style={{
                    fontFamily:
                      '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  }}
                >
                  Built in Galaxy World School in Jaura, MP, India.
                </p>
              </div>

              {/* Partner Information */}
              <div className="bg-white rounded-lg p-6 border-l-4 border-[#DC143C]">
                <h4
                  className="text-xl font-semibold text-black mb-3"
                  style={{
                    fontFamily: "var(--font-garamond), Garamond, serif",
                  }}
                >
                  Championed by Principal Deepak Sharma
                </h4>
              </div>
            </div>
          </div>
        </section>

        {/* Library 1 Section */}
        <section className="mb-20">
          <div className="bg-gray-50 rounded-lg p-8 lg:p-12">
            <div className="mb-8">
              <h2
                className="text-4xl font-semibold text-black mb-4"
                style={{ fontFamily: "var(--font-garamond), Garamond, serif" }}
              >
                Library #1 in 2020
              </h2>
            </div>

            {/* Image Collage */}
            <div className="mb-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {library1Images.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative w-full aspect-[4/3] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`Library 1 - Image ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Library Information */}
            <div className="space-y-6">
              <div>
                <h3
                  className="text-2xl font-semibold text-black mb-4"
                  style={{
                    fontFamily: "var(--font-garamond), Garamond, serif",
                  }}
                >
                  Our First Library
                </h3>
                <p
                  className="text-lg text-gray-700 mb-4"
                  style={{
                    fontFamily:
                      '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  }}
                >
                  Built in a governmental higher secondary school in Chaina
                  village in Morena, MP.
                </p>
              </div>

              {/* Partner Information */}
              <div className="bg-white rounded-lg p-6 border-l-4 border-[#DC143C]">
                <h4
                  className="text-xl font-semibold text-black mb-3"
                  style={{
                    fontFamily: "var(--font-garamond), Garamond, serif",
                  }}
                >
                  Championed by B. N. TYAGI
                </h4>
                <p
                  className="text-base text-gray-700"
                  style={{
                    fontFamily:
                      '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  }}
                >
                  Educating rural kids in Central India for{" "}
                  <strong className="text-black">35 years</strong> and
                  empowering our organization from India itself. Principal of
                  India Higher Secondary Government School for{" "}
                  <strong className="text-black">15+ years</strong> and
                  lecturer of Math and Physics for{" "}
                  <strong className="text-black">30+ years</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COVID-19 Food Drive for Homeless Section */}
        <section className="mb-20">
          <div className="bg-gray-50 rounded-lg p-8 lg:p-12">
            <div className="mb-8">
              <h2
                className="text-4xl font-semibold text-black mb-4"
                style={{ fontFamily: "var(--font-garamond), Garamond, serif" }}
              >
                2020 COVID Food Drive for Homeless
              </h2>
            </div>

            {/* Image Collage */}
            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {covidFoodDriveImages.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative w-full aspect-[4/3] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={
                    idx === 0
                      ? "Donated food and supplies spread out"
                      : idx === 1
                      ? "Food donations loaded in trunk"
                      : "Food delivered at pantry with worker"
                  }
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3
                  className="text-2xl font-semibold text-black mb-4"
                  style={{
                    fontFamily: "var(--font-garamond), Garamond, serif",
                  }}
                >
                  Supporting Aurora&apos;s Homeless During the Pandemic
                </h3>
                <p
                  className="text-lg text-gray-700 mb-4"
                  style={{
                    fontFamily:
                      '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  }}
                >
                  The pandemic hit the homeless especially hard. Close quarters and lack of
                  testing spread the virus quickly, and shelters moving residents to hotels
                  couldn&apos;t provide the steady food and supplies volunteers once did. We started a food drive and donated{" "}
                  <strong className="text-black">$550 to Hesed House</strong> plus canned
                  food, sanitizers, and toiletries to the{" "}
                  <strong className="text-black">Aurora Interfaith Food Bank</strong>. It was
                  a chance to help our most vulnerable neighbors stay nourished and
                  sanitized when they needed it most.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Awards and Recognitions Section */}
        <section className="mb-20">
          <h2
            className="text-4xl font-semibold text-black mb-12 text-center"
            style={{ fontFamily: "var(--font-garamond), Garamond, serif" }}
          >
            Awards and Recognitions
          </h2>

          <AwardsCarousel awards={awards} />
        </section>
      </div>
    </div>
  );
}

