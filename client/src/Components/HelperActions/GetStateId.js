
export default function getStateId(stateInput) {

  const states = {
    AL: {
      "id": 1,
      "name": "Alabama",
      "abbreviation": "AL"
    },
    AK: {
      "id": 2,
      "name": "Alaska",
      "abbreviation": "AK"
    },
    AZ: {
      "id": 3,
      "name": "Arizona",
      "abbreviation": "AZ"
    },
    AR: {
      "id": 4,
      "name": "Arkansas",
      "abbreviation": "AR"
    },
    CA: {
      "id": 5,
      "name": "California",
      "abbreviation": "CA"
    },
    CO: {
      "id": 6,
      "name": "Colorado",
      "abbreviation": "CO"
    },
    CT: {
      "id": 7,
      "name": "Connecticut",
      "abbreviation": "CT"
    },
    DE: {
      "id": 8,
      "name": "Delaware",
      "abbreviation": "DE"
    },
    // DC: {
    //   "name": "District Of Columbia",
    //   "abbreviation": "DC"
    // },
    FL: {
      "id": 9,
      "name": "Florida",
      "abbreviation": "FL"
    },
    GA: {
      "id": 10,
      "name": "Georgia",
      "abbreviation": "GA"
    },
    HI: {
      "id": 11,
      "name": "Hawaii",
      "abbreviation": "HI"
    },
    ID: {
      "id": 12,
      "name": "Idaho",
      "abbreviation": "ID"
    },
    IL: {
      "id": 13,
      "name": "Illinois",
      "abbreviation": "IL"
    },
    IN: {
      "id": 14,
      "name": "Indiana",
      "abbreviation": "IN"
    },
    IA: {
      "id": 15,
      "name": "Iowa",
      "abbreviation": "IA"
    },
    KS: {
      "id": 16,
      "name": "Kansas",
      "abbreviation": "KS"
    },
    KY: {
      "id": 17,
      "name": "Kentucky",
      "abbreviation": "KY"
    },
    LA: {
      "id": 18,
      "name": "Louisiana",
      "abbreviation": "LA"
    },
    ME: {
      "id": 19,
      "name": "Maine",
      "abbreviation": "ME"
    },
    MD: {
      "id": 20,
      "name": "Maryland",
      "abbreviation": "MD"
    },
    MA: {
      "id": 21,
      "name": "Massachusetts",
      "abbreviation": "MA"
    },
    MI: {
      "id": 22,
      "name": "Michigan",
      "abbreviation": "MI"
    },
    MN: {
      "id": 23,
      "name": "Minnesota",
      "abbreviation": "MN"
    },
    MS: {
      "id": 24,
      "name": "Mississippi",
      "abbreviation": "MS"
    },
    MO: {
      "id": 25,
      "name": "Missouri",
      "abbreviation": "MO"
    },
    MT: {
      "id": 26,
      "name": "Montana",
      "abbreviation": "MT"
    },
    NE: {
      "id": 27,
      "name": "Nebraska",
      "abbreviation": "NE"
    },
    NV: {
      "id": 28,
      "name": "Nevada",
      "abbreviation": "NV"
    },
    NH: {
      "id": 29,
      "name": "New Hampshire",
      "abbreviation": "NH"
    },
    NJ: {
      "id": 30,
      "name": "New Jersey",
      "abbreviation": "NJ"
    },
    NM: {
      "id": 31,
      "name": "New Mexico",
      "abbreviation": "NM"
    },
    NY: {
      "id": 32,
      "name": "New York",
      "abbreviation": "NY"
    },
    NC: {
      "id": 33,
      "name": "North Carolina",
      "abbreviation": "NC"
    },
    ND: {
      "id": 34,
      "name": "North Dakota",
      "abbreviation": "ND"
    },
    OH: {
      "id": 35,
      "name": "Ohio",
      "abbreviation": "OH"
    },
    OK: {
      "id": 36,
      "name": "Oklahoma",
      "abbreviation": "OK"
    },
    OR: {
      "id": 37,
      "name": "Oregon",
      "abbreviation": "OR"
    },
    PA: {
      "id": 38,
      "name": "Pennsylvania",
      "abbreviation": "PA"
    },
    // PR: {
    //   "name": "Puerto Rico",
    //   "abbreviation": "PR"
    // },
    RI: {
      "id": 39,
      "name": "Rhode Island",
      "abbreviation": "RI"
    },
    SC: {
      "id": 40,
      "name": "South Carolina",
      "abbreviation": "SC"
    },
    SD: {
      "id": 41,
      "name": "South Dakota",
      "abbreviation": "SD"
    },
    TN: {
      "id": 42,
      "name": "Tennessee",
      "abbreviation": "TN"
    },
    TX: {
      "id": 43,
      "name": "Texas",
      "abbreviation": "TX"
    },
    UT: {
      "id": 44,
      "name": "Utah",
      "abbreviation": "UT"
    },
    VT: {
      "id": 45,
      "name": "Vermont",
      "abbreviation": "VT"
    },
    VA: {
      "id": 46,
      "name": "Virginia",
      "abbreviation": "VA"
    },
    WA: {
      "id": 47,
      "name": "Washington",
      "abbreviation": "WA"
    },
    WV: {
      "id": 48,
      "name": "West Virginia",
      "abbreviation": "WV"
    },
    WI: {
      "id": 49,
      "name": "Wisconsin",
      "abbreviation": "WI"
    },
    WY: {
      "id": 50,
      "name": "Wyoming",
      "abbreviation": "WY"
    }
    }

    return states[stateInput].id
}

