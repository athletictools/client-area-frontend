export interface Membership {
    id: number;
    title: string;
    groups: string[];
    price: number;
    totalVisits: number;
    remainVisits: number;
    validFrom: string;
    validUntil: string;
    visits: Visit[];
}

export interface Visit {
    id: number,
    date: string,
    group: string,
    state: string,
}
