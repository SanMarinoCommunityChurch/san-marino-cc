import { Tab } from "@headlessui/react";
import { PortableText } from "@portabletext/react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import getYouTubeID from "get-youtube-id";
import { urlFor } from "../../lib/sanity";
import { makeNameSlug } from "../../lib/people";
import {
  capitalizeFirstLetter,
  format12HourTime,
  joinNames,
} from "../../utils/format";
import { DateTime } from "luxon";

function Avatar({ image, imageAlt = "", heading = "Contact", name, href }) {
  return (
    <div className="contact-avatar flex">
      {image ? (
        <div className="frame square">
          <img
            src={urlFor(image).width(200).height(200).auto("format").url()}
            alt={image.asset.altText || ""}
            width={200}
            height={200}
          />
        </div>
      ) : (
        <div className="frame square">
          <img
            src="https://images.unsplash.com/photo-1555598681-4552041fbfd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            alt={imageAlt}
            width={200}
            height={200}
          />
        </div>
      )}
      <div>
        <div className="small-title">{heading}</div>
        {href ? (
          <a href={href} className="text-step--1">
            {name}
          </a>
        ) : (
          <div className="text-step--1">{name}</div>
        )}
      </div>
    </div>
  );
}

export default function Tabs({ service }) {
  return (
    <Tab.Group>
      <Tab.List className="content-wrapper service-tabs center-items">
        {service.serviceType.map((type) => {
          return (
            <Tab key={type._key} className="service-tab">
              {`${format12HourTime(type.serviceTime)}`}
              <br />
              {`${capitalizeFirstLetter(type.name)} Worship`}
            </Tab>
          );
        })}
      </Tab.List>
      <Tab.Panels>
        {service.serviceType.map((type, i) => {
          const ytID = getYouTubeID(type.video.url);
          const { preacher } = type;
          return (
            <Tab.Panel key={i}>
              <div className="video-wrapper">
                <LiteYouTubeEmbed id={ytID} title={type.name} />
              </div>
              <article className="content-wrapper service-wrapper with-sidebar">
                <div className="service-info flow">
                  <div className="">
                    <div className="small-title category">{`${type.name} Worship`}</div>
                    <h2 className="text-step-4">
                      {service.name || "Sunday Service"}
                    </h2>
                    <time className="small-title time">
                      {DateTime.fromISO(service.date)
                        .setZone("America/Los_Angeles")
                        .toLocaleString(DateTime.DATE_FULL)}
                      <span className="bullet-spacer">•</span>
                      {format12HourTime(type.serviceTime)}
                    </time>
                  </div>
                  <PortableText value={type.serviceDescription} />
                  {type.programLink && (
                    <a href={type.programLink} width="fit">
                      Download Program
                    </a>
                  )}
                </div>
                <div>
                  {preacher && (
                    <Avatar
                      heading="Sermon by"
                      name={joinNames(preacher.name)}
                      image={preacher.image}
                      imageAlt={joinNames(preacher.name)}
                      href={
                        preacher.type === "staff" &&
                        `/who-we-are/leadership/${preacher.slug}`
                      }
                    />
                  )}
                </div>
              </article>
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
    </Tab.Group>
  );
}
