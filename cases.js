const cases = [
    {
        date: '3/9',
        cases: {
            total_cases: [5, 4, 1, 0, 3, 1, 1],
            travel_related: [4, 3, 1, 0, 2, 1, 1],
            person_to_person_spread: [1, 1, 0, 0, 1, 0, 0],
            community_acquired: [0, 0, 0, 0, 0, 0, 0], 
            under_investigation: [0, 0, 0, 0, 0, 0, 0],
            death: [0, 0, 0, 0, 0, 0, 0]
        }
    },
    {
        date: '3/10',
        cases: {
            total_cases: [5, 4, 1, 0, 3, 1, 1],
            travel_related: [4, 3, 1, 0, 2, 1, 1],
            person_to_person_spread: [1, 1, 0, 0, 1, 0, 0],
            community_acquired: [0, 0, 0, 0, 0, 0, 0], 
            under_investigation: [0, 0, 0, 0, 0, 0, 0],
            death: [0, 0, 0, 0, 0, 0, 0]
        }
    },
    {
        date: '3/11',
        cases: {
            total_cases: [6, 4, 2, 0, 3, 1, 2],
            travel_related: [5, 3, 2, 0, 2, 1, 2],
            person_to_person_spread: [1, 1, 0, 0, 1, 0, 0],
            community_acquired: [0, 0, 0, 0, 0, 0, 0], 
            under_investigation: [0, 0, 0, 0, 0, 0, 0],
            death: [0, 0, 0, 0, 0, 0, 0]
        }
    },
    {
        date: '3/12',
        cases: {
            total_cases: [6, 4, 2, 0, 3, 1, 2],
            travel_related: [5, 3, 2, 0, 2, 1, 2],
            person_to_person_spread: [1, 1, 0, 0, 1, 0, 0],
            community_acquired: [0, 0, 0, 0, 0, 0, 0], 
            under_investigation: [0, 0, 0, 0, 0, 0, 0],
            death: [0, 0, 0, 0, 0, 0, 0]
        }
    },
    {
        date: '3/13',
        cases: {
            total_cases: [6, 4, 2, 0, 3, 1, 2],
            travel_related: [5, 3, 2, 0, 2, 1, 2],
            person_to_person_spread: [1, 1, 0, 0, 1, 0, 0],
            community_acquired: [0, 0, 0, 0, 0, 0, 0], 
            under_investigation: [0, 0, 0, 0, 0, 0, 0],
            death: [0, 0, 0, 0, 0, 0, 0]
        }
    },
    {
        date: '3/14',
        cases: {
            total_cases: [11, 4, 2, 0, 3, 1, 2],
            travel_related: [9, 3, 2, 0, 2, 1, 2],
            person_to_person_spread: [1, 1, 0, 0, 1, 0, 0],
            community_acquired: [1, 0, 0, 0, 0, 0, 0], 
            under_investigation: [0, 0, 0, 0, 0, 0, 0],
            death: [0, 0, 0, 0, 0, 0, 0]
        }
    },
    {
        date: '3/15',
        cases: {
            total_cases: [17, 12, 5, 0, 7, 6, 4],
            travel_related: [11, 7, 4, 0, 4, 4, 3],
            person_to_person_spread: [3, 3, 0, 0, 3, 0, 0],
            community_acquired: [3, 2, 1, 0, 0, 2, 1], 
            under_investigation: [0, 0, 0, 0, 0, 0, 0],
            death: [0, 0, 0, 0, 0, 0, 0]
        }
    },
    {
        date: '3/16',
        cases: {
            total_cases: [22, 14, 8, 0, 11, 7, 4],
            travel_related: [13, 7, 6, 0, 5, 5, 3],
            person_to_person_spread: [4, 4, 0, 0, 4, 0, 0],
            community_acquired: [1, 0, 1, 0, 1, 0, 0], 
            under_investigation: [0, 0, 0, 0, 0, 0, 0],
            death: [0, 0, 0, 0, 0, 0, 0]
        }
    },
    {
        date: '3/17',
        cases: {
            total_cases: [29, 19, 10, 0, 14, 9, 6],
            travel_related: [15, 8, 7, 0, 6, 6, 3],
            person_to_person_spread: [5, 5, 0, 0, 5, 0, 0],
            community_acquired: [8, 6, 2, 0, 2, 3, 3], 
            under_investigation: [1, 0, 1, 0, 1, 0, 0],
            death: [0, 0, 0, 0, 0, 0, 0]
        }
    },
    {
        date: '3/18',
        cases: {
            total_cases: [42, 26, 16, 0, 21, 13, 8],
            travel_related: [22, 13, 9, 0, 10, 8, 4],
            person_to_person_spread: [7, 6, 1, 0, 5, 2, 0],
            community_acquired: [12, 7, 5, 0, 5, 3, 4], 
            under_investigation: [1, 0, 1, 0, 1, 0, 0],
            death: [0, 0, 0, 0, 0, 0, 0]
        }
    },
    {
        date: '3/19',
        cases: {
            total_cases: [53, 33, 20, 0, 26, 17, 10],
            travel_related: [25, 14, 11, 0, 11, 10, 4],
            person_to_person_spread: [7, 6, 1, 0, 6, 1, 0],
            community_acquired: [19, 12, 7, 0, 8, 6, 5], 
            under_investigation: [2, 1, 1, 0, 1, 0, 1],
            death: [0, 0, 0, 0, 0, 0, 0]
        }
    },
    {
        date: '3/20',
        cases: {
            total_cases: [65, 39, 26, 1, 33, 19, 12],
            travel_related: [28, 16, 12, 0, 14, 10, 4],
            person_to_person_spread: [7, 6, 1, 0, 6, 1, 0],
            community_acquired: [26, 15, 11, 1, 10, 8, 7], 
            under_investigation: [4, 2, 2, 0, 3, 0, 1],
            death: [0, 0, 0, 0, 0, 0, 0]
        }
    },
    {
        date: '3/21',
        cases: {
            total_cases: [78, 46, 32, 1, 42, 23, 12],
            travel_related: [35, 19, 16, 0, 20, 11, 4],
            person_to_person_spread: [8, 6, 2, 0, 7, 1, 0],
            community_acquired: [29, 18, 11, 1, 11, 10, 7], 
            under_investigation: [6, 3, 3, 0, 4, 1, 1],
            death: [0, 0, 0, 0, 0, 0, 0]
        }
    },
    {
        date: '3/22',
        cases: {
            total_cases: [95, 52, 43, 1, 55, 24, 15],
            travel_related: [40, 20, 20, 0, 25, 11, 4],
            person_to_person_spread: [9, 7, 2, 0, 8, 1, 0],
            community_acquired: [35, 19, 16, 1, 15, 11, 8], 
            under_investigation: [11, 6, 5, 0, 7, 1, 3],
            death: [0, 0, 0, 0, 0, 0, 0]
        }
    }
];

const column = {
    total: 0,
    male: 1,
    female: 2,
    '18': 3,
    '18-49': 4,
    '50-64': 5,
    '65': 6
};

const tableFullColName = {
    total_cases: 'Total Cases',
    travel_related: 'Travel Related',
    person_to_person_spread: 'Person to Person Spread',
    community_acquired: 'Community Acquired', 
    under_investigation: 'Under Investigation',
    death: 'Total Deaths'
};

//console.log(cases, column)