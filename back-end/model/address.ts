export class Address {
    private id?: number;
    private streetname: string;
    private streetnumber: number;
    private city: string;
    private postalcode: string;
    private country: string;

    constructor(streetname: string, streetnumber: number, city: string, postalcode: string, country: string, id?: number) {
        this.streetname = streetname;
        this.streetnumber = streetnumber;
        this.city = city;
        this.postalcode = postalcode;
        this.country = country;
        this.id = id;

    }

    public getId(): number | undefined {
        return this.id;
    }

    public getStreetname(): string {
        return this.streetname;
    }

    public getStreetnumber(): number {
        return this.streetnumber;
    }

    public getCity(): string {
        return this.city;
    }

    public getPostalcode(): string {
        return this.postalcode;
    }

    public getCountry(): string {
        return this.country;
    }

    validate(address: {
        streetname: string;
        streetnumber: number;
        city: string;
        postalcode: string;
        country: string;
    }): void {
        if (!address.streetname) {
            throw new Error('Streetname is required');
        }
        if (!address.streetnumber) {
            throw new Error('Streetnumber is required');
        }
        if (!address.city) {
            throw new Error('City is required');
        }
        if (!address.postalcode) {
            throw new Error('Postalcode is required');
        }
        if (!address.country) {
            throw new Error('Country is required');
        }
        }

    
}