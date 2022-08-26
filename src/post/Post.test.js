import React from "react";
import {render} from "@testing-library/react";
import { Post, extractCommentsFromPost } from "./Post";


describe("<Post />", () => {

    const mockPost =
        {
            title: "undoubtedly the best photo I took at my sister's wedding",
            author: "BabyGroot1337",
            time: 1659895802,
            numberComments: 3042,
            ups: 155805,
            downs: 0,
            commentsUrl: "/r/funny/comments/wim1n1/undoubtedly_the_best_photo_i_took_at_my_sisters/"
        }

    it('should render one element belonging to post-item class', function () {
        const { container } = render(<Post post={mockPost}/>);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('post-item').length;

        expect(actualResult).toBe(expectedResult)
    });

    it('should render one element belonging to buttons-container class', function () {
        const { container } = render(<Post post={mockPost} />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('buttons-container').length;

        expect(actualResult).toBe(expectedResult)
    });

    it('should render two element belonging to button class', function () {
        const { container } = render(<Post post={mockPost} />);

        const expectedResult = 2;
        const actualResult = container.getElementsByClassName('button').length;

        expect(actualResult).toBe(expectedResult)
    });

    it('should render one element belonging to post-body class', function () {
        const { container } = render(<Post post={mockPost} />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('post-body').length;

        expect(actualResult).toBe(expectedResult)
    });

    it('should render one element belonging to post-title class', function () {
        const { container } = render(<Post post={mockPost} />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('post-title').length;

        expect(actualResult).toBe(expectedResult)
    });

    it('should render one element belonging to post-details class', function () {
        const { container } = render(<Post post={mockPost} />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('post-details').length;

        expect(actualResult).toBe(expectedResult)
    });
})

describe("extractCommentsFromPost", () => {

    it('should extract body, author and time from one post', function () {
        const mockData = [
            {
                "kind": "Listing",
                "data": {
                    "after": null,
                    "dist": 1,
                    "modhash": "",
                    "geo_filter": "",
                    "children": [
                        {
                            "kind": "t3",
                            "data": {
                                "approved_at_utc": null,
                                "subreddit": "meirl",
                                "selftext": "",
                                "user_reports": [],
                                "saved": false,
                                "mod_reason_title": null,
                                "gilded": 0,
                                "clicked": false,
                                "title": "meirl",
                                "link_flair_richtext": [],
                                "subreddit_name_prefixed": "r/meirl",
                                "hidden": false,
                                "pwls": 6,
                                "link_flair_css_class": null,
                                "downs": 0,
                                "thumbnail_height": 140,
                                "top_awarded_type": null,
                                "parent_whitelist_status": "all_ads",
                                "hide_score": false,
                                "name": "t3_wii02j",
                                "quarantine": false,
                                "link_flair_text_color": "dark",
                                "upvote_ratio": 0.94,
                                "author_flair_background_color": null,
                                "subreddit_type": "public",
                                "ups": 101174,
                                "total_awards_received": 17,
                                "media_embed": {},
                                "thumbnail_width": 140,
                                "author_flair_template_id": null,
                                "is_original_content": false,
                                "author_fullname": "t2_chh8atwk",
                                "secure_media": null,
                                "is_reddit_media_domain": true,
                                "is_meta": false,
                                "category": null,
                                "secure_media_embed": {},
                                "link_flair_text": null,
                                "can_mod_post": false,
                                "score": 101174,
                                "approved_by": null,
                                "is_created_from_ads_ui": false,
                                "author_premium": true,
                                "thumbnail": "https://b.thumbs.redditmedia.com/31l1EL0XmgAD1hxRnpCn0Z-eqKVqsiAgPi74m2ujzfo.jpg",
                                "edited": false,
                                "author_flair_css_class": null,
                                "author_flair_richtext": [],
                                "gildings": {
                                    "gid_1": 5
                                },
                                "post_hint": "image",
                                "content_categories": null,
                                "is_self": false,
                                "mod_note": null,
                                "created": 1659885204,
                                "link_flair_type": "text",
                                "wls": 6,
                                "removed_by_category": null,
                                "banned_by": null,
                                "author_flair_type": "text",
                                "domain": "i.redd.it",
                                "allow_live_comments": true,
                                "selftext_html": null,
                                "likes": null,
                                "suggested_sort": null,
                                "banned_at_utc": null,
                                "url_overridden_by_dest": "https://i.redd.it/u455wjid5bg91.jpg",
                                "view_count": null,
                                "archived": false,
                                "no_follow": false,
                                "is_crosspostable": false,
                                "pinned": false,
                                "over_18": false,
                                "preview": {
                                    "images": [
                                        {
                                            "source": {
                                                "url": "https://preview.redd.it/u455wjid5bg91.jpg?auto=webp&amp;s=b4b6e0c1988cfbb83f574167d5425ada3772ecb9",
                                                "width": 819,
                                                "height": 1018
                                            },
                                            "resolutions": [
                                                {
                                                    "url": "https://preview.redd.it/u455wjid5bg91.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=dfde1ea6c8dcef74fd5945164b3b6fa69801b0bf",
                                                    "width": 108,
                                                    "height": 134
                                                },
                                                {
                                                    "url": "https://preview.redd.it/u455wjid5bg91.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=90f0b69180f609d492cb0a1609d9a263b947a13e",
                                                    "width": 216,
                                                    "height": 268
                                                },
                                                {
                                                    "url": "https://preview.redd.it/u455wjid5bg91.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=e144cc59c8569f95ecdfc784148aeab0dcef1e7b",
                                                    "width": 320,
                                                    "height": 397
                                                },
                                                {
                                                    "url": "https://preview.redd.it/u455wjid5bg91.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=aca39f6fed86a4678c2be0174f8e3ce6ec9ca8ab",
                                                    "width": 640,
                                                    "height": 795
                                                }
                                            ],
                                            "variants": {},
                                            "id": "gsT32pYb9Ca6xBdJY8A4KCUISd6tdksSE-xn4v4Ri0w"
                                        }
                                    ],
                                    "enabled": true
                                },
                                "all_awardings": [
                                    {
                                        "giver_coin_reward": null,
                                        "subreddit_id": null,
                                        "is_new": false,
                                        "days_of_drip_extension": null,
                                        "coin_price": 30,
                                        "id": "award_b4ff447e-05a5-42dc-9002-63568807cfe6",
                                        "penny_donate": null,
                                        "coin_reward": 0,
                                        "icon_url": "https://www.redditstatic.com/gold/awards/icon/Illuminati_512.png",
                                        "days_of_premium": null,
                                        "icon_height": 2048,
                                        "tiers_by_required_awardings": null,
                                        "resized_icons": [
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/Illuminati_16.png",
                                                "width": 16,
                                                "height": 16
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/Illuminati_32.png",
                                                "width": 32,
                                                "height": 32
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/Illuminati_48.png",
                                                "width": 48,
                                                "height": 48
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/Illuminati_64.png",
                                                "width": 64,
                                                "height": 64
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/Illuminati_128.png",
                                                "width": 128,
                                                "height": 128
                                            }
                                        ],
                                        "icon_width": 2048,
                                        "static_icon_width": 2048,
                                        "start_date": null,
                                        "is_enabled": true,
                                        "awardings_required_to_grant_benefits": null,
                                        "description": "A glowing commendation for all to see",
                                        "end_date": null,
                                        "sticky_duration_seconds": null,
                                        "subreddit_coin_reward": 0,
                                        "count": 1,
                                        "static_icon_height": 2048,
                                        "name": "All-Seeing Upvote",
                                        "resized_static_icons": [
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png?width=16&amp;height=16&amp;auto=webp&amp;s=978c93744e53b8c9305467a7be792e5c401eac6c",
                                                "width": 16,
                                                "height": 16
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png?width=32&amp;height=32&amp;auto=webp&amp;s=d2ee343eef5048ad3add75d4a4d4e3922bb9565a",
                                                "width": 32,
                                                "height": 32
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png?width=48&amp;height=48&amp;auto=webp&amp;s=7d216fd3a05c61d9fb75b27092844c546d958f14",
                                                "width": 48,
                                                "height": 48
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png?width=64&amp;height=64&amp;auto=webp&amp;s=b76693f84fd19b04d0c0444a9812d812105e2d8f",
                                                "width": 64,
                                                "height": 64
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png?width=128&amp;height=128&amp;auto=webp&amp;s=5353352ae9f443c353ef0b7725dabcfc1b3829a5",
                                                "width": 128,
                                                "height": 128
                                            }
                                        ],
                                        "icon_format": "APNG",
                                        "award_sub_type": "PREMIUM",
                                        "penny_price": null,
                                        "award_type": "global",
                                        "static_icon_url": "https://i.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png"
                                    },
                                    {
                                        "giver_coin_reward": null,
                                        "subreddit_id": null,
                                        "is_new": false,
                                        "days_of_drip_extension": null,
                                        "coin_price": 150,
                                        "id": "award_f44611f1-b89e-46dc-97fe-892280b13b82",
                                        "penny_donate": null,
                                        "coin_reward": 0,
                                        "icon_url": "https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png",
                                        "days_of_premium": null,
                                        "icon_height": 2048,
                                        "tiers_by_required_awardings": null,
                                        "resized_icons": [
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=16&amp;height=16&amp;auto=webp&amp;s=a5662dfbdb402bf67866c050aa76c31c147c2f45",
                                                "width": 16,
                                                "height": 16
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=32&amp;height=32&amp;auto=webp&amp;s=a6882eb3f380e8e88009789f4d0072e17b8c59f1",
                                                "width": 32,
                                                "height": 32
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=48&amp;height=48&amp;auto=webp&amp;s=e50064b090879e8a0b55e433f6ee61d5cb5fbe1d",
                                                "width": 48,
                                                "height": 48
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=64&amp;height=64&amp;auto=webp&amp;s=8e5bb2e76683cb6b161830bcdd9642049d6adc11",
                                                "width": 64,
                                                "height": 64
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=128&amp;height=128&amp;auto=webp&amp;s=eda4a9246f95f42ee6940cc0ec65306fd20de878",
                                                "width": 128,
                                                "height": 128
                                            }
                                        ],
                                        "icon_width": 2048,
                                        "static_icon_width": 2048,
                                        "start_date": null,
                                        "is_enabled": true,
                                        "awardings_required_to_grant_benefits": null,
                                        "description": "Thank you stranger. Shows the award.",
                                        "end_date": null,
                                        "sticky_duration_seconds": null,
                                        "subreddit_coin_reward": 0,
                                        "count": 3,
                                        "static_icon_height": 2048,
                                        "name": "Helpful",
                                        "resized_static_icons": [
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=16&amp;height=16&amp;auto=webp&amp;s=a5662dfbdb402bf67866c050aa76c31c147c2f45",
                                                "width": 16,
                                                "height": 16
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=32&amp;height=32&amp;auto=webp&amp;s=a6882eb3f380e8e88009789f4d0072e17b8c59f1",
                                                "width": 32,
                                                "height": 32
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=48&amp;height=48&amp;auto=webp&amp;s=e50064b090879e8a0b55e433f6ee61d5cb5fbe1d",
                                                "width": 48,
                                                "height": 48
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=64&amp;height=64&amp;auto=webp&amp;s=8e5bb2e76683cb6b161830bcdd9642049d6adc11",
                                                "width": 64,
                                                "height": 64
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=128&amp;height=128&amp;auto=webp&amp;s=eda4a9246f95f42ee6940cc0ec65306fd20de878",
                                                "width": 128,
                                                "height": 128
                                            }
                                        ],
                                        "icon_format": null,
                                        "award_sub_type": "GLOBAL",
                                        "penny_price": null,
                                        "award_type": "global",
                                        "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png"
                                    },
                                    {
                                        "giver_coin_reward": null,
                                        "subreddit_id": null,
                                        "is_new": false,
                                        "days_of_drip_extension": null,
                                        "coin_price": 125,
                                        "id": "award_5f123e3d-4f48-42f4-9c11-e98b566d5897",
                                        "penny_donate": null,
                                        "coin_reward": 0,
                                        "icon_url": "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png",
                                        "days_of_premium": null,
                                        "icon_height": 2048,
                                        "tiers_by_required_awardings": null,
                                        "resized_icons": [
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0",
                                                "width": 16,
                                                "height": 16
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef",
                                                "width": 32,
                                                "height": 32
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63",
                                                "width": 48,
                                                "height": 48
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb",
                                                "width": 64,
                                                "height": 64
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b",
                                                "width": 128,
                                                "height": 128
                                            }
                                        ],
                                        "icon_width": 2048,
                                        "static_icon_width": 2048,
                                        "start_date": null,
                                        "is_enabled": true,
                                        "awardings_required_to_grant_benefits": null,
                                        "description": "When you come across a feel-good thing.",
                                        "end_date": null,
                                        "sticky_duration_seconds": null,
                                        "subreddit_coin_reward": 0,
                                        "count": 8,
                                        "static_icon_height": 2048,
                                        "name": "Wholesome",
                                        "resized_static_icons": [
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0",
                                                "width": 16,
                                                "height": 16
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef",
                                                "width": 32,
                                                "height": 32
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63",
                                                "width": 48,
                                                "height": 48
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb",
                                                "width": 64,
                                                "height": 64
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b",
                                                "width": 128,
                                                "height": 128
                                            }
                                        ],
                                        "icon_format": null,
                                        "award_sub_type": "GLOBAL",
                                        "penny_price": null,
                                        "award_type": "global",
                                        "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png"
                                    },
                                    {
                                        "giver_coin_reward": null,
                                        "subreddit_id": null,
                                        "is_new": false,
                                        "days_of_drip_extension": null,
                                        "coin_price": 100,
                                        "id": "gid_1",
                                        "penny_donate": null,
                                        "coin_reward": 0,
                                        "icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png",
                                        "days_of_premium": null,
                                        "icon_height": 512,
                                        "tiers_by_required_awardings": null,
                                        "resized_icons": [
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
                                                "width": 16,
                                                "height": 16
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
                                                "width": 32,
                                                "height": 32
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
                                                "width": 48,
                                                "height": 48
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
                                                "width": 64,
                                                "height": 64
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
                                                "width": 128,
                                                "height": 128
                                            }
                                        ],
                                        "icon_width": 512,
                                        "static_icon_width": 512,
                                        "start_date": null,
                                        "is_enabled": true,
                                        "awardings_required_to_grant_benefits": null,
                                        "description": "Shows the Silver Award... and that's it.",
                                        "end_date": null,
                                        "sticky_duration_seconds": null,
                                        "subreddit_coin_reward": 0,
                                        "count": 5,
                                        "static_icon_height": 512,
                                        "name": "Silver",
                                        "resized_static_icons": [
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
                                                "width": 16,
                                                "height": 16
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
                                                "width": 32,
                                                "height": 32
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
                                                "width": 48,
                                                "height": 48
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
                                                "width": 64,
                                                "height": 64
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
                                                "width": 128,
                                                "height": 128
                                            }
                                        ],
                                        "icon_format": null,
                                        "award_sub_type": "GLOBAL",
                                        "penny_price": null,
                                        "award_type": "global",
                                        "static_icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png"
                                    }
                                ],
                                "awarders": [],
                                "media_only": false,
                                "can_gild": false,
                                "spoiler": false,
                                "locked": false,
                                "author_flair_text": null,
                                "treatment_tags": [],
                                "visited": false,
                                "removed_by": null,
                                "num_reports": null,
                                "distinguished": null,
                                "subreddit_id": "t5_2s5ti",
                                "author_is_blocked": false,
                                "mod_reason_by": null,
                                "removal_reason": null,
                                "link_flair_background_color": "",
                                "id": "wii02j",
                                "is_robot_indexable": true,
                                "num_duplicates": 8,
                                "report_reasons": null,
                                "author": "Oxygen_01",
                                "discussion_type": null,
                                "num_comments": 399,
                                "send_replies": true,
                                "media": null,
                                "contest_mode": false,
                                "author_patreon_flair": false,
                                "author_flair_text_color": null,
                                "permalink": "/r/meirl/comments/wii02j/meirl/",
                                "whitelist_status": "all_ads",
                                "stickied": false,
                                "url": "https://i.redd.it/u455wjid5bg91.jpg",
                                "subreddit_subscribers": 2001320,
                                "created_utc": 1659885204,
                                "num_crossposts": 7,
                                "mod_reports": [],
                                "is_video": false
                            }
                        }
                    ],
                    "before": null
                }
            },
            {
                "kind": "Listing",
                "data": {
                    "after": null,
                    "dist": null,
                    "modhash": "",
                    "geo_filter": "",
                    "children": [
                        {
                            "kind": "t1",
                            "data": {
                                "subreddit_id": "t5_2s5ti",
                                "approved_at_utc": null,
                                "author_is_blocked": false,
                                "comment_type": null,
                                "awarders": [],
                                "mod_reason_by": null,
                                "banned_by": null,
                                "author_flair_type": "text",
                                "total_awards_received": 0,
                                "subreddit": "meirl",
                                "author_flair_template_id": null,
                                "likes": null,
                                "replies": {
                                    "kind": "Listing",
                                    "data": {
                                        "after": null,
                                        "dist": null,
                                        "modhash": "",
                                        "geo_filter": "",
                                        "children": [
                                            {
                                                "kind": "t1",
                                                "data": {
                                                    "subreddit_id": "t5_2s5ti",
                                                    "approved_at_utc": null,
                                                    "author_is_blocked": false,
                                                    "comment_type": null,
                                                    "awarders": [],
                                                    "mod_reason_by": null,
                                                    "banned_by": null,
                                                    "author_flair_type": "text",
                                                    "total_awards_received": 0,
                                                    "subreddit": "meirl",
                                                    "author_flair_template_id": null,
                                                    "likes": null,
                                                    "replies": {
                                                        "kind": "Listing",
                                                        "data": {
                                                            "after": null,
                                                            "dist": null,
                                                            "modhash": "",
                                                            "geo_filter": "",
                                                            "children": [
                                                                {
                                                                    "kind": "t1",
                                                                    "data": {
                                                                        "subreddit_id": "t5_2s5ti",
                                                                        "approved_at_utc": null,
                                                                        "author_is_blocked": false,
                                                                        "comment_type": null,
                                                                        "awarders": [],
                                                                        "mod_reason_by": null,
                                                                        "banned_by": null,
                                                                        "author_flair_type": "text",
                                                                        "total_awards_received": 0,
                                                                        "subreddit": "meirl",
                                                                        "author_flair_template_id": null,
                                                                        "likes": null,
                                                                        "replies": {
                                                                            "kind": "Listing",
                                                                            "data": {
                                                                                "after": null,
                                                                                "dist": null,
                                                                                "modhash": "",
                                                                                "geo_filter": "",
                                                                                "children": [
                                                                                    {
                                                                                        "kind": "t1",
                                                                                        "data": {
                                                                                            "subreddit_id": "t5_2s5ti",
                                                                                            "approved_at_utc": null,
                                                                                            "author_is_blocked": false,
                                                                                            "comment_type": null,
                                                                                            "awarders": [],
                                                                                            "mod_reason_by": null,
                                                                                            "banned_by": null,
                                                                                            "author_flair_type": "text",
                                                                                            "total_awards_received": 0,
                                                                                            "subreddit": "meirl",
                                                                                            "author_flair_template_id": null,
                                                                                            "likes": null,
                                                                                            "replies": {
                                                                                                "kind": "Listing",
                                                                                                "data": {
                                                                                                    "after": null,
                                                                                                    "dist": null,
                                                                                                    "modhash": "",
                                                                                                    "geo_filter": "",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "kind": "t1",
                                                                                                            "data": {
                                                                                                                "subreddit_id": "t5_2s5ti",
                                                                                                                "approved_at_utc": null,
                                                                                                                "author_is_blocked": false,
                                                                                                                "comment_type": null,
                                                                                                                "awarders": [],
                                                                                                                "mod_reason_by": null,
                                                                                                                "banned_by": null,
                                                                                                                "author_flair_type": "text",
                                                                                                                "total_awards_received": 0,
                                                                                                                "subreddit": "meirl",
                                                                                                                "author_flair_template_id": null,
                                                                                                                "distinguished": null,
                                                                                                                "likes": null,
                                                                                                                "replies": "",
                                                                                                                "user_reports": [],
                                                                                                                "saved": false,
                                                                                                                "id": "ijey5yj",
                                                                                                                "banned_at_utc": null,
                                                                                                                "mod_reason_title": null,
                                                                                                                "gilded": 0,
                                                                                                                "archived": false,
                                                                                                                "collapsed_reason_code": null,
                                                                                                                "no_follow": false,
                                                                                                                "author": "Seraphendipity",
                                                                                                                "can_mod_post": false,
                                                                                                                "send_replies": true,
                                                                                                                "parent_id": "t1_ijew0gb",
                                                                                                                "score": 30,
                                                                                                                "author_fullname": "t2_mcu29qs",
                                                                                                                "removal_reason": null,
                                                                                                                "approved_by": null,
                                                                                                                "mod_note": null,
                                                                                                                "all_awardings": [],
                                                                                                                "body": "heck yes, finally a game that speaks to the heart!",
                                                                                                                "edited": false,
                                                                                                                "author_flair_css_class": null,
                                                                                                                "name": "t1_ijey5yj",
                                                                                                                "is_submitter": false,
                                                                                                                "downs": 0,
                                                                                                                "author_flair_richtext": [],
                                                                                                                "author_patreon_flair": false,
                                                                                                                "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;heck yes, finally a game that speaks to the heart!&lt;/p&gt;\n&lt;/div&gt;",
                                                                                                                "gildings": {},
                                                                                                                "collapsed_reason": null,
                                                                                                                "link_id": "t3_wii02j",
                                                                                                                "associated_award": null,
                                                                                                                "stickied": false,
                                                                                                                "author_premium": false,
                                                                                                                "can_gild": true,
                                                                                                                "top_awarded_type": null,
                                                                                                                "unrepliable_reason": null,
                                                                                                                "author_flair_text_color": null,
                                                                                                                "treatment_tags": [],
                                                                                                                "score_hidden": false,
                                                                                                                "permalink": "/r/meirl/comments/wii02j/meirl/ijey5yj/",
                                                                                                                "subreddit_type": "public",
                                                                                                                "locked": false,
                                                                                                                "report_reasons": null,
                                                                                                                "created": 1659944508,
                                                                                                                "author_flair_text": null,
                                                                                                                "collapsed": false,
                                                                                                                "created_utc": 1659944508,
                                                                                                                "subreddit_name_prefixed": "r/meirl",
                                                                                                                "controversiality": 0,
                                                                                                                "depth": 4,
                                                                                                                "author_flair_background_color": null,
                                                                                                                "collapsed_because_crowd_control": null,
                                                                                                                "mod_reports": [],
                                                                                                                "num_reports": null,
                                                                                                                "ups": 30
                                                                                                            }
                                                                                                        }
                                                                                                    ],
                                                                                                    "before": null
                                                                                                }
                                                                                            },
                                                                                            "user_reports": [],
                                                                                            "saved": false,
                                                                                            "id": "ijew0gb",
                                                                                            "banned_at_utc": null,
                                                                                            "mod_reason_title": null,
                                                                                            "gilded": 0,
                                                                                            "archived": false,
                                                                                            "collapsed_reason_code": null,
                                                                                            "no_follow": false,
                                                                                            "author": "IdioticZacc",
                                                                                            "can_mod_post": false,
                                                                                            "send_replies": true,
                                                                                            "parent_id": "t1_ijejazj",
                                                                                            "score": 77,
                                                                                            "author_fullname": "t2_2tmo6q3i",
                                                                                            "removal_reason": null,
                                                                                            "approved_by": null,
                                                                                            "mod_note": null,
                                                                                            "all_awardings": [],
                                                                                            "collapsed": false,
                                                                                            "body": "The mc is you, you choose to be a sociopathic killer dude",
                                                                                            "edited": false,
                                                                                            "top_awarded_type": null,
                                                                                            "author_flair_css_class": null,
                                                                                            "name": "t1_ijew0gb",
                                                                                            "is_submitter": false,
                                                                                            "downs": 0,
                                                                                            "author_flair_richtext": [],
                                                                                            "author_patreon_flair": false,
                                                                                            "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;The mc is you, you choose to be a sociopathic killer dude&lt;/p&gt;\n&lt;/div&gt;",
                                                                                            "gildings": {},
                                                                                            "collapsed_reason": null,
                                                                                            "distinguished": null,
                                                                                            "associated_award": null,
                                                                                            "stickied": false,
                                                                                            "author_premium": false,
                                                                                            "can_gild": true,
                                                                                            "link_id": "t3_wii02j",
                                                                                            "unrepliable_reason": null,
                                                                                            "author_flair_text_color": null,
                                                                                            "score_hidden": false,
                                                                                            "permalink": "/r/meirl/comments/wii02j/meirl/ijew0gb/",
                                                                                            "subreddit_type": "public",
                                                                                            "locked": false,
                                                                                            "report_reasons": null,
                                                                                            "created": 1659942776,
                                                                                            "author_flair_text": null,
                                                                                            "treatment_tags": [],
                                                                                            "created_utc": 1659942776,
                                                                                            "subreddit_name_prefixed": "r/meirl",
                                                                                            "controversiality": 0,
                                                                                            "depth": 3,
                                                                                            "author_flair_background_color": null,
                                                                                            "collapsed_because_crowd_control": null,
                                                                                            "mod_reports": [],
                                                                                            "num_reports": null,
                                                                                            "ups": 77
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "kind": "t1",
                                                                                        "data": {
                                                                                            "subreddit_id": "t5_2s5ti",
                                                                                            "approved_at_utc": null,
                                                                                            "author_is_blocked": false,
                                                                                            "comment_type": null,
                                                                                            "awarders": [],
                                                                                            "mod_reason_by": null,
                                                                                            "banned_by": null,
                                                                                            "author_flair_type": "text",
                                                                                            "total_awards_received": 0,
                                                                                            "subreddit": "meirl",
                                                                                            "author_flair_template_id": null,
                                                                                            "likes": null,
                                                                                            "replies": "",
                                                                                            "user_reports": [],
                                                                                            "saved": false,
                                                                                            "id": "ijexy14",
                                                                                            "banned_at_utc": null,
                                                                                            "mod_reason_title": null,
                                                                                            "gilded": 0,
                                                                                            "archived": false,
                                                                                            "collapsed_reason_code": null,
                                                                                            "no_follow": false,
                                                                                            "author": "Wide_Dude_98",
                                                                                            "can_mod_post": false,
                                                                                            "send_replies": true,
                                                                                            "parent_id": "t1_ijejazj",
                                                                                            "score": 19,
                                                                                            "author_fullname": "t2_duxvs7my",
                                                                                            "removal_reason": null,
                                                                                            "approved_by": null,
                                                                                            "mod_note": null,
                                                                                            "all_awardings": [],
                                                                                            "collapsed": false,
                                                                                            "body": "There is 3 main character in singleplayer that you can play as, and you can be whoever the hell you want to be in multiplayer.",
                                                                                            "edited": false,
                                                                                            "top_awarded_type": null,
                                                                                            "author_flair_css_class": null,
                                                                                            "name": "t1_ijexy14",
                                                                                            "is_submitter": false,
                                                                                            "downs": 0,
                                                                                            "author_flair_richtext": [],
                                                                                            "author_patreon_flair": false,
                                                                                            "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;There is 3 main character in singleplayer that you can play as, and you can be whoever the hell you want to be in multiplayer.&lt;/p&gt;\n&lt;/div&gt;",
                                                                                            "gildings": {},
                                                                                            "collapsed_reason": null,
                                                                                            "distinguished": null,
                                                                                            "associated_award": null,
                                                                                            "stickied": false,
                                                                                            "author_premium": false,
                                                                                            "can_gild": true,
                                                                                            "link_id": "t3_wii02j",
                                                                                            "unrepliable_reason": null,
                                                                                            "author_flair_text_color": null,
                                                                                            "score_hidden": false,
                                                                                            "permalink": "/r/meirl/comments/wii02j/meirl/ijexy14/",
                                                                                            "subreddit_type": "public",
                                                                                            "locked": false,
                                                                                            "report_reasons": null,
                                                                                            "created": 1659944329,
                                                                                            "author_flair_text": null,
                                                                                            "treatment_tags": [],
                                                                                            "created_utc": 1659944329,
                                                                                            "subreddit_name_prefixed": "r/meirl",
                                                                                            "controversiality": 0,
                                                                                            "depth": 3,
                                                                                            "author_flair_background_color": null,
                                                                                            "collapsed_because_crowd_control": null,
                                                                                            "mod_reports": [],
                                                                                            "num_reports": null,
                                                                                            "ups": 19
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "before": null
                                                                            }
                                                                        },
                                                                        "user_reports": [],
                                                                        "saved": false,
                                                                        "id": "ijejazj",
                                                                        "banned_at_utc": null,
                                                                        "mod_reason_title": null,
                                                                        "gilded": 0,
                                                                        "archived": false,
                                                                        "collapsed_reason_code": null,
                                                                        "no_follow": false,
                                                                        "author": "Seraphendipity",
                                                                        "can_mod_post": false,
                                                                        "send_replies": true,
                                                                        "parent_id": "t1_ijdjzs9",
                                                                        "score": 47,
                                                                        "author_fullname": "t2_mcu29qs",
                                                                        "removal_reason": null,
                                                                        "approved_by": null,
                                                                        "mod_note": null,
                                                                        "all_awardings": [],
                                                                        "body": "...idk the game well, but isn't MC like a sociopathic killer dude?",
                                                                        "edited": false,
                                                                        "top_awarded_type": null,
                                                                        "downs": 0,
                                                                        "author_flair_css_class": null,
                                                                        "name": "t1_ijejazj",
                                                                        "is_submitter": false,
                                                                        "collapsed": false,
                                                                        "author_flair_richtext": [],
                                                                        "author_patreon_flair": false,
                                                                        "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;...idk the game well, but isn&amp;#39;t MC like a sociopathic killer dude?&lt;/p&gt;\n&lt;/div&gt;",
                                                                        "gildings": {},
                                                                        "collapsed_reason": null,
                                                                        "distinguished": null,
                                                                        "associated_award": null,
                                                                        "stickied": false,
                                                                        "author_premium": false,
                                                                        "can_gild": true,
                                                                        "link_id": "t3_wii02j",
                                                                        "unrepliable_reason": null,
                                                                        "author_flair_text_color": null,
                                                                        "score_hidden": false,
                                                                        "permalink": "/r/meirl/comments/wii02j/meirl/ijejazj/",
                                                                        "subreddit_type": "public",
                                                                        "locked": false,
                                                                        "report_reasons": null,
                                                                        "created": 1659933850,
                                                                        "author_flair_text": null,
                                                                        "treatment_tags": [],
                                                                        "created_utc": 1659933850,
                                                                        "subreddit_name_prefixed": "r/meirl",
                                                                        "controversiality": 0,
                                                                        "depth": 2,
                                                                        "author_flair_background_color": null,
                                                                        "collapsed_because_crowd_control": null,
                                                                        "mod_reports": [],
                                                                        "num_reports": null,
                                                                        "ups": 47
                                                                    }
                                                                }
                                                            ],
                                                            "before": null
                                                        }
                                                    },
                                                    "user_reports": [],
                                                    "saved": false,
                                                    "id": "ijdjzs9",
                                                    "banned_at_utc": null,
                                                    "mod_reason_title": null,
                                                    "gilded": 0,
                                                    "archived": false,
                                                    "collapsed_reason_code": null,
                                                    "no_follow": false,
                                                    "author": "Lizard_brooks",
                                                    "can_mod_post": false,
                                                    "created_utc": 1659916026,
                                                    "send_replies": true,
                                                    "parent_id": "t1_ijcexao",
                                                    "score": 211,
                                                    "author_fullname": "t2_1m259xmd",
                                                    "removal_reason": null,
                                                    "approved_by": null,
                                                    "mod_note": null,
                                                    "all_awardings": [],
                                                    "body": "Right this has wholesome vibes for sure.",
                                                    "edited": false,
                                                    "top_awarded_type": null,
                                                    "author_flair_css_class": null,
                                                    "name": "t1_ijdjzs9",
                                                    "is_submitter": false,
                                                    "downs": 0,
                                                    "author_flair_richtext": [],
                                                    "author_patreon_flair": false,
                                                    "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;Right this has wholesome vibes for sure.&lt;/p&gt;\n&lt;/div&gt;",
                                                    "gildings": {},
                                                    "collapsed_reason": null,
                                                    "distinguished": null,
                                                    "associated_award": null,
                                                    "stickied": false,
                                                    "author_premium": false,
                                                    "can_gild": true,
                                                    "link_id": "t3_wii02j",
                                                    "unrepliable_reason": null,
                                                    "author_flair_text_color": null,
                                                    "score_hidden": false,
                                                    "permalink": "/r/meirl/comments/wii02j/meirl/ijdjzs9/",
                                                    "subreddit_type": "public",
                                                    "locked": false,
                                                    "report_reasons": null,
                                                    "created": 1659916026,
                                                    "author_flair_text": null,
                                                    "treatment_tags": [],
                                                    "collapsed": false,
                                                    "subreddit_name_prefixed": "r/meirl",
                                                    "controversiality": 0,
                                                    "depth": 1,
                                                    "author_flair_background_color": null,
                                                    "collapsed_because_crowd_control": null,
                                                    "mod_reports": [],
                                                    "num_reports": null,
                                                    "ups": 211
                                                }
                                            },
                                            {
                                                "kind": "t1",
                                                "data": {
                                                    "subreddit_id": "t5_2s5ti",
                                                    "approved_at_utc": null,
                                                    "author_is_blocked": false,
                                                    "comment_type": null,
                                                    "awarders": [],
                                                    "mod_reason_by": null,
                                                    "banned_by": null,
                                                    "author_flair_type": "text",
                                                    "total_awards_received": 0,
                                                    "subreddit": "meirl",
                                                    "author_flair_template_id": null,
                                                    "likes": null,
                                                    "replies": "",
                                                    "user_reports": [],
                                                    "saved": false,
                                                    "id": "iksiswo",
                                                    "banned_at_utc": null,
                                                    "mod_reason_title": null,
                                                    "gilded": 0,
                                                    "archived": false,
                                                    "collapsed_reason_code": null,
                                                    "no_follow": true,
                                                    "author": "Marthaver1",
                                                    "can_mod_post": false,
                                                    "created_utc": 1660828686,
                                                    "send_replies": true,
                                                    "parent_id": "t1_ijcexao",
                                                    "score": 2,
                                                    "author_fullname": "t2_5fz0e4nf",
                                                    "removal_reason": null,
                                                    "approved_by": null,
                                                    "mod_note": null,
                                                    "all_awardings": [],
                                                    "body": "In GTA Online, which is what the custom character is from, the beach area, “Del Perro Pier” and the adjacent beaches are a hot bed for assholes Sniping and shooting RPGs at other players. Definitely a dangerous area. Glad GTA dude is there to help and protect.",
                                                    "edited": false,
                                                    "top_awarded_type": null,
                                                    "author_flair_css_class": null,
                                                    "name": "t1_iksiswo",
                                                    "is_submitter": false,
                                                    "downs": 0,
                                                    "author_flair_richtext": [],
                                                    "author_patreon_flair": false,
                                                    "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;In GTA Online, which is what the custom character is from, the beach area, “Del Perro Pier” and the adjacent beaches are a hot bed for assholes Sniping and shooting RPGs at other players. Definitely a dangerous area. Glad GTA dude is there to help and protect.&lt;/p&gt;\n&lt;/div&gt;",
                                                    "gildings": {},
                                                    "collapsed_reason": null,
                                                    "distinguished": null,
                                                    "associated_award": null,
                                                    "stickied": false,
                                                    "author_premium": false,
                                                    "can_gild": true,
                                                    "link_id": "t3_wii02j",
                                                    "unrepliable_reason": null,
                                                    "author_flair_text_color": null,
                                                    "score_hidden": false,
                                                    "permalink": "/r/meirl/comments/wii02j/meirl/iksiswo/",
                                                    "subreddit_type": "public",
                                                    "locked": false,
                                                    "report_reasons": null,
                                                    "created": 1660828686,
                                                    "author_flair_text": null,
                                                    "treatment_tags": [],
                                                    "collapsed": false,
                                                    "subreddit_name_prefixed": "r/meirl",
                                                    "controversiality": 0,
                                                    "depth": 1,
                                                    "author_flair_background_color": null,
                                                    "collapsed_because_crowd_control": null,
                                                    "mod_reports": [],
                                                    "num_reports": null,
                                                    "ups": 2
                                                }
                                            }
                                        ],
                                        "before": null
                                    }
                                },
                                "user_reports": [],
                                "saved": false,
                                "id": "ijcexao",
                                "banned_at_utc": null,
                                "mod_reason_title": null,
                                "gilded": 0,
                                "archived": false,
                                "collapsed_reason_code": null,
                                "no_follow": false,
                                "author": "Terrible_Indent",
                                "can_mod_post": false,
                                "created_utc": 1659898737,
                                "send_replies": true,
                                "parent_id": "t3_wii02j",
                                "score": 775,
                                "author_fullname": "t2_cvuv2i4",
                                "approved_by": null,
                                "mod_note": null,
                                "all_awardings": [],
                                "collapsed": false,
                                "body": "Aw he said he's out there with you, that's so sweet",
                                "edited": false,
                                "top_awarded_type": null,
                                "author_flair_css_class": null,
                                "name": "t1_ijcexao",
                                "is_submitter": false,
                                "downs": 0,
                                "author_flair_richtext": [],
                                "author_patreon_flair": false,
                                "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;Aw he said he&amp;#39;s out there with you, that&amp;#39;s so sweet&lt;/p&gt;\n&lt;/div&gt;",
                                "removal_reason": null,
                                "collapsed_reason": null,
                                "distinguished": null,
                                "associated_award": null,
                                "stickied": false,
                                "author_premium": false,
                                "can_gild": true,
                                "gildings": {},
                                "unrepliable_reason": null,
                                "author_flair_text_color": null,
                                "score_hidden": false,
                                "permalink": "/r/meirl/comments/wii02j/meirl/ijcexao/",
                                "subreddit_type": "public",
                                "locked": false,
                                "report_reasons": null,
                                "created": 1659898737,
                                "author_flair_text": null,
                                "treatment_tags": [],
                                "link_id": "t3_wii02j",
                                "subreddit_name_prefixed": "r/meirl",
                                "controversiality": 0,
                                "depth": 0,
                                "author_flair_background_color": null,
                                "collapsed_because_crowd_control": null,
                                "mod_reports": [],
                                "num_reports": null,
                                "ups": 775
                            }
                        }
                        ]
                }
            }
            ]

        const expectedData = [
            {
                body: "Aw he said he's out there with you, that's so sweet",
                author: "Terrible_Indent",
                createdAt: 1659898737
            }
        ];
        const url = "r/meirl/comments/wii02j/meirl/"
        const actualResult = extractCommentsFromPost(mockData, url);

        expect(actualResult).toEqual(expectedData);
    });

    it('should extract body, author and time from one post', function () {
        const mockData = [
            {
                "kind": "Listing",
                "data": {
                    "after": null,
                    "dist": 1,
                    "modhash": "",
                    "geo_filter": "",
                    "children": [
                        {
                            "kind": "t3",
                            "data": {
                                "approved_at_utc": null,
                                "subreddit": "meirl",
                                "selftext": "",
                                "user_reports": [],
                                "saved": false,
                                "mod_reason_title": null,
                                "gilded": 0,
                                "clicked": false,
                                "title": "meirl",
                                "link_flair_richtext": [],
                                "subreddit_name_prefixed": "r/meirl",
                                "hidden": false,
                                "pwls": 6,
                                "link_flair_css_class": null,
                                "downs": 0,
                                "thumbnail_height": 140,
                                "top_awarded_type": null,
                                "parent_whitelist_status": "all_ads",
                                "hide_score": false,
                                "name": "t3_wii02j",
                                "quarantine": false,
                                "link_flair_text_color": "dark",
                                "upvote_ratio": 0.94,
                                "author_flair_background_color": null,
                                "subreddit_type": "public",
                                "ups": 101174,
                                "total_awards_received": 17,
                                "media_embed": {},
                                "thumbnail_width": 140,
                                "author_flair_template_id": null,
                                "is_original_content": false,
                                "author_fullname": "t2_chh8atwk",
                                "secure_media": null,
                                "is_reddit_media_domain": true,
                                "is_meta": false,
                                "category": null,
                                "secure_media_embed": {},
                                "link_flair_text": null,
                                "can_mod_post": false,
                                "score": 101174,
                                "approved_by": null,
                                "is_created_from_ads_ui": false,
                                "author_premium": true,
                                "thumbnail": "https://b.thumbs.redditmedia.com/31l1EL0XmgAD1hxRnpCn0Z-eqKVqsiAgPi74m2ujzfo.jpg",
                                "edited": false,
                                "author_flair_css_class": null,
                                "author_flair_richtext": [],
                                "gildings": {
                                    "gid_1": 5
                                },
                                "post_hint": "image",
                                "content_categories": null,
                                "is_self": false,
                                "mod_note": null,
                                "created": 1659885204,
                                "link_flair_type": "text",
                                "wls": 6,
                                "removed_by_category": null,
                                "banned_by": null,
                                "author_flair_type": "text",
                                "domain": "i.redd.it",
                                "allow_live_comments": true,
                                "selftext_html": null,
                                "likes": null,
                                "suggested_sort": null,
                                "banned_at_utc": null,
                                "url_overridden_by_dest": "https://i.redd.it/u455wjid5bg91.jpg",
                                "view_count": null,
                                "archived": false,
                                "no_follow": false,
                                "is_crosspostable": false,
                                "pinned": false,
                                "over_18": false,
                                "preview": {
                                    "images": [
                                        {
                                            "source": {
                                                "url": "https://preview.redd.it/u455wjid5bg91.jpg?auto=webp&amp;s=b4b6e0c1988cfbb83f574167d5425ada3772ecb9",
                                                "width": 819,
                                                "height": 1018
                                            },
                                            "resolutions": [
                                                {
                                                    "url": "https://preview.redd.it/u455wjid5bg91.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=dfde1ea6c8dcef74fd5945164b3b6fa69801b0bf",
                                                    "width": 108,
                                                    "height": 134
                                                },
                                                {
                                                    "url": "https://preview.redd.it/u455wjid5bg91.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=90f0b69180f609d492cb0a1609d9a263b947a13e",
                                                    "width": 216,
                                                    "height": 268
                                                },
                                                {
                                                    "url": "https://preview.redd.it/u455wjid5bg91.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=e144cc59c8569f95ecdfc784148aeab0dcef1e7b",
                                                    "width": 320,
                                                    "height": 397
                                                },
                                                {
                                                    "url": "https://preview.redd.it/u455wjid5bg91.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=aca39f6fed86a4678c2be0174f8e3ce6ec9ca8ab",
                                                    "width": 640,
                                                    "height": 795
                                                }
                                            ],
                                            "variants": {},
                                            "id": "gsT32pYb9Ca6xBdJY8A4KCUISd6tdksSE-xn4v4Ri0w"
                                        }
                                    ],
                                    "enabled": true
                                },
                                "all_awardings": [
                                    {
                                        "giver_coin_reward": null,
                                        "subreddit_id": null,
                                        "is_new": false,
                                        "days_of_drip_extension": null,
                                        "coin_price": 30,
                                        "id": "award_b4ff447e-05a5-42dc-9002-63568807cfe6",
                                        "penny_donate": null,
                                        "coin_reward": 0,
                                        "icon_url": "https://www.redditstatic.com/gold/awards/icon/Illuminati_512.png",
                                        "days_of_premium": null,
                                        "icon_height": 2048,
                                        "tiers_by_required_awardings": null,
                                        "resized_icons": [
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/Illuminati_16.png",
                                                "width": 16,
                                                "height": 16
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/Illuminati_32.png",
                                                "width": 32,
                                                "height": 32
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/Illuminati_48.png",
                                                "width": 48,
                                                "height": 48
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/Illuminati_64.png",
                                                "width": 64,
                                                "height": 64
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/Illuminati_128.png",
                                                "width": 128,
                                                "height": 128
                                            }
                                        ],
                                        "icon_width": 2048,
                                        "static_icon_width": 2048,
                                        "start_date": null,
                                        "is_enabled": true,
                                        "awardings_required_to_grant_benefits": null,
                                        "description": "A glowing commendation for all to see",
                                        "end_date": null,
                                        "sticky_duration_seconds": null,
                                        "subreddit_coin_reward": 0,
                                        "count": 1,
                                        "static_icon_height": 2048,
                                        "name": "All-Seeing Upvote",
                                        "resized_static_icons": [
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png?width=16&amp;height=16&amp;auto=webp&amp;s=978c93744e53b8c9305467a7be792e5c401eac6c",
                                                "width": 16,
                                                "height": 16
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png?width=32&amp;height=32&amp;auto=webp&amp;s=d2ee343eef5048ad3add75d4a4d4e3922bb9565a",
                                                "width": 32,
                                                "height": 32
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png?width=48&amp;height=48&amp;auto=webp&amp;s=7d216fd3a05c61d9fb75b27092844c546d958f14",
                                                "width": 48,
                                                "height": 48
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png?width=64&amp;height=64&amp;auto=webp&amp;s=b76693f84fd19b04d0c0444a9812d812105e2d8f",
                                                "width": 64,
                                                "height": 64
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png?width=128&amp;height=128&amp;auto=webp&amp;s=5353352ae9f443c353ef0b7725dabcfc1b3829a5",
                                                "width": 128,
                                                "height": 128
                                            }
                                        ],
                                        "icon_format": "APNG",
                                        "award_sub_type": "PREMIUM",
                                        "penny_price": null,
                                        "award_type": "global",
                                        "static_icon_url": "https://i.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png"
                                    },
                                    {
                                        "giver_coin_reward": null,
                                        "subreddit_id": null,
                                        "is_new": false,
                                        "days_of_drip_extension": null,
                                        "coin_price": 150,
                                        "id": "award_f44611f1-b89e-46dc-97fe-892280b13b82",
                                        "penny_donate": null,
                                        "coin_reward": 0,
                                        "icon_url": "https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png",
                                        "days_of_premium": null,
                                        "icon_height": 2048,
                                        "tiers_by_required_awardings": null,
                                        "resized_icons": [
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=16&amp;height=16&amp;auto=webp&amp;s=a5662dfbdb402bf67866c050aa76c31c147c2f45",
                                                "width": 16,
                                                "height": 16
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=32&amp;height=32&amp;auto=webp&amp;s=a6882eb3f380e8e88009789f4d0072e17b8c59f1",
                                                "width": 32,
                                                "height": 32
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=48&amp;height=48&amp;auto=webp&amp;s=e50064b090879e8a0b55e433f6ee61d5cb5fbe1d",
                                                "width": 48,
                                                "height": 48
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=64&amp;height=64&amp;auto=webp&amp;s=8e5bb2e76683cb6b161830bcdd9642049d6adc11",
                                                "width": 64,
                                                "height": 64
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=128&amp;height=128&amp;auto=webp&amp;s=eda4a9246f95f42ee6940cc0ec65306fd20de878",
                                                "width": 128,
                                                "height": 128
                                            }
                                        ],
                                        "icon_width": 2048,
                                        "static_icon_width": 2048,
                                        "start_date": null,
                                        "is_enabled": true,
                                        "awardings_required_to_grant_benefits": null,
                                        "description": "Thank you stranger. Shows the award.",
                                        "end_date": null,
                                        "sticky_duration_seconds": null,
                                        "subreddit_coin_reward": 0,
                                        "count": 3,
                                        "static_icon_height": 2048,
                                        "name": "Helpful",
                                        "resized_static_icons": [
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=16&amp;height=16&amp;auto=webp&amp;s=a5662dfbdb402bf67866c050aa76c31c147c2f45",
                                                "width": 16,
                                                "height": 16
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=32&amp;height=32&amp;auto=webp&amp;s=a6882eb3f380e8e88009789f4d0072e17b8c59f1",
                                                "width": 32,
                                                "height": 32
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=48&amp;height=48&amp;auto=webp&amp;s=e50064b090879e8a0b55e433f6ee61d5cb5fbe1d",
                                                "width": 48,
                                                "height": 48
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=64&amp;height=64&amp;auto=webp&amp;s=8e5bb2e76683cb6b161830bcdd9642049d6adc11",
                                                "width": 64,
                                                "height": 64
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=128&amp;height=128&amp;auto=webp&amp;s=eda4a9246f95f42ee6940cc0ec65306fd20de878",
                                                "width": 128,
                                                "height": 128
                                            }
                                        ],
                                        "icon_format": null,
                                        "award_sub_type": "GLOBAL",
                                        "penny_price": null,
                                        "award_type": "global",
                                        "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png"
                                    },
                                    {
                                        "giver_coin_reward": null,
                                        "subreddit_id": null,
                                        "is_new": false,
                                        "days_of_drip_extension": null,
                                        "coin_price": 125,
                                        "id": "award_5f123e3d-4f48-42f4-9c11-e98b566d5897",
                                        "penny_donate": null,
                                        "coin_reward": 0,
                                        "icon_url": "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png",
                                        "days_of_premium": null,
                                        "icon_height": 2048,
                                        "tiers_by_required_awardings": null,
                                        "resized_icons": [
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0",
                                                "width": 16,
                                                "height": 16
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef",
                                                "width": 32,
                                                "height": 32
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63",
                                                "width": 48,
                                                "height": 48
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb",
                                                "width": 64,
                                                "height": 64
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b",
                                                "width": 128,
                                                "height": 128
                                            }
                                        ],
                                        "icon_width": 2048,
                                        "static_icon_width": 2048,
                                        "start_date": null,
                                        "is_enabled": true,
                                        "awardings_required_to_grant_benefits": null,
                                        "description": "When you come across a feel-good thing.",
                                        "end_date": null,
                                        "sticky_duration_seconds": null,
                                        "subreddit_coin_reward": 0,
                                        "count": 8,
                                        "static_icon_height": 2048,
                                        "name": "Wholesome",
                                        "resized_static_icons": [
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0",
                                                "width": 16,
                                                "height": 16
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef",
                                                "width": 32,
                                                "height": 32
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63",
                                                "width": 48,
                                                "height": 48
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb",
                                                "width": 64,
                                                "height": 64
                                            },
                                            {
                                                "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b",
                                                "width": 128,
                                                "height": 128
                                            }
                                        ],
                                        "icon_format": null,
                                        "award_sub_type": "GLOBAL",
                                        "penny_price": null,
                                        "award_type": "global",
                                        "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png"
                                    },
                                    {
                                        "giver_coin_reward": null,
                                        "subreddit_id": null,
                                        "is_new": false,
                                        "days_of_drip_extension": null,
                                        "coin_price": 100,
                                        "id": "gid_1",
                                        "penny_donate": null,
                                        "coin_reward": 0,
                                        "icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png",
                                        "days_of_premium": null,
                                        "icon_height": 512,
                                        "tiers_by_required_awardings": null,
                                        "resized_icons": [
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
                                                "width": 16,
                                                "height": 16
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
                                                "width": 32,
                                                "height": 32
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
                                                "width": 48,
                                                "height": 48
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
                                                "width": 64,
                                                "height": 64
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
                                                "width": 128,
                                                "height": 128
                                            }
                                        ],
                                        "icon_width": 512,
                                        "static_icon_width": 512,
                                        "start_date": null,
                                        "is_enabled": true,
                                        "awardings_required_to_grant_benefits": null,
                                        "description": "Shows the Silver Award... and that's it.",
                                        "end_date": null,
                                        "sticky_duration_seconds": null,
                                        "subreddit_coin_reward": 0,
                                        "count": 5,
                                        "static_icon_height": 512,
                                        "name": "Silver",
                                        "resized_static_icons": [
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
                                                "width": 16,
                                                "height": 16
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
                                                "width": 32,
                                                "height": 32
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
                                                "width": 48,
                                                "height": 48
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
                                                "width": 64,
                                                "height": 64
                                            },
                                            {
                                                "url": "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
                                                "width": 128,
                                                "height": 128
                                            }
                                        ],
                                        "icon_format": null,
                                        "award_sub_type": "GLOBAL",
                                        "penny_price": null,
                                        "award_type": "global",
                                        "static_icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png"
                                    }
                                ],
                                "awarders": [],
                                "media_only": false,
                                "can_gild": false,
                                "spoiler": false,
                                "locked": false,
                                "author_flair_text": null,
                                "treatment_tags": [],
                                "visited": false,
                                "removed_by": null,
                                "num_reports": null,
                                "distinguished": null,
                                "subreddit_id": "t5_2s5ti",
                                "author_is_blocked": false,
                                "mod_reason_by": null,
                                "removal_reason": null,
                                "link_flair_background_color": "",
                                "id": "wii02j",
                                "is_robot_indexable": true,
                                "num_duplicates": 8,
                                "report_reasons": null,
                                "author": "Oxygen_01",
                                "discussion_type": null,
                                "num_comments": 399,
                                "send_replies": true,
                                "media": null,
                                "contest_mode": false,
                                "author_patreon_flair": false,
                                "author_flair_text_color": null,
                                "permalink": "/r/meirl/comments/wii02j/meirl/",
                                "whitelist_status": "all_ads",
                                "stickied": false,
                                "url": "https://i.redd.it/u455wjid5bg91.jpg",
                                "subreddit_subscribers": 2001320,
                                "created_utc": 1659885204,
                                "num_crossposts": 7,
                                "mod_reports": [],
                                "is_video": false
                            }
                        }
                    ],
                    "before": null
                }
            },
            {
                "kind": "Listing",
                "data": {
                    "after": null,
                    "dist": null,
                    "modhash": "",
                    "geo_filter": "",
                    "children": [
                        {
                            "kind": "t1",
                            "data": {
                                "subreddit_id": "t5_2s5ti",
                                "approved_at_utc": null,
                                "author_is_blocked": false,
                                "comment_type": null,
                                "awarders": [],
                                "mod_reason_by": null,
                                "banned_by": null,
                                "author_flair_type": "text",
                                "total_awards_received": 0,
                                "subreddit": "meirl",
                                "author_flair_template_id": null,
                                "likes": null,
                                "replies": {
                                    "kind": "Listing",
                                    "data": {
                                        "after": null,
                                        "dist": null,
                                        "modhash": "",
                                        "geo_filter": "",
                                        "children": [
                                            {
                                                "kind": "t1",
                                                "data": {
                                                    "subreddit_id": "t5_2s5ti",
                                                    "approved_at_utc": null,
                                                    "author_is_blocked": false,
                                                    "comment_type": null,
                                                    "awarders": [],
                                                    "mod_reason_by": null,
                                                    "banned_by": null,
                                                    "author_flair_type": "text",
                                                    "total_awards_received": 0,
                                                    "subreddit": "meirl",
                                                    "author_flair_template_id": null,
                                                    "likes": null,
                                                    "replies": {
                                                        "kind": "Listing",
                                                        "data": {
                                                            "after": null,
                                                            "dist": null,
                                                            "modhash": "",
                                                            "geo_filter": "",
                                                            "children": [
                                                                {
                                                                    "kind": "t1",
                                                                    "data": {
                                                                        "subreddit_id": "t5_2s5ti",
                                                                        "approved_at_utc": null,
                                                                        "author_is_blocked": false,
                                                                        "comment_type": null,
                                                                        "awarders": [],
                                                                        "mod_reason_by": null,
                                                                        "banned_by": null,
                                                                        "author_flair_type": "text",
                                                                        "total_awards_received": 0,
                                                                        "subreddit": "meirl",
                                                                        "author_flair_template_id": null,
                                                                        "likes": null,
                                                                        "replies": {
                                                                            "kind": "Listing",
                                                                            "data": {
                                                                                "after": null,
                                                                                "dist": null,
                                                                                "modhash": "",
                                                                                "geo_filter": "",
                                                                                "children": [
                                                                                    {
                                                                                        "kind": "t1",
                                                                                        "data": {
                                                                                            "subreddit_id": "t5_2s5ti",
                                                                                            "approved_at_utc": null,
                                                                                            "author_is_blocked": false,
                                                                                            "comment_type": null,
                                                                                            "awarders": [],
                                                                                            "mod_reason_by": null,
                                                                                            "banned_by": null,
                                                                                            "author_flair_type": "text",
                                                                                            "total_awards_received": 0,
                                                                                            "subreddit": "meirl",
                                                                                            "author_flair_template_id": null,
                                                                                            "likes": null,
                                                                                            "replies": {
                                                                                                "kind": "Listing",
                                                                                                "data": {
                                                                                                    "after": null,
                                                                                                    "dist": null,
                                                                                                    "modhash": "",
                                                                                                    "geo_filter": "",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "kind": "t1",
                                                                                                            "data": {
                                                                                                                "subreddit_id": "t5_2s5ti",
                                                                                                                "approved_at_utc": null,
                                                                                                                "author_is_blocked": false,
                                                                                                                "comment_type": null,
                                                                                                                "awarders": [],
                                                                                                                "mod_reason_by": null,
                                                                                                                "banned_by": null,
                                                                                                                "author_flair_type": "text",
                                                                                                                "total_awards_received": 0,
                                                                                                                "subreddit": "meirl",
                                                                                                                "author_flair_template_id": null,
                                                                                                                "distinguished": null,
                                                                                                                "likes": null,
                                                                                                                "replies": "",
                                                                                                                "user_reports": [],
                                                                                                                "saved": false,
                                                                                                                "id": "ijey5yj",
                                                                                                                "banned_at_utc": null,
                                                                                                                "mod_reason_title": null,
                                                                                                                "gilded": 0,
                                                                                                                "archived": false,
                                                                                                                "collapsed_reason_code": null,
                                                                                                                "no_follow": false,
                                                                                                                "author": "Seraphendipity",
                                                                                                                "can_mod_post": false,
                                                                                                                "send_replies": true,
                                                                                                                "parent_id": "t1_ijew0gb",
                                                                                                                "score": 30,
                                                                                                                "author_fullname": "t2_mcu29qs",
                                                                                                                "removal_reason": null,
                                                                                                                "approved_by": null,
                                                                                                                "mod_note": null,
                                                                                                                "all_awardings": [],
                                                                                                                "body": "heck yes, finally a game that speaks to the heart!",
                                                                                                                "edited": false,
                                                                                                                "author_flair_css_class": null,
                                                                                                                "name": "t1_ijey5yj",
                                                                                                                "is_submitter": false,
                                                                                                                "downs": 0,
                                                                                                                "author_flair_richtext": [],
                                                                                                                "author_patreon_flair": false,
                                                                                                                "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;heck yes, finally a game that speaks to the heart!&lt;/p&gt;\n&lt;/div&gt;",
                                                                                                                "gildings": {},
                                                                                                                "collapsed_reason": null,
                                                                                                                "link_id": "t3_wii02j",
                                                                                                                "associated_award": null,
                                                                                                                "stickied": false,
                                                                                                                "author_premium": false,
                                                                                                                "can_gild": true,
                                                                                                                "top_awarded_type": null,
                                                                                                                "unrepliable_reason": null,
                                                                                                                "author_flair_text_color": null,
                                                                                                                "treatment_tags": [],
                                                                                                                "score_hidden": false,
                                                                                                                "permalink": "/r/meirl/comments/wii02j/meirl/ijey5yj/",
                                                                                                                "subreddit_type": "public",
                                                                                                                "locked": false,
                                                                                                                "report_reasons": null,
                                                                                                                "created": 1659944508,
                                                                                                                "author_flair_text": null,
                                                                                                                "collapsed": false,
                                                                                                                "created_utc": 1659944508,
                                                                                                                "subreddit_name_prefixed": "r/meirl",
                                                                                                                "controversiality": 0,
                                                                                                                "depth": 4,
                                                                                                                "author_flair_background_color": null,
                                                                                                                "collapsed_because_crowd_control": null,
                                                                                                                "mod_reports": [],
                                                                                                                "num_reports": null,
                                                                                                                "ups": 30
                                                                                                            }
                                                                                                        }
                                                                                                    ],
                                                                                                    "before": null
                                                                                                }
                                                                                            },
                                                                                            "user_reports": [],
                                                                                            "saved": false,
                                                                                            "id": "ijew0gb",
                                                                                            "banned_at_utc": null,
                                                                                            "mod_reason_title": null,
                                                                                            "gilded": 0,
                                                                                            "archived": false,
                                                                                            "collapsed_reason_code": null,
                                                                                            "no_follow": false,
                                                                                            "author": "IdioticZacc",
                                                                                            "can_mod_post": false,
                                                                                            "send_replies": true,
                                                                                            "parent_id": "t1_ijejazj",
                                                                                            "score": 77,
                                                                                            "author_fullname": "t2_2tmo6q3i",
                                                                                            "removal_reason": null,
                                                                                            "approved_by": null,
                                                                                            "mod_note": null,
                                                                                            "all_awardings": [],
                                                                                            "collapsed": false,
                                                                                            "body": "The mc is you, you choose to be a sociopathic killer dude",
                                                                                            "edited": false,
                                                                                            "top_awarded_type": null,
                                                                                            "author_flair_css_class": null,
                                                                                            "name": "t1_ijew0gb",
                                                                                            "is_submitter": false,
                                                                                            "downs": 0,
                                                                                            "author_flair_richtext": [],
                                                                                            "author_patreon_flair": false,
                                                                                            "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;The mc is you, you choose to be a sociopathic killer dude&lt;/p&gt;\n&lt;/div&gt;",
                                                                                            "gildings": {},
                                                                                            "collapsed_reason": null,
                                                                                            "distinguished": null,
                                                                                            "associated_award": null,
                                                                                            "stickied": false,
                                                                                            "author_premium": false,
                                                                                            "can_gild": true,
                                                                                            "link_id": "t3_wii02j",
                                                                                            "unrepliable_reason": null,
                                                                                            "author_flair_text_color": null,
                                                                                            "score_hidden": false,
                                                                                            "permalink": "/r/meirl/comments/wii02j/meirl/ijew0gb/",
                                                                                            "subreddit_type": "public",
                                                                                            "locked": false,
                                                                                            "report_reasons": null,
                                                                                            "created": 1659942776,
                                                                                            "author_flair_text": null,
                                                                                            "treatment_tags": [],
                                                                                            "created_utc": 1659942776,
                                                                                            "subreddit_name_prefixed": "r/meirl",
                                                                                            "controversiality": 0,
                                                                                            "depth": 3,
                                                                                            "author_flair_background_color": null,
                                                                                            "collapsed_because_crowd_control": null,
                                                                                            "mod_reports": [],
                                                                                            "num_reports": null,
                                                                                            "ups": 77
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "kind": "t1",
                                                                                        "data": {
                                                                                            "subreddit_id": "t5_2s5ti",
                                                                                            "approved_at_utc": null,
                                                                                            "author_is_blocked": false,
                                                                                            "comment_type": null,
                                                                                            "awarders": [],
                                                                                            "mod_reason_by": null,
                                                                                            "banned_by": null,
                                                                                            "author_flair_type": "text",
                                                                                            "total_awards_received": 0,
                                                                                            "subreddit": "meirl",
                                                                                            "author_flair_template_id": null,
                                                                                            "likes": null,
                                                                                            "replies": "",
                                                                                            "user_reports": [],
                                                                                            "saved": false,
                                                                                            "id": "ijexy14",
                                                                                            "banned_at_utc": null,
                                                                                            "mod_reason_title": null,
                                                                                            "gilded": 0,
                                                                                            "archived": false,
                                                                                            "collapsed_reason_code": null,
                                                                                            "no_follow": false,
                                                                                            "author": "Wide_Dude_98",
                                                                                            "can_mod_post": false,
                                                                                            "send_replies": true,
                                                                                            "parent_id": "t1_ijejazj",
                                                                                            "score": 19,
                                                                                            "author_fullname": "t2_duxvs7my",
                                                                                            "removal_reason": null,
                                                                                            "approved_by": null,
                                                                                            "mod_note": null,
                                                                                            "all_awardings": [],
                                                                                            "collapsed": false,
                                                                                            "body": "There is 3 main character in singleplayer that you can play as, and you can be whoever the hell you want to be in multiplayer.",
                                                                                            "edited": false,
                                                                                            "top_awarded_type": null,
                                                                                            "author_flair_css_class": null,
                                                                                            "name": "t1_ijexy14",
                                                                                            "is_submitter": false,
                                                                                            "downs": 0,
                                                                                            "author_flair_richtext": [],
                                                                                            "author_patreon_flair": false,
                                                                                            "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;There is 3 main character in singleplayer that you can play as, and you can be whoever the hell you want to be in multiplayer.&lt;/p&gt;\n&lt;/div&gt;",
                                                                                            "gildings": {},
                                                                                            "collapsed_reason": null,
                                                                                            "distinguished": null,
                                                                                            "associated_award": null,
                                                                                            "stickied": false,
                                                                                            "author_premium": false,
                                                                                            "can_gild": true,
                                                                                            "link_id": "t3_wii02j",
                                                                                            "unrepliable_reason": null,
                                                                                            "author_flair_text_color": null,
                                                                                            "score_hidden": false,
                                                                                            "permalink": "/r/meirl/comments/wii02j/meirl/ijexy14/",
                                                                                            "subreddit_type": "public",
                                                                                            "locked": false,
                                                                                            "report_reasons": null,
                                                                                            "created": 1659944329,
                                                                                            "author_flair_text": null,
                                                                                            "treatment_tags": [],
                                                                                            "created_utc": 1659944329,
                                                                                            "subreddit_name_prefixed": "r/meirl",
                                                                                            "controversiality": 0,
                                                                                            "depth": 3,
                                                                                            "author_flair_background_color": null,
                                                                                            "collapsed_because_crowd_control": null,
                                                                                            "mod_reports": [],
                                                                                            "num_reports": null,
                                                                                            "ups": 19
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "before": null
                                                                            }
                                                                        },
                                                                        "user_reports": [],
                                                                        "saved": false,
                                                                        "id": "ijejazj",
                                                                        "banned_at_utc": null,
                                                                        "mod_reason_title": null,
                                                                        "gilded": 0,
                                                                        "archived": false,
                                                                        "collapsed_reason_code": null,
                                                                        "no_follow": false,
                                                                        "author": "Seraphendipity",
                                                                        "can_mod_post": false,
                                                                        "send_replies": true,
                                                                        "parent_id": "t1_ijdjzs9",
                                                                        "score": 47,
                                                                        "author_fullname": "t2_mcu29qs",
                                                                        "removal_reason": null,
                                                                        "approved_by": null,
                                                                        "mod_note": null,
                                                                        "all_awardings": [],
                                                                        "body": "...idk the game well, but isn't MC like a sociopathic killer dude?",
                                                                        "edited": false,
                                                                        "top_awarded_type": null,
                                                                        "downs": 0,
                                                                        "author_flair_css_class": null,
                                                                        "name": "t1_ijejazj",
                                                                        "is_submitter": false,
                                                                        "collapsed": false,
                                                                        "author_flair_richtext": [],
                                                                        "author_patreon_flair": false,
                                                                        "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;...idk the game well, but isn&amp;#39;t MC like a sociopathic killer dude?&lt;/p&gt;\n&lt;/div&gt;",
                                                                        "gildings": {},
                                                                        "collapsed_reason": null,
                                                                        "distinguished": null,
                                                                        "associated_award": null,
                                                                        "stickied": false,
                                                                        "author_premium": false,
                                                                        "can_gild": true,
                                                                        "link_id": "t3_wii02j",
                                                                        "unrepliable_reason": null,
                                                                        "author_flair_text_color": null,
                                                                        "score_hidden": false,
                                                                        "permalink": "/r/meirl/comments/wii02j/meirl/ijejazj/",
                                                                        "subreddit_type": "public",
                                                                        "locked": false,
                                                                        "report_reasons": null,
                                                                        "created": 1659933850,
                                                                        "author_flair_text": null,
                                                                        "treatment_tags": [],
                                                                        "created_utc": 1659933850,
                                                                        "subreddit_name_prefixed": "r/meirl",
                                                                        "controversiality": 0,
                                                                        "depth": 2,
                                                                        "author_flair_background_color": null,
                                                                        "collapsed_because_crowd_control": null,
                                                                        "mod_reports": [],
                                                                        "num_reports": null,
                                                                        "ups": 47
                                                                    }
                                                                }
                                                            ],
                                                            "before": null
                                                        }
                                                    },
                                                    "user_reports": [],
                                                    "saved": false,
                                                    "id": "ijdjzs9",
                                                    "banned_at_utc": null,
                                                    "mod_reason_title": null,
                                                    "gilded": 0,
                                                    "archived": false,
                                                    "collapsed_reason_code": null,
                                                    "no_follow": false,
                                                    "author": "Lizard_brooks",
                                                    "can_mod_post": false,
                                                    "created_utc": 1659916026,
                                                    "send_replies": true,
                                                    "parent_id": "t1_ijcexao",
                                                    "score": 211,
                                                    "author_fullname": "t2_1m259xmd",
                                                    "removal_reason": null,
                                                    "approved_by": null,
                                                    "mod_note": null,
                                                    "all_awardings": [],
                                                    "body": "Right this has wholesome vibes for sure.",
                                                    "edited": false,
                                                    "top_awarded_type": null,
                                                    "author_flair_css_class": null,
                                                    "name": "t1_ijdjzs9",
                                                    "is_submitter": false,
                                                    "downs": 0,
                                                    "author_flair_richtext": [],
                                                    "author_patreon_flair": false,
                                                    "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;Right this has wholesome vibes for sure.&lt;/p&gt;\n&lt;/div&gt;",
                                                    "gildings": {},
                                                    "collapsed_reason": null,
                                                    "distinguished": null,
                                                    "associated_award": null,
                                                    "stickied": false,
                                                    "author_premium": false,
                                                    "can_gild": true,
                                                    "link_id": "t3_wii02j",
                                                    "unrepliable_reason": null,
                                                    "author_flair_text_color": null,
                                                    "score_hidden": false,
                                                    "permalink": "/r/meirl/comments/wii02j/meirl/ijdjzs9/",
                                                    "subreddit_type": "public",
                                                    "locked": false,
                                                    "report_reasons": null,
                                                    "created": 1659916026,
                                                    "author_flair_text": null,
                                                    "treatment_tags": [],
                                                    "collapsed": false,
                                                    "subreddit_name_prefixed": "r/meirl",
                                                    "controversiality": 0,
                                                    "depth": 1,
                                                    "author_flair_background_color": null,
                                                    "collapsed_because_crowd_control": null,
                                                    "mod_reports": [],
                                                    "num_reports": null,
                                                    "ups": 211
                                                }
                                            },
                                            {
                                                "kind": "t1",
                                                "data": {
                                                    "subreddit_id": "t5_2s5ti",
                                                    "approved_at_utc": null,
                                                    "author_is_blocked": false,
                                                    "comment_type": null,
                                                    "awarders": [],
                                                    "mod_reason_by": null,
                                                    "banned_by": null,
                                                    "author_flair_type": "text",
                                                    "total_awards_received": 0,
                                                    "subreddit": "meirl",
                                                    "author_flair_template_id": null,
                                                    "likes": null,
                                                    "replies": "",
                                                    "user_reports": [],
                                                    "saved": false,
                                                    "id": "iksiswo",
                                                    "banned_at_utc": null,
                                                    "mod_reason_title": null,
                                                    "gilded": 0,
                                                    "archived": false,
                                                    "collapsed_reason_code": null,
                                                    "no_follow": true,
                                                    "author": "Marthaver1",
                                                    "can_mod_post": false,
                                                    "created_utc": 1660828686,
                                                    "send_replies": true,
                                                    "parent_id": "t1_ijcexao",
                                                    "score": 2,
                                                    "author_fullname": "t2_5fz0e4nf",
                                                    "removal_reason": null,
                                                    "approved_by": null,
                                                    "mod_note": null,
                                                    "all_awardings": [],
                                                    "body": "In GTA Online, which is what the custom character is from, the beach area, “Del Perro Pier” and the adjacent beaches are a hot bed for assholes Sniping and shooting RPGs at other players. Definitely a dangerous area. Glad GTA dude is there to help and protect.",
                                                    "edited": false,
                                                    "top_awarded_type": null,
                                                    "author_flair_css_class": null,
                                                    "name": "t1_iksiswo",
                                                    "is_submitter": false,
                                                    "downs": 0,
                                                    "author_flair_richtext": [],
                                                    "author_patreon_flair": false,
                                                    "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;In GTA Online, which is what the custom character is from, the beach area, “Del Perro Pier” and the adjacent beaches are a hot bed for assholes Sniping and shooting RPGs at other players. Definitely a dangerous area. Glad GTA dude is there to help and protect.&lt;/p&gt;\n&lt;/div&gt;",
                                                    "gildings": {},
                                                    "collapsed_reason": null,
                                                    "distinguished": null,
                                                    "associated_award": null,
                                                    "stickied": false,
                                                    "author_premium": false,
                                                    "can_gild": true,
                                                    "link_id": "t3_wii02j",
                                                    "unrepliable_reason": null,
                                                    "author_flair_text_color": null,
                                                    "score_hidden": false,
                                                    "permalink": "/r/meirl/comments/wii02j/meirl/iksiswo/",
                                                    "subreddit_type": "public",
                                                    "locked": false,
                                                    "report_reasons": null,
                                                    "created": 1660828686,
                                                    "author_flair_text": null,
                                                    "treatment_tags": [],
                                                    "collapsed": false,
                                                    "subreddit_name_prefixed": "r/meirl",
                                                    "controversiality": 0,
                                                    "depth": 1,
                                                    "author_flair_background_color": null,
                                                    "collapsed_because_crowd_control": null,
                                                    "mod_reports": [],
                                                    "num_reports": null,
                                                    "ups": 2
                                                }
                                            }
                                        ],
                                        "before": null
                                    }
                                },
                                "user_reports": [],
                                "saved": false,
                                "id": "ijcexao",
                                "banned_at_utc": null,
                                "mod_reason_title": null,
                                "gilded": 0,
                                "archived": false,
                                "collapsed_reason_code": null,
                                "no_follow": false,
                                "author": "Terrible_Indent",
                                "can_mod_post": false,
                                "created_utc": 1659898737,
                                "send_replies": true,
                                "parent_id": "t3_wii02j",
                                "score": 775,
                                "author_fullname": "t2_cvuv2i4",
                                "approved_by": null,
                                "mod_note": null,
                                "all_awardings": [],
                                "collapsed": false,
                                "body": "Aw he said he's out there with you, that's so sweet",
                                "edited": false,
                                "top_awarded_type": null,
                                "author_flair_css_class": null,
                                "name": "t1_ijcexao",
                                "is_submitter": false,
                                "downs": 0,
                                "author_flair_richtext": [],
                                "author_patreon_flair": false,
                                "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;Aw he said he&amp;#39;s out there with you, that&amp;#39;s so sweet&lt;/p&gt;\n&lt;/div&gt;",
                                "removal_reason": null,
                                "collapsed_reason": null,
                                "distinguished": null,
                                "associated_award": null,
                                "stickied": false,
                                "author_premium": false,
                                "can_gild": true,
                                "gildings": {},
                                "unrepliable_reason": null,
                                "author_flair_text_color": null,
                                "score_hidden": false,
                                "permalink": "/r/meirl/comments/wii02j/meirl/ijcexao/",
                                "subreddit_type": "public",
                                "locked": false,
                                "report_reasons": null,
                                "created": 1659898737,
                                "author_flair_text": null,
                                "treatment_tags": [],
                                "link_id": "t3_wii02j",
                                "subreddit_name_prefixed": "r/meirl",
                                "controversiality": 0,
                                "depth": 0,
                                "author_flair_background_color": null,
                                "collapsed_because_crowd_control": null,
                                "mod_reports": [],
                                "num_reports": null,
                                "ups": 775
                            }
                        }
                    ]
                }
            }
        ]

        const expectedData = [
            {
                body: "Aw he said he's out there with you, that's so sweet",
                author: "Terrible_Indent",
                createdAt: 1659898737
            }
        ];
        const url = "r/meirl/comments/wii02j/meirl/"
        const actualResult = extractCommentsFromPost(mockData, url);

        expect(actualResult).toEqual(expectedData);
    });
})
