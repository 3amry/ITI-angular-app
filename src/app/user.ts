export class User {
  constructor(
    public email: string,
    public user: string,
    public pass: string,
    public conPass: string,
    public platformSelection: string,
    public chkOffers: boolean
  ) {}
}
