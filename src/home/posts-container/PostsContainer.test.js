import React from "react";
import { render } from "@testing-library/react";
import { PostsContainer, extractPostsFromReddit } from "./PostsContainer";

describe("<PostsContainer />", () => {

    it('should render one element belonging to post-container class', function () {
        const { container } = render(<PostsContainer />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('post-container').length;

        expect(actualResult).toBe(expectedResult)
    });
})

describe("extractPostsFromReddit", () => {

    it('should extract title, author, time and number of comments from a single Reddit post', function () {
        const mockData = {
            "kind": "Listing",
            "data": {
                "after": "t3_wid35a",
                "dist": 25,
                "modhash": "",
                "geo_filter": "",
                "children": [
                    {
                        "kind": "t3",
                        "data": {
                            "approved_at_utc": null,
                            "subreddit": "funny",
                            "selftext": "",
                            "author_fullname": "t2_58a14ole",
                            "saved": false,
                            "mod_reason_title": null,
                            "gilded": 2,
                            "clicked": false,
                            "title": "undoubtedly the best photo I took at my sister's wedding",
                            "link_flair_richtext": [],
                            "subreddit_name_prefixed": "r/funny",
                            "hidden": false,
                            "pwls": 6,
                            "link_flair_css_class": null,
                            "downs": 0,
                            "thumbnail_height": 140,
                            "top_awarded_type": "INACTIVE",
                            "hide_score": false,
                            "name": "t3_wim1n1",
                            "quarantine": false,
                            "link_flair_text_color": "dark",
                            "upvote_ratio": 0.85,
                            "author_flair_background_color": null,
                            "subreddit_type": "public",
                            "ups": 155805,
                            "total_awards_received": 119,
                            "media_embed": {},
                            "thumbnail_width": 140,
                            "author_flair_template_id": null,
                            "is_original_content": false,
                            "user_reports": [],
                            "secure_media": null,
                            "is_reddit_media_domain": true,
                            "is_meta": false,
                            "category": null,
                            "secure_media_embed": {},
                            "link_flair_text": null,
                            "can_mod_post": false,
                            "score": 155805,
                            "approved_by": null,
                            "is_created_from_ads_ui": false,
                            "author_premium": true,
                            "thumbnail": "https://b.thumbs.redditmedia.com/nZOwrhVymYnKonFYHlFlnTa-tihkAG4plyI0MvaAQAU.jpg",
                            "edited": false,
                            "author_flair_css_class": null,
                            "author_flair_richtext": [],
                            "gildings": {
                                "gid_1": 32,
                                "gid_2": 2,
                                "gid_3": 1
                            },
                            "post_hint": "image",
                            "content_categories": null,
                            "is_self": false,
                            "mod_note": null,
                            "created": 1659895802,
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
                            "url_overridden_by_dest": "https://i.redd.it/a6cenxuw0cg91.jpg",
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
                                            "url": "https://preview.redd.it/a6cenxuw0cg91.jpg?auto=webp&amp;s=a9dae7b5d704da4b6c4147e1afbe0dd349fbc3df",
                                            "width": 749,
                                            "height": 999
                                        },
                                        "resolutions": [
                                            {
                                                "url": "https://preview.redd.it/a6cenxuw0cg91.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=9c347292aad163914c2567be5a83374857ce0be7",
                                                "width": 108,
                                                "height": 144
                                            },
                                            {
                                                "url": "https://preview.redd.it/a6cenxuw0cg91.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=a845e3193cdfa05dbfab4827e8044090affda98a",
                                                "width": 216,
                                                "height": 288
                                            },
                                            {
                                                "url": "https://preview.redd.it/a6cenxuw0cg91.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=5ad26330b0e79688f0df0a86a2063a21bbfbf37c",
                                                "width": 320,
                                                "height": 426
                                            },
                                            {
                                                "url": "https://preview.redd.it/a6cenxuw0cg91.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=3768948dd2210ecfc6e88760876444c7299af4f2",
                                                "width": 640,
                                                "height": 853
                                            }
                                        ],
                                        "variants": {},
                                        "id": "5FtrTOhTjY19sJX5CgX24oHBqNxWkhtopO6apQD5Vnk"
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
                                    "coin_price": 150,
                                    "id": "award_f44611f1-b89e-46dc-97fe-892280b13b82",
                                    "penny_donate": null,
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png",
                                    "days_of_premium": null,
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
                                    "count": 32,
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
                                    "icon_height": 2048,
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
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png",
                                    "days_of_premium": null,
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
                                    "count": 43,
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
                                    "icon_height": 2048,
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
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png",
                                    "days_of_premium": null,
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
                                    "count": 32,
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
                                    "icon_height": 512,
                                    "penny_price": null,
                                    "award_type": "global",
                                    "static_icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 50,
                                    "id": "award_02d9ab2c-162e-4c01-8438-317a016ed3d9",
                                    "penny_donate": null,
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://i.redd.it/award_images/t5_q0gj4/p4yzxkaed5f61_oldtakemyenergy.png",
                                    "days_of_premium": null,
                                    "tiers_by_required_awardings": null,
                                    "resized_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/p4yzxkaed5f61_oldtakemyenergy.png?width=16&amp;height=16&amp;auto=webp&amp;s=10034f3fdf8214c8377134bb60c5b832d4bbf588",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/p4yzxkaed5f61_oldtakemyenergy.png?width=32&amp;height=32&amp;auto=webp&amp;s=100f785bf261fa9452a5d82ee0ef0793369dbfa5",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/p4yzxkaed5f61_oldtakemyenergy.png?width=48&amp;height=48&amp;auto=webp&amp;s=b15d030fdfbbe4af4a5b34ab9dc90a174df40a23",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/p4yzxkaed5f61_oldtakemyenergy.png?width=64&amp;height=64&amp;auto=webp&amp;s=601c75be6ee30dc4b47a5c65d64dea9a185502a1",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/p4yzxkaed5f61_oldtakemyenergy.png?width=128&amp;height=128&amp;auto=webp&amp;s=540f36e65c0e2f1347fe32020e4a1565e3680437",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_width": 2048,
                                    "static_icon_width": 2048,
                                    "start_date": null,
                                    "is_enabled": true,
                                    "awardings_required_to_grant_benefits": null,
                                    "description": "I'm in this with you.",
                                    "end_date": null,
                                    "sticky_duration_seconds": null,
                                    "subreddit_coin_reward": 0,
                                    "count": 1,
                                    "static_icon_height": 2048,
                                    "name": "Take My Energy",
                                    "resized_static_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/jtw7x06j68361_TakeMyEnergyElf.png?width=16&amp;height=16&amp;auto=webp&amp;s=045db73f47a9513c44823d132b4c393ab9241b6a",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/jtw7x06j68361_TakeMyEnergyElf.png?width=32&amp;height=32&amp;auto=webp&amp;s=298a02e0edbb5b5e293087eeede63802cbe1d2c7",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/jtw7x06j68361_TakeMyEnergyElf.png?width=48&amp;height=48&amp;auto=webp&amp;s=7d06d606eb23dbcd6dbe39ee0e60588c5eb89065",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/jtw7x06j68361_TakeMyEnergyElf.png?width=64&amp;height=64&amp;auto=webp&amp;s=ecd9854b14104a36a210028c43420f0dababd96b",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/jtw7x06j68361_TakeMyEnergyElf.png?width=128&amp;height=128&amp;auto=webp&amp;s=0d5d7b92c1d66aff435f2ad32e6330ca2b971f6d",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_format": "PNG",
                                    "icon_height": 2048,
                                    "penny_price": 0,
                                    "award_type": "global",
                                    "static_icon_url": "https://i.redd.it/award_images/t5_q0gj4/jtw7x06j68361_TakeMyEnergyElf.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 75,
                                    "id": "award_92cb6518-a71a-4217-9f8f-7ecbd7ab12ba",
                                    "penny_donate": null,
                                    "award_sub_type": "PREMIUM",
                                    "coin_reward": 0,
                                    "icon_url": "https://www.redditstatic.com/gold/awards/icon/TakeMyPower_512.png",
                                    "days_of_premium": null,
                                    "tiers_by_required_awardings": null,
                                    "resized_icons": [
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/TakeMyPower_16.png",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/TakeMyPower_32.png",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/TakeMyPower_48.png",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/TakeMyPower_64.png",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/TakeMyPower_128.png",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_width": 512,
                                    "static_icon_width": 512,
                                    "start_date": null,
                                    "is_enabled": true,
                                    "awardings_required_to_grant_benefits": null,
                                    "description": "Add my power to yours.",
                                    "end_date": null,
                                    "sticky_duration_seconds": null,
                                    "subreddit_coin_reward": 0,
                                    "count": 2,
                                    "static_icon_height": 512,
                                    "name": "Take My Power",
                                    "resized_static_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/qpi61q5o98361_TakeMyPowerElf.png?width=16&amp;height=16&amp;auto=webp&amp;s=14d5429e1f630eaba283d73cb4890c861859b645",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/qpi61q5o98361_TakeMyPowerElf.png?width=32&amp;height=32&amp;auto=webp&amp;s=397444282c113a335f31da0c1d38a1e8cec75f05",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/qpi61q5o98361_TakeMyPowerElf.png?width=48&amp;height=48&amp;auto=webp&amp;s=9897e3f134eb759aba6b7afecb5fb2c75bbf9dc9",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/qpi61q5o98361_TakeMyPowerElf.png?width=64&amp;height=64&amp;auto=webp&amp;s=2de1c239b9226cfebdfbee28fba56bc534dc87b6",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/qpi61q5o98361_TakeMyPowerElf.png?width=128&amp;height=128&amp;auto=webp&amp;s=7e08340ce7c4bc4b865820ed418734396b32b814",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_format": "APNG",
                                    "icon_height": 512,
                                    "penny_price": 0,
                                    "award_type": "global",
                                    "static_icon_url": "https://i.redd.it/award_images/t5_q0gj4/qpi61q5o98361_TakeMyPowerElf.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 30,
                                    "id": "award_b4ff447e-05a5-42dc-9002-63568807cfe6",
                                    "penny_donate": null,
                                    "award_sub_type": "PREMIUM",
                                    "coin_reward": 0,
                                    "icon_url": "https://www.redditstatic.com/gold/awards/icon/Illuminati_512.png",
                                    "days_of_premium": null,
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
                                    "icon_height": 2048,
                                    "penny_price": null,
                                    "award_type": "global",
                                    "static_icon_url": "https://i.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 500,
                                    "id": "gid_2",
                                    "penny_donate": null,
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 100,
                                    "icon_url": "https://www.redditstatic.com/gold/awards/icon/gold_512.png",
                                    "days_of_premium": 7,
                                    "tiers_by_required_awardings": null,
                                    "resized_icons": [
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_16.png",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_32.png",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_48.png",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_64.png",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_128.png",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_width": 512,
                                    "static_icon_width": 512,
                                    "start_date": null,
                                    "is_enabled": true,
                                    "awardings_required_to_grant_benefits": null,
                                    "description": "Gives 100 Reddit Coins and a week of r/lounge access and ad-free browsing.",
                                    "end_date": null,
                                    "sticky_duration_seconds": null,
                                    "subreddit_coin_reward": 0,
                                    "count": 2,
                                    "static_icon_height": 512,
                                    "name": "Gold",
                                    "resized_static_icons": [
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_16.png",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_32.png",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_48.png",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_64.png",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_128.png",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_format": null,
                                    "icon_height": 512,
                                    "penny_price": null,
                                    "award_type": "global",
                                    "static_icon_url": "https://www.redditstatic.com/gold/awards/icon/gold_512.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 500,
                                    "id": "award_65f78ca2-45d8-4cb6-bf79-a67beadf2e47",
                                    "penny_donate": null,
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://www.redditstatic.com/gold/awards/icon/Bulb_512.png",
                                    "days_of_premium": null,
                                    "tiers_by_required_awardings": null,
                                    "resized_icons": [
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Bulb_16.png",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Bulb_32.png",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Bulb_48.png",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Bulb_64.png",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Bulb_128.png",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_width": 512,
                                    "static_icon_width": 512,
                                    "start_date": null,
                                    "is_enabled": true,
                                    "awardings_required_to_grant_benefits": null,
                                    "description": "Now that is a bright idea. Use the Eureka Award to highlight comments that are brilliant.",
                                    "end_date": null,
                                    "sticky_duration_seconds": null,
                                    "subreddit_coin_reward": 0,
                                    "count": 2,
                                    "static_icon_height": 512,
                                    "name": "Eureka!",
                                    "resized_static_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/vfz8ro4vibr51_Eureka.png?width=16&amp;height=16&amp;auto=webp&amp;s=2bcced62e2843e7bb90362b99f02c26a4a46a3f5",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/vfz8ro4vibr51_Eureka.png?width=32&amp;height=32&amp;auto=webp&amp;s=d131437d75eedd1650bc4940767f15e4010bdeac",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/vfz8ro4vibr51_Eureka.png?width=48&amp;height=48&amp;auto=webp&amp;s=7e6f3069ddcbe4e74c2df540e222645bbc5b00e7",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/vfz8ro4vibr51_Eureka.png?width=64&amp;height=64&amp;auto=webp&amp;s=f2dfdfd2c6128d7cf45a7fee16db5a38c9821bc2",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/vfz8ro4vibr51_Eureka.png?width=128&amp;height=128&amp;auto=webp&amp;s=f8b2a94c0b1b5ae374214f66e240a302d09e8630",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_format": "APNG",
                                    "icon_height": 512,
                                    "penny_price": 0,
                                    "award_type": "global",
                                    "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/vfz8ro4vibr51_Eureka.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 100,
                                    "id": "award_03c4f93d-efc7-463b-98a7-c01814462ab0",
                                    "penny_donate": null,
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://i.redd.it/award_images/t5_q0gj4/4samff1ud5f61_olddisappoint.png",
                                    "days_of_premium": null,
                                    "tiers_by_required_awardings": null,
                                    "resized_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/4samff1ud5f61_olddisappoint.png?width=16&amp;height=16&amp;auto=webp&amp;s=c843ea581a5c038525db278dcf7763091f7a0325",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/4samff1ud5f61_olddisappoint.png?width=32&amp;height=32&amp;auto=webp&amp;s=a7162c4d9a701db91f259c0f79ad6917be417347",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/4samff1ud5f61_olddisappoint.png?width=48&amp;height=48&amp;auto=webp&amp;s=2aa467b15b9ccb78529343335c9842c17660d4f7",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/4samff1ud5f61_olddisappoint.png?width=64&amp;height=64&amp;auto=webp&amp;s=cd136eeb1f3055fa8ce93d13597a2ebae5ccb682",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/4samff1ud5f61_olddisappoint.png?width=128&amp;height=128&amp;auto=webp&amp;s=f7e32981f6ee014f607722da7c553a7282898641",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_width": 2048,
                                    "static_icon_width": 2048,
                                    "start_date": null,
                                    "is_enabled": true,
                                    "awardings_required_to_grant_benefits": null,
                                    "description": "I'm not mad, I'm just disappointed.",
                                    "end_date": null,
                                    "sticky_duration_seconds": null,
                                    "subreddit_coin_reward": 0,
                                    "count": 1,
                                    "static_icon_height": 2048,
                                    "name": "I am disappoint",
                                    "resized_static_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/ww5x9ebd78361_PolarDissapoint.png?width=16&amp;height=16&amp;auto=webp&amp;s=da4665ea8882f1f054a95635819744cce1846564",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/ww5x9ebd78361_PolarDissapoint.png?width=32&amp;height=32&amp;auto=webp&amp;s=a88268843dd0113cc5e28267517b02253abba908",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/ww5x9ebd78361_PolarDissapoint.png?width=48&amp;height=48&amp;auto=webp&amp;s=a65be6083e902d03f34ef8cf5fe7b2c47c506220",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/ww5x9ebd78361_PolarDissapoint.png?width=64&amp;height=64&amp;auto=webp&amp;s=6bf1fc13524141f1078e22098150edbbaf7fd585",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/ww5x9ebd78361_PolarDissapoint.png?width=128&amp;height=128&amp;auto=webp&amp;s=8d8a260ab6580721d052cd3866be854fe7ebb29f",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_format": "PNG",
                                    "icon_height": 2048,
                                    "penny_price": 0,
                                    "award_type": "global",
                                    "static_icon_url": "https://i.redd.it/award_images/t5_q0gj4/ww5x9ebd78361_PolarDissapoint.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 20,
                                    "id": "award_5eac457f-ebac-449b-93a7-eb17b557f03c",
                                    "penny_donate": null,
                                    "award_sub_type": "PREMIUM",
                                    "coin_reward": 0,
                                    "icon_url": "https://i.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png",
                                    "days_of_premium": null,
                                    "tiers_by_required_awardings": null,
                                    "resized_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=16&amp;height=16&amp;auto=webp&amp;s=bc61b528b8d075c26a3d0f2ad3d9e42259c51cbe",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=32&amp;height=32&amp;auto=webp&amp;s=d576c9a19ed29ca5624333239dbde289a146930b",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=48&amp;height=48&amp;auto=webp&amp;s=da1e45654f5acfb6be44fa07c168ad6420796f56",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=64&amp;height=64&amp;auto=webp&amp;s=677455ac05c563b5585f76e52ee96354f1430799",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=128&amp;height=128&amp;auto=webp&amp;s=25a3b6021a92685b01883fb3d947d2959a75d8b3",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_width": 2048,
                                    "static_icon_width": 2048,
                                    "start_date": null,
                                    "is_enabled": true,
                                    "awardings_required_to_grant_benefits": null,
                                    "description": "When you follow your heart, love is the answer",
                                    "end_date": null,
                                    "sticky_duration_seconds": null,
                                    "subreddit_coin_reward": 0,
                                    "count": 1,
                                    "static_icon_height": 2048,
                                    "name": "LOVE!",
                                    "resized_static_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=16&amp;height=16&amp;auto=webp&amp;s=bc61b528b8d075c26a3d0f2ad3d9e42259c51cbe",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=32&amp;height=32&amp;auto=webp&amp;s=d576c9a19ed29ca5624333239dbde289a146930b",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=48&amp;height=48&amp;auto=webp&amp;s=da1e45654f5acfb6be44fa07c168ad6420796f56",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=64&amp;height=64&amp;auto=webp&amp;s=677455ac05c563b5585f76e52ee96354f1430799",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=128&amp;height=128&amp;auto=webp&amp;s=25a3b6021a92685b01883fb3d947d2959a75d8b3",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_format": "PNG",
                                    "icon_height": 2048,
                                    "penny_price": 0,
                                    "award_type": "global",
                                    "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 325,
                                    "id": "award_2bc47247-b107-44a8-a78c-613da21869ff",
                                    "penny_donate": null,
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://www.redditstatic.com/gold/awards/icon/Rocket_512.png",
                                    "days_of_premium": null,
                                    "tiers_by_required_awardings": null,
                                    "resized_icons": [
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Rocket_16.png",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Rocket_32.png",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Rocket_48.png",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Rocket_64.png",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Rocket_128.png",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_width": 512,
                                    "static_icon_width": 512,
                                    "start_date": null,
                                    "is_enabled": true,
                                    "awardings_required_to_grant_benefits": null,
                                    "description": "Boldly go where we haven't been in a long, long time.",
                                    "end_date": null,
                                    "sticky_duration_seconds": null,
                                    "subreddit_coin_reward": 0,
                                    "count": 1,
                                    "static_icon_height": 512,
                                    "name": "To The Stars",
                                    "resized_static_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/1sof6d93g9e51_ToTheStars.png?width=16&amp;height=16&amp;auto=webp&amp;s=83d4d953873a31c0e3e4a0f0b188ff803bb6b92a",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/1sof6d93g9e51_ToTheStars.png?width=32&amp;height=32&amp;auto=webp&amp;s=ec9beb8a11f28bbfb3144bd6edac145af0909baa",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/1sof6d93g9e51_ToTheStars.png?width=48&amp;height=48&amp;auto=webp&amp;s=82b887ba042297c5b22a7faecec4721bf2dc354d",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/1sof6d93g9e51_ToTheStars.png?width=64&amp;height=64&amp;auto=webp&amp;s=545d53613ea7e025301bfa49f38d1981d86ee001",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/1sof6d93g9e51_ToTheStars.png?width=128&amp;height=128&amp;auto=webp&amp;s=878ea0423f2a9a57a0750e2fbe26bf482be5c8c3",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_format": "APNG",
                                    "icon_height": 512,
                                    "penny_price": 0,
                                    "award_type": "global",
                                    "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/1sof6d93g9e51_ToTheStars.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": 31,
                                    "coin_price": 1800,
                                    "id": "gid_3",
                                    "penny_donate": null,
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://www.redditstatic.com/gold/awards/icon/platinum_512.png",
                                    "days_of_premium": 31,
                                    "tiers_by_required_awardings": null,
                                    "resized_icons": [
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_16.png",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_32.png",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_48.png",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_64.png",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_128.png",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_width": 512,
                                    "static_icon_width": 512,
                                    "start_date": null,
                                    "is_enabled": true,
                                    "awardings_required_to_grant_benefits": null,
                                    "description": "Gives 700 Reddit Coins and a month of r/lounge access and ad-free browsing.",
                                    "end_date": null,
                                    "sticky_duration_seconds": null,
                                    "subreddit_coin_reward": 0,
                                    "count": 1,
                                    "static_icon_height": 512,
                                    "name": "Platinum",
                                    "resized_static_icons": [
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_16.png",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_32.png",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_48.png",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_64.png",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_128.png",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_format": null,
                                    "icon_height": 512,
                                    "penny_price": null,
                                    "award_type": "global",
                                    "static_icon_url": "https://www.redditstatic.com/gold/awards/icon/platinum_512.png"
                                }
                            ],
                            "awarders": [],
                            "media_only": false,
                            "can_gild": false,
                            "spoiler": false,
                            "locked": false,
                            "author_flair_text": null,
                            "treatment_tags": [
                                "econ:render:lottie:bulb"
                            ],
                            "visited": false,
                            "removed_by": null,
                            "num_reports": null,
                            "distinguished": null,
                            "subreddit_id": "t5_2qh33",
                            "author_is_blocked": false,
                            "mod_reason_by": null,
                            "removal_reason": null,
                            "link_flair_background_color": "",
                            "id": "wim1n1",
                            "is_robot_indexable": true,
                            "report_reasons": null,
                            "author": "BabyGroot1337",
                            "discussion_type": null,
                            "num_comments": 3042,
                            "send_replies": false,
                            "whitelist_status": "all_ads",
                            "contest_mode": false,
                            "mod_reports": [],
                            "author_patreon_flair": false,
                            "author_flair_text_color": null,
                            "permalink": "/r/funny/comments/wim1n1/undoubtedly_the_best_photo_i_took_at_my_sisters/",
                            "parent_whitelist_status": "all_ads",
                            "stickied": false,
                            "url": "https://i.redd.it/a6cenxuw0cg91.jpg",
                            "subreddit_subscribers": 42218897,
                            "created_utc": 1659895802,
                            "num_crossposts": 11,
                            "media": null,
                            "is_video": false
                        }
                    }]
            }
        };

        const expectedResult = [
            {
                title: "undoubtedly the best photo I took at my sister's wedding",
                author: "BabyGroot1337",
                time: 1659895802,
                numberComments: 3042
            }
        ];

        const actualResult = extractPostsFromReddit(mockData);

        expect(actualResult).toEqual(expectedResult);
    })

    it('should extract title, author, time and number of comments from two Reddit posts', function () {
        const mockData = {
            "kind": "Listing",
            "data": {
                "after": "t3_wid35a",
                "dist": 25,
                "modhash": "",
                "geo_filter": "",
                "children": [
                    {
                        "kind": "t3",
                        "data": {
                            "approved_at_utc": null,
                            "subreddit": "funny",
                            "selftext": "",
                            "author_fullname": "t2_58a14ole",
                            "saved": false,
                            "mod_reason_title": null,
                            "gilded": 2,
                            "clicked": false,
                            "title": "undoubtedly the best photo I took at my sister's wedding",
                            "link_flair_richtext": [],
                            "subreddit_name_prefixed": "r/funny",
                            "hidden": false,
                            "pwls": 6,
                            "link_flair_css_class": null,
                            "downs": 0,
                            "thumbnail_height": 140,
                            "top_awarded_type": "INACTIVE",
                            "hide_score": false,
                            "name": "t3_wim1n1",
                            "quarantine": false,
                            "link_flair_text_color": "dark",
                            "upvote_ratio": 0.85,
                            "author_flair_background_color": null,
                            "subreddit_type": "public",
                            "ups": 155805,
                            "total_awards_received": 119,
                            "media_embed": {},
                            "thumbnail_width": 140,
                            "author_flair_template_id": null,
                            "is_original_content": false,
                            "user_reports": [],
                            "secure_media": null,
                            "is_reddit_media_domain": true,
                            "is_meta": false,
                            "category": null,
                            "secure_media_embed": {},
                            "link_flair_text": null,
                            "can_mod_post": false,
                            "score": 155805,
                            "approved_by": null,
                            "is_created_from_ads_ui": false,
                            "author_premium": true,
                            "thumbnail": "https://b.thumbs.redditmedia.com/nZOwrhVymYnKonFYHlFlnTa-tihkAG4plyI0MvaAQAU.jpg",
                            "edited": false,
                            "author_flair_css_class": null,
                            "author_flair_richtext": [],
                            "gildings": {
                                "gid_1": 32,
                                "gid_2": 2,
                                "gid_3": 1
                            },
                            "post_hint": "image",
                            "content_categories": null,
                            "is_self": false,
                            "mod_note": null,
                            "created": 1659895802,
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
                            "url_overridden_by_dest": "https://i.redd.it/a6cenxuw0cg91.jpg",
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
                                            "url": "https://preview.redd.it/a6cenxuw0cg91.jpg?auto=webp&amp;s=a9dae7b5d704da4b6c4147e1afbe0dd349fbc3df",
                                            "width": 749,
                                            "height": 999
                                        },
                                        "resolutions": [
                                            {
                                                "url": "https://preview.redd.it/a6cenxuw0cg91.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=9c347292aad163914c2567be5a83374857ce0be7",
                                                "width": 108,
                                                "height": 144
                                            },
                                            {
                                                "url": "https://preview.redd.it/a6cenxuw0cg91.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=a845e3193cdfa05dbfab4827e8044090affda98a",
                                                "width": 216,
                                                "height": 288
                                            },
                                            {
                                                "url": "https://preview.redd.it/a6cenxuw0cg91.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=5ad26330b0e79688f0df0a86a2063a21bbfbf37c",
                                                "width": 320,
                                                "height": 426
                                            },
                                            {
                                                "url": "https://preview.redd.it/a6cenxuw0cg91.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=3768948dd2210ecfc6e88760876444c7299af4f2",
                                                "width": 640,
                                                "height": 853
                                            }
                                        ],
                                        "variants": {},
                                        "id": "5FtrTOhTjY19sJX5CgX24oHBqNxWkhtopO6apQD5Vnk"
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
                                    "coin_price": 150,
                                    "id": "award_f44611f1-b89e-46dc-97fe-892280b13b82",
                                    "penny_donate": null,
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png",
                                    "days_of_premium": null,
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
                                    "count": 32,
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
                                    "icon_height": 2048,
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
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png",
                                    "days_of_premium": null,
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
                                    "count": 43,
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
                                    "icon_height": 2048,
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
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png",
                                    "days_of_premium": null,
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
                                    "count": 32,
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
                                    "icon_height": 512,
                                    "penny_price": null,
                                    "award_type": "global",
                                    "static_icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 50,
                                    "id": "award_02d9ab2c-162e-4c01-8438-317a016ed3d9",
                                    "penny_donate": null,
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://i.redd.it/award_images/t5_q0gj4/p4yzxkaed5f61_oldtakemyenergy.png",
                                    "days_of_premium": null,
                                    "tiers_by_required_awardings": null,
                                    "resized_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/p4yzxkaed5f61_oldtakemyenergy.png?width=16&amp;height=16&amp;auto=webp&amp;s=10034f3fdf8214c8377134bb60c5b832d4bbf588",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/p4yzxkaed5f61_oldtakemyenergy.png?width=32&amp;height=32&amp;auto=webp&amp;s=100f785bf261fa9452a5d82ee0ef0793369dbfa5",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/p4yzxkaed5f61_oldtakemyenergy.png?width=48&amp;height=48&amp;auto=webp&amp;s=b15d030fdfbbe4af4a5b34ab9dc90a174df40a23",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/p4yzxkaed5f61_oldtakemyenergy.png?width=64&amp;height=64&amp;auto=webp&amp;s=601c75be6ee30dc4b47a5c65d64dea9a185502a1",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/p4yzxkaed5f61_oldtakemyenergy.png?width=128&amp;height=128&amp;auto=webp&amp;s=540f36e65c0e2f1347fe32020e4a1565e3680437",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_width": 2048,
                                    "static_icon_width": 2048,
                                    "start_date": null,
                                    "is_enabled": true,
                                    "awardings_required_to_grant_benefits": null,
                                    "description": "I'm in this with you.",
                                    "end_date": null,
                                    "sticky_duration_seconds": null,
                                    "subreddit_coin_reward": 0,
                                    "count": 1,
                                    "static_icon_height": 2048,
                                    "name": "Take My Energy",
                                    "resized_static_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/jtw7x06j68361_TakeMyEnergyElf.png?width=16&amp;height=16&amp;auto=webp&amp;s=045db73f47a9513c44823d132b4c393ab9241b6a",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/jtw7x06j68361_TakeMyEnergyElf.png?width=32&amp;height=32&amp;auto=webp&amp;s=298a02e0edbb5b5e293087eeede63802cbe1d2c7",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/jtw7x06j68361_TakeMyEnergyElf.png?width=48&amp;height=48&amp;auto=webp&amp;s=7d06d606eb23dbcd6dbe39ee0e60588c5eb89065",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/jtw7x06j68361_TakeMyEnergyElf.png?width=64&amp;height=64&amp;auto=webp&amp;s=ecd9854b14104a36a210028c43420f0dababd96b",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/jtw7x06j68361_TakeMyEnergyElf.png?width=128&amp;height=128&amp;auto=webp&amp;s=0d5d7b92c1d66aff435f2ad32e6330ca2b971f6d",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_format": "PNG",
                                    "icon_height": 2048,
                                    "penny_price": 0,
                                    "award_type": "global",
                                    "static_icon_url": "https://i.redd.it/award_images/t5_q0gj4/jtw7x06j68361_TakeMyEnergyElf.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 75,
                                    "id": "award_92cb6518-a71a-4217-9f8f-7ecbd7ab12ba",
                                    "penny_donate": null,
                                    "award_sub_type": "PREMIUM",
                                    "coin_reward": 0,
                                    "icon_url": "https://www.redditstatic.com/gold/awards/icon/TakeMyPower_512.png",
                                    "days_of_premium": null,
                                    "tiers_by_required_awardings": null,
                                    "resized_icons": [
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/TakeMyPower_16.png",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/TakeMyPower_32.png",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/TakeMyPower_48.png",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/TakeMyPower_64.png",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/TakeMyPower_128.png",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_width": 512,
                                    "static_icon_width": 512,
                                    "start_date": null,
                                    "is_enabled": true,
                                    "awardings_required_to_grant_benefits": null,
                                    "description": "Add my power to yours.",
                                    "end_date": null,
                                    "sticky_duration_seconds": null,
                                    "subreddit_coin_reward": 0,
                                    "count": 2,
                                    "static_icon_height": 512,
                                    "name": "Take My Power",
                                    "resized_static_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/qpi61q5o98361_TakeMyPowerElf.png?width=16&amp;height=16&amp;auto=webp&amp;s=14d5429e1f630eaba283d73cb4890c861859b645",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/qpi61q5o98361_TakeMyPowerElf.png?width=32&amp;height=32&amp;auto=webp&amp;s=397444282c113a335f31da0c1d38a1e8cec75f05",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/qpi61q5o98361_TakeMyPowerElf.png?width=48&amp;height=48&amp;auto=webp&amp;s=9897e3f134eb759aba6b7afecb5fb2c75bbf9dc9",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/qpi61q5o98361_TakeMyPowerElf.png?width=64&amp;height=64&amp;auto=webp&amp;s=2de1c239b9226cfebdfbee28fba56bc534dc87b6",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/qpi61q5o98361_TakeMyPowerElf.png?width=128&amp;height=128&amp;auto=webp&amp;s=7e08340ce7c4bc4b865820ed418734396b32b814",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_format": "APNG",
                                    "icon_height": 512,
                                    "penny_price": 0,
                                    "award_type": "global",
                                    "static_icon_url": "https://i.redd.it/award_images/t5_q0gj4/qpi61q5o98361_TakeMyPowerElf.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 30,
                                    "id": "award_b4ff447e-05a5-42dc-9002-63568807cfe6",
                                    "penny_donate": null,
                                    "award_sub_type": "PREMIUM",
                                    "coin_reward": 0,
                                    "icon_url": "https://www.redditstatic.com/gold/awards/icon/Illuminati_512.png",
                                    "days_of_premium": null,
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
                                    "icon_height": 2048,
                                    "penny_price": null,
                                    "award_type": "global",
                                    "static_icon_url": "https://i.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 500,
                                    "id": "gid_2",
                                    "penny_donate": null,
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 100,
                                    "icon_url": "https://www.redditstatic.com/gold/awards/icon/gold_512.png",
                                    "days_of_premium": 7,
                                    "tiers_by_required_awardings": null,
                                    "resized_icons": [
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_16.png",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_32.png",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_48.png",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_64.png",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_128.png",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_width": 512,
                                    "static_icon_width": 512,
                                    "start_date": null,
                                    "is_enabled": true,
                                    "awardings_required_to_grant_benefits": null,
                                    "description": "Gives 100 Reddit Coins and a week of r/lounge access and ad-free browsing.",
                                    "end_date": null,
                                    "sticky_duration_seconds": null,
                                    "subreddit_coin_reward": 0,
                                    "count": 2,
                                    "static_icon_height": 512,
                                    "name": "Gold",
                                    "resized_static_icons": [
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_16.png",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_32.png",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_48.png",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_64.png",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_128.png",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_format": null,
                                    "icon_height": 512,
                                    "penny_price": null,
                                    "award_type": "global",
                                    "static_icon_url": "https://www.redditstatic.com/gold/awards/icon/gold_512.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 500,
                                    "id": "award_65f78ca2-45d8-4cb6-bf79-a67beadf2e47",
                                    "penny_donate": null,
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://www.redditstatic.com/gold/awards/icon/Bulb_512.png",
                                    "days_of_premium": null,
                                    "tiers_by_required_awardings": null,
                                    "resized_icons": [
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Bulb_16.png",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Bulb_32.png",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Bulb_48.png",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Bulb_64.png",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Bulb_128.png",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_width": 512,
                                    "static_icon_width": 512,
                                    "start_date": null,
                                    "is_enabled": true,
                                    "awardings_required_to_grant_benefits": null,
                                    "description": "Now that is a bright idea. Use the Eureka Award to highlight comments that are brilliant.",
                                    "end_date": null,
                                    "sticky_duration_seconds": null,
                                    "subreddit_coin_reward": 0,
                                    "count": 2,
                                    "static_icon_height": 512,
                                    "name": "Eureka!",
                                    "resized_static_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/vfz8ro4vibr51_Eureka.png?width=16&amp;height=16&amp;auto=webp&amp;s=2bcced62e2843e7bb90362b99f02c26a4a46a3f5",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/vfz8ro4vibr51_Eureka.png?width=32&amp;height=32&amp;auto=webp&amp;s=d131437d75eedd1650bc4940767f15e4010bdeac",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/vfz8ro4vibr51_Eureka.png?width=48&amp;height=48&amp;auto=webp&amp;s=7e6f3069ddcbe4e74c2df540e222645bbc5b00e7",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/vfz8ro4vibr51_Eureka.png?width=64&amp;height=64&amp;auto=webp&amp;s=f2dfdfd2c6128d7cf45a7fee16db5a38c9821bc2",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/vfz8ro4vibr51_Eureka.png?width=128&amp;height=128&amp;auto=webp&amp;s=f8b2a94c0b1b5ae374214f66e240a302d09e8630",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_format": "APNG",
                                    "icon_height": 512,
                                    "penny_price": 0,
                                    "award_type": "global",
                                    "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/vfz8ro4vibr51_Eureka.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 100,
                                    "id": "award_03c4f93d-efc7-463b-98a7-c01814462ab0",
                                    "penny_donate": null,
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://i.redd.it/award_images/t5_q0gj4/4samff1ud5f61_olddisappoint.png",
                                    "days_of_premium": null,
                                    "tiers_by_required_awardings": null,
                                    "resized_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/4samff1ud5f61_olddisappoint.png?width=16&amp;height=16&amp;auto=webp&amp;s=c843ea581a5c038525db278dcf7763091f7a0325",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/4samff1ud5f61_olddisappoint.png?width=32&amp;height=32&amp;auto=webp&amp;s=a7162c4d9a701db91f259c0f79ad6917be417347",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/4samff1ud5f61_olddisappoint.png?width=48&amp;height=48&amp;auto=webp&amp;s=2aa467b15b9ccb78529343335c9842c17660d4f7",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/4samff1ud5f61_olddisappoint.png?width=64&amp;height=64&amp;auto=webp&amp;s=cd136eeb1f3055fa8ce93d13597a2ebae5ccb682",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/4samff1ud5f61_olddisappoint.png?width=128&amp;height=128&amp;auto=webp&amp;s=f7e32981f6ee014f607722da7c553a7282898641",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_width": 2048,
                                    "static_icon_width": 2048,
                                    "start_date": null,
                                    "is_enabled": true,
                                    "awardings_required_to_grant_benefits": null,
                                    "description": "I'm not mad, I'm just disappointed.",
                                    "end_date": null,
                                    "sticky_duration_seconds": null,
                                    "subreddit_coin_reward": 0,
                                    "count": 1,
                                    "static_icon_height": 2048,
                                    "name": "I am disappoint",
                                    "resized_static_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/ww5x9ebd78361_PolarDissapoint.png?width=16&amp;height=16&amp;auto=webp&amp;s=da4665ea8882f1f054a95635819744cce1846564",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/ww5x9ebd78361_PolarDissapoint.png?width=32&amp;height=32&amp;auto=webp&amp;s=a88268843dd0113cc5e28267517b02253abba908",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/ww5x9ebd78361_PolarDissapoint.png?width=48&amp;height=48&amp;auto=webp&amp;s=a65be6083e902d03f34ef8cf5fe7b2c47c506220",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/ww5x9ebd78361_PolarDissapoint.png?width=64&amp;height=64&amp;auto=webp&amp;s=6bf1fc13524141f1078e22098150edbbaf7fd585",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/ww5x9ebd78361_PolarDissapoint.png?width=128&amp;height=128&amp;auto=webp&amp;s=8d8a260ab6580721d052cd3866be854fe7ebb29f",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_format": "PNG",
                                    "icon_height": 2048,
                                    "penny_price": 0,
                                    "award_type": "global",
                                    "static_icon_url": "https://i.redd.it/award_images/t5_q0gj4/ww5x9ebd78361_PolarDissapoint.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 20,
                                    "id": "award_5eac457f-ebac-449b-93a7-eb17b557f03c",
                                    "penny_donate": null,
                                    "award_sub_type": "PREMIUM",
                                    "coin_reward": 0,
                                    "icon_url": "https://i.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png",
                                    "days_of_premium": null,
                                    "tiers_by_required_awardings": null,
                                    "resized_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=16&amp;height=16&amp;auto=webp&amp;s=bc61b528b8d075c26a3d0f2ad3d9e42259c51cbe",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=32&amp;height=32&amp;auto=webp&amp;s=d576c9a19ed29ca5624333239dbde289a146930b",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=48&amp;height=48&amp;auto=webp&amp;s=da1e45654f5acfb6be44fa07c168ad6420796f56",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=64&amp;height=64&amp;auto=webp&amp;s=677455ac05c563b5585f76e52ee96354f1430799",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=128&amp;height=128&amp;auto=webp&amp;s=25a3b6021a92685b01883fb3d947d2959a75d8b3",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_width": 2048,
                                    "static_icon_width": 2048,
                                    "start_date": null,
                                    "is_enabled": true,
                                    "awardings_required_to_grant_benefits": null,
                                    "description": "When you follow your heart, love is the answer",
                                    "end_date": null,
                                    "sticky_duration_seconds": null,
                                    "subreddit_coin_reward": 0,
                                    "count": 1,
                                    "static_icon_height": 2048,
                                    "name": "LOVE!",
                                    "resized_static_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=16&amp;height=16&amp;auto=webp&amp;s=bc61b528b8d075c26a3d0f2ad3d9e42259c51cbe",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=32&amp;height=32&amp;auto=webp&amp;s=d576c9a19ed29ca5624333239dbde289a146930b",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=48&amp;height=48&amp;auto=webp&amp;s=da1e45654f5acfb6be44fa07c168ad6420796f56",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=64&amp;height=64&amp;auto=webp&amp;s=677455ac05c563b5585f76e52ee96354f1430799",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png?width=128&amp;height=128&amp;auto=webp&amp;s=25a3b6021a92685b01883fb3d947d2959a75d8b3",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_format": "PNG",
                                    "icon_height": 2048,
                                    "penny_price": 0,
                                    "award_type": "global",
                                    "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/j3azv69qjfn51_LOVE.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 325,
                                    "id": "award_2bc47247-b107-44a8-a78c-613da21869ff",
                                    "penny_donate": null,
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://www.redditstatic.com/gold/awards/icon/Rocket_512.png",
                                    "days_of_premium": null,
                                    "tiers_by_required_awardings": null,
                                    "resized_icons": [
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Rocket_16.png",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Rocket_32.png",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Rocket_48.png",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Rocket_64.png",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Rocket_128.png",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_width": 512,
                                    "static_icon_width": 512,
                                    "start_date": null,
                                    "is_enabled": true,
                                    "awardings_required_to_grant_benefits": null,
                                    "description": "Boldly go where we haven't been in a long, long time.",
                                    "end_date": null,
                                    "sticky_duration_seconds": null,
                                    "subreddit_coin_reward": 0,
                                    "count": 1,
                                    "static_icon_height": 512,
                                    "name": "To The Stars",
                                    "resized_static_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/1sof6d93g9e51_ToTheStars.png?width=16&amp;height=16&amp;auto=webp&amp;s=83d4d953873a31c0e3e4a0f0b188ff803bb6b92a",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/1sof6d93g9e51_ToTheStars.png?width=32&amp;height=32&amp;auto=webp&amp;s=ec9beb8a11f28bbfb3144bd6edac145af0909baa",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/1sof6d93g9e51_ToTheStars.png?width=48&amp;height=48&amp;auto=webp&amp;s=82b887ba042297c5b22a7faecec4721bf2dc354d",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/1sof6d93g9e51_ToTheStars.png?width=64&amp;height=64&amp;auto=webp&amp;s=545d53613ea7e025301bfa49f38d1981d86ee001",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/1sof6d93g9e51_ToTheStars.png?width=128&amp;height=128&amp;auto=webp&amp;s=878ea0423f2a9a57a0750e2fbe26bf482be5c8c3",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_format": "APNG",
                                    "icon_height": 512,
                                    "penny_price": 0,
                                    "award_type": "global",
                                    "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/1sof6d93g9e51_ToTheStars.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": 31,
                                    "coin_price": 1800,
                                    "id": "gid_3",
                                    "penny_donate": null,
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://www.redditstatic.com/gold/awards/icon/platinum_512.png",
                                    "days_of_premium": 31,
                                    "tiers_by_required_awardings": null,
                                    "resized_icons": [
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_16.png",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_32.png",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_48.png",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_64.png",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_128.png",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_width": 512,
                                    "static_icon_width": 512,
                                    "start_date": null,
                                    "is_enabled": true,
                                    "awardings_required_to_grant_benefits": null,
                                    "description": "Gives 700 Reddit Coins and a month of r/lounge access and ad-free browsing.",
                                    "end_date": null,
                                    "sticky_duration_seconds": null,
                                    "subreddit_coin_reward": 0,
                                    "count": 1,
                                    "static_icon_height": 512,
                                    "name": "Platinum",
                                    "resized_static_icons": [
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_16.png",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_32.png",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_48.png",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_64.png",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/platinum_128.png",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_format": null,
                                    "icon_height": 512,
                                    "penny_price": null,
                                    "award_type": "global",
                                    "static_icon_url": "https://www.redditstatic.com/gold/awards/icon/platinum_512.png"
                                }
                            ],
                            "awarders": [],
                            "media_only": false,
                            "can_gild": false,
                            "spoiler": false,
                            "locked": false,
                            "author_flair_text": null,
                            "treatment_tags": [
                                "econ:render:lottie:bulb"
                            ],
                            "visited": false,
                            "removed_by": null,
                            "num_reports": null,
                            "distinguished": null,
                            "subreddit_id": "t5_2qh33",
                            "author_is_blocked": false,
                            "mod_reason_by": null,
                            "removal_reason": null,
                            "link_flair_background_color": "",
                            "id": "wim1n1",
                            "is_robot_indexable": true,
                            "report_reasons": null,
                            "author": "BabyGroot1337",
                            "discussion_type": null,
                            "num_comments": 3042,
                            "send_replies": false,
                            "whitelist_status": "all_ads",
                            "contest_mode": false,
                            "mod_reports": [],
                            "author_patreon_flair": false,
                            "author_flair_text_color": null,
                            "permalink": "/r/funny/comments/wim1n1/undoubtedly_the_best_photo_i_took_at_my_sisters/",
                            "parent_whitelist_status": "all_ads",
                            "stickied": false,
                            "url": "https://i.redd.it/a6cenxuw0cg91.jpg",
                            "subreddit_subscribers": 42218897,
                            "created_utc": 1659895802,
                            "num_crossposts": 11,
                            "media": null,
                            "is_video": false
                        }
                    },
                    {
                        "kind": "t3",
                        "data": {
                            "approved_at_utc": null,
                            "subreddit": "facepalm",
                            "selftext": "",
                            "author_fullname": "t2_31s81vxb",
                            "saved": false,
                            "mod_reason_title": null,
                            "gilded": 1,
                            "clicked": false,
                            "title": "Interesting logic",
                            "link_flair_richtext": [
                                {
                                    "a": ":Misc:",
                                    "e": "emoji",
                                    "u": "https://emoji.redditmedia.com/abp88uwvnuo61_t5_2r5rp/Misc"
                                },
                                {
                                    "e": "text",
                                    "t": " 🇲​🇮​🇸​🇨​"
                                }
                            ],
                            "subreddit_name_prefixed": "r/facepalm",
                            "hidden": false,
                            "pwls": 6,
                            "link_flair_css_class": "",
                            "downs": 0,
                            "thumbnail_height": 140,
                            "top_awarded_type": null,
                            "hide_score": false,
                            "name": "t3_win92x",
                            "quarantine": false,
                            "link_flair_text_color": "dark",
                            "upvote_ratio": 0.86,
                            "author_flair_background_color": null,
                            "ups": 95637,
                            "total_awards_received": 31,
                            "media_embed": {},
                            "thumbnail_width": 140,
                            "author_flair_template_id": null,
                            "is_original_content": false,
                            "user_reports": [],
                            "secure_media": {
                                "reddit_video": {
                                    "bitrate_kbps": 2400,
                                    "fallback_url": "https://v.redd.it/4w1vutirrdg91/DASH_720.mp4?source=fallback",
                                    "height": 720,
                                    "width": 405,
                                    "scrubber_media_url": "https://v.redd.it/4w1vutirrdg91/DASH_96.mp4",
                                    "dash_url": "https://v.redd.it/4w1vutirrdg91/DASHPlaylist.mpd?a=1662546345%2CN2EwYjhkOWNlZmZmNDg4ODY2MzMxY2Y4ZDlkNjU2NDg5MjU3NjFhMzFjNjNmZTE1ZjFmMzIwYjI4M2Y4NjE2OQ%3D%3D&amp;v=1&amp;f=hd",
                                    "duration": 82,
                                    "hls_url": "https://v.redd.it/4w1vutirrdg91/HLSPlaylist.m3u8?a=1662546345%2CMzMxZDc1N2RjYTAyNzEyZWUzZmVjYjQ3YmQzYWFkYjU2NGYyNWUxMDZhZjRhMWU4OWZhOGFiZmI0NGMyYTkxMQ%3D%3D&amp;v=1&amp;f=hd",
                                    "is_gif": false,
                                    "transcoding_status": "completed"
                                }
                            },
                            "is_reddit_media_domain": true,
                            "is_meta": false,
                            "category": null,
                            "secure_media_embed": {},
                            "link_flair_text": ":Misc: 🇲​🇮​🇸​🇨​",
                            "can_mod_post": false,
                            "score": 95637,
                            "approved_by": null,
                            "is_created_from_ads_ui": false,
                            "author_premium": true,
                            "thumbnail": "https://b.thumbs.redditmedia.com/KzbeQvnzQztGw0bcaIMg_FSbtG3gRl2v-HJFFVwOUKM.jpg",
                            "edited": false,
                            "author_flair_css_class": null,
                            "author_flair_richtext": [],
                            "gildings": {
                                "gid_1": 10,
                                "gid_2": 1
                            },
                            "post_hint": "hosted:video",
                            "content_categories": null,
                            "is_self": false,
                            "subreddit_type": "public",
                            "created": 1659898955,
                            "link_flair_type": "richtext",
                            "wls": 6,
                            "removed_by_category": null,
                            "banned_by": null,
                            "author_flair_type": "text",
                            "domain": "v.redd.it",
                            "allow_live_comments": true,
                            "selftext_html": null,
                            "likes": null,
                            "suggested_sort": null,
                            "banned_at_utc": null,
                            "url_overridden_by_dest": "https://v.redd.it/4w1vutirrdg91",
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
                                            "url": "https://external-preview.redd.it/BJfd4jvXssLe4gjKSCgdXvRT9vLp7xF2WRlJbGckghE.png?format=pjpg&amp;auto=webp&amp;s=0cdcb374358c36e752339db6da2e7792d8db8303",
                                            "width": 576,
                                            "height": 1024
                                        },
                                        "resolutions": [
                                            {
                                                "url": "https://external-preview.redd.it/BJfd4jvXssLe4gjKSCgdXvRT9vLp7xF2WRlJbGckghE.png?width=108&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=c3a928be58fd88bcbbf5ca51598c235f9cfa88af",
                                                "width": 108,
                                                "height": 192
                                            },
                                            {
                                                "url": "https://external-preview.redd.it/BJfd4jvXssLe4gjKSCgdXvRT9vLp7xF2WRlJbGckghE.png?width=216&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=9a6c2f4d41f390be0e565b851fd3851e772b8c3d",
                                                "width": 216,
                                                "height": 384
                                            },
                                            {
                                                "url": "https://external-preview.redd.it/BJfd4jvXssLe4gjKSCgdXvRT9vLp7xF2WRlJbGckghE.png?width=320&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=f6267a03aff51181b6ed9b4c90864c4478d5c2a3",
                                                "width": 320,
                                                "height": 568
                                            }
                                        ],
                                        "variants": {},
                                        "id": "y76GG23w7W2-V-iYmBDRNr2_eWYWxriX77cw6ldA4bU"
                                    }
                                ],
                                "enabled": false
                            },
                            "all_awardings": [
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 500,
                                    "id": "gid_2",
                                    "penny_donate": null,
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 100,
                                    "icon_url": "https://www.redditstatic.com/gold/awards/icon/gold_512.png",
                                    "days_of_premium": 7,
                                    "tiers_by_required_awardings": null,
                                    "resized_icons": [
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_16.png",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_32.png",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_48.png",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_64.png",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_128.png",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_width": 512,
                                    "static_icon_width": 512,
                                    "start_date": null,
                                    "is_enabled": true,
                                    "awardings_required_to_grant_benefits": null,
                                    "description": "Gives 100 Reddit Coins and a week of r/lounge access and ad-free browsing.",
                                    "end_date": null,
                                    "sticky_duration_seconds": null,
                                    "subreddit_coin_reward": 0,
                                    "count": 1,
                                    "static_icon_height": 512,
                                    "name": "Gold",
                                    "resized_static_icons": [
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_16.png",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_32.png",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_48.png",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_64.png",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/gold_128.png",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_format": null,
                                    "icon_height": 512,
                                    "penny_price": null,
                                    "award_type": "global",
                                    "static_icon_url": "https://www.redditstatic.com/gold/awards/icon/gold_512.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 75,
                                    "id": "award_9663243a-e77f-44cf-abc6-850ead2cd18d",
                                    "penny_donate": null,
                                    "award_sub_type": "PREMIUM",
                                    "coin_reward": 0,
                                    "icon_url": "https://www.redditstatic.com/gold/awards/icon/SnooClappingPremium_512.png",
                                    "days_of_premium": null,
                                    "tiers_by_required_awardings": null,
                                    "resized_icons": [
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/SnooClappingPremium_16.png",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/SnooClappingPremium_32.png",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/SnooClappingPremium_48.png",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/SnooClappingPremium_64.png",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/SnooClappingPremium_128.png",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_width": 512,
                                    "static_icon_width": 512,
                                    "start_date": null,
                                    "is_enabled": true,
                                    "awardings_required_to_grant_benefits": null,
                                    "description": "For an especially amazing showing.",
                                    "end_date": null,
                                    "sticky_duration_seconds": null,
                                    "subreddit_coin_reward": 0,
                                    "count": 1,
                                    "static_icon_height": 512,
                                    "name": "Bravo Grande!",
                                    "resized_static_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/59e02tmkl4451_BravoGrande-Static.png?width=16&amp;height=16&amp;auto=webp&amp;s=3459bdf1d1777821a831c5bf9834f4365263fcff",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/59e02tmkl4451_BravoGrande-Static.png?width=32&amp;height=32&amp;auto=webp&amp;s=9181d68065ccfccf2b1074e499cd7c1103aa2ce8",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/59e02tmkl4451_BravoGrande-Static.png?width=48&amp;height=48&amp;auto=webp&amp;s=339b368d395219120abc50d54fb3e2cdcad8ca4f",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/59e02tmkl4451_BravoGrande-Static.png?width=64&amp;height=64&amp;auto=webp&amp;s=de4ebbe92f9019de05aaa77f88810d44adbe1e50",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_q0gj4/59e02tmkl4451_BravoGrande-Static.png?width=128&amp;height=128&amp;auto=webp&amp;s=ba6c1add5204ea43e5af010bd9622392a42140e3",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_format": "APNG",
                                    "icon_height": 512,
                                    "penny_price": 0,
                                    "award_type": "global",
                                    "static_icon_url": "https://i.redd.it/award_images/t5_q0gj4/59e02tmkl4451_BravoGrande-Static.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 150,
                                    "id": "award_f44611f1-b89e-46dc-97fe-892280b13b82",
                                    "penny_donate": null,
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png",
                                    "days_of_premium": null,
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
                                    "count": 9,
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
                                    "icon_height": 2048,
                                    "penny_price": null,
                                    "award_type": "global",
                                    "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 100,
                                    "id": "gid_1",
                                    "penny_donate": null,
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png",
                                    "days_of_premium": null,
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
                                    "count": 10,
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
                                    "icon_height": 512,
                                    "penny_price": null,
                                    "award_type": "global",
                                    "static_icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 250,
                                    "id": "award_e71deb9c-a466-4743-9a73-48771c000077",
                                    "penny_donate": null,
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://www.redditstatic.com/gold/awards/icon/Big_Brain_Time_512.png",
                                    "days_of_premium": null,
                                    "tiers_by_required_awardings": null,
                                    "resized_icons": [
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Big_Brain_Time_16.png",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Big_Brain_Time_32.png",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Big_Brain_Time_48.png",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Big_Brain_Time_64.png",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://www.redditstatic.com/gold/awards/icon/Big_Brain_Time_128.png",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_width": 512,
                                    "static_icon_width": 512,
                                    "start_date": null,
                                    "is_enabled": true,
                                    "awardings_required_to_grant_benefits": null,
                                    "description": "2000 IQ",
                                    "end_date": null,
                                    "sticky_duration_seconds": null,
                                    "subreddit_coin_reward": 0,
                                    "count": 1,
                                    "static_icon_height": 512,
                                    "name": "Big Brain Time",
                                    "resized_static_icons": [
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/xb7kf20eti171_BigBrainTime.png?width=16&amp;height=16&amp;auto=webp&amp;s=67ffe0779c9e01071897b863a28e7d7485deb25d",
                                            "width": 16,
                                            "height": 16
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/xb7kf20eti171_BigBrainTime.png?width=32&amp;height=32&amp;auto=webp&amp;s=ad5b234b91c4dbe5cc8f67b536b2d42740b490aa",
                                            "width": 32,
                                            "height": 32
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/xb7kf20eti171_BigBrainTime.png?width=48&amp;height=48&amp;auto=webp&amp;s=46a47d259e3d9d2b5c42c290e2d7a81849e959e6",
                                            "width": 48,
                                            "height": 48
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/xb7kf20eti171_BigBrainTime.png?width=64&amp;height=64&amp;auto=webp&amp;s=eed89195fe44c22cbf1afa6b1cddf2e44ebec537",
                                            "width": 64,
                                            "height": 64
                                        },
                                        {
                                            "url": "https://preview.redd.it/award_images/t5_22cerq/xb7kf20eti171_BigBrainTime.png?width=128&amp;height=128&amp;auto=webp&amp;s=4c5623955b5acbde1e4cb9bac18bab9841b44e73",
                                            "width": 128,
                                            "height": 128
                                        }
                                    ],
                                    "icon_format": "APNG",
                                    "icon_height": 512,
                                    "penny_price": 0,
                                    "award_type": "global",
                                    "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/xb7kf20eti171_BigBrainTime.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 30,
                                    "id": "award_b4ff447e-05a5-42dc-9002-63568807cfe6",
                                    "penny_donate": null,
                                    "award_sub_type": "PREMIUM",
                                    "coin_reward": 0,
                                    "icon_url": "https://www.redditstatic.com/gold/awards/icon/Illuminati_512.png",
                                    "days_of_premium": null,
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
                                    "count": 3,
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
                                    "icon_height": 2048,
                                    "penny_price": null,
                                    "award_type": "global",
                                    "static_icon_url": "https://i.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png"
                                },
                                {
                                    "giver_coin_reward": null,
                                    "subreddit_id": null,
                                    "is_new": false,
                                    "days_of_drip_extension": null,
                                    "coin_price": 125,
                                    "id": "award_5f123e3d-4f48-42f4-9c11-e98b566d5897",
                                    "penny_donate": null,
                                    "award_sub_type": "GLOBAL",
                                    "coin_reward": 0,
                                    "icon_url": "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png",
                                    "days_of_premium": null,
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
                                    "count": 6,
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
                                    "icon_height": 2048,
                                    "penny_price": null,
                                    "award_type": "global",
                                    "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png"
                                }
                            ],
                            "awarders": [],
                            "media_only": false,
                            "link_flair_template_id": "423b2514-8942-11ea-9c45-0ec57a19fbbd",
                            "can_gild": false,
                            "spoiler": false,
                            "locked": false,
                            "author_flair_text": null,
                            "treatment_tags": [],
                            "visited": false,
                            "removed_by": null,
                            "mod_note": null,
                            "distinguished": null,
                            "subreddit_id": "t5_2r5rp",
                            "author_is_blocked": false,
                            "mod_reason_by": null,
                            "num_reports": null,
                            "removal_reason": null,
                            "link_flair_background_color": "#ffd635",
                            "id": "win92x",
                            "is_robot_indexable": true,
                            "report_reasons": null,
                            "author": "Shadow474747",
                            "discussion_type": null,
                            "num_comments": 3251,
                            "send_replies": true,
                            "whitelist_status": "all_ads",
                            "contest_mode": false,
                            "mod_reports": [],
                            "author_patreon_flair": false,
                            "author_flair_text_color": null,
                            "permalink": "/r/facepalm/comments/win92x/interesting_logic/",
                            "parent_whitelist_status": "all_ads",
                            "stickied": false,
                            "url": "https://v.redd.it/4w1vutirrdg91",
                            "subreddit_subscribers": 6459233,
                            "created_utc": 1659898955,
                            "num_crossposts": 8,
                            "media": {
                                "reddit_video": {
                                    "bitrate_kbps": 2400,
                                    "fallback_url": "https://v.redd.it/4w1vutirrdg91/DASH_720.mp4?source=fallback",
                                    "height": 720,
                                    "width": 405,
                                    "scrubber_media_url": "https://v.redd.it/4w1vutirrdg91/DASH_96.mp4",
                                    "dash_url": "https://v.redd.it/4w1vutirrdg91/DASHPlaylist.mpd?a=1662546345%2CN2EwYjhkOWNlZmZmNDg4ODY2MzMxY2Y4ZDlkNjU2NDg5MjU3NjFhMzFjNjNmZTE1ZjFmMzIwYjI4M2Y4NjE2OQ%3D%3D&amp;v=1&amp;f=hd",
                                    "duration": 82,
                                    "hls_url": "https://v.redd.it/4w1vutirrdg91/HLSPlaylist.m3u8?a=1662546345%2CMzMxZDc1N2RjYTAyNzEyZWUzZmVjYjQ3YmQzYWFkYjU2NGYyNWUxMDZhZjRhMWU4OWZhOGFiZmI0NGMyYTkxMQ%3D%3D&amp;v=1&amp;f=hd",
                                    "is_gif": false,
                                    "transcoding_status": "completed"
                                }
                            },
                            "is_video": true
                        }
                    }
                ]
            }
        };

        const expectedResult = [
            {
                title: "undoubtedly the best photo I took at my sister's wedding",
                author: "BabyGroot1337",
                time: 1659895802,
                numberComments: 3042
            },
            {
                title:  "Interesting logic",
                author: "Shadow474747",
                time:  1659898955,
                numberComments: 3251
            }
            ];

        const actualResult = extractPostsFromReddit(mockData);

        expect(actualResult).toEqual(expectedResult);
    });
});