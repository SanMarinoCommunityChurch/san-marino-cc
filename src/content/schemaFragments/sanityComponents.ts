import { z } from "astro/zod";

export const SanityImage = z.object({
    _type: z.literal("image"),
    asset: z.any(),
    alt: z.string().nullish(),
    crop: z.any().nullish(),
    hotspot: z.any().nullish(),
});

export type SanityImage = z.infer<typeof SanityImage>;

export const PageSlug = z.object({
    current: z.string(),
    fullUrl: z.string(),
});

export const PortableText = z.array(z.any());

export type PortableText = z.infer<typeof PortableText>;

export const LinkReference = z.object({
    type: z.union([z.literal("reference"), z.literal("page")]),
    sectionSlug: z.string().nullish(),
    pageSlug: PageSlug,
});

export type LinkReference = z.infer<typeof LinkReference>;

export const LinkExternal = z.object({
    type: z.literal("externalLink"),
    fullUrl: z.string(),
});

export const LinkSlug = z.object({
    type: z.literal("slugString"),
    fullUrl: z.string(),
});

export const Link = z.object({
    type: z.literal("link"),
    href: z.union([LinkReference, LinkExternal, LinkSlug]),
    name: z.string().nullish(),
    icon: z.string().nullish(),
    description: z.string().nullish(),
});

export type Link = z.infer<typeof Link>;

/** Modules */

export const IntroParagraph = z.string().nullish();

export type IntroParagraph = z.infer<typeof IntroParagraph>;

export const TextAndImageBlocks = z.array(
    z.object({
        heading: z.string().nullish(),
        text: PortableText,
        mediaType: z.enum(["image", "video"]),
        media: z.object({
            video: z.string().nullish(),
            image: SanityImage.extend({
                frame: z.boolean().nullish(),
                frameRatio: z.enum(["1:1", "7:5"]).nullish(),
            }).nullish(),
        }),
    }),
);

export type TextAndImageBlocks = z.infer<typeof TextAndImageBlocks>;

export const Feature = z.object({
    title: z.string(),
    description: z.string().nullish(),
    link: z.object({
        name: z.string().nullish(),
        href: z.object({
            name: z.string(),
            sectionSlug: z.string().nullish(),
            pageSlug: PageSlug,
        }),
    }),
    image: SanityImage,
});

export type Feature = z.infer<typeof Feature>;

export const FeatureList = z.array(Feature);

export type FeatureList = z.infer<typeof FeatureList>;

const ImageLink = z.object({
    heading: z.string().nullish(),
    description: z.string().nullish(),
    icon: z.string().nullish(),
    image: SanityImage.nullish(),
    href: z.union([
        LinkReference,
        z.object({
            slug: z.string().nullish(),
        }),
    ]),
});

export type ImageLink = z.infer<typeof ImageLink>;

export const FAQItem = z.object({
    question: z.string(),
    answer: PortableText,
});

export type FAQItem = z.infer<typeof FAQItem>;

export const FAQSection = z
    .object({
        items: z.array(FAQItem),
        sidebar: z.object({
            heading: z.string().nullish(),
            links: z.array(ImageLink),
        }),
    })
    .nullish();

export type FAQSection = z.infer<typeof FAQSection>;

export const ValuesSection = z
    .object({
        heading: z.string().nullish(),
        vision: z.object({
            heading: z.string().nullish(),
            text: z.string().nullish(),
        }),
        mission: z.object({
            heading: z.string().nullish(),
            text: z.string().nullish(),
            textAfter: z.string().nullish(),
            highlights: z.array(ImageLink),
        }),
    })
    .nullish();

export type ValuesSection = z.infer<typeof ValuesSection>;

export const LeadershipSection = z
    .object({
        sections: z.array(
            z.object({
                heading: z.string(),
                text: PortableText,
            }),
        ),
    })
    .nullish();

export type LeadershipSection = z.infer<typeof LeadershipSection>;

export const MinistryCategoriesSection = z
    .object({
        sections: z.array(
            z.object({
                _ref: z.string(),
            }),
        ),
    })
    .nullish();

export type MinistryCategoriesSection = z.infer<
    typeof MinistryCategoriesSection
>;

export const MissionsSection = z
    .object({
        sections: z.array(
            z.object({
                heading: z.string(),
                text: PortableText,
                items: z.array(
                    z.object({
                        type: z.string(),
                        name: z.string(),
                        slug: z.string(),
                        category: z.enum([
                            "missionPartner",
                            "missionInvolvement",
                        ]),
                        image: SanityImage.nullish(),
                        richContent: PortableText,
                    }),
                ),
            }),
        ),
    })
    .nullish();

export type MissionsSection = z.infer<typeof MissionsSection>;

export const GivingLinks = z.array(ImageLink).nullish();

export type GivingLinks = z.infer<typeof GivingLinks>;

export const IconGridSection = z
    .object({
        heading: z.string(),
        items: z.array(
            z.object({
                heading: z.string(),
                text: z.string().nullish(),
                icon: z.string(),
                externalLink: z.string().nullish(),
            }),
        ),
    })
    .nullish();

export type IconGridSection = z.infer<typeof IconGridSection>;

export const ContactSection = z
    .object({
        hours: PortableText,
        info: PortableText,
    })
    .nullish();

export type ContactSection = z.infer<typeof ContactSection>;

export const PageCTA = z
    .object({
        heading: z.string().nullish(),
        image: SanityImage.nullish(),
        button: z.object({
            text: z.string().nullish(),
            href: z.string().nullish(),
        }),
    })
    .nullish();

export type PageCTA = z.infer<typeof PageCTA>;

export const HomeHero = z.object({
    eyebrow: z.string().nullish(),
    heading: z.string(),
    text: z.string(),
    links: z.array(
        z.object({
            name: z.string().nullish(),
            href: z.object({
                name: z.string(),
                sectionSlug: z.string().nullish(),
                pageSlug: PageSlug,
            }),
        }),
    ),
    showFeaturedAnnouncement: z.boolean().nullish(),
    featuredAnnouncement: z
        .object({
            title: z.string(),
            text: z.string().nullish(),
            items: z.array(
                z.object({
                    _id: z.string(),
                    type: z.enum(["event", "post"]),
                }),
            ),
        })
        .nullish(),
});

export type HomeHero = z.infer<typeof HomeHero>;

export const HomeLinksSection = z.object({
    heading: z.string(),
    text: z.string().nullish(),
    items: z.array(
        z.object({
            type: z.string(),
            heading: z.string(),
            icon: z.string(),
            image: SanityImage.nullish(),
            href: z.object({
                type: z.string().nullish(),
                sectionSlug: z.string().nullish(),
                pageSlug: z.string().nullish(),
                slug: z.string().nullish(),
            }),
        }),
    ),
});

export type HomeLinksSection = z.infer<typeof HomeLinksSection>;

export const HomeWelcomeSection = z.object({
    heading: z.string(),
    text: z.string().nullish(),
    personRef: z.string().nullish(),
    media: z.any().nullish(),
    links: z.array(
        z.object({
            title: z.string(),
            text: z.string().nullish(),
            icon: z.string(),
            href: z.object({
                name: z.string(),
                sectionSlug: z.string().nullish(),
                pageSlug: PageSlug,
            }),
        }),
    ),
});

export type HomeWelcomeSection = z.infer<typeof HomeWelcomeSection>;

export const HomeCTA = z.object({
    heading: z.string(),
    text: z.string(),
    link: z.object({
        name: z.string().nullish(),
        href: z.object({
            name: z.string(),
            sectionSlug: z.string().nullish(),
            pageSlug: PageSlug,
        }),
    }),
});

export type HomeCTA = z.infer<typeof HomeCTA>;

export const HomeResourcesSection = z.object({
    heading: z.string(),
    text: z.string().nullish(),
    items: z.array(
        z.object({
            _ref: z.string(),
        }),
    ),
});

export type HomeResourcesSection = z.infer<typeof HomeResourcesSection>;
