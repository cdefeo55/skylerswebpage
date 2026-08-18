
const TOWNS = {
  stowe: {
    name: 'Stowe', region: 'Stowe \u00b7 Vermont',
    lede: "One of Vermont\'s most recognized mountain markets, anchored by Mount Mansfield, a walkable village, and year-round recreation \u2014 where lifestyle and resort economics drive value together.",
    overviewTitle: 'What to understand before you buy or sell in Stowe.',
    overview: [
      'Stowe is a lifestyle and resort market, which means buyers are often evaluating use as much as ownership. Mountain access, second-home logistics, rental potential, and long-term positioning all factor into the right decision.',
      'I help clients read the market through that lens \u2014 weighing village proximity, views, privacy, ski access, and carrying costs against the scarcity of genuinely comparable homes.',
    ],
    cards: [
      { title: 'Local demand', body: 'Driven by Mount Mansfield, resort access, village charm, restaurants, trails, and four-season tourism that keeps second-home interest strong.' },
      { title: 'Property lens', body: 'Resort-area homes require careful review of association documents, rental restrictions, property management, winter systems, and access.' },
      { title: 'Due diligence', body: 'I look closely at heating systems, roof and snow-load, furnishings, permitting, and whether the home truly supports the intended use.' },
    ],
  },
  waterbury: {
    name: 'Waterbury', region: 'Waterbury \u00b7 Vermont',
    lede: "A central Vermont village with strong access to Stowe, the Mad River Valley, I-89, and year-round outdoor recreation — a practical market for buyers who want mountain access without being fully resort-based.",
    overviewTitle: 'A mountain gateway with everyday livability.',
    overview: [
      'Waterbury is valued for its location: close to Stowe, close to Burlington and Montpelier by interstate, and surrounded by trails, rivers, ski access, and local food culture.',
      'I help buyers and sellers think through commute, flood-zone considerations, village versus country settings, and how proximity to the mountains shapes demand.'
    ],
    cards: [
      { title: 'Local demand', body: 'Supported by Stowe access, I-89 convenience, restaurants, recreation, and a strong year-round community feel.' },
      { title: 'Property lens', body: 'Village homes, country properties, and mountain-access homes require different pricing and due-diligence questions.' },
      { title: 'Due diligence', body: 'I review flood considerations, systems, access, land characteristics, and how each property fits the buyer\'s intended use.' },
    ],
  },
  'jay-peak': {
    name: 'Jay Peak', region: 'Jay Peak \u00b7 Northern Vermont',
    lede: "A northern Vermont resort market centered on Jay Peak Resort, deep winter demand, vacation ownership, and four-season recreation near the Canadian border.",
    overviewTitle: 'A ski and second-home market with distinct dynamics.',
    overview: [
      'Jay Peak real estate is shaped by resort access, rental potential, winter systems, association terms, and the realities of owning in a remote mountain setting.',
      'I help clients evaluate ski access, carrying costs, management, rental rules, and whether a property supports the way they actually want to use it.'
    ],
    cards: [
      { title: 'Local demand', body: 'Anchored by Jay Peak Resort, deep snow, golf, waterpark amenities, and second-home interest from Vermont, New England, and Canada.' },
      { title: 'Property lens', body: 'Condos, townhomes, and chalets need careful review of HOA terms, rental programs, furnishings, and winter maintenance.' },
      { title: 'Due diligence', body: 'I look closely at heating, access roads, association rules, rental history, and seasonal ownership costs.' },
    ],
  },
  shelburne: {
    name: 'Shelburne', region: 'Shelburne \u00b7 Vermont',
    lede: "A coveted lakeside town known for Shelburne Farms, the Museum, and estate properties set against Lake Champlain and open farm country just south of Burlington.",
    overviewTitle: 'A blend of estate living and working landscape.',
    overview: [
      "Shelburne pairs some of the region\'s most distinctive estates with rolling agricultural land, lake frontage, and a strong sense of place. Buyers here often prioritize land, privacy, and proximity to Burlington.",
      'Value is shaped by acreage, views, water access, and the character of the home \u2014 details that reward an advisor who knows how the area actually trades.',
    ],
    cards: [
      { title: 'Local demand', body: 'Anchored by lake access, large parcels, top schools, and the cultural draw of Shelburne Farms and the Shelburne Museum.' },
      { title: 'Property lens', body: 'Estate and acreage properties call for review of land use, septic and well systems, outbuildings, and frontage rights.' },
      { title: 'Due diligence', body: 'I examine surveys, easements, shoreline regulations, and the condition of older or architecturally significant homes.' },
    ],
  },
  charlotte: {
    name: 'Charlotte', region: 'Charlotte \u00b7 Vermont',
    lede: "Rolling farmland, long lake and mountain views, and generous acreage make Charlotte one of Chittenden County's most sought-after rural-luxury markets.",
    overviewTitle: 'Space, views, and a strong school district.',
    overview: [
      'Charlotte appeals to buyers who want land and privacy without giving up access to Burlington. Properties range from historic farmhouses to modern homes on significant acreage.',
      'Pricing turns on view corridors, land quality, and proximity to the lake \u2014 along with the strength of the CVU school district that draws families.',
    ],
    cards: [
      { title: 'Local demand', body: 'Driven by acreage, panoramic views, lake access, and a school district families actively relocate for.' },
      { title: 'Property lens', body: 'Rural properties require attention to wells, septic, agricultural use, and the condition of older structures.' },
      { title: 'Due diligence', body: 'I review surveys, current-use enrollment, access, and the systems that older country homes depend on.' },
    ],
  },
  burlington: {
    name: 'Burlington', region: 'Burlington \u00b7 Vermont',
    lede: "Vermont\'s largest city pairs a vibrant waterfront and downtown with historic neighborhoods \u2014 a market where walkability, character, and lake proximity command real premiums.",
    overviewTitle: 'City living on Lake Champlain.',
    overview: [
      'From the Hill Section\u2019s historic homes to downtown condos and waterfront properties, Burlington offers a range few Vermont markets can match. Location, era, and condition all carry weight.',
      'I help buyers and sellers understand neighborhood nuance \u2014 how proximity to the waterfront, Church Street, and UVM shapes both lifestyle and value.',
    ],
    cards: [
      { title: 'Local demand', body: 'Fueled by the waterfront, downtown culture, UVM and the medical center, and limited inventory in the most desirable neighborhoods.' },
      { title: 'Property lens', body: 'Historic homes and condos require review of age, systems, rental rules, and association structures.' },
      { title: 'Due diligence', body: 'I assess condition of older housing stock, zoning, short-term rental regulations, and renovation potential.' },
    ],
  },
  'south-burlington': {
    name: 'South Burlington', region: 'South Burlington \u00b7 Vermont',
    lede: "Vermont\'s fast-growing second city offers established neighborhoods, newer construction, strong schools, and unmatched convenience to Burlington and the airport.",
    overviewTitle: 'Convenience, schools, and steady demand.',
    overview: [
      'South Burlington draws buyers who want modern homes, amenities, and an easy commute. Inventory spans established subdivisions, new construction at City Center, and lake-adjacent pockets.',
      'Value reflects neighborhood, age and condition, and proximity to schools, retail, and major routes \u2014 with consistently strong, broad-based demand.',
    ],
    cards: [
      { title: 'Local demand', body: 'Supported by schools, retail, the airport, employment access, and ongoing investment in the City Center district.' },
      { title: 'Property lens', body: 'A mix of eras means careful attention to updates, systems, HOA terms, and lot characteristics.' },
      { title: 'Due diligence', body: 'I evaluate condition, energy efficiency, association rules, and how each home compares within its neighborhood.' },
    ],
  },
  stratton: {
    name: 'Stratton', region: 'Stratton \u00b7 Southern Vermont',
    lede: "A premier southern-Vermont ski destination, Stratton centers on its mountain resort and village \u2014 a second-home market driven by access, amenities, and rental potential.",
    overviewTitle: 'A resort market with its own logic.',
    overview: [
      'Stratton buyers weigh ski-in/ski-out access, village proximity, amenities, and rental flexibility. Ownership is often as much about use and convenience as long-term appreciation.',
      'I help clients navigate association structures, seasonal access, and the tradeoffs that define resort ownership in southern Vermont.',
    ],
    cards: [
      { title: 'Local demand', body: 'Anchored by Stratton Mountain Resort, village amenities, golf and recreation, and steady second-home interest.' },
      { title: 'Property lens', body: 'Condos and chalets require review of association rules, rental programs, fees, and management.' },
      { title: 'Due diligence', body: 'I look at heating and snow systems, access roads, rental history, furnishings, and seasonal carrying costs.' },
    ],
  },
  williston: {
    name: 'Williston', region: 'Williston \u00b7 Vermont',
    lede: "Williston combines new construction, established neighborhoods, and the convenience of Taft Corners \u2014 a practical, in-demand choice for buyers who value access.",
    overviewTitle: 'Convenience and modern inventory.',
    overview: [
      'Williston is one of the area\u2019s most convenient towns, with retail, employment, and easy interstate access. Buyers find newer homes and well-kept established neighborhoods.',
      'Value is shaped by neighborhood, age and condition, lot, and proximity to schools and services \u2014 with reliably strong demand from commuters and families.',
    ],
    cards: [
      { title: 'Local demand', body: 'Driven by Taft Corners convenience, employment, interstate access, and a range of newer housing.' },
      { title: 'Property lens', body: 'Newer subdivisions and HOAs require review of association terms, builder quality, and lot specifics.' },
      { title: 'Due diligence', body: 'I assess condition, energy systems, association rules, and how a home is positioned within its neighborhood.' },
    ],
  },
  jericho: {
    name: 'Jericho', region: 'Jericho \u00b7 Vermont',
    lede: "A quiet, scenic town in the shadow of Mount Mansfield, Jericho offers larger lots, rural character, and an easy connection to both Burlington and the mountains.",
    photo: 'jericho-vt-real-estate.jpg',
    photoAlt: 'Old Red Mill beside the Browns River in Jericho Vermont',
    photoCaption: 'Jericho, Vermont',
    overviewTitle: 'Rural character with mountain access.',
    overview: [
      'Jericho appeals to buyers who want space, privacy, and natural beauty while staying within reach of Burlington. Homes range from historic village properties to country homes on acreage.',
      'Value reflects land, views, condition, and location \u2014 with the trails, recreation, and small-town character that define the area.',
    ],
    cards: [
      { title: 'Local demand', body: 'Supported by mountain views, recreation, larger lots, and a quiet, established community feel.' },
      { title: 'Property lens', body: 'Country and village homes require attention to wells, septic, heating systems, and access.' },
      { title: 'Due diligence', body: 'I review surveys, systems, and the condition of older homes common throughout the town.' },
    ],
  },
  richmond: {
    name: 'Richmond', region: 'Richmond \u00b7 Vermont',
    lede: "Set along the Winooski River between Burlington and the mountains, Richmond offers small-town charm, walkable amenities, and easy access in every direction.",
    overviewTitle: 'Small-town charm, central location.',
    overview: [
      'Richmond combines a welcoming village, riverside setting, and a location that splits the difference between city and mountains. It draws buyers who want community and convenience.',
      'Value reflects proximity to the village and interstate, lot and condition, and the character that makes the town distinct.',
    ],
    cards: [
      { title: 'Local demand', body: 'Driven by the village, river access, recreation, and a central location with quick routes to Burlington and Stowe.' },
      { title: 'Property lens', body: 'A mix of historic and newer homes calls for attention to systems, condition, and flood considerations near the river.' },
      { title: 'Due diligence', body: 'I review condition, systems, flood zones where relevant, and how each home compares locally.' },
    ],
  },
  hinesburg: {
    name: 'Hinesburg', region: 'Hinesburg \u00b7 Vermont',
    lede: "A growing community with open land, a friendly village, and the strong CVU school district \u2014 Hinesburg offers space and value within reach of Burlington.",
    overviewTitle: 'Open land and a strong community.',
    overview: [
      'Hinesburg attracts buyers looking for land, a real sense of community, and access to a top school district. Inventory ranges from village homes to country properties on acreage.',
      'Value reflects land, condition, and location relative to the village and commuting routes, with steady, family-driven demand.',
    ],
    cards: [
      { title: 'Local demand', body: 'Supported by the CVU school district, open land, a growing village, and relative value compared with neighboring towns.' },
      { title: 'Property lens', body: 'Rural and village homes require review of wells, septic, land use, and the condition of older structures.' },
      { title: 'Due diligence', body: 'I examine surveys, systems, current-use status, and access for properties on acreage.' },
    ],
  },
  colchester: {
    name: 'Colchester', region: 'Colchester \u00b7 Vermont',
    lede: "With extensive Lake Champlain shoreline around Malletts Bay, Colchester pairs waterfront living and beaches with established family neighborhoods and convenient access.",
    overviewTitle: 'Lake living with everyday convenience.',
    overview: [
      'Colchester offers a rare combination of shoreline, recreation, and convenience. Buyers range from those seeking waterfront and seasonal camps to families in established neighborhoods.',
      'Value turns on water access and frontage, neighborhood, condition, and proximity to the interstate, the bay, and Burlington.',
    ],
    cards: [
      { title: 'Local demand', body: 'Driven by Malletts Bay, beaches, boating, and a wide range of housing from waterfront to family neighborhoods.' },
      { title: 'Property lens', body: 'Waterfront and seasonal properties require review of frontage, shoreline rules, septic, and winterization.' },
      { title: 'Due diligence', body: 'I assess shoreline regulations, water and septic systems, flood considerations, and seasonal-to-year-round conversions.' },
    ],
  },
  essex: {
    name: 'Essex', region: 'Essex \u00b7 Vermont',
    lede: "Essex and Essex Junction offer established neighborhoods, strong schools, and everyday convenience \u2014 a practical, family-friendly market with good value near Burlington.",
    photo: 'essex-vt-real-estate.jpg',
    photoAlt: 'Aerial view of Essex Vermont village at dusk',
    photoCaption: 'Essex, Vermont',
    overviewTitle: 'Family-friendly, convenient, and well-rounded.',
    overview: [
      'Essex draws buyers who want established neighborhoods, amenities, and an easy commute. Inventory spans village homes near the Junction, subdivisions, and properties with more land toward the town\u2019s edges.',
      'Value reflects neighborhood, schools, condition, and proximity to employment and services \u2014 with steady, broad-based demand from families.',
    ],
    cards: [
      { title: 'Local demand', body: 'Supported by schools, major employers, retail and dining at the Junction, and a wide range of housing at relative value.' },
      { title: 'Property lens', body: 'A mix of eras means attention to updates, systems, lot characteristics, and any association terms.' },
      { title: 'Due diligence', body: 'I evaluate condition, energy efficiency, and how each home compares within its neighborhood and price point.' },
    ],
  },
  'south-hero': {
    name: 'South Hero', region: 'South Hero \u00b7 Lake Champlain Islands',
    lede: "A Lake Champlain island community with shoreline homes, open land, vineyards, and a quiet pace within reach of Burlington and the Champlain Valley.",
    overviewTitle: 'Island living with lake-driven value.',
    overview: [
      'South Hero appeals to buyers looking for waterfront, views, privacy, and a more relaxed island setting. Properties range from seasonal cottages to year-round lake homes and country residences.',
      'Value is shaped by frontage, water access, views, septic and water systems, flood considerations, and year-round usability.'
    ],
    cards: [
      { title: 'Local demand', body: 'Driven by Lake Champlain frontage, boating, views, land, and the lifestyle appeal of the Islands.' },
      { title: 'Property lens', body: 'Waterfront and island properties require close review of shoreline rules, septic, wells, access, and seasonal limitations.' },
      { title: 'Due diligence', body: 'I evaluate frontage, flood zones, systems, road access, and whether a property functions year-round or seasonally.' },
    ],
  },
  winooski: {
    name: 'Winooski', region: 'Winooski \u00b7 Vermont',
    lede: "Vermont\'s most walkable small city, Winooski has transformed its historic mill district into a vibrant, amenity-rich downtown with strong rental and ownership demand.",
    photo: 'winooski-vt-real-estate.jpg',
    photoAlt: 'Winooski Falls and downtown Winooski Vermont',
    photoCaption: 'Winooski, Vermont',
    overviewTitle: 'Walkable, revitalized, and in demand.',
    overview: [
      'Winooski packs restaurants, culture, and convenience into a compact, walkable footprint. Inventory leans toward condos, converted mill buildings, and close-in homes.',
      'Value reflects walkability, condition, rental potential, and proximity to the downtown circle and Burlington just across the river.',
    ],
    cards: [
      { title: 'Local demand', body: 'Fueled by walkability, dining and culture, proximity to Burlington, and strong interest from younger buyers and investors.' },
      { title: 'Property lens', body: 'Condos and converted buildings require review of association structures, rental rules, and building systems.' },
      { title: 'Due diligence', body: 'I evaluate association documents, short-term rental regulations, condition, and parking where it matters.' },
    ],
  },
};

const ALL = [
  ['stowe', 'Stowe'], ['waterbury', 'Waterbury'], ['jay-peak', 'Jay Peak'], ['shelburne', 'Shelburne'], ['charlotte', 'Charlotte'], ['burlington', 'Burlington'],
  ['south-burlington', 'South Burlington'], ['stratton', 'Stratton'], ['williston', 'Williston'], ['jericho', 'Jericho'],
  ['richmond', 'Richmond'], ['hinesburg', 'Hinesburg'], ['colchester', 'Colchester'], ['south-hero', 'South Hero'], ['winooski', 'Winooski'], ['essex', 'Essex'],
];

class Component extends DCLogic {
  renderVals() {
    const slug = this.props.slug || 'stowe';
    const baseTown = TOWNS[slug] || TOWNS.stowe;
    const town = {
      ...baseTown,
      photo: baseTown.photo || 'lake-champlain.jpg',
      photoAlt: baseTown.photoAlt || '',
      photoCaption: baseTown.photoCaption || '',
      photoSectionStyle: baseTown.photo
        ? 'background: #fffdf8; padding: 0 0 clamp(70px, 8vw, 105px); border-top: 1px solid rgba(23,49,41,0.08);'
        : 'display:none;',
    };
    const others = ALL.filter(([s]) => s !== slug).map(([s, name]) => ({ name, href: s + '-vt-real-estate.html' }));
    return { town, others };
  }
}
