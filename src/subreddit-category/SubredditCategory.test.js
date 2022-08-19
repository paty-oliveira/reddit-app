import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { SubredditCategory, extractSubRedditsTitle } from "./SubredditCategory";

describe('<SubredditCategory />', () => {

    it('should have a title as Subreddits', function () {
        render(<SubredditCategory />);

        const expectedTitle = 'Subreddits';
        expect(screen.getByText(expectedTitle)).toBeInTheDocument();
    });

    it('should render one element belonging to subreddit-container class', function () {
        const { container } = render(<SubredditCategory />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('subreddit-container').length;

        expect(actualResult).toBe(expectedResult)
    });

    it('should render one element belonging to subcategory-container class', function () {
        const { container } = render(<SubredditCategory />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('subcategory-container').length;

        expect(actualResult).toBe(expectedResult)
    });

})

describe('extractSubRedditsTitle', ()=> {

    it('should have a list of subreddit titles with a single title', function () {
        const mockData = {
            "kind": "Listing",
            "data": {
                "after": "t5_2cneq",
                "dist": 25,
                "modhash": "",
                "geo_filter": "",
                "children": [
                    {
                        "kind": "t5",
                        "data": {
                            "user_flair_background_color": null,
                            "submit_text_html": null,
                            "restrict_posting": true,
                            "user_is_banned": null,
                            "free_form_reports": true,
                            "wiki_enabled": false,
                            "user_is_muted": null,
                            "user_can_flair_in_sr": null,
                            "display_name": "Home",
                            "header_img": null,
                            "title": "Home",
                            "allow_galleries": true,
                            "icon_size": null,
                            "primary_color": "",
                            "active_user_count": null,
                            "icon_img": "",
                            "display_name_prefixed": "r/Home",
                            "accounts_active": null,
                            "public_traffic": false,
                            "subscribers": 72908,
                            "user_flair_richtext": [],
                            "videostream_links_count": 1,
                            "name": "t5_2qs0k",
                            "quarantine": false,
                            "hide_ads": false,
                            "prediction_leaderboard_entry_type": "SUBREDDIT_HEADER",
                            "emojis_enabled": false,
                            "advertiser_category": "",
                            "public_description": "",
                            "comment_score_hide_mins": 0,
                            "allow_predictions": true,
                            "user_has_favorited": null,
                            "user_flair_template_id": null,
                            "community_icon": "",
                            "banner_background_image": "",
                            "original_content_tag_enabled": false,
                            "community_reviewed": true,
                            "submit_text": "",
                            "description_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;Everything home related: interior design, home improvement, architecture.&lt;/p&gt;\n\n&lt;h2&gt;&lt;strong&gt;Related subreddits&lt;/strong&gt;&lt;/h2&gt;\n\n&lt;ul&gt;\n&lt;li&gt;&lt;a href=\"http://www.reddit.com/r/interiordesign\"&gt;/r/InteriorDesign&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"http://www.reddit.com/r/architecture\"&gt;/r/architecture&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"http://www.reddit.com/r/houseporn\"&gt;/r/houseporn&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"http://www.reddit.com/r/roomporn\"&gt;/r/roomporn&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"http://www.reddit.com/r/designmyroom\"&gt;/r/designmyroom&lt;/a&gt;&lt;/li&gt;\n&lt;/ul&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
                            "spoilers_enabled": true,
                            "comment_contribution_settings": {},
                            "allow_talks": true,
                            "header_size": null,
                            "user_flair_position": "right",
                            "all_original_content": false,
                            "has_menu_widget": false,
                            "is_enrolled_in_new_modmail": null,
                            "key_color": "",
                            "can_assign_user_flair": true,
                            "created": 1232850357,
                            "wls": 6,
                            "show_media_preview": true,
                            "submission_type": "any",
                            "user_is_subscriber": null,
                            "allowed_media_in_comments": [],
                            "allow_videogifs": true,
                            "should_archive_posts": false,
                            "user_flair_type": "text",
                            "allow_polls": true,
                            "collapse_deleted_comments": false,
                            "emojis_custom_size": null,
                            "public_description_html": null,
                            "allow_videos": true,
                            "is_crosspostable_subreddit": false,
                            "suggested_comment_sort": null,
                            "should_show_media_in_comments_setting": true,
                            "can_assign_link_flair": true,
                            "accounts_active_is_fuzzed": false,
                            "allow_prediction_contributors": false,
                            "submit_text_label": null,
                            "link_flair_position": "right",
                            "user_sr_flair_enabled": null,
                            "user_flair_enabled_in_sr": false,
                            "allow_chat_post_creation": false,
                            "allow_discovery": true,
                            "accept_followers": true,
                            "user_sr_theme_enabled": true,
                            "link_flair_enabled": true,
                            "disable_contributor_requests": false,
                            "subreddit_type": "public",
                            "notification_level": null,
                            "banner_img": "",
                            "user_flair_text": null,
                            "banner_background_color": "",
                            "show_media": true,
                            "id": "2qs0k",
                            "user_is_contributor": null,
                            "over18": false,
                            "header_title": null,
                            "description": "Everything home related: interior design, home improvement, architecture.\n\n**Related subreddits**\n--------------------------\n* [/r/InteriorDesign](http://www.reddit.com/r/interiordesign)\n* [/r/architecture](http://www.reddit.com/r/architecture)\n* [/r/houseporn](http://www.reddit.com/r/houseporn)\n* [/r/roomporn](http://www.reddit.com/r/roomporn)\n* [/r/designmyroom](http://www.reddit.com/r/designmyroom)",
                            "is_chat_post_feature_enabled": true,
                            "submit_link_label": null,
                            "user_flair_text_color": null,
                            "restrict_commenting": false,
                            "user_flair_css_class": null,
                            "allow_images": true,
                            "lang": "en",
                            "whitelist_status": "all_ads",
                            "url": "/r/Home/",
                            "created_utc": 1232850357,
                            "banner_size": null,
                            "mobile_banner_image": "",
                            "user_is_moderator": null,
                            "allow_predictions_tournament": true
                        }
                    }]}

        }

        const expectedResult = ['Home']
        const actualResult = extractSubRedditsTitle(mockData);

        expect(actualResult).toEqual(expectedResult)
    })

    it('should have a list of subreddit titles with two titles', function () {
        const mockData = {
            "kind": "Listing",
            "data": {
                "after": "t5_2cneq",
                "dist": 25,
                "modhash": "",
                "geo_filter": "",
                "children": [
                    {
                        "kind": "t5",
                        "data": {
                            "user_flair_background_color": null,
                            "submit_text_html": null,
                            "restrict_posting": true,
                            "user_is_banned": null,
                            "free_form_reports": true,
                            "wiki_enabled": false,
                            "user_is_muted": null,
                            "user_can_flair_in_sr": null,
                            "display_name": "Home",
                            "header_img": null,
                            "title": "Home",
                            "allow_galleries": true,
                            "icon_size": null,
                            "primary_color": "",
                            "active_user_count": null,
                            "icon_img": "",
                            "display_name_prefixed": "r/Home",
                            "accounts_active": null,
                            "public_traffic": false,
                            "subscribers": 72908,
                            "user_flair_richtext": [],
                            "videostream_links_count": 1,
                            "name": "t5_2qs0k",
                            "quarantine": false,
                            "hide_ads": false,
                            "prediction_leaderboard_entry_type": "SUBREDDIT_HEADER",
                            "emojis_enabled": false,
                            "advertiser_category": "",
                            "public_description": "",
                            "comment_score_hide_mins": 0,
                            "allow_predictions": true,
                            "user_has_favorited": null,
                            "user_flair_template_id": null,
                            "community_icon": "",
                            "banner_background_image": "",
                            "original_content_tag_enabled": false,
                            "community_reviewed": true,
                            "submit_text": "",
                            "description_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;Everything home related: interior design, home improvement, architecture.&lt;/p&gt;\n\n&lt;h2&gt;&lt;strong&gt;Related subreddits&lt;/strong&gt;&lt;/h2&gt;\n\n&lt;ul&gt;\n&lt;li&gt;&lt;a href=\"http://www.reddit.com/r/interiordesign\"&gt;/r/InteriorDesign&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"http://www.reddit.com/r/architecture\"&gt;/r/architecture&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"http://www.reddit.com/r/houseporn\"&gt;/r/houseporn&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"http://www.reddit.com/r/roomporn\"&gt;/r/roomporn&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"http://www.reddit.com/r/designmyroom\"&gt;/r/designmyroom&lt;/a&gt;&lt;/li&gt;\n&lt;/ul&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
                            "spoilers_enabled": true,
                            "comment_contribution_settings": {},
                            "allow_talks": true,
                            "header_size": null,
                            "user_flair_position": "right",
                            "all_original_content": false,
                            "has_menu_widget": false,
                            "is_enrolled_in_new_modmail": null,
                            "key_color": "",
                            "can_assign_user_flair": true,
                            "created": 1232850357,
                            "wls": 6,
                            "show_media_preview": true,
                            "submission_type": "any",
                            "user_is_subscriber": null,
                            "allowed_media_in_comments": [],
                            "allow_videogifs": true,
                            "should_archive_posts": false,
                            "user_flair_type": "text",
                            "allow_polls": true,
                            "collapse_deleted_comments": false,
                            "emojis_custom_size": null,
                            "public_description_html": null,
                            "allow_videos": true,
                            "is_crosspostable_subreddit": false,
                            "suggested_comment_sort": null,
                            "should_show_media_in_comments_setting": true,
                            "can_assign_link_flair": true,
                            "accounts_active_is_fuzzed": false,
                            "allow_prediction_contributors": false,
                            "submit_text_label": null,
                            "link_flair_position": "right",
                            "user_sr_flair_enabled": null,
                            "user_flair_enabled_in_sr": false,
                            "allow_chat_post_creation": false,
                            "allow_discovery": true,
                            "accept_followers": true,
                            "user_sr_theme_enabled": true,
                            "link_flair_enabled": true,
                            "disable_contributor_requests": false,
                            "subreddit_type": "public",
                            "notification_level": null,
                            "banner_img": "",
                            "user_flair_text": null,
                            "banner_background_color": "",
                            "show_media": true,
                            "id": "2qs0k",
                            "user_is_contributor": null,
                            "over18": false,
                            "header_title": null,
                            "description": "Everything home related: interior design, home improvement, architecture.\n\n**Related subreddits**\n--------------------------\n* [/r/InteriorDesign](http://www.reddit.com/r/interiordesign)\n* [/r/architecture](http://www.reddit.com/r/architecture)\n* [/r/houseporn](http://www.reddit.com/r/houseporn)\n* [/r/roomporn](http://www.reddit.com/r/roomporn)\n* [/r/designmyroom](http://www.reddit.com/r/designmyroom)",
                            "is_chat_post_feature_enabled": true,
                            "submit_link_label": null,
                            "user_flair_text_color": null,
                            "restrict_commenting": false,
                            "user_flair_css_class": null,
                            "allow_images": true,
                            "lang": "en",
                            "whitelist_status": "all_ads",
                            "url": "/r/Home/",
                            "created_utc": 1232850357,
                            "banner_size": null,
                            "mobile_banner_image": "",
                            "user_is_moderator": null,
                            "allow_predictions_tournament": true
                        }
                    },
                    {
                        "kind": "t5",
                        "data": {
                            "user_flair_background_color": null,
                            "submit_text_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;&lt;strong&gt;AskReddit is all about DISCUSSION. Your post needs to inspire discussion, ask an open-ended question that prompts redditors to share ideas or opinions.&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;Questions need to be neutral and the question alone.&lt;/strong&gt; Any opinion or answer must go as a reply to your question, this includes examples or any kind of story about you. This is so that all responses will be to your question, and there&amp;#39;s nothing else to respond to. Opinionated posts are forbidden.&lt;/p&gt;\n\n&lt;ul&gt;\n&lt;li&gt;If your question has a factual answer, try &lt;a href=\"/r/answers\"&gt;r/answers&lt;/a&gt;.&lt;/li&gt;\n&lt;li&gt;If you are trying to find out about something or get an explanation, try &lt;a href=\"/r/explainlikeimfive\"&gt;r/explainlikeimfive&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;If your question has a limited number of responses, then it&amp;#39;s not suitable.&lt;/li&gt;\n&lt;li&gt;If you&amp;#39;re asking for any kind of advice, then it&amp;#39;s not suitable.&lt;/li&gt;\n&lt;li&gt;If you feel the need to add an example in order for your question to make sense then you need to re-word your question.&lt;/li&gt;\n&lt;li&gt;If you&amp;#39;re explaining why you&amp;#39;re asking the question, you need to stop.&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;p&gt;You can always ask where to post in &lt;a href=\"/r/findareddit\"&gt;r/findareddit&lt;/a&gt;.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
                            "restrict_posting": true,
                            "user_is_banned": null,
                            "free_form_reports": true,
                            "wiki_enabled": true,
                            "user_is_muted": null,
                            "user_can_flair_in_sr": null,
                            "display_name": "AskReddit",
                            "header_img": "https://a.thumbs.redditmedia.com/IrfPJGuWzi_ewrDTBlnULeZsJYGz81hsSQoQJyw6LD8.png",
                            "title": "Ask Reddit...",
                            "allow_galleries": false,
                            "icon_size": [
                                256,
                                256
                            ],
                            "primary_color": "#646d73",
                            "active_user_count": null,
                            "icon_img": "https://b.thumbs.redditmedia.com/EndDxMGB-FTZ2MGtjepQ06cQEkZw_YQAsOUudpb9nSQ.png",
                            "display_name_prefixed": "r/AskReddit",
                            "accounts_active": null,
                            "public_traffic": false,
                            "subscribers": 36732166,
                            "user_flair_richtext": [],
                            "name": "t5_2qh1i",
                            "quarantine": false,
                            "hide_ads": false,
                            "prediction_leaderboard_entry_type": "SUBREDDIT_HEADER",
                            "emojis_enabled": true,
                            "advertiser_category": "Lifestyles",
                            "public_description": "r/AskReddit is the place to ask and answer thought-provoking questions.",
                            "comment_score_hide_mins": 60,
                            "allow_predictions": true,
                            "user_has_favorited": null,
                            "user_flair_template_id": null,
                            "community_icon": "https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_tijjpyw1qe201.png?width=256&amp;s=4e76eadc662b8155a93d4d7487a6d3acb35f4334",
                            "banner_background_image": "",
                            "original_content_tag_enabled": false,
                            "community_reviewed": true,
                            "submit_text": "**AskReddit is all about DISCUSSION. Your post needs to inspire discussion, ask an open-ended question that prompts redditors to share ideas or opinions.**\n\n**Questions need to be neutral and the question alone.** Any opinion or answer must go as a reply to your question, this includes examples or any kind of story about you. This is so that all responses will be to your question, and there's nothing else to respond to. Opinionated posts are forbidden.\n\n* If your question has a factual answer, try r/answers.\n* If you are trying to find out about something or get an explanation, try r/explainlikeimfive\n* If your question has a limited number of responses, then it's not suitable.\n* If you're asking for any kind of advice, then it's not suitable.\n* If you feel the need to add an example in order for your question to make sense then you need to re-word your question.\n* If you're explaining why you're asking the question, you need to stop.\n\nYou can always ask where to post in r/findareddit.",
                            "description_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;h6&gt;&lt;a href=\"http://www.reddit.com/r/askreddit/submit?selftext=true&amp;amp;title=%5BSerious%5D\"&gt; [ SERIOUS ] &lt;/a&gt;&lt;/h6&gt;\n\n&lt;h5&gt;&lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/index#wiki_rules\"&gt;Rules&lt;/a&gt;:&lt;/h5&gt;\n\n&lt;ol&gt;\n&lt;li&gt;&lt;p&gt;You must post a clear and direct question in the title. The title may contain two, short, necessary context sentences.\nNo text is allowed in the textbox. Your thoughts/responses to the question can go in the comments section. &lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_1-\"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Any post asking for advice should be generic and not specific to your situation alone. &lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_2-\"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Askreddit is for open-ended discussion questions. &lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_3-\"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Posting, or seeking, any identifying personal information, real or fake, will result in a ban without a prior warning. &lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_4-\"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Askreddit is not your soapbox, personal army, or advertising platform. &lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_5-\"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;[Serious] tagged posts are off-limits to jokes or irrelevant replies. &lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_6-\"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Soliciting money, goods, services, or favours is not allowed. &lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_7-\"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Mods reserve the right to remove content or restrict users&amp;#39; posting privileges as necessary if it is deemed detrimental to the subreddit or to the experience of others. &lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_8-\"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Comment replies consisting solely of images will be removed. &lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_9-\"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;/ol&gt;\n\n&lt;h5&gt;If you think your post has disappeared, see spam or an inappropriate post, please do not hesitate to &lt;a href=\"https://www.reddit.com/message/compose?to=%2Fr%2FAskReddit\"&gt;contact the mods&lt;/a&gt;, we&amp;#39;re happy to help.&lt;/h5&gt;\n\n&lt;hr/&gt;\n\n&lt;h4&gt;Tags to use:&lt;/h4&gt;\n\n&lt;blockquote&gt;\n&lt;h2&gt;&lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_6-\"&gt;[Serious]&lt;/a&gt;&lt;/h2&gt;\n&lt;/blockquote&gt;\n\n&lt;h3&gt;Use a &lt;strong&gt;[Serious]&lt;/strong&gt; post tag to designate your post as a serious, on-topic-only thread.&lt;/h3&gt;\n\n&lt;h2&gt;&lt;/h2&gt;\n\n&lt;h4&gt;Filter posts by subject:&lt;/h4&gt;\n\n&lt;p&gt;&lt;a href=\"http://ud.reddit.com/r/AskReddit/#ud\"&gt;Mod posts&lt;/a&gt;\n&lt;a href=\"https://www.reddit.com/r/AskReddit/search/?q=flair%3Aserious&amp;amp;sort=new&amp;amp;restrict_sr=on&amp;amp;t=all\"&gt;Serious posts&lt;/a&gt;\n&lt;a href=\"http://bu.reddit.com/r/AskReddit/#bu\"&gt;Megathread&lt;/a&gt;\n&lt;a href=\"http://nr.reddit.com/r/AskReddit/#nr\"&gt;Breaking news&lt;/a&gt;\n&lt;a href=\"/r/AskReddit\"&gt;Unfilter&lt;/a&gt;&lt;/p&gt;\n\n&lt;h2&gt;&lt;/h2&gt;\n\n&lt;h3&gt;Please use spoiler tags to hide spoilers. &lt;code&gt;&amp;gt;!insert spoiler here!&amp;lt;&lt;/code&gt;&lt;/h3&gt;\n\n&lt;h2&gt;&lt;/h2&gt;\n\n&lt;h4&gt;Other subreddits you might like:&lt;/h4&gt;\n\n&lt;table&gt;&lt;thead&gt;\n&lt;tr&gt;\n&lt;th align=\"left\"&gt;some&lt;/th&gt;\n&lt;th align=\"left\"&gt;header&lt;/th&gt;\n&lt;/tr&gt;\n&lt;/thead&gt;&lt;tbody&gt;\n&lt;tr&gt;\n&lt;td align=\"left\"&gt;&lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_ask_others\"&gt;Ask Others&lt;/a&gt;&lt;/td&gt;\n&lt;td align=\"left\"&gt;&lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_self_.26amp.3B_others\"&gt;Self &amp;amp; Others&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align=\"left\"&gt;&lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_find_a_subreddit\"&gt;Find a subreddit&lt;/a&gt;&lt;/td&gt;\n&lt;td align=\"left\"&gt;&lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_learn_something\"&gt;Learn something&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align=\"left\"&gt;&lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_meta\"&gt;Meta Subs&lt;/a&gt;&lt;/td&gt;\n&lt;td align=\"left\"&gt;&lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_what_is_this______\"&gt;What is this ___&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align=\"left\"&gt;&lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_askreddit_offshoots\"&gt;AskReddit Offshoots&lt;/a&gt;&lt;/td&gt;\n&lt;td align=\"left\"&gt;&lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_offers_.26amp.3B_assistance\"&gt;Offers &amp;amp; Assistance&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;/tbody&gt;&lt;/table&gt;\n\n&lt;h2&gt;&lt;/h2&gt;\n\n&lt;h3&gt;Ever read the reddiquette? &lt;a href=\"/wiki/reddiquette\"&gt;Take a peek!&lt;/a&gt;&lt;/h3&gt;\n\n&lt;p&gt;&lt;a href=\"#/RES_SR_Config/NightModeCompatible\"&gt;&lt;/a&gt;&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
                            "spoilers_enabled": true,
                            "comment_contribution_settings": {},
                            "allow_talks": true,
                            "header_size": [
                                125,
                                73
                            ],
                            "user_flair_position": "right",
                            "all_original_content": false,
                            "has_menu_widget": false,
                            "is_enrolled_in_new_modmail": null,
                            "key_color": "#222222",
                            "can_assign_user_flair": false,
                            "created": 1201233135,
                            "wls": 6,
                            "show_media_preview": true,
                            "submission_type": "self",
                            "user_is_subscriber": null,
                            "allowed_media_in_comments": [],
                            "allow_videogifs": false,
                            "should_archive_posts": true,
                            "user_flair_type": "text",
                            "allow_polls": false,
                            "collapse_deleted_comments": true,
                            "emojis_custom_size": null,
                            "public_description_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;&lt;a href=\"/r/AskReddit\"&gt;r/AskReddit&lt;/a&gt; is the place to ask and answer thought-provoking questions.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
                            "allow_videos": false,
                            "is_crosspostable_subreddit": false,
                            "suggested_comment_sort": null,
                            "should_show_media_in_comments_setting": true,
                            "can_assign_link_flair": false,
                            "accounts_active_is_fuzzed": false,
                            "allow_prediction_contributors": false,
                            "submit_text_label": "Ask a question",
                            "link_flair_position": "right",
                            "user_sr_flair_enabled": null,
                            "user_flair_enabled_in_sr": false,
                            "allow_chat_post_creation": false,
                            "allow_discovery": true,
                            "accept_followers": true,
                            "user_sr_theme_enabled": true,
                            "link_flair_enabled": true,
                            "disable_contributor_requests": false,
                            "subreddit_type": "public",
                            "notification_level": null,
                            "banner_img": "https://b.thumbs.redditmedia.com/PXt8GnqdYu-9lgzb3iesJBLN21bXExRV1A45zdw4sYE.png",
                            "user_flair_text": null,
                            "banner_background_color": "#f0f7fd",
                            "show_media": false,
                            "id": "2qh1i",
                            "user_is_contributor": null,
                            "over18": false,
                            "header_title": "Ass Credit",
                            "description": "###### [ [ SERIOUS ] ](http://www.reddit.com/r/askreddit/submit?selftext=true&amp;title=%5BSerious%5D)\n\n\n##### [Rules](https://www.reddit.com/r/AskReddit/wiki/index#wiki_rules):\n1. You must post a clear and direct question in the title. The title may contain two, short, necessary context sentences.\nNo text is allowed in the textbox. Your thoughts/responses to the question can go in the comments section. [more &gt;&gt;](https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_1-)\n\n2. Any post asking for advice should be generic and not specific to your situation alone. [more &gt;&gt;](https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_2-)\n\n3. Askreddit is for open-ended discussion questions. [more &gt;&gt;](https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_3-)\n\n4. Posting, or seeking, any identifying personal information, real or fake, will result in a ban without a prior warning. [more &gt;&gt;](https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_4-)\n\n5. Askreddit is not your soapbox, personal army, or advertising platform. [more &gt;&gt;](https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_5-)\n\n6. [Serious] tagged posts are off-limits to jokes or irrelevant replies. [more &gt;&gt;](https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_6-)\n\n7. Soliciting money, goods, services, or favours is not allowed. [more &gt;&gt;](https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_7-)\n\n8. Mods reserve the right to remove content or restrict users' posting privileges as necessary if it is deemed detrimental to the subreddit or to the experience of others. [more &gt;&gt;](https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_8-)\n\n9. Comment replies consisting solely of images will be removed. [more &gt;&gt;](https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_9-)\n\n##### If you think your post has disappeared, see spam or an inappropriate post, please do not hesitate to [contact the mods](https://www.reddit.com/message/compose?to=%2Fr%2FAskReddit), we're happy to help.\n\n---\n\n#### Tags to use:\n\n&gt; ## [[Serious]](https://www.reddit.com/r/AskReddit/wiki/index#wiki_-rule_6-)\n\n### Use a **[Serious]** post tag to designate your post as a serious, on-topic-only thread.\n\n-\n\n#### Filter posts by subject:\n\n[Mod posts](http://ud.reddit.com/r/AskReddit/#ud)\n[Serious posts](https://www.reddit.com/r/AskReddit/search/?q=flair%3Aserious&amp;sort=new&amp;restrict_sr=on&amp;t=all)\n[Megathread](http://bu.reddit.com/r/AskReddit/#bu)\n[Breaking news](http://nr.reddit.com/r/AskReddit/#nr)\n[Unfilter](/r/AskReddit)\n\n\n-\n\n### Please use spoiler tags to hide spoilers. `&gt;!insert spoiler here!&lt;`\n\n-\n\n#### Other subreddits you might like:\nsome|header\n:---|:---\n[Ask Others](https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_ask_others)|[Self &amp; Others](https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_self_.26amp.3B_others)\n[Find a subreddit](https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_find_a_subreddit)|[Learn something](https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_learn_something)\n[Meta Subs](https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_meta)|[What is this ___](https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_what_is_this______)\n[AskReddit Offshoots](https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_askreddit_offshoots)|[Offers &amp; Assistance](https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_offers_.26amp.3B_assistance)\n\n\n-\n\n### Ever read the reddiquette? [Take a peek!](/wiki/reddiquette)\n\n[](#/RES_SR_Config/NightModeCompatible)",
                            "is_chat_post_feature_enabled": true,
                            "submit_link_label": "",
                            "user_flair_text_color": null,
                            "restrict_commenting": false,
                            "user_flair_css_class": null,
                            "allow_images": false,
                            "lang": "es",
                            "whitelist_status": "all_ads",
                            "url": "/r/AskReddit/",
                            "created_utc": 1201233135,
                            "banner_size": [
                                1280,
                                384
                            ],
                            "mobile_banner_image": "",
                            "user_is_moderator": null,
                            "allow_predictions_tournament": true
                        }
                    }
                ]
            }
        }

        const expectedResult = ['Home', 'Ask Reddit...'];
        const actualResult = extractSubRedditsTitle(mockData);

        expect(actualResult).toEqual(expectedResult);
    });
});