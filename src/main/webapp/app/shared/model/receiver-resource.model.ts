import { IResourceType } from 'app/shared/model/resource-type.model';
import { IReceiverSupplier } from 'app/shared/model/receiver-supplier.model';

export interface IReceiverResource {
  id?: string;
  name?: string;
  quantity?: number;
  dailyUse?: number;
  currentStock?: number;
  notes?: string;
  resourceType?: IResourceType;
  receiver?: IReceiverSupplier;
}

export const defaultValue: Readonly<IReceiverResource> = {};
