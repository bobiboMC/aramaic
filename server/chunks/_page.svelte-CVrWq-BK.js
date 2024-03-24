import { c as create_ssr_component, v as validate_component, e as escape, d as createEventDispatcher, f as add_attribute } from './ssr-DKcrDw5r.js';

const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<header class="text-lg"><h1>${escape(title)}</h1></header>`;
});
const words = [
  {
    aramaic: "",
    hebrew: ""
  },
  {
    aramaic: "אֲבָהָן",
    hebrew: "אָבוֹת"
  },
  {
    aramaic: "אִבְרוּ",
    hebrew: "נִּבְרְאוּ"
  },
  {
    aramaic: "אַגְלִיף",
    hebrew: "חָקַק"
  },
  {
    aramaic: "אִדְכַּר",
    hebrew: "נִּזְכַּר"
  },
  {
    aramaic: "אַדְכַּרְנָא",
    hebrew: "אַזְכִּיר"
  },
  {
    aramaic: "אוֹזִיפַת",
    hebrew: "הִלְוְתָה"
  },
  {
    aramaic: "אוֹמֵינָא",
    hebrew: "נִשְׁבַּעְתִּי"
  },
  {
    aramaic: "אוּף",
    hebrew: "אַף"
  },
  {
    aramaic: "אוֹקִימְנָא",
    hebrew: "הֶעֱמַדְתִּי"
  },
  {
    aramaic: "אוֹרַיְתָא",
    hebrew: "תּוֹרָה"
  },
  {
    aramaic: "אִזְדְּרַע",
    hebrew: "נִזְרַע"
  },
  {
    aramaic: "אָחֳרָא",
    hebrew: "אַחֶרֶת"
  },
  {
    aramaic: "אָחֳרָנִין",
    hebrew: "אֲחֵרוֹת"
  },
  {
    aramaic: "אִי",
    hebrew: "אִם"
  },
  {
    aramaic: "אִיבְנוּ",
    hebrew: "נִבְנוּ"
  },
  {
    aramaic: "אִיהוּ",
    hebrew: "הוּא"
  },
  {
    aramaic: "אִיהִי",
    hebrew: "הִיא"
  },
  {
    aramaic: "אֵימָתַי",
    hebrew: "מָתַי"
  },
  {
    aramaic: "אֵיעוֹל",
    hebrew: "אֶכָּנֵס"
  },
  {
    aramaic: "אִיצְטְרִיךְ",
    hebrew: "צָּרִיךְ"
  },
  {
    aramaic: "אִית",
    hebrew: "יֵשׁ"
  },
  {
    aramaic: "אִיתְגַּלְּיָא",
    hebrew: "גָּלוּי"
  },
  {
    aramaic: "אִלֵּין",
    hebrew: "אֵלּוּ"
  },
  {
    aramaic: "אַמַּאי",
    hebrew: "לָמָּה"
  },
  {
    aramaic: "אֲמִינָא",
    hebrew: "אָמַרְתִּי"
  },
  {
    aramaic: "אֶמְצָעִיתָא",
    hebrew: "אֶמְצַע"
  },
  {
    aramaic: "אָמַרְנָא",
    hebrew: "אָמַרְתִּי"
  },
  {
    aramaic: "אֲנָא",
    hebrew: "אֲנִי"
  },
  {
    aramaic: "אִנּוּן",
    hebrew: "אוֹתָם/הֵם"
  },
  {
    aramaic: "אַנְתְּ",
    hebrew: "אַתְּ"
  },
  {
    aramaic: "אַסְהִידַת",
    hebrew: "הַעִידתִי"
  },
  {
    aramaic: "אַסְוָתָא",
    hebrew: "רְפוּאָה"
  },
  {
    aramaic: "אָעִילַת",
    hebrew: "נִכְנְסָה"
  },
  {
    aramaic: "אַפִּיק",
    hebrew: "הוֹצִיא"
  },
  {
    aramaic: "אִצְטְרִיךְ",
    hebrew: "צְרִיכָה"
  },
  {
    aramaic: "אִקְרֵי",
    hebrew: "נִקְרָא"
  },
  {
    aramaic: "אִשְׁתְּזִיב",
    hebrew: "נִצָּל"
  },
  {
    aramaic: "אִשְׁתְּלִים",
    hebrew: "נִשְׁלְמוּ"
  },
  {
    aramaic: "אִשְׁתְּטָחוּ",
    hebrew: "הִשְׁתַּטְּחוּ"
  },
  {
    aramaic: "אִשְׁתְּמוֹדַע",
    hebrew: "נּוֹדָע"
  },
  {
    aramaic: "אִשְׁתַּתַּף",
    hebrew: "מִּשְׁתַּתֵּף"
  },
  {
    aramaic: "אַתְּ אָמֵר",
    hebrew: "נֶּאֱמַר"
  },
  {
    aramaic: "אָתָא",
    hebrew: "בָא"
  },
  {
    aramaic: "אִתְבְּנֵי",
    hebrew: "נִבְנָה"
  },
  {
    aramaic: "אִתְבְּרִיאוּ",
    hebrew: "נבְרְאוּ"
  },
  {
    aramaic: "אִתְגַּלְּיָא",
    hebrew: "הִתְגַּלָּה"
  },
  {
    aramaic: "אִתְגְּנִיז",
    hebrew: "נִגְנַז"
  },
  {
    aramaic: "אִתְהֲזָאָן",
    hebrew: "נִרְאִים"
  },
  {
    aramaic: "אַתְוָן",
    hebrew: "אוֹתִיּוֹת"
  },
  {
    aramaic: "אִתְחַבְּרוּן",
    hebrew: "הִתְחַבְּרוּ"
  },
  {
    aramaic: "אִתְחֲזוֹן",
    hebrew: "נִּרְאוּ"
  },
  {
    aramaic: "אִתְחְרִיב",
    hebrew: "נֶּחֱרַב"
  },
  {
    aramaic: "אֲתֵינָא",
    hebrew: "בָאנוּ"
  },
  {
    aramaic: "אִתְכְּלִיל",
    hebrew: "נִכְלַל"
  },
  {
    aramaic: "אִתְלַבַּשׁ",
    hebrew: "הִתְלַבֵּשׁ"
  },
  {
    aramaic: "אִתְמַשְּׁכָן",
    hebrew: "נִּמְשְׁכוּ"
  },
  {
    aramaic: "אִתָּמַר",
    hebrew: "נֶּאֱמַר"
  },
  {
    aramaic: "אִתְעַרְנָא",
    hebrew: "הִתְעוֹרַרְתִּי"
  },
  {
    aramaic: "אִתְקַיֵּים",
    hebrew: "הִתְקַיֵּם"
  },
  {
    aramaic: "לְאִתְקְרֵי",
    hebrew: "לְהִקָּרֵא"
  },
  {
    aramaic: "אִתְקַשִּׁיטַת",
    hebrew: "הִתְקַשְּׁטָה"
  },
  {
    aramaic: "אֲתַר",
    hebrew: "מָּקוֹם"
  },
  {
    aramaic: "בְּהוּ",
    hebrew: "בָּהֶם"
  },
  {
    aramaic: "בּוֹצִינָא",
    hebrew: "מָּאוֹר"
  },
  {
    aramaic: "בֵּי",
    hebrew: "בֵּית"
  },
  {
    aramaic: "בֵּיהּ",
    hebrew: "בוֹ/בָּהּ"
  },
  {
    aramaic: "בְּנָא",
    hebrew: "בָּנְתָה"
  },
  {
    aramaic: "בְנֵי עָלְמָא",
    hebrew: "בְּנֵי אָדָם"
  },
  {
    aramaic: "בִּנְיָינָא",
    hebrew: "בִּנְיָן"
  },
  {
    aramaic: "בָּעָא",
    hebrew: "רָצָה"
  },
  {
    aramaic: "בַר נָשׁ",
    hebrew: "אָדָם"
  },
  {
    aramaic: "בְרַתָּא",
    hebrew: "בַּת"
  },
  {
    aramaic: "בַּתְרָאָה",
    hebrew: "אַחֲרוֹן"
  },
  {
    aramaic: "גּוֹ",
    hebrew: "בְּתוֹךְ"
  },
  {
    aramaic: "גַוְנָא",
    hebrew: "גָוֶן"
  },
  {
    aramaic: "גָלֵי",
    hebrew: "גִלָּה"
  },
  {
    aramaic: "גְלִיפָא",
    hebrew: "חָקוּק"
  },
  {
    aramaic: "גְּלִיפוּ",
    hebrew: "חֲקִיקָה"
  },
  {
    aramaic: "גְּלִיפִין",
    hebrew: "חִקּוּקִים"
  },
  {
    aramaic: "גָרִים",
    hebrew: "גוֹרֵם"
  },
  {
    aramaic: "דָּא",
    hebrew: "זֶה/זוֹ"
  },
  {
    aramaic: "דְּאִתְגַּלְּיָן",
    hebrew: "לְהִתְגַּלּוֹת"
  },
  {
    aramaic: "[מילה] דְּחַד",
    hebrew: "שֶׁל [מילה] אֶחָד"
  },
  {
    aramaic: "דַּיַּי",
    hebrew: "דַּי"
  },
  {
    aramaic: "דִילָהּ",
    hebrew: "שֶׁלָּהּ"
  },
  {
    aramaic: "דִּילְהוֹן",
    hebrew: "שֶׁלָּהֶם"
  },
  {
    aramaic: "דִילִי",
    hebrew: "שֶׁלִּי"
  },
  {
    aramaic: "דִילֵיהּ",
    hebrew: "שֶׁהוּא"
  },
  {
    aramaic: "דִילָךְ",
    hebrew: "שֶׁלְּךָ"
  },
  {
    aramaic: "דְכוּרָא",
    hebrew: "שֶׁל זָכָר"
  },
  {
    aramaic: "דְּכוּרָא",
    hebrew: "זָכָר"
  },
  {
    aramaic: "דְּכַר",
    hebrew: "זָכָר"
  },
  {
    aramaic: "דִּמְעָאי",
    hebrew: "דִּמְעוֹתַי"
  },
  {
    aramaic: "דְנָא",
    hebrew: "זֶה"
  },
  {
    aramaic: "דְּעָלְמָא",
    hebrew: "שֶׁל הָעוֹלָם"
  },
  {
    aramaic: "דִקְרָא",
    hebrew: "הַכָּתוּב"
  },
  {
    aramaic: "דַרְגָא",
    hebrew: "דַּרְגָּה"
  },
  {
    aramaic: "הָא",
    hebrew: "הֲרֵי"
  },
  {
    aramaic: "הֲוָה",
    hebrew: "הָיָה"
  },
  {
    aramaic: "הֲוֵי",
    hebrew: "הָיָה"
  },
  {
    aramaic: "הֲוֵינָא",
    hebrew: "הָיִיתִי"
  },
  {
    aramaic: "הָכָא",
    hebrew: "כָּאן"
  },
  {
    aramaic: "הָכִי",
    hebrew: "כָּךְ"
  },
  {
    aramaic: "הַשְׁתָּא",
    hebrew: "עַכְשָׁו"
  },
  {
    aramaic: "הָתָם",
    hebrew: "שָׁם"
  },
  {
    aramaic: "זִמְנָא",
    hebrew: "פַּעַם"
  },
  {
    aramaic: "חָבוּ",
    hebrew: "חָטְאוּ"
  },
  {
    aramaic: "חַבְרַיָיא",
    hebrew: "חֲבֵרִים"
  },
  {
    aramaic: "חַד",
    hebrew: "אֶחָד"
  },
  {
    aramaic: "חָדָא",
    hebrew: "אֶחָד"
  },
  {
    aramaic: "חִוָּר",
    hebrew: "לָבָן"
  },
  {
    aramaic: "חֵילֵהון",
    hebrew: "צִבְאוֹתָם"
  },
  {
    aramaic: "חֵילִין",
    hebrew: "צְבָאוֹת"
  },
  {
    aramaic: "חָמֵינָא",
    hebrew: "רָאִיתִי"
  },
  {
    aramaic: "חֻשְׁבְּנָא",
    hebrew: "חֶשְׁבּוֹן"
  },
  {
    aramaic: "יְדַעְנָא",
    hebrew: "יָדַעְתִּי"
  },
  {
    aramaic: "יוֹמָא",
    hebrew: "יוֹם"
  },
  {
    aramaic: "יּוֹמִין",
    hebrew: "יָּמִים"
  },
  {
    aramaic: "יוֹקִים",
    hebrew: "תָקִים"
  },
  {
    aramaic: "יַמָּא",
    hebrew: "יָּם"
  },
  {
    aramaic: "יְנוֹקֵי",
    hebrew: "תִּינוֹקוֹת"
  },
  {
    aramaic: "יֵעֲלוּן",
    hebrew: "יִּכָּנְסוּ"
  },
  {
    aramaic: "יָרִית",
    hebrew: "יָרַשׁ"
  },
  {
    aramaic: "יָתְבָא",
    hebrew: "יּוֹשֶׁבֶת"
  },
  {
    aramaic: "יָתְבָה",
    hebrew: "יּוֹשֶׁבֶת"
  },
  {
    aramaic: "יִתְגְּלֵי",
    hebrew: "יִתְגַּלֶּה"
  },
  {
    aramaic: "יַתִּיר",
    hebrew: "יוֹתֵר"
  },
  {
    aramaic: "כְּגַוְונָא",
    hebrew: "כְּמוֹ"
  },
  {
    aramaic: "כַּד",
    hebrew: "כַּאֲשֶׁר/כְּשֶׁ"
  },
  {
    aramaic: "כְדֵין",
    hebrew: "אָז"
  },
  {
    aramaic: "כְדְקָא חָזֵי",
    hebrew: "כָּרָאוּי"
  },
  {
    aramaic: "כַּוָּותֵיהּ",
    hebrew: "כְּמוֹתוֹ"
  },
  {
    aramaic: "כְּחֲדָא",
    hebrew: "יַחַד"
  },
  {
    aramaic: "כֵּיף",
    hebrew: "חוֹף"
  },
  {
    aramaic: "כֹּכְבַיָא",
    hebrew: "כּוֹכָבִים"
  },
  {
    aramaic: "כָל",
    hebrew: "כָּל"
  },
  {
    aramaic: "כֹלָא",
    hebrew: "כֹּל"
  },
  {
    aramaic: "כֻלְהוּ",
    hebrew: "כָל הַ"
  },
  {
    aramaic: "כְּמָא",
    hebrew: "כְּמוֹ"
  },
  {
    aramaic: "כְמָה",
    hebrew: "כְּמוֹ"
  },
  {
    aramaic: "לָא",
    hebrew: "לֹּא"
  },
  {
    aramaic: "לְאַפְקָא",
    hebrew: "לְהוֹצִיא"
  },
  {
    aramaic: "לְאִסְתַּכְּלָא",
    hebrew: "לְהִסְתַּכֵּל"
  },
  {
    aramaic: "לְאִתְגַּלְּיָא",
    hebrew: "לְהִתְגַּלּוֹת"
  },
  {
    aramaic: "לְבָרְכָא",
    hebrew: "לְבָרֵךְ"
  },
  {
    aramaic: "לְבָתַר",
    hebrew: "אַחַר כָּךְ"
  },
  {
    aramaic: "לַהּ",
    hebrew: "אוֹתָהּ"
  },
  {
    aramaic: "לוֹן",
    hebrew: "לָהֶם/אוֹתָם"
  },
  {
    aramaic: "לְזִינַיְיהוּ",
    hebrew: "לְמִינֵיהֶם"
  },
  {
    aramaic: "לֵיהּ",
    hebrew: "אוֹתוֹ/לוֹ/בּוֹ"
  },
  {
    aramaic: "לֵית",
    hebrew: "אֵין"
  },
  {
    aramaic: "לָךְ",
    hebrew: "לָךְ/אוֹתָךְ"
  },
  {
    aramaic: "לִכְתּוב",
    hebrew: "יִכְתֹּב"
  },
  {
    aramaic: "לְמֶהֱוֵי",
    hebrew: "שֶׁיִּהְיֶה/לִהְיוֹת"
  },
  {
    aramaic: "לְמִקְדַּם",
    hebrew: "לְהַקְדִּים"
  },
  {
    aramaic: "לְמִשְׁמַע",
    hebrew: "לִשְׁמֹעַ"
  },
  {
    aramaic: "לְנַטְרָא",
    hebrew: "לִשְׁמֹר"
  },
  {
    aramaic: "לְסַחֲרָא",
    hebrew: "לְהַקִּיף"
  },
  {
    aramaic: "לְסַלְקָא",
    hebrew: "לַעֲלוֹת"
  },
  {
    aramaic: "לָעָאן",
    hebrew: "עוֹסְקִים"
  },
  {
    aramaic: "לְקָבְלֵיהוֹן",
    hebrew: "כְּנֶגְדָּם"
  },
  {
    aramaic: "מַאי",
    hebrew: "מַה/מַה זֶּה"
  },
  {
    aramaic: "מָאן",
    hebrew: "מִי"
  },
  {
    aramaic: "מָאנֵי",
    hebrew: "כֵלִים"
  },
  {
    aramaic: "מָאנָהָא",
    hebrew: "בְּגָדֶיהָ"
  },
  {
    aramaic: "מַזָּלֵי",
    hebrew: "מַזָּלוֹת"
  },
  {
    aramaic: "מִילָךְ",
    hebrew: "דְּבָרֶיךְ"
  },
  {
    aramaic: "מִינַיְיהוּ",
    hebrew: "מֵהֶן"
  },
  {
    aramaic: "מְכִילָן",
    hebrew: "מִדּוֹת"
  },
  {
    aramaic: "מִלָּה",
    hebrew: "דִּבּוּר/דָּבָר"
  },
  {
    aramaic: "מִלִּין",
    hebrew: "דְּבָרִים"
  },
  {
    aramaic: "מִנֵּיהּ",
    hebrew: "מִמֶּנּוּ"
  },
  {
    aramaic: "מְפָרַשׁ",
    hebrew: "מְפֹרָשׁ"
  },
  {
    aramaic: "מַקְדְּשָׁא",
    hebrew: "מִקְדָּשׁ"
  },
  {
    aramaic: "מָשְׁכָן",
    hebrew: "מוֹשְׁכִים"
  },
  {
    aramaic: "מִשְׁתּוֹקָא",
    hebrew: "שְׁתִיקָה"
  },
  {
    aramaic: "מְתִיבְתָּא",
    hebrew: "יְשִׁיבָה"
  },
  {
    aramaic: "נְהוֹרָא",
    hebrew: "אוֹר"
  },
  {
    aramaic: "נְהוֹרֵיהּ",
    hebrew: "אוֹרוֹ"
  },
  {
    aramaic: "נָהִיר",
    hebrew: "מֵּאִיר"
  },
  {
    aramaic: "נָפַק",
    hebrew: "יָצָא"
  },
  {
    aramaic: "נַפְקַת",
    hebrew: "יָצְאָה"
  },
  {
    aramaic: "סוּמָק",
    hebrew: "אָדֹם"
  },
  {
    aramaic: "סַחֲרִין",
    hebrew: "מַּקִּיפוֹת"
  },
  {
    aramaic: "סִטְרָהָא",
    hebrew: "צְדָדֶיהָ"
  },
  {
    aramaic: "סָלִיק",
    hebrew: "עָלָה/עָלְתָה"
  },
  {
    aramaic: "סָתִים",
    hebrew: "נִסְתָּר"
  },
  {
    aramaic: "סְתִימָא",
    hebrew: "נִסְתָּר/סֵּתֶר"
  },
  {
    aramaic: "סְתִימָאָה",
    hebrew: "נִּסְתֶּרֶת"
  },
  {
    aramaic: "סְתִימִין",
    hebrew: "נִסְתָּרִים"
  },
  {
    aramaic: "סִתְרָא",
    hebrew: "סֵּתֶר"
  },
  {
    aramaic: "עָאל",
    hebrew: "נִּכְנַס"
  },
  {
    aramaic: "עָאלִין",
    hebrew: "נִכְנָסִים"
  },
  {
    aramaic: "עֲבַד",
    hebrew: "עָשָׂה"
  },
  {
    aramaic: "עֲבָדִית",
    hebrew: "עָשִׂיתִי"
  },
  {
    aramaic: "עֶגְלָא",
    hebrew: "עֵגֶל"
  },
  {
    aramaic: "עוֹבָדָא",
    hebrew: "מַעֲשֵׂה"
  },
  {
    aramaic: "עוּלְמִין",
    hebrew: "עֲלָמִים"
  },
  {
    aramaic: "עִטְרִין",
    hebrew: "עֲטָרוֹת"
  },
  {
    aramaic: "עֲטָרִית",
    hebrew: "עִטַּרְתִּי"
  },
  {
    aramaic: "עַיְינִין",
    hebrew: "עֵינַיִם"
  },
  {
    aramaic: "עֵילָא",
    hebrew: "מַעְלָה"
  },
  {
    aramaic: "עִלָּאָה",
    hebrew: "עֶלְיוֹנָה"
  },
  {
    aramaic: "עָלִין",
    hebrew: "עָלִים"
  },
  {
    aramaic: "עָלְמָא",
    hebrew: "עוֹלָם"
  },
  {
    aramaic: "עָלְמִין",
    hebrew: "עוֹלָמוֹת"
  },
  {
    aramaic: "עַמָּא",
    hebrew: "עָם"
  },
  {
    aramaic: "עָמִיק",
    hebrew: "עָמֹק"
  },
  {
    aramaic: "עֲמִיקָא",
    hebrew: "עָמֹק"
  },
  {
    aramaic: "פּוּמָא",
    hebrew: "פֶּה"
  },
  {
    aramaic: "פוּמָאי",
    hebrew: "פִי"
  },
  {
    aramaic: "פְרַח",
    hebrew: "פָרַח/עָף"
  },
  {
    aramaic: "קָאִים",
    hebrew: "עוֹמֵד"
  },
  {
    aramaic: "קַדִּישִׁין",
    hebrew: "קְדוֹשׁוֹת"
  },
  {
    aramaic: "קַדְמָאָה",
    hebrew: "רִאשׁוֹן"
  },
  {
    aramaic: "קַדְמָאִין",
    hebrew: "רִאשׁוֹנִים"
  },
  {
    aramaic: "קַיָּימָא",
    hebrew: "עוֹמֵד/קִיּוּם/קַיָּם"
  },
  {
    aramaic: "קַיְּימָא",
    hebrew: "עוֹמֵד"
  },
  {
    aramaic: "קִישוּטָהָא",
    hebrew: "תַכְשִׁיטֶיהָ"
  },
  {
    aramaic: "קַל",
    hebrew: "קוֹל"
  },
  {
    aramaic: "קָלָא",
    hebrew: "קוֹל"
  },
  {
    aramaic: "קַמָּהּ",
    hebrew: "לְפָנֶיהָ"
  },
  {
    aramaic: "קַמֵּי",
    hebrew: "לִפְנֵי"
  },
  {
    aramaic: "קַמֵּיהּ",
    hebrew: "לְפָנָיו"
  },
  {
    aramaic: "קָרֵינָא",
    hebrew: "קָרָאתִי"
  },
  {
    aramaic: "קַשִּיטָא",
    hebrew: "קִשְּׁטָה"
  },
  {
    aramaic: "רַבְיָין",
    hebrew: "יְלָדִים/תִּינוֹקוֹת"
  },
  {
    aramaic: "רִגְעָא",
    hebrew: "רֶגַע"
  },
  {
    aramaic: "רָזָא",
    hebrew: "סּוֹד"
  },
  {
    aramaic: "רַחֲמֵי",
    hebrew: "רַחֲמִים"
  },
  {
    aramaic: "רֵישָׁא",
    hebrew: "רֹאשׁ"
  },
  {
    aramaic: "רְשִׁים",
    hebrew: "רְשׁוּמָה"
  },
  {
    aramaic: "שֵׁירוּתָא",
    hebrew: "תְּחִלָּה"
  },
  {
    aramaic: "שָׁלְטָנוּ",
    hebrew: "שִׁלְטוֹן"
  },
  {
    aramaic: "שְׁלִימוּ",
    hebrew: "שְׁלֵמוּת"
  },
  {
    aramaic: "שְׁמָא",
    hebrew: "שֵּׁם"
  },
  {
    aramaic: "שְׁמַיָּא",
    hebrew: "שָּׁמַיִם"
  },
  {
    aramaic: "שַׁעְתָּא",
    hebrew: "שָּׁעָה"
  },
  {
    aramaic: "שָׁפִיכְנָא",
    hebrew: "אֶשְׁפֹּךְ"
  },
  {
    aramaic: "שִׁתִּין",
    hebrew: "שִׁשִּׁים"
  },
  {
    aramaic: "שָׁתִיק",
    hebrew: "שָׁתַק"
  },
  {
    aramaic: "שְׁתִיקָא",
    hebrew: "שְּׁתִיקָה"
  },
  {
    aramaic: "שָׁתִיקְנָא",
    hebrew: "שָּׁתַקְתִּי"
  },
  {
    aramaic: "תָּדִיר",
    hebrew: "תָּמִיד"
  },
  {
    aramaic: "תֵּיבִין",
    hebrew: "תֵבוֹת"
  },
  {
    aramaic: "תֵימָא",
    hebrew: "תֹּאמַר"
  },
  {
    aramaic: "תְּלֵיסַר",
    hebrew: "שְׁלֹשׁ עֶשְׂרֵה"
  },
  {
    aramaic: "תַּמָּן",
    hebrew: "שָׁם"
  },
  {
    aramaic: "תַּקִּיפִין",
    hebrew: "חֲזָקִים"
  },
  {
    aramaic: "תַּרְעִין",
    hebrew: "שְׁעָרִים"
  },
  {
    aramaic: "תִּנְיָנָא",
    hebrew: "הַשֵּׁנִי"
  },
  {
    aramaic: "תָּלְיָאן",
    hebrew: "תְּלוּיִים"
  },
  {
    aramaic: "תְּלִיתָאָה",
    hebrew: "הַשְּׁלִישִׁי"
  },
  {
    aramaic: "תְרֵין",
    hebrew: "שְׁתַּיִם"
  },
  {
    aramaic: "תַתָּא",
    hebrew: "מַטָּה"
  },
  {
    aramaic: "תַתָּאָה",
    hebrew: "תַּחְתּוֹנָה"
  }
];
const dictionary = {
  words
};
const css = {
  code: ".suggestions.svelte-falpd.svelte-falpd{list-style-type:none;padding:0}.suggestions.svelte-falpd li.svelte-falpd{cursor:pointer}input.svelte-falpd.svelte-falpd{border:1px solid #999;padding:0.5rem}.suggestions.svelte-falpd li.svelte-falpd:not(:last-of-type){border-bottom:1px solid #999}",
  map: null
};
const AutoCompleteInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { suggestions = [] } = $$props;
  let { userInput = "" } = $$props;
  createEventDispatcher();
  if ($$props.suggestions === void 0 && $$bindings.suggestions && suggestions !== void 0)
    $$bindings.suggestions(suggestions);
  if ($$props.userInput === void 0 && $$bindings.userInput && userInput !== void 0)
    $$bindings.userInput(userInput);
  $$result.css.add(css);
  return `<div id="autocomplete" class="relative"><input type="text" name="wordToTranslate" class="border-2 border-black w-56 svelte-falpd" dir="rtl"${add_attribute("value", userInput, 0)}> ${``} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let suggestedDictionary = dictionary["words"].map((word) => word.aramaic);
  let wordTranslation = "";
  let wordToTranslate = "";
  return `<div>${validate_component(Header, "Header").$$render($$result, { title: "מילון ארמי זוהר - עברי" }, {}, {})} <div class="space-y-4"><div class="mt-4 space-y-4">${validate_component(AutoCompleteInput, "AutoCompleteInput").$$render(
    $$result,
    {
      suggestions: suggestedDictionary,
      userInput: wordToTranslate
    },
    {},
    {}
  )} <button class="border-2 border-black p-2 rounded hover:bg-cyan-600" type="submit" data-svelte-h="svelte-1bszxlx">תרגם</button></div> <div>${escape(wordToTranslate)} ${escape(wordTranslation)}</div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CVrWq-BK.js.map
