export class Feeding {
  id?:number;
  timeLeftBreast?: string | null;
  timeRightBreast?: string | null;
  amountBottle?: number | null;
  amountSolids?: number | null;
  type: string;
  createdAt: Date;
  babyId: string;
  totalTime: string | null;
}
