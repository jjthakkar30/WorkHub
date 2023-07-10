export class Order {
  id !: string;
  breakfast !: {ordered: Boolean, ifVeg: Boolean};
  lunch !: { ordered: Boolean, ifVeg: Boolean };
  date !: Date;

  constructor(id: string, breakfast: {ordered: Boolean, ifVeg: Boolean}, lunch: {ordered: Boolean, ifVeg: Boolean}, date: Date) {
    this.id = id;
    this.breakfast = breakfast;
    this.lunch = lunch;
    this.date = date;
  }
}