import { User } from './user';
import { House } from './house';

export class Booking {
    private id?: number;
    private startDate: Date;
    private endDate: Date;
    private user: User;
    private house: House;

    constructor(startDate: Date, endDate: Date, user: User, house: House, id?: number) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.user = user;
        this.house = house;
        if (id) {
            this.id = id;
        }
    }

    public getId(): number | undefined {
        return this.id;
    }

    public getStartDate(): Date {
        return this.startDate;
    }

    public getEndDate(): Date {
        return this.endDate;
    }

    public getUser(): User {
        return this.user;
    }

    public getHouse(): House {
        return this.house;
    }

    equals(otherBooking: Booking): boolean {
        return (
            this.id === otherBooking.id &&
            this.startDate.getTime() === otherBooking.startDate.getTime() &&
            this.endDate.getTime() === otherBooking.endDate.getTime() &&
            this.user.equals(otherBooking.user) &&
            this.house.equals(otherBooking.house)
        );
    }

    validate(booking: {
        startDate: Date;
        endDate: Date;
        userId: number;
        houseId: number;
    }): void {
        if (booking.startDate > booking.endDate) {
            throw new Error('Start date must be before end date');
        }
        if (!booking.startDate) {
            throw new Error('Start date is required');
        }
        if (!booking.endDate) {
            throw new Error('End date is required');
        }
        if (!booking.userId) {
            throw new Error('User id is required');
        }
        if (!booking.houseId) {
            throw new Error('House id is required');
        }
    }
}
