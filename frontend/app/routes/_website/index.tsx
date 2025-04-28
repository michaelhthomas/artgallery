import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  Frame,
  Mail,
  MapPin,
  Palette,
  Phone,
  User,
} from "lucide-react";

import { MailingListSignup } from "~/components/website/MailingListSignup";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";
import { useState, useEffect } from "react";
import { PublicControllerService } from "~/api/requests";
import NiceModal from "@ebay/nice-modal-react";
import { FindArtworkModal } from "~/components/artwork/FindArtworkModal";

export const Route = createFileRoute("/_website/")({
  component: WebsiteHome,
  loader: async () => {
    const [exhibitions, artists] = await Promise.all([
      PublicControllerService.getCurrentExhibitions(),
      PublicControllerService.getFeaturedArtists(),
    ]);
    return { exhibitions, artists };
  },
});

export default function WebsiteHome() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { exhibitions, artists } = Route.useLoaderData();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex h-16 items-center gap-4 border-b bg-background/90 transition-colors duration-500 px-4 backdrop-blur md:px-6",
          {
            "bg-background/10": scrollPosition === 0,
          },
        )}
      >
        <a href="#" className="flex items-center gap-2">
          <Frame className="h-6 w-6 text-purple-800" />
          <span className="text-lg font-semibold">Furman Art Gallery</span>
        </a>
        <nav className="ml-auto gap-4 hidden md:flex">
          <Button variant="ghost" size="sm" asChild>
            <a href="#current-exhibitions">Exhibitions</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#artists">Artists</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#about">About Us</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#plan-your-visit">Visit</a>
          </Button>
          <Button size="sm" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] pt-16 flex-col items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            alt="Gallery interior"
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="z-10 flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Experience Art in a<br />
            <span className="text-purple-400">New Dimension</span>
          </h1>
          <p className="max-w-2xl text-lg text-zinc-300">
            Furman Art Gallery showcases contemporary works from established and
            emerging artists in a space designed to inspire and provoke thought.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="#current-exhibitions">
                Current Exhibitions
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => {
                void NiceModal.show(FindArtworkModal);
              }}
            >
              Find Your Artworks
              <Palette className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Exhibitions */}
      <section id="current-exhibitions" className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold">Current Exhibitions</h2>
            <p className="max-w-[700px] text-zinc-400">
              Explore our current exhibitions featuring works from renowned and
              emerging artists.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {exhibitions.map((exhibition, index) => (
              <Card
                key={index}
                className="overflow-hidden border-zinc-800 transition-colors hover:border-purple-800"
              >
                <div className="aspect-[4/3] w-full">
                  <img
                    src={exhibition.images[0] || "/placeholder.svg"}
                    alt={exhibition.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2 text-sm font-medium text-purple-400">
                    {exhibition.openingDate} — {exhibition.closingDate}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{exhibition.title}</h3>
                  {/* <p className="mb-4 text-zinc-400">{exhibition.description}</p> */}
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg">
              View All Exhibitions
            </Button>
          </div> */}
        </div>
      </section>

      {/* Featured Artists */}
      <section id="artists" className="bg-zinc-900 py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold">Featured Artists</h2>
            <p className="max-w-[700px] text-zinc-400">
              Discover the talented artists whose works are showcased in our
              gallery.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center"
              >
                <div className="mb-4 overflow-hidden rounded-full">
                  {/* <img
                    src={"/placeholder.svg"}
                    alt={artist.firstName + " " + artist.lastName}
                    className="h-40 w-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  /> */}
                  <div className="size-40 rounded-full bg-muted flex items-center justify-center">
                    <User className="size-24" />
                  </div>
                </div>
                <h3 className="mb-1 text-lg font-bold">
                  {artist.firstName} {artist.lastName}
                </h3>
                <p className="mb-3 text-sm text-zinc-400">
                  {artist.usualType} &bull; {artist.usualMedium} &bull;{" "}
                  {artist.usualStyle}
                </p>
                {/* <Button variant="link" className="text-purple-400">
                  View Profile
                </Button> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container grid gap-12 px-4 md:grid-cols-5 md:px-6 md:max-w-6xl">
          <div className="flex flex-col justify-center col-span-2">
            <h2 className="mb-6 text-3xl font-bold">
              About Furman Art Gallery
            </h2>
            <p className="mb-4 text-zinc-400">
              Founded in 2010, Furman Art Gallery has established itself as a
              premier destination for contemporary art in the heart of the city.
              Our mission is to showcase diverse artistic expressions and foster
              a community of art enthusiasts.
            </p>
            <p className="mb-6 text-zinc-400">
              The gallery spans over 10,000 square feet of exhibition space,
              featuring multiple galleries, a sculpture garden, and dedicated
              spaces for educational programs and events.
            </p>
            <Button variant="outline" asChild>
              <a href="#plan-your-visit">Plan Your Visit</a>
            </Button>
          </div>
          <div className="flex items-center justify-center col-span-3">
            <img
              src="/images/art-gallery.jpg"
              alt="Gallery interior"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mailing List Signup */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-black"></div>
        {/* Glow effect */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/30 blur-[100px]"></div>
        <div className="absolute left-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-purple-700/20 blur-[80px]"></div>
        <div className="absolute right-1/4 bottom-1/3 h-[250px] w-[250px] rounded-full bg-purple-800/20 blur-[80px]"></div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl rounded-xl border border-purple-800/50 bg-zinc-900/90 p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-sm">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-3xl font-bold">Join Our Mailing List</h2>
              <p className="text-zinc-400">
                Stay updated with new exhibitions, artist spotlights, and
                exclusive events.
              </p>
            </div>
            <MailingListSignup />
          </div>
        </div>
      </section>

      {/* Visit Information */}
      <section id="plan-your-visit" className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Plan Your Visit</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-6 w-6 text-purple-400" />
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">Location</h3>
                    <p className="text-zinc-400">3300 Poinsett Highway</p>
                    <p className="text-zinc-400">Greenville, SC 29613</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="mt-1 h-6 w-6 text-purple-400" />
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">Hours</h3>
                    <p className="text-zinc-400">
                      Tuesday - Sunday: 10:00 AM - 6:00 PM
                    </p>
                    <p className="text-zinc-400">Monday: Closed</p>
                    <p className="text-zinc-400">
                      Special hours may apply for events and holidays
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-6 w-6 text-purple-400" />
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">Contact</h3>
                    <p className="text-zinc-400">Phone: (864) 555-1234</p>
                    <p className="text-zinc-400">
                      Email: info@furmanartgallery.com
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-8" asChild>
                <a
                  href="https://maps.google.com/maps/dir//Furman+University+3300+Poinsett+Hwy+Greenville,+SC+29613/@34.9274688,-82.4400666,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x885833a55f710e07:0x5b1b1259fa3a0f86"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-[3/2] w-full relative text-right">
                <div className="overflow-hidden w-full h-full">
                  <iframe
                    className="h-full w-full"
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Furman University&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>
              </div>
              {/* <img
                src="/placeholder.svg?height=600&width=800"
                alt="Gallery map"
                className="rounded-lg object-cover shadow-lg"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Frame className="h-6 w-6 text-purple-800" />
                <span className="text-lg font-semibold">
                  Furman Art Gallery
                </span>
              </div>
              <p className="mt-4 text-sm text-zinc-400">
                Showcasing contemporary art and fostering a community of art
                enthusiasts since 2010.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm text-zinc-400 grid grid-cols-2">
                <li>
                  <a href="#about" className="hover:text-purple-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#current-exhibitions"
                    className="hover:text-purple-400"
                  >
                    Exhibitions
                  </a>
                </li>
                <li>
                  <a href="#artists" className="hover:text-purple-400">
                    Artists
                  </a>
                </li>
                <li>
                  <a href="#plan-your-visit" className="hover:text-purple-400">
                    Visit
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  3300 Poinsett Hwy, Greenville, SC 29613
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-purple-400" />
                  (864) 555-1234
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-purple-400" />
                  info@furmanartgallery.com
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="rounded-full bg-zinc-800 p-2 hover:bg-purple-800"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="rounded-full bg-zinc-800 p-2 hover:bg-purple-800"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="rounded-full bg-zinc-800 p-2 hover:bg-purple-800"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-zinc-800" />
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-zinc-400">
              &copy; {new Date().getFullYear()} Furman Art Gallery. All rights
              reserved.
            </p>
            <div className="flex gap-4 text-sm text-zinc-400">
              <a href="#" className="hover:text-purple-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-400">
                Terms of Service
              </a>
              <a href="#" className="hover:text-purple-400">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
