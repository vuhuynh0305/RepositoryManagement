export class RepositoryModel {
    ID: number;
    Name: string;
    Quantity: number;
    Type: string;
    Piece: number;
    LeftPiece: number;
    Repository: string;

    constructor() {
        this.ID = 0;
        this.Name = "";
        this.Quantity = 0;
        this.Type = "";
        this.Piece = 0;
        this.LeftPiece = 0;
        this.Repository = "";
    }
}