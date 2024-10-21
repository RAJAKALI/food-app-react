import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "./assets/Google.png";

const Navbar = () => {
  return (
    <div className="nav-main">
    <div className="navbar">
      <img className="nav-header" src={logo} />
      <div className="right-nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Orders</a>
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
          <li>
            <a href="#">Restrunts</a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

const restruntsobj = [
  {
    info: {
      id: "697962",
      name: "Tkfc",
      cloudinaryImageId: "79677bcf85072291c6f2aa13db2aa074",
      locality: "Sivalayam Street",
      areaName: "Sajjapuram",
      costForTwo: "₹250 for two",
      cuisines: ["Fast Food", "Pizzas", "Snacks", "Burgers"],
      avgRating: 4,
      parentId: "417346",
      avgRatingString: "4.0",
      totalRatingsString: "17",
      sla: {
        deliveryTime: 52,
        lastMileTravel: 10.1,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "10.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 11:15 am, today",
      },
      badges: {},
      aggregatedDiscountInfoV2: {
        header: "₹100 OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK100",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹100 off | Use code WELCOMEBACK100",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-709e3ea0-8f13-41dd-89b4-e306ff464d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/tanuku/tkfc-sivalayam-street-sajjapuram-rest697962",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "201463",
      name: "Amrutha Food Ex",
      cloudinaryImageId: "ehqw3ymc6shpx73n8wg8",
      locality: "Velpur Road",
      areaName: "sajjapuram",
      costForTwo: "₹350 for two",
      cuisines: ["South Indian", "Biryani", "Indian", "Chinese"],
      avgRating: 4.3,
      parentId: "32301",
      avgRatingString: "4.3",
      totalRatingsString: "1.7K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 11.1,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "11.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 11:15 am, today",
      },
      badges: {},
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-709e3ea0-8f13-41dd-89b4-e306ff464d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/tanuku/amrutha-food-ex-velpur-road-sajjapuram-rest201463",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "758531",
      name: "Sri vijaya Lakshmi Restaurant & Bar",
      cloudinaryImageId: "f90a0241b47941e1e91f11e0ea08fcfc",
      locality: "Hotel Roayal Park Premisis",
      areaName: "Sajjapuram",
      costForTwo: "₹299 for two",
      cuisines: ["Chinese", "Seafood", "Snacks"],
      avgRating: 4.3,
      parentId: "448366",
      avgRatingString: "4.3",
      totalRatingsString: "22",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 11.8,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "11.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 11:30 am, today",
      },
      badges: {},
      aggregatedDiscountInfoV2: {
        header: "₹100 OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK100",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹100 off | Use code WELCOMEBACK100",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-709e3ea0-8f13-41dd-89b4-e306ff464d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/tanuku/sri-vijaya-lakshmi-restaurant-and-bar-hotel-roayal-park-premisis-sajjapuram-rest758531",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "661835",
      name: "Krb Foods",
      cloudinaryImageId: "8fb963500627fc3270bdf801ec4a9213",
      locality: "Surya Nagar",
      areaName: "Sajjapuram",
      costForTwo: "₹350 for two",
      cuisines: ["Biryani", "Chinese", "Seafood"],
      avgRating: 4.1,
      parentId: "488955",
      avgRatingString: "4.1",
      totalRatingsString: "45",
      sla: {
        deliveryTime: 50,
        lastMileTravel: 12.4,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "12.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 11:30 am, today",
      },
      badges: {},
      aggregatedDiscountInfoV2: {
        header: "₹100 OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK100",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹100 off | Use code WELCOMEBACK100",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-709e3ea0-8f13-41dd-89b4-e306ff464d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/tanuku/krb-foods-surya-nagar-sajjapuram-rest661835",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "699513",
      name: "Seasonal stories",
      cloudinaryImageId: "04c252c8b80b3976aa8c48e9a2e193a2",
      locality: "Velpur Road",
      areaName: "sajjapuram",
      costForTwo: "₹350 for two",
      cuisines: ["Biryani", "Chinese", "South Indian", "Continental"],
      avgRating: 4.1,
      parentId: "418075",
      avgRatingString: "4.1",
      totalRatingsString: "1.8K+",
      sla: {
        deliveryTime: 52,
        lastMileTravel: 11,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "11.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 11:30 am, today",
      },
      badges: {},
      aggregatedDiscountInfoV2: {
        header: "₹100 OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK100",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹100 off | Use code WELCOMEBACK100",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-709e3ea0-8f13-41dd-89b4-e306ff464d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/tanuku/seasonal-stories-velpur-road-sajjapuram-rest699513",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "728911",
      name: "It's Time to tandoori",
      cloudinaryImageId: "6299f1381ea37d71974153ee27b2de18",
      locality: "gaminivaari veedi",
      areaName: "Sajjapuram",
      costForTwo: "₹300 for two",
      cuisines: ["Tandoor", "Snacks", "Biryani"],
      avgRating: 3.5,
      parentId: "433240",
      avgRatingString: "3.5",
      totalRatingsString: "45",
      sla: {
        deliveryTime: 50,
        lastMileTravel: 9.9,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "9.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 11:45 am, today",
      },
      badges: {},
      aggregatedDiscountInfoV2: {
        header: "₹100 OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK100",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹100 off | Use code WELCOMEBACK100",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-709e3ea0-8f13-41dd-89b4-e306ff464d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/tanuku/its-time-to-tandoori-gaminivaari-veedi-sajjapuram-rest728911",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "504810",
      name: "Aarya's BBQ Grill Hub",
      cloudinaryImageId: "veefxci0gcb5pukumptf",
      locality: "Gamini vaari veedhi",
      areaName: "sajjapuram",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani", "Chinese", "Grill"],
      avgRating: 3.7,
      parentId: "302335",
      avgRatingString: "3.7",
      totalRatingsString: "361",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 9.9,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "9.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 11:45 am, today",
      },
      badges: {},
      aggregatedDiscountInfoV2: {
        header: "₹100 OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK100",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹100 off | Use code WELCOMEBACK100",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-709e3ea0-8f13-41dd-89b4-e306ff464d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/tanuku/aaryas-bbq-grill-hub-gamini-vaari-veedhi-sajjapuram-rest504810",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "828563",
      name: "AMOHA RESTAURANT",
      cloudinaryImageId: "937eb0f1857c97c4c0c3ad5fe41b9d6b",
      locality: "Venkatarayapuram",
      areaName: "Sajjapuram",
      costForTwo: "₹399 for two",
      cuisines: ["Indian", "Biryani", "Chinese"],
      avgRating: 4.2,
      parentId: "493346",
      avgRatingString: "4.2",
      totalRatingsString: "223",
      sla: {
        deliveryTime: 55,
        lastMileTravel: 11.2,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "11.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 12 noon, today",
      },
      badges: {},
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-709e3ea0-8f13-41dd-89b4-e306ff464d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/tanuku/amoha-restaurant-venkatarayapuram-sajjapuram-rest828563",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "479453",
      name: "Tindam Ra Family Restaurant",
      cloudinaryImageId: "bjce20828znl8iiorl8o",
      locality: "Padmasri Functional Hall",
      areaName: "Somavaram",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "South Indian", "Chinese", "Andhra"],
      avgRating: 4.3,
      parentId: "288044",
      avgRatingString: "4.3",
      totalRatingsString: "1.4K+",
      sla: {
        deliveryTime: 52,
        lastMileTravel: 11.2,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "11.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 12 noon, today",
      },
      badges: {},
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-709e3ea0-8f13-41dd-89b4-e306ff464d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/tanuku/tindam-ra-family-restaurant-padmasri-functional-hall-somavaram-rest479453",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "561656",
      name: "Square Kitchen",
      cloudinaryImageId: "iakdetuytu6utznse5gm",
      locality: "Peacock Lodge Area",
      areaName: "sajjapuram",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "South Indian", "Chinese", "Coastal", "Andhra"],
      avgRating: 3.8,
      parentId: "337979",
      avgRatingString: "3.8",
      totalRatingsString: "20",
      sla: {
        deliveryTime: 52,
        lastMileTravel: 11.3,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "11.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 12 noon, today",
      },
      badges: {},
      aggregatedDiscountInfoV2: {
        header: "₹100 OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK100",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹100 off | Use code WELCOMEBACK100",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-709e3ea0-8f13-41dd-89b4-e306ff464d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/tanuku/square-kitchen-peacock-lodge-area-sajjapuram-rest561656",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "854487",
      name: "Hotel Chitturi Heritage",
      cloudinaryImageId: "f0669511fb92b2e4fd0b005ed9cb24f3",
      locality: "Venkatarayapuram",
      areaName: "Sajjapuram",
      costForTwo: "₹299 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Tandoor",
        "Kebabs",
        "Seafood",
        "Biryani",
        "Desserts",
      ],
      avgRating: 4.3,
      parentId: "502227",
      avgRatingString: "4.3",
      totalRatingsString: "397",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 12 noon, today",
      },
      badges: {},
      aggregatedDiscountInfoV2: {
        header: "₹100 OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK100",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹100 off | Use code WELCOMEBACK100",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-709e3ea0-8f13-41dd-89b4-e306ff464d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/tanuku/hotel-chitturi-heritage-venkatarayapuram-sajjapuram-rest854487",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "826200",
      name: "Rayalaseema Ruchulu",
      cloudinaryImageId: "f2b12aa089c8ad6bca2c5f87e5a2ad91",
      locality: "Venkatarayapuram",
      areaName: "Sajjapuram",
      costForTwo: "₹299 for two",
      cuisines: ["Indian"],
      avgRating: 3.9,
      parentId: "766",
      avgRatingString: "3.9",
      totalRatingsString: "78",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 11.5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "11.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 12:30 pm, today",
      },
      badges: {},
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-709e3ea0-8f13-41dd-89b4-e306ff464d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/tanuku/rayalaseema-ruchulu-venkatarayapuram-sajjapuram-rest826200",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Restrunts = ({
    name,
    avgRatingString,
    cuisines,
    cloudinaryImageId
}) => {
  return (
    <div className="restrunts-card">
      <img className="card-img" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`+cloudinaryImageId} />
      <div className="card-title">
      <h4>{name}</h4>
      <h5>{avgRatingString}</h5>
      <h5>{cuisines.join(",")}</h5>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-cards">
    {
     restruntsobj.map((retrunt)=>{
       return <Restrunts {...retrunt.info} key={retrunt.info.id}/>
     }
     )
    }
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const Parent = () => (
  <>
    <Navbar />
    <Body />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Parent />);
