import React from "react";
import { eventsData, getEventBySlug, getRelatedEvents } from "../../data/eventsData";
import EventDetailClient from "./EventDetailClient";

// Generate static params for all events
export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const event = getEventBySlug(params.slug);
  
  if (!event) {
    return {
      title: "Event Not Found | BIIN",
    };
  }

  return {
    title: `${event.title} | BIIN Events`,
    description: event.shortDescription,
  };
}

const EventDetailPage = ({ params }) => {
  const event = getEventBySlug(params.slug);
  
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-6">The event you are looking for does not exist.</p>
          <a
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors"
          >
            Back to Events
          </a>
        </div>
      </div>
    );
  }

  const relatedEvents = getRelatedEvents(event.slug, event.category, 3);

  return <EventDetailClient event={event} relatedEvents={relatedEvents} />;
};

export default EventDetailPage;
